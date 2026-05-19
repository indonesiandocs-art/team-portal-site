import { readFile, rm } from "node:fs/promises";

const [tokenFile, accountId, namespaceTitle] = process.argv.slice(2);

if (!tokenFile || !accountId || !namespaceTitle) {
  throw new Error("Usage: node ensure-kv.mjs <token-file> <account-id> <namespace-title>");
}

const apiToken = (await readFile(tokenFile, "utf8")).trim();

async function cf(pathname, options = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${pathname}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${apiToken}`,
    },
  });
  const payload = await response.json();

  if (!response.ok || payload.success === false) {
    throw new Error(`Cloudflare API ${response.status}: ${JSON.stringify(payload)}`);
  }

  return payload.result;
}

async function main() {
  try {
    const namespaces = await cf(`/accounts/${accountId}/storage/kv/namespaces?per_page=100`);
    let namespace = namespaces.find((item) => item.title === namespaceTitle);
    let created = false;

    if (!namespace) {
      namespace = await cf(`/accounts/${accountId}/storage/kv/namespaces`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: namespaceTitle }),
      });
      created = true;
    }

    console.log(JSON.stringify({ created, id: namespace.id, title: namespace.title }));
  } finally {
    await rm(tokenFile, { force: true });
  }
}

main();
