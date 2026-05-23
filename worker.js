const DATA_KEY = "portal-data:v1";
const MAX_BODY_SIZE = 1_000_000;
const ACCESS_COOKIE = "nova_portal_access";
const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...jsonHeaders,
      ...headers,
    },
  });
}

function unauthorized() {
  return jsonResponse({ error: "Unauthorized" }, 401);
}

function htmlResponse(body, status = 200, headers = {}) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      ...headers,
    },
  });
}

function redirectResponse(location, headers = {}) {
  return new Response(null, {
    status: 302,
    headers: {
      location,
      "cache-control": "no-store",
      ...headers,
    },
  });
}

function isAuthorized(request, env) {
  const header = request.headers.get("authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "").trim();
  return Boolean(env.ADMIN_TOKEN && token && token === env.ADMIN_TOKEN);
}

function getCookie(request, name) {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.slice(name.length + 1)) : "";
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hashBuffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function getAccessCookieValue(accessCode) {
  return sha256(`nova-portal-access:${accessCode}`);
}

async function hasPortalAccess(request, env) {
  if (!env.PORTAL_ACCESS_CODE) {
    return true;
  }

  const cookieValue = getCookie(request, ACCESS_COOKIE);

  if (!cookieValue) {
    return false;
  }

  return cookieValue === await getAccessCookieValue(env.PORTAL_ACCESS_CODE);
}

function stringValue(value, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function isValidDateRange(startDate, endDate) {
  return Boolean(startDate && endDate && new Date(startDate) <= new Date(endDate));
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
    birthday: stringValue(item?.birthday, ""),
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
    url: stringValue(item?.url, ""),
  };
}

function cleanEvent(item, index) {
  return {
    id: stringValue(item?.id, `event-${index + 1}`),
    employeeId: stringValue(item?.employeeId, ""),
    requestId: stringValue(item?.requestId, ""),
    source: stringValue(item?.source, ""),
    type: stringValue(item?.type, "document"),
    title: stringValue(item?.title, "New event"),
    date: stringValue(item?.date, new Date().toISOString().slice(0, 10)),
    meta: stringValue(item?.meta, "Details"),
  };
}

function cleanVacationRequest(item, index) {
  const status = stringValue(item?.status, "pending");

  return {
    id: stringValue(item?.id, `vacation-request-${index + 1}`),
    employeeName: stringValue(item?.employeeName, "Team member"),
    startDate: stringValue(item?.startDate, new Date().toISOString().slice(0, 10)),
    endDate: stringValue(item?.endDate, stringValue(item?.startDate, new Date().toISOString().slice(0, 10))),
    note: stringValue(item?.note, ""),
    status: ["pending", "approved", "rejected"].includes(status) ? status : "pending",
    submittedAt: stringValue(item?.submittedAt, new Date().toISOString()),
    reviewedAt: stringValue(item?.reviewedAt, ""),
  };
}

function cleanPortalData(data) {
  return {
    employees: Array.isArray(data?.employees) ? data.employees.map(cleanEmployee) : [],
    documents: Array.isArray(data?.documents) ? data.documents.map(cleanDocument) : [],
    events: Array.isArray(data?.events) ? data.events.map(cleanEvent) : [],
    vacationRequests: Array.isArray(data?.vacationRequests) ? data.vacationRequests.map(cleanVacationRequest) : [],
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

async function handleVacationRequest(request, env) {
  if (!env.PORTAL_KV) {
    return jsonResponse({ error: "Shared storage is not configured" }, 503);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const existingData = (await env.PORTAL_KV.get(DATA_KEY, "json")) || {};
    const currentRequests = Array.isArray(existingData.vacationRequests) ? existingData.vacationRequests : [];
    const body = await readJsonBody(request);

    if (!stringValue(body?.employeeName) || !isValidDateRange(body?.startDate, body?.endDate)) {
      return jsonResponse({ error: "Check the name and vacation dates" }, 400);
    }

    const nextRequest = cleanVacationRequest(
      {
        ...body,
        id: crypto.randomUUID(),
        status: "pending",
        submittedAt: new Date().toISOString(),
        reviewedAt: "",
      },
      currentRequests.length,
    );
    const data = {
      ...existingData,
      vacationRequests: [nextRequest, ...currentRequests].map(cleanVacationRequest),
      updatedAt: new Date().toISOString(),
    };

    await env.PORTAL_KV.put(DATA_KEY, JSON.stringify(data));
    return jsonResponse({ ok: true, vacationRequests: data.vacationRequests });
  } catch (error) {
    return jsonResponse({ error: error.message || "Could not submit vacation request" }, 400);
  }
}

function loginPage() {
  return htmlResponse(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nova Group Team Portal Access</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #071f39;
        --muted: #64736d;
        --line: #dfe6e2;
        --accent: #f45b3f;
        --accent-dark: #b53a27;
      }
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        padding: 24px;
        color: var(--ink);
        background: #f6f8fb;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        width: min(100%, 420px);
        padding: 28px;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: #ffffff;
        box-shadow: 0 18px 50px rgba(7, 31, 57, 0.08);
      }
      .brand {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 24px;
      }
      .brand-mark {
        display: grid;
        width: 42px;
        height: 42px;
        place-items: center;
        border: 1px solid rgba(244, 91, 63, 0.28);
        border-radius: 10px;
        color: var(--accent-dark);
        background: #fff0ec;
        font-weight: 900;
      }
      h1 {
        margin: 0 0 8px;
        font-size: 28px;
        line-height: 1.1;
        letter-spacing: 0;
      }
      p {
        margin: 0 0 22px;
        color: var(--muted);
        line-height: 1.5;
      }
      form {
        display: grid;
        gap: 12px;
      }
      label {
        display: grid;
        gap: 6px;
        color: var(--muted);
        font-size: 12px;
        font-weight: 750;
      }
      input {
        width: 100%;
        height: 46px;
        padding: 0 12px;
        border: 1px solid #cfd8d3;
        border-radius: 8px;
        color: var(--ink);
        font: inherit;
      }
      input:focus {
        outline: 3px solid rgba(244, 91, 63, 0.16);
        border-color: var(--accent);
      }
      button {
        min-height: 46px;
        border: 0;
        border-radius: 8px;
        color: #ffffff;
        background: var(--ink);
        font: inherit;
        font-weight: 850;
        cursor: pointer;
      }
      button:hover { background: #0d2b4d; }
      .status {
        min-height: 18px;
        margin: 0;
        color: var(--accent-dark);
        font-size: 13px;
        font-weight: 750;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="brand">
        <div class="brand-mark">N</div>
        <div>
          <strong>Nova Group</strong><br />
          <span>Team portal</span>
        </div>
      </div>
      <h1>Employee access</h1>
      <p>Enter the team access code to open the internal portal.</p>
      <form id="accessForm">
        <label>
          Access code
          <input name="accessCode" type="password" autocomplete="current-password" required autofocus />
        </label>
        <button type="submit">Continue</button>
        <p class="status" id="status" aria-live="polite"></p>
      </form>
    </main>
    <script>
      document.querySelector("#accessForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const status = document.querySelector("#status");
        status.textContent = "Checking access...";
        const accessCode = new FormData(event.currentTarget).get("accessCode");

        try {
          const response = await fetch("/api/portal-login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ accessCode }),
          });

          if (!response.ok) {
            status.textContent = "Access code is not accepted.";
            return;
          }

          window.location.href = "/";
        } catch {
          status.textContent = "Could not check access. Try again.";
        }
      });
    </script>
  </body>
</html>`);
}

async function handlePortalLogin(request, env) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  if (!env.PORTAL_ACCESS_CODE) {
    return jsonResponse({ ok: true });
  }

  try {
    const body = await readJsonBody(request);
    const accessCode = stringValue(body?.accessCode);

    if (!accessCode || accessCode !== env.PORTAL_ACCESS_CODE) {
      return unauthorized();
    }

    const cookieValue = await getAccessCookieValue(env.PORTAL_ACCESS_CODE);
    return jsonResponse(
      { ok: true },
      200,
      {
        "set-cookie": `${ACCESS_COOKIE}=${encodeURIComponent(cookieValue)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${ACCESS_COOKIE_MAX_AGE}`,
      },
    );
  } catch {
    return jsonResponse({ error: "Could not check access" }, 400);
  }
}

function handlePortalLogout() {
  return redirectResponse("/login", {
    "set-cookie": `${ACCESS_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
  });
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

    if (url.pathname === "/api/portal-login") {
      return handlePortalLogin(request, env);
    }

    if (url.pathname === "/logout") {
      return handlePortalLogout();
    }

    const isAllowed = await hasPortalAccess(request, env);

    if (!isAllowed) {
      if (url.pathname.startsWith("/api/")) {
        return unauthorized();
      }

      return loginPage();
    }

    if (url.pathname === "/login") {
      return redirectResponse("/");
    }

    if (url.pathname === "/api/admin-check") {
      return handleAdminCheck(request, env);
    }

    if (url.pathname === "/api/portal-data") {
      return handlePortalData(request, env);
    }

    if (url.pathname === "/api/vacation-request") {
      return handleVacationRequest(request, env);
    }

    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
