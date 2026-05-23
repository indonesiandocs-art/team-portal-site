import { readdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const [tokenFile, accountId, scriptName, rootDir, kvNamespaceId = "", adminTokenInput = ""] = process.argv.slice(2);

if (!tokenFile || !accountId || !scriptName || !rootDir) {
  throw new Error(
    "Usage: node deploy-direct.mjs <token-file> <account-id> <script-name> <root-dir> [kv-namespace-id] [admin-token]",
  );
}

const apiToken = (await readFile(tokenFile, "utf8")).trim();
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

async function collectFiles(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const relativePath = path.join(prefix, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(absolutePath, relativePath)));
      continue;
    }

    if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return files;
}

async function cf(pathname, options = {}, token = apiToken) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${pathname}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });
  const text = await response.text();
  let payload;

  try {
    payload = JSON.parse(text);
  } catch {
    payload = { raw: text };
  }

  if (!response.ok || payload.success === false) {
    throw new Error(`Cloudflare API ${response.status}: ${JSON.stringify(payload)}`);
  }

  return payload.result ?? payload;
}

function assetHash(bytes, file) {
  const extension = path.extname(file).slice(1);
  return crypto.createHash("sha256").update(bytes.toString("base64") + extension).digest("hex").slice(0, 32);
}

async function readSecretInput(input) {
  if (!input) {
    return "";
  }

  if (input.startsWith("@")) {
    return (await readFile(input.slice(1), "utf8")).trim();
  }

  return input;
}

async function main() {
  try {
    const adminToken = await readSecretInput(adminTokenInput);
    const manifest = {};
    const assetsByHash = {};
    const files = ["index.html", "styles.css", "script.js"];

    try {
      if ((await stat(path.join(rootDir, "assets"))).isDirectory()) {
        files.push(...(await collectFiles(path.join(rootDir, "assets"), "assets")));
      }
    } catch {
      // No assets folder is fine for a minimal static deployment.
    }

    for (const file of files) {
      const bytes = await readFile(path.join(rootDir, file));
      const hash = assetHash(bytes, file);
      const entry = { hash, size: bytes.length };
      manifest[`/${file}`] = entry;

      if (file === "index.html") {
        manifest["/"] = entry;
      }

      assetsByHash[hash] = {
        bytes,
        base64: bytes.toString("base64"),
        contentType: contentTypes[path.extname(file)] || "application/octet-stream",
      };
    }

    const uploadSession = await cf(`/accounts/${accountId}/workers/scripts/${scriptName}/assets-upload-session`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ manifest }),
    });

    let completionJwt = uploadSession.jwt;

    for (const bucket of uploadSession.buckets || []) {
      const form = new FormData();

      for (const hash of bucket) {
        const asset = assetsByHash[hash];
        form.append(hash, new Blob([asset.base64], { type: asset.contentType }), hash);
      }

      const upload = await cf(
        `/accounts/${accountId}/workers/assets/upload?base64=true`,
        { method: "POST", body: form },
        uploadSession.jwt,
      );

      if (upload.jwt) {
        completionJwt = upload.jwt;
      }
    }

    const workerScript = await readFile(path.join(rootDir, "worker.js"), "utf8");

    const bindings = [{ type: "assets", name: "ASSETS" }];

    if (kvNamespaceId) {
      bindings.push({ type: "kv_namespace", name: "PORTAL_KV", namespace_id: kvNamespaceId });
    }

    if (adminToken) {
      bindings.push({ type: "secret_text", name: "ADMIN_TOKEN", text: adminToken });
    }

    const metadata = {
      main_module: "main.js",
      compatibility_date: "2026-05-19",
      bindings,
      assets: {
        jwt: completionJwt,
        config: {
          not_found_handling: "single-page-application",
          run_worker_first: true,
        },
      },
    };

    const scriptForm = new FormData();
    scriptForm.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    scriptForm.append("main.js", new Blob([workerScript], { type: "application/javascript+module" }), "main.js");

    await cf(`/accounts/${accountId}/workers/scripts/${scriptName}`, {
      method: "PUT",
      body: scriptForm,
    });

    console.log("deployed");
  } finally {
    await rm(tokenFile, { force: true });

    if (adminTokenInput.startsWith("@")) {
      await rm(adminTokenInput.slice(1), { force: true });
    }
  }
}

main();
