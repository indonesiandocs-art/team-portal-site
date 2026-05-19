const DATA_KEY = "portal-data:v1";
const MAX_BODY_SIZE = 1_000_000;

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });
}

function unauthorized() {
  return jsonResponse({ error: "Unauthorized" }, 401);
}

function isAuthorized(request, env) {
  const header = request.headers.get("authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "").trim();
  return Boolean(env.ADMIN_TOKEN && token && token === env.ADMIN_TOKEN);
}

function stringValue(value, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function cleanEmployee(item, index) {
  return {
    id: stringValue(item?.id, `team-${index + 1}`),
    name: stringValue(item?.name, "New team member"),
    role: stringValue(item?.role, "Role"),
    department: stringValue(item?.department, "Department"),
    workMode: stringValue(item?.workMode, "hybrid"),
    location: stringValue(item?.location, "Location"),
    email: stringValue(item?.email, "name@novagroup.trade"),
    phone: stringValue(item?.phone, "+00 000 000 000"),
    tone: stringValue(item?.tone, "blue"),
  };
}

function cleanDocument(item, index) {
  return {
    id: stringValue(item?.id, `document-${index + 1}`),
    title: stringValue(item?.title, "New document"),
    category: stringValue(item?.category, "Category"),
    owner: stringValue(item?.owner, "Owner"),
    updatedAt: stringValue(item?.updatedAt, new Date().toISOString().slice(0, 10)),
    type: stringValue(item?.type, "PDF"),
    status: stringValue(item?.status, "Draft"),
  };
}

function cleanArticle(item, index) {
  return {
    id: stringValue(item?.id, `article-${index + 1}`),
    title: stringValue(item?.title, "Untitled"),
    status: stringValue(item?.status, "draft"),
    updatedAt: stringValue(item?.updatedAt, new Date().toISOString().slice(0, 10)),
    content: stringValue(item?.content, "<p></p>"),
  };
}

function cleanPortalData(data) {
  return {
    employees: Array.isArray(data?.employees) ? data.employees.map(cleanEmployee) : [],
    documents: Array.isArray(data?.documents) ? data.documents.map(cleanDocument) : [],
    articles: Array.isArray(data?.articles) ? data.articles.map(cleanArticle) : [],
    updatedAt: new Date().toISOString(),
  };
}

async function readJsonBody(request) {
  const length = Number(request.headers.get("content-length") || "0");

  if (length > MAX_BODY_SIZE) {
    throw new Error("Request body is too large");
  }

  return request.json();
}

async function handlePortalData(request, env) {
  if (!env.PORTAL_KV) {
    return jsonResponse({ error: "Shared storage is not configured" }, 503);
  }

  if (request.method === "GET") {
    const data = await env.PORTAL_KV.get(DATA_KEY, "json");
    return jsonResponse({ data: data || null });
  }

  if (request.method === "PUT") {
    if (!isAuthorized(request, env)) {
      return unauthorized();
    }

    try {
      const data = cleanPortalData(await readJsonBody(request));
      await env.PORTAL_KV.put(DATA_KEY, JSON.stringify(data));
      return jsonResponse({ ok: true, updatedAt: data.updatedAt });
    } catch (error) {
      return jsonResponse({ error: error.message || "Could not save content" }, 400);
    }
  }

  return jsonResponse({ error: "Method not allowed" }, 405);
}

function handleAdminCheck(request, env) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  if (!isAuthorized(request, env)) {
    return unauthorized();
  }

  return jsonResponse({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/admin-check") {
      return handleAdminCheck(request, env);
    }

    if (url.pathname === "/api/portal-data") {
      return handlePortalData(request, env);
    }

    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
