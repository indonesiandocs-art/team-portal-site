import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const DEFAULT_SITE_ORIGIN = "https://team.drnova.org";
const DEFAULT_MODEL = "gpt-5";
const DATA_DIR = "work";

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");

const today = new Date().toISOString().slice(0, 10);
const outputFile = path.join(DATA_DIR, `payment-radar-items-${today}.json`);

function env(name, fallback = "") {
  return process.env[name] || fallback;
}

function assertEnv(name) {
  const value = env(name).trim();
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

async function readTextIfExists(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return "";
    }
    throw error;
  }
}

async function findLatestPreparedItemsFile() {
  try {
    const entries = await readdir(DATA_DIR);
    const files = entries
      .filter((entry) => /^payment-radar-items-\d{4}-\d{2}-\d{2}\.json$/.test(entry))
      .sort();
    return files.length ? path.join(DATA_DIR, files.at(-1)) : "";
  } catch (error) {
    if (error.code === "ENOENT") {
      return "";
    }
    throw error;
  }
}

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeRadarItem(item, index) {
  const importance = cleanString(item.importance) || "medium";
  const status = cleanString(item.status) || "published";

  return {
    id: cleanString(item.id) || `china-weekly-${today}-${index + 1}`,
    region: cleanString(item.region) || "China",
    category: cleanString(item.category) || "Banking",
    importance: ["critical", "high", "medium", "background"].includes(importance) ? importance : "medium",
    signalType: cleanString(item.signalType) || "Regulatory guidance",
    title: cleanString(item.title),
    summary: cleanString(item.summary),
    impact: cleanString(item.impact),
    action: cleanString(item.action),
    typology: cleanString(item.typology),
    bank: cleanString(item.bank),
    jurisdiction: cleanString(item.jurisdiction) || "China",
    sourceTitle: cleanString(item.sourceTitle),
    sourceUrl: cleanString(item.sourceUrl),
    publishedAt: cleanString(item.publishedAt) || today,
    status: ["published", "draft"].includes(status) ? status : "published",
  };
}

function validateRadarItem(item) {
  const requiredFields = [
    "id",
    "region",
    "category",
    "importance",
    "signalType",
    "title",
    "summary",
    "impact",
    "action",
    "jurisdiction",
    "sourceTitle",
    "sourceUrl",
    "publishedAt",
    "status",
  ];

  const missing = requiredFields.filter((field) => !cleanString(item[field]));
  if (missing.length) {
    throw new Error(`Radar item ${item.id || "(new)"} is missing: ${missing.join(", ")}`);
  }

  if (!/^https?:\/\//i.test(item.sourceUrl)) {
    throw new Error(`Radar item ${item.id} has invalid sourceUrl: ${item.sourceUrl}`);
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.publishedAt)) {
    throw new Error(`Radar item ${item.id} has invalid publishedAt: ${item.publishedAt}`);
  }
}

function extractOutputText(response) {
  if (typeof response.output_text === "string") {
    return response.output_text;
  }

  const chunks = [];
  for (const output of response.output || []) {
    for (const content of output.content || []) {
      if (content.type === "output_text" && typeof content.text === "string") {
        chunks.push(content.text);
      }
    }
  }
  return chunks.join("\n").trim();
}

