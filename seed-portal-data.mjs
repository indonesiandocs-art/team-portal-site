import { readFile, rm } from "node:fs/promises";
import vm from "node:vm";

const [adminTokenFile, siteOrigin, scriptFile] = process.argv.slice(2);

if (!adminTokenFile || !siteOrigin || !scriptFile) {
  throw new Error("Usage: node seed-portal-data.mjs <admin-token-file> <site-origin> <script-file>");
}

const adminToken = (await readFile(adminTokenFile, "utf8")).trim();
const script = await readFile(scriptFile, "utf8");
const defaultsOnly = script.slice(0, script.indexOf("const portalEvents"));
const context = {};

vm.createContext(context);
vm.runInContext(
  `${defaultsOnly}
  globalThis.portalDefaults = {
    employees: defaultEmployees,
    documents: defaultDocuments,
    articles: defaultArticles
  };`,
  context,
);

try {
  const response = await fetch(`${siteOrigin.replace(/\/$/, "")}/api/portal-data`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${adminToken}`,
    },
    body: JSON.stringify(context.portalDefaults),
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Seed failed ${response.status}: ${text}`);
  }

  console.log(text);
} finally {
  await rm(adminTokenFile, { force: true });
}
