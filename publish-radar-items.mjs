import { readFile } from "node:fs/promises";

const [itemsFile, siteOriginInput = process.env.PAYMENT_RADAR_SITE_ORIGIN || "https://team.drnova.org"] = process.argv.slice(2);

if (!itemsFile) {
  throw new Error("Usage: node publish-radar-items.mjs <items-json-file> [site-origin]");
}

const adminToken = process.env.PAYMENT_RADAR_ADMIN_TOKEN || "";

if (!adminToken) {
  throw new Error("PAYMENT_RADAR_ADMIN_TOKEN is required to publish radar items");
}

function assertString(item, key) {
  if (!String(item?.[key] || "").trim()) {
    throw new Error(`Radar item ${item?.id || "(new)"} is missing ${key}`);
  }
}

function normalizeItem(item, index) {
  const importance = String(item.importance || "medium").trim();
  const status = String(item.status || "published").trim();

  ["title", "summary", "impact", "action", "publishedAt"].forEach((key) => assertString(item, key));

  return {
    id: String(item.id || `radar-${Date.now()}-${index}`).trim(),
    region: String(item.region || "China").trim(),
    category: String(item.category || "Banking").trim(),
    importance: ["critical", "high", "medium", "background"].includes(importance) ? importance : "medium",
    signalType: String(item.signalType || "Bank behavior").trim(),
    title: String(item.title).trim(),
    summary: String(item.summary).trim(),
    impact: String(item.impact).trim(),
    action: String(item.action).trim(),
    typology: String(item.typology || "").trim(),
    bank: String(item.bank || "").trim(),
    jurisdiction: String(item.jurisdiction || "China").trim(),
    sourceTitle: String(item.sourceTitle || "").trim(),
    sourceUrl: String(item.sourceUrl || "").trim(),
    publishedAt: String(item.publishedAt).trim(),
    status: ["published", "draft"].includes(status) ? status : "published",
  };
}

const rawPayload = JSON.parse(await readFile(itemsFile, "utf8"));
const items = (Array.isArray(rawPayload) ? rawPayload : rawPayload.items || []).map(normalizeItem);

if (!items.length) {
  throw new Error("No radar items to publish");
}

const siteOrigin = siteOriginInput.replace(/\/$/, "");
const response = await fetch(`${siteOrigin}/api/radar-items`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${adminToken}`,
  },
  body: JSON.stringify({ items }),
});
const text = await response.text();

if (!response.ok) {
  throw new Error(`Radar publish failed ${response.status}: ${text}`);
}

console.log(`Published ${items.length} radar item${items.length === 1 ? "" : "s"} to ${siteOrigin}`);