async function fetchCurrentRadarItems(siteOrigin, adminToken) {
  const response = await fetch(`${siteOrigin}/api/radar-items`, {
    headers: {
      authorization: `Bearer ${adminToken}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Could not read current radar items ${response.status}: ${text}`);
  }

  const payload = await response.json();
  return Array.isArray(payload.radarItems) ? payload.radarItems : [];
}

async function runOpenAiResearch({ apiKey, model, automationText, currentItems }) {
  const existingItems = currentItems.slice(0, 12).map((item) => ({
    id: item.id,
    title: item.title,
    sourceUrl: item.sourceUrl,
    publishedAt: item.publishedAt,
  }));

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      reasoning: { effort: env("OPENAI_REASONING_EFFORT", "medium") },
      tools: [{ type: "web_search_preview" }],
      input: [
        {
          role: "system",
          content:
            "You are a sanctions and payment-risk research analyst. Return only JSON that matches the requested schema. Write radar item content in Russian. Do not include markdown.",
        },
        {
          role: "user",
          content: [
            "Run the weekly China Payment Radar workflow using the instructions below.",
            "",
            automationText,
            "",
            `Today is ${today}. Review the previous 7 calendar days and avoid duplicating already published items unless a materially new signal changes the operational risk.`,
            "",
            "Already published recent items:",
            JSON.stringify(existingItems, null, 2),
            "",
            "Return a JSON object with exactly this shape:",
            '{"items":[<0 to 5 radar items>],"notes":"short Russian note about why items were or were not selected"}',
          ].join("\n"),
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "china_payment_radar_weekly",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["items", "notes"],
            properties: {
              notes: { type: "string" },
              items: {
                type: "array",
                maxItems: 5,
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: [
                    "id",
                    "region",
                    "category",
                    "importance",
                    "signalType",
                    "title",
                    "summary",
                    "impact",
                    "action",
                    "typology",
                    "bank",
                    "jurisdiction",
                    "sourceTitle",
                    "sourceUrl",
                    "publishedAt",
                    "status",
                  ],
                  properties: {
                    id: { type: "string" },
                    region: { type: "string" },
                    category: { type: "string" },
                    importance: { type: "string", enum: ["critical", "high", "medium", "background"] },
                    signalType: { type: "string" },
                    title: { type: "string" },
                    summary: { type: "string" },
                    impact: { type: "string" },
                    action: { type: "string" },
                    typology: { type: "string" },
                    bank: { type: "string" },
                    jurisdiction: { type: "string" },
                    sourceTitle: { type: "string" },
                    sourceUrl: { type: "string" },
                    publishedAt: { type: "string" },
                    status: { type: "string", enum: ["published", "draft"] },
                  },
                },
              },
            },
          },
        },
      },
    }),
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`OpenAI research failed ${response.status}: ${text}`);
  }

  const payload = JSON.parse(text);
  const outputText = extractOutputText(payload);
  if (!outputText) {
    throw new Error("OpenAI response did not include output_text");
  }

  return JSON.parse(outputText);
}

async function publishItems(siteOrigin, adminToken, items) {
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

  return text;
}

async function main() {
  const siteOrigin = env("PAYMENT_RADAR_SITE_ORIGIN", DEFAULT_SITE_ORIGIN).replace(/\/$/, "");
  const adminToken = assertEnv("PAYMENT_RADAR_ADMIN_TOKEN");
  const apiKey = dryRun ? "" : assertEnv("OPENAI_API_KEY");
  const model = env("OPENAI_MODEL", DEFAULT_MODEL);
  const automationText = await readTextIfExists("payment-radar-automation.md");

  if (!automationText.trim()) {
    throw new Error("payment-radar-automation.md is missing or empty");
  }

  if (env("GITHUB_EVENT_NAME") === "workflow_dispatch" && env("PAYMENT_RADAR_MANUAL_RESEARCH") !== "1") {
    const preparedFile = await findLatestPreparedItemsFile();
    if (preparedFile) {
      const preparedItems = JSON.parse(await readFile(preparedFile, "utf8")).map(normalizeRadarItem);
      for (const item of preparedItems) {
        validateRadarItem(item);
      }
      const publishResult = await publishItems(siteOrigin, adminToken, preparedItems);
      console.log(
        publishResult ||
          `Published ${preparedItems.length} prepared radar item${preparedItems.length === 1 ? "" : "s"} from ${preparedFile} to ${siteOrigin}`,
      );
      return;
    }
  }

  const currentItems = await fetchCurrentRadarItems(siteOrigin, adminToken);
  console.log(`Read ${currentItems.length} existing radar item${currentItems.length === 1 ? "" : "s"}`);

  if (dryRun) {
    console.log("Dry run completed before OpenAI research and publish.");
    return;
  }

  const research = await runOpenAiResearch({ apiKey, model, automationText, currentItems });
  const items = (Array.isArray(research.items) ? research.items : []).map(normalizeRadarItem);

  for (const item of items) {
    validateRadarItem(item);
  }

  console.log(research.notes || "Weekly radar research completed.");

  if (!items.length) {
    console.log("За неделю нет достаточно важных China payment-risk сигналов для публикации.");
    return;
  }

  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(outputFile, `${JSON.stringify(items, null, 2)}\n`);
  console.log(`Saved ${items.length} item${items.length === 1 ? "" : "s"} to ${outputFile}`);

  const publishResult = await publishItems(siteOrigin, adminToken, items);
  console.log(publishResult || `Published ${items.length} radar item${items.length === 1 ? "" : "s"} to ${siteOrigin}`);
}

main().catch(async (error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
