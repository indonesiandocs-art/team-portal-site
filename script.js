const defaultEmployees = [
  { id: "lenar", name: "Lenar", role: "Partner, General Director", department: "Leadership", workMode: "not-set", location: "Global", email: "", phone: "", tone: "blue" },
  { id: "dmitry", name: "Dmitry", role: "Partner", department: "Leadership", workMode: "not-set", location: "Global", email: "", phone: "", tone: "green" },
  { id: "elena", name: "Elena", role: "Director", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "pink" },
  { id: "andrey", name: "Andrey", role: "Senior Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "yellow" },
  { id: "ekaterina", name: "Ekaterina", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "blue" },
  { id: "vera", name: "Vera", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "green" },
  { id: "julia", name: "Julia", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "pink" },
  { id: "veronika", name: "Veronika", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "yellow" },
  { id: "asila", name: "Asila", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "blue" },
  { id: "daria", name: "Daria", role: "Junior Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "green" },
  { id: "alexander", name: "Alexander", role: "Financial Manager", department: "Finance", workMode: "not-set", location: "Global", email: "", phone: "", tone: "pink" },
  { id: "iskander", name: "Iskander", role: "Managing Director, Foreign Countries", department: "International Management", workMode: "not-set", location: "Global", email: "", phone: "", tone: "yellow" },
  { id: "vladimir", name: "Vladimir", role: "Legal Manager", department: "Legal", workMode: "not-set", location: "Global", email: "", phone: "", tone: "blue" },
  { id: "viktoria", name: "Viktoria", role: "Logistics Manager", department: "Logistics", workMode: "not-set", location: "Global", email: "", phone: "", tone: "green" },
  { id: "vadim", name: "Vadim", role: "Relationship Manager", department: "Relationship Management", workMode: "not-set", location: "Global", email: "", phone: "", tone: "pink" },
  { id: "alex", name: "Alex", role: "Compliance Manager", department: "Compliance", workMode: "not-set", location: "Global", email: "", phone: "", tone: "yellow" },
  { id: "stas", name: "Stas", role: "IT Manager", department: "IT", workMode: "not-set", location: "Global", email: "", phone: "", tone: "blue" },
  { id: "liza", name: "Liza", role: "Chinese Manager", department: "China", workMode: "not-set", location: "China", email: "", phone: "", tone: "green" },
  { id: "zhao", name: "Zhao", role: "Chinese Accountant", department: "China", workMode: "not-set", location: "China", email: "", phone: "", tone: "pink" },
  { id: "ceyhun", name: "Ceyhun", role: "Turkish Manager, Turkish Accountant, Nominee", department: "Turkey", workMode: "not-set", location: "Turkey", email: "", phone: "", tone: "yellow" },
  { id: "rexi", name: "Rexi", role: "Indonesian Legal", department: "Indonesia", workMode: "not-set", location: "Indonesia", email: "", phone: "", tone: "blue" },
  { id: "riri", name: "Riri", role: "Indonesian Accountant", department: "Indonesia", workMode: "not-set", location: "Indonesia", email: "", phone: "", tone: "green" },
  { id: "nikhil", name: "Nikhil", role: "Dubai Accountant", department: "Dubai", workMode: "not-set", location: "Dubai", email: "", phone: "", tone: "pink" },
  { id: "carmen", name: "Carmen", role: "Malaysian Manager", department: "Malaysia", workMode: "not-set", location: "Malaysia", email: "", phone: "", tone: "yellow" },
  { id: "stephy", name: "Stephy", role: "Malaysian Accountant", department: "Malaysia", workMode: "not-set", location: "Malaysia", email: "", phone: "", tone: "blue" },
  { id: "rustam", name: "Rustam", role: "Kazakhstan Manager", department: "Kazakhstan", workMode: "not-set", location: "Kazakhstan", email: "", phone: "", tone: "green" },
  { id: "svetlana", name: "Svetlana", role: "Kazakhstan Accountant", department: "Kazakhstan", workMode: "not-set", location: "Kazakhstan", email: "", phone: "", tone: "pink" },
  { id: "sari", name: "Sari", role: "Nominee", department: "Nominees", workMode: "not-set", location: "Global", email: "", phone: "", tone: "yellow" },
  { id: "zalfa", name: "Zalfa", role: "Nominee", department: "Nominees", workMode: "not-set", location: "Global", email: "", phone: "", tone: "blue" },
  { id: "deiby", name: "Deiby", role: "Nominee", department: "Nominees", workMode: "not-set", location: "Global", email: "", phone: "", tone: "green" },
  { id: "cholpon", name: "Cholpon", role: "Kyrgyzstan Accountant", department: "Kyrgyzstan", workMode: "not-set", location: "Kyrgyzstan", email: "", phone: "", tone: "pink" },
];

const workModeLabels = {
  "not-set": "Not set",
  office: "Office",
  remote: "Remote",
  hybrid: "Hybrid",
};

const articleStatusLabels = {
  draft: "Draft",
  review: "In review",
  published: "Published",
};

const defaultArticles = [
  {
    id: "welcome",
    title: "New team member onboarding",
    status: "published",
    updatedAt: "2026-05-18",
    content: `
      <h2>First working day</h2>
      <p>Confirm access to email, calendar, team chat, the CRM, and operational systems.</p>
      <ul>
        <li>Complete your employee profile in the portal.</li>
        <li>Meet your manager and primary cross-functional contacts.</li>
        <li>Review the two-week onboarding checklist.</li>
      </ul>
    `,
  },
  {
    id: "trade-compliance",
    title: "Trade compliance checklist",
    status: "review",
    updatedAt: "2026-05-12",
    content: `
      <h2>Before confirming a shipment</h2>
      <p>Check counterparties, destination requirements, product classification, and supporting documentation.</p>
      <blockquote>Escalate any sanctions, restricted-party, or end-use uncertainty before a commercial commitment is made.</blockquote>
    `,
  },
  {
    id: "equipment",
    title: "Requesting work equipment",
    status: "draft",
    updatedAt: "2026-05-08",
    content: `
      <h2>Available requests</h2>
      <p>Laptop, monitor, headset, secure access token, and workplace accessories can be requested through IT.</p>
    `,
  },
];

const defaultDocuments = [
  {
    id: "certificate-incorporation",
    title: "Certificate of Incorporation",
    category: "Corporate",
    owner: "Legal & Compliance",
    updatedAt: "2026-05-10",
    type: "PDF",
    status: "Current",
    url: "",
  },
  {
    id: "trade-compliance-policy",
    title: "Global Trade Compliance Policy",
    category: "Compliance",
    owner: "Legal & Compliance",
    updatedAt: "2026-05-14",
    type: "PDF",
    status: "Current",
    url: "",
  },
  {
    id: "leave-request-template",
    title: "Vacation Request Template",
    category: "People",
    owner: "People & Culture",
    updatedAt: "2026-05-06",
    type: "DOCX",
    status: "Template",
    url: "",
  },
  {
    id: "equipment-procurement-policy",
    title: "Equipment Procurement Policy",
    category: "IT",
    owner: "IT",
    updatedAt: "2026-04-29",
    type: "PDF",
    status: "In review",
    url: "",
  },
  {
    id: "travel-expense-report",
    title: "Travel Expense Report",
    category: "Finance",
    owner: "Finance",
    updatedAt: "2026-04-18",
    type: "XLSX",
    status: "Template",
    url: "",
  },
];

const defaultEvents = [
  { id: "team-birthdays", type: "birthday", title: "Team birthdays", date: "2026-05-23", meta: "Add birthday dates in Admin" },
  { id: "vacation-calendar", type: "vacation", title: "Vacation calendar", date: "2026-05-27", meta: "Add approved vacations in Admin" },
  { id: "review-procurement-policy", type: "document", title: "Review procurement policy", date: "2026-05-30", meta: "IT" },
];

const eventTypeLabels = {
  birthday: "Birthday",
  vacation: "Vacation",
  document: "Reminder",
};

const articleStorageKey = "novaGroupKnowledgeArticles";
const employeeStorageKey = "novaGroupEmployees";
const documentStorageKey = "novaGroupDocuments";
const eventStorageKey = "novaGroupEvents";
const adminTokenStorageKey = "novaGroupAdminToken";
const portalDataEndpoint = "/api/portal-data";
const adminCheckEndpoint = "/api/admin-check";

const state = {
  search: "",
  department: "all",
  workMode: "all",
  view: "table",
  articleSearch: "",
  documentSearch: "",
  documentCategory: "all",
  adminTab: "team",
  currentEmployeeId: "",
  currentDocumentId: "",
  currentEventId: "",
  employees: [],
  documents: [],
  events: [],
  currentArticleId: "",
  articles: [],
  adminToken: "",
  adminUnlocked: false,
  sharedBackendAvailable: false,
  saveTimer: 0,
};

const elements = {
  search: document.querySelector("#employeeSearch"),
  departmentFilter: document.querySelector("#departmentFilter"),
  workModeFilter: document.querySelector("#workModeFilter"),
  tableBody: document.querySelector("#employeesTableBody"),
  grid: document.querySelector("#employeesGrid"),
  emptyState: document.querySelector("#emptyState"),
  tableWrap: document.querySelector('[data-view-target="table"]'),
  viewButtons: document.querySelectorAll(".view-button"),
  totalEmployees: document.querySelector("#totalEmployees"),
  locationCount: document.querySelector("#locationCount"),
  pendingContacts: document.querySelector("#pendingContacts"),
  departmentCount: document.querySelector("#departmentCount"),
  navItems: document.querySelectorAll(".section-nav [data-nav-target]"),
  pageViews: document.querySelectorAll("[data-page]"),
  homeEmployees: document.querySelector("#homeEmployees"),
  homeArticles: document.querySelector("#homeArticles"),
  homeDocuments: document.querySelector("#homeDocuments"),
  homeVacations: document.querySelector("#homeVacations"),
  eventList: document.querySelector("#eventList"),
  eventTotal: document.querySelector("#eventTotal"),
  birthdayTotal: document.querySelector("#birthdayTotal"),
  leaveTotal: document.querySelector("#leaveTotal"),
  reminderTotal: document.querySelector("#reminderTotal"),
  eventsPageList: document.querySelector("#eventsPageList"),
  birthdayList: document.querySelector("#birthdayList"),
  leaveList: document.querySelector("#leaveList"),
  recentArticles: document.querySelector("#recentArticles"),
  featuredDocuments: document.querySelector("#featuredDocuments"),
  articleSearch: document.querySelector("#articleSearch"),
  articleList: document.querySelector("#articleList"),
  articleReader: document.querySelector("#articleReader"),
  articleReaderStatus: document.querySelector("#articleReaderStatus"),
  articleReaderDate: document.querySelector("#articleReaderDate"),
  articleReaderTitle: document.querySelector("#articleReaderTitle"),
  articleReaderBody: document.querySelector("#articleReaderBody"),
  articleEditorShell: document.querySelector("#articleEditorShell"),
  articleTitle: document.querySelector("#articleTitle"),
  articleStatus: document.querySelector("#articleStatus"),
  articleEditor: document.querySelector("#articleEditor"),
  blockFormat: document.querySelector("#blockFormat"),
  imageUpload: document.querySelector("#imageUpload"),
  newArticleButton: document.querySelector("#newArticleButton"),
  saveArticleButton: document.querySelector("#saveArticleButton"),
  saveStatus: document.querySelector("#saveStatus"),
  addEmployeeButton: document.querySelector("#addEmployeeButton"),
  addDocumentButton: document.querySelector("#addDocumentButton"),
  newAdminItemButton: document.querySelector("#newAdminItemButton"),
  documentSearch: document.querySelector("#documentSearch"),
  documentCategoryFilter: document.querySelector("#documentCategoryFilter"),
  documentGrid: document.querySelector("#documentGrid"),
  documentEmptyState: document.querySelector("#documentEmptyState"),
  adminTabs: document.querySelectorAll("[data-admin-tab]"),
  adminSections: document.querySelectorAll("[data-admin-section]"),
  adminEmployeeList: document.querySelector("#adminEmployeeList"),
  adminEventList: document.querySelector("#adminEventList"),
  adminDocumentList: document.querySelector("#adminDocumentList"),
  adminAuthForm: document.querySelector("#adminAuthForm"),
  adminLockedPanel: document.querySelector("#adminLockedPanel"),
  contentOverview: document.querySelector("#contentOverview"),
  contentTeamCount: document.querySelector("#contentTeamCount"),
  contentDocumentLinks: document.querySelector("#contentDocumentLinks"),
  contentPublishedArticles: document.querySelector("#contentPublishedArticles"),
  contentUpcomingEvents: document.querySelector("#contentUpcomingEvents"),
  contentTaskList: document.querySelector("#contentTaskList"),
  adminTokenInput: document.querySelector("#adminTokenInput"),
  adminSyncStatus: document.querySelector("#adminSyncStatus"),
  employeeForm: document.querySelector("#employeeForm"),
  employeeFormTitle: document.querySelector("#employeeFormTitle"),
  createEmployeeRecordButton: document.querySelector("#createEmployeeRecordButton"),
  deleteEmployeeButton: document.querySelector("#deleteEmployeeButton"),
  eventForm: document.querySelector("#eventForm"),
  eventFormTitle: document.querySelector("#eventFormTitle"),
  createEventRecordButton: document.querySelector("#createEventRecordButton"),
  deleteEventButton: document.querySelector("#deleteEventButton"),
  documentForm: document.querySelector("#documentForm"),
  documentFormTitle: document.querySelector("#documentFormTitle"),
  createDocumentRecordButton: document.querySelector("#createDocumentRecordButton"),
  deleteDocumentButton: document.querySelector("#deleteDocumentButton"),
};

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function escapeHtml(value) {
  const container = document.createElement("div");
  container.textContent = value;
  return container.innerHTML;
}

function cloneDefaultArticles() {
  return JSON.parse(JSON.stringify(defaultArticles));
}

function cloneDefaultEmployees() {
  return JSON.parse(JSON.stringify(defaultEmployees));
}

function cloneDefaultDocuments() {
  return JSON.parse(JSON.stringify(defaultDocuments));
}

function cloneDefaultEvents() {
  return JSON.parse(JSON.stringify(defaultEvents));
}

function getStoredCollection(storageKey, fallbackFactory) {
  let savedItems = "";

  try {
    savedItems = window.localStorage?.getItem(storageKey);
  } catch {
    return fallbackFactory();
  }

  if (!savedItems) {
    return fallbackFactory();
  }

  try {
    const parsedItems = JSON.parse(savedItems);
    return Array.isArray(parsedItems) && parsedItems.length ? parsedItems : fallbackFactory();
  } catch {
    return fallbackFactory();
  }
}

function saveCollection(storageKey, items) {
  try {
    window.localStorage?.setItem(storageKey, JSON.stringify(items));
  } catch {
    // Local browser storage can be unavailable in private or locked-down contexts.
  }
}

function getStoredAdminToken() {
  try {
    return window.localStorage?.getItem(adminTokenStorageKey) || "";
  } catch {
    return "";
  }
}

function setStoredAdminToken(token) {
  try {
    window.localStorage?.setItem(adminTokenStorageKey, token);
  } catch {
    // The key still works for the current page session even if persistence is blocked.
  }
}

function setAdminStatus(message, status = "idle") {
  elements.adminSyncStatus.textContent = message;
  elements.adminAuthForm.dataset.status = status;
}

function renderAdminGate() {
  const isUnlocked = state.adminUnlocked;
  elements.newAdminItemButton.hidden = !isUnlocked;
  elements.adminLockedPanel.hidden = isUnlocked;
  elements.contentOverview.hidden = !isUnlocked;
  document.querySelector(".admin-tabs").hidden = !isUnlocked;
  document.querySelector(".admin-workspace").hidden = !isUnlocked;
  renderKnowledgeMode();

  if (!isUnlocked && state.articles.length && !getVisibleArticles().some((article) => article.id === state.currentArticleId)) {
    loadArticle(state.currentArticleId);
    renderHome();
    return;
  }

  renderArticles();
  renderHome();
}

async function verifyAdminAccess({ silent = false } = {}) {
  if (!state.adminToken) {
    state.adminUnlocked = false;
    renderAdminGate();

    if (!silent) {
      setAdminStatus("Enter the admin key to unlock management", "error");
      elements.adminTokenInput.focus();
    }

    return false;
  }

  if (!window.fetch || window.location.protocol === "file:" || !state.sharedBackendAvailable) {
    state.adminUnlocked = false;
    renderAdminGate();

    if (!silent) {
      setAdminStatus("Shared storage is required to verify admin access", "error");
    }

    return false;
  }

  if (!silent) {
    setAdminStatus("Checking admin key...", "idle");
  }

  try {
    const response = await fetch(adminCheckEndpoint, {
      method: "POST",
      headers: {
        authorization: `Bearer ${state.adminToken}`,
      },
    });

    state.adminUnlocked = response.ok;
    renderAdminGate();

    if (response.ok) {
      setAdminStatus("Admin access unlocked", "ready");
      return true;
    }

    setAdminStatus("Admin key is not accepted", "error");
    return false;
  } catch {
    state.adminUnlocked = false;
    renderAdminGate();
    setAdminStatus("Could not verify admin access", "error");
    return false;
  }
}

function getPortalDataPayload() {
  return {
    employees: state.employees,
    documents: state.documents,
    events: state.events,
    articles: state.articles,
  };
}

function saveLocalPortalData() {
  saveCollection(employeeStorageKey, state.employees);
  saveCollection(documentStorageKey, state.documents);
  saveCollection(eventStorageKey, state.events);
  saveArticles();
}

function normalizeSharedRecords(records, fallback) {
  return Array.isArray(records) && records.length ? records : fallback();
}

function isLegacyDemoEmployeeSet(records) {
  if (!Array.isArray(records) || records.length !== 6) {
    return false;
  }

  const departments = new Set(records.map((employee) => employee.department));
  const locations = new Set(records.map((employee) => employee.location));

  return (
    departments.has("People & Culture") &&
    departments.has("Product") &&
    departments.has("Customer Operations") &&
    locations.has("Singapore") &&
    locations.has("Lisbon") &&
    locations.has("Hong Kong") &&
    records.every((employee) => String(employee.email || "").endsWith("@novagroup.trade"))
  );
}

function normalizeEmployeeRecords(records) {
  const employeeRecords = normalizeSharedRecords(records, cloneDefaultEmployees);
  return isLegacyDemoEmployeeSet(employeeRecords) ? cloneDefaultEmployees() : employeeRecords;
}

function normalizeEventRecords(records) {
  return normalizeSharedRecords(records, cloneDefaultEvents).map((event, index) => ({
    id: event.id || createId(`event-${index}`),
    type: event.type || "document",
    title: event.title || "New event",
    date: event.date || new Date().toISOString().slice(0, 10),
    meta: event.meta || "Details",
  }));
}

function normalizeDocumentRecords(records) {
  return normalizeSharedRecords(records, cloneDefaultDocuments).map((documentItem, index) => ({
    id: documentItem.id || createId(`document-${index}`),
    title: documentItem.title === "Leave Request Template" ? "Vacation Request Template" : documentItem.title || "New document",
    category: documentItem.category || "Category",
    owner: documentItem.owner || "Owner",
    updatedAt: documentItem.updatedAt || new Date().toISOString().slice(0, 10),
    type: documentItem.type || "PDF",
    status: documentItem.status || "Draft",
    url: documentItem.url || "",
  }));
}

function applySharedPortalData(data) {
  if (!data || typeof data !== "object") {
    return;
  }

  state.employees = normalizeEmployeeRecords(data.employees);
  state.documents = normalizeDocumentRecords(data.documents);
  state.events = normalizeEventRecords(data.events);
  state.articles = normalizeSharedRecords(data.articles, cloneDefaultArticles);
  state.currentEmployeeId = state.employees[0]?.id || "";
  state.currentDocumentId = state.documents[0]?.id || "";
  state.currentEventId = state.events[0]?.id || "";
  state.currentArticleId = state.articles[0]?.id || "";
  saveLocalPortalData();
  refreshPortal();
  loadArticle(state.currentArticleId);
}

async function loadSharedPortalData() {
  if (!window.fetch || window.location.protocol === "file:") {
    setAdminStatus("Local preview mode", "idle");
    return;
  }

  try {
    const response = await fetch(portalDataEndpoint, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Shared storage returned ${response.status}`);
    }

    const payload = await response.json();
    state.sharedBackendAvailable = true;

    if (payload.data) {
      applySharedPortalData(payload.data);
      if (state.adminToken) {
        await verifyAdminAccess({ silent: true });
      } else {
        setAdminStatus("Enter admin key to unlock management", "ready");
      }
      return;
    }

    if (state.adminToken) {
      await verifyAdminAccess({ silent: true });
    } else {
      setAdminStatus("Enter admin key to unlock management", "ready");
    }
  } catch {
    state.sharedBackendAvailable = false;
    setAdminStatus("Shared storage unavailable, using this browser", "error");
  }
}

async function publishPortalData({ silent = false } = {}) {
  saveLocalPortalData();

  if (!state.sharedBackendAvailable) {
    if (!silent) {
      setAdminStatus("Saved in this browser", "error");
    }
    return false;
  }

  if (!state.adminToken) {
    state.adminUnlocked = false;
    renderAdminGate();

    if (!silent) {
      setAdminStatus("Enter the admin key to publish changes", "error");
      elements.adminTokenInput.focus();
    }
    return false;
  }

  if (!silent) {
    setAdminStatus("Saving shared content...", "idle");
  }

  try {
    const response = await fetch(portalDataEndpoint, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${state.adminToken}`,
      },
      body: JSON.stringify(getPortalDataPayload()),
    });

    if (response.status === 401) {
      state.adminUnlocked = false;
      renderAdminGate();
      setAdminStatus("Admin key is not accepted", "error");
      return false;
    }

    if (!response.ok) {
      throw new Error(`Save failed with ${response.status}`);
    }

    setAdminStatus("Shared content saved", "ready");
    state.adminUnlocked = true;
    renderAdminGate();
    return true;
  } catch {
    setAdminStatus("Could not save shared content", "error");
    return false;
  }
}

function createId(prefix) {
  return `${prefix}-${Date.now()}`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(new Date(dateString));
}

function getFilteredEmployees() {
  const query = normalize(state.search);

  return state.employees.filter((employee) => {
    const matchesSearch = [employee.name, employee.role, employee.department, employee.location]
      .map(normalize)
      .some((value) => value.includes(query));
    const matchesDepartment = state.department === "all" || employee.department === state.department;
    const matchesWorkMode = state.workMode === "all" || employee.workMode === state.workMode;

    return matchesSearch && matchesDepartment && matchesWorkMode;
  });
}

function renderDepartmentOptions() {
  const departments = [...new Set(state.employees.map((employee) => employee.department))].sort();

  elements.departmentFilter.innerHTML = '<option value="all">All departments</option>';

  departments.forEach((department) => {
    const option = document.createElement("option");
    option.value = department;
    option.textContent = department;
    elements.departmentFilter.append(option);
  });

  if (![...elements.departmentFilter.options].some((option) => option.value === state.department)) {
    state.department = "all";
  }

  elements.departmentFilter.value = state.department;
}

function renderSummary() {
  elements.totalEmployees.textContent = state.employees.length;
  elements.locationCount.textContent = new Set(state.employees.map((employee) => employee.location)).size;
  elements.pendingContacts.textContent = state.employees.filter((employee) => !employee.email && !employee.phone).length;
  elements.departmentCount.textContent = new Set(state.employees.map((employee) => employee.department)).size;
}

function renderContentOverview() {
  const linkedDocuments = state.documents.filter((documentItem) => getSafeDocumentUrl(documentItem.url)).length;
  const publishedArticles = getPublishedArticles().length;
  const upcomingEvents = getSortedEvents().length;
  const openTasks = [];

  elements.contentTeamCount.textContent = state.employees.length;
  elements.contentDocumentLinks.textContent = `${linkedDocuments}/${state.documents.length}`;
  elements.contentPublishedArticles.textContent = `${publishedArticles}/${state.articles.length}`;
  elements.contentUpcomingEvents.textContent = upcomingEvents;

  if (!state.employees.length) {
    openTasks.push({ label: "Add team members", target: "team" });
  }

  if (linkedDocuments < state.documents.length) {
    openTasks.push({ label: `Add links to ${state.documents.length - linkedDocuments} documents`, target: "documents" });
  }

  if (!publishedArticles) {
    openTasks.push({ label: "Publish the first Knowledge Base article", target: "knowledge" });
  }

  if (!upcomingEvents) {
    openTasks.push({ label: "Add birthdays and vacation dates", target: "events" });
  }

  if (!openTasks.length) {
    elements.contentTaskList.innerHTML = `
      <div class="content-task is-complete">
        <strong>Core content is ready</strong>
        <span>Keep it fresh as team details, documents, and dates change.</span>
      </div>
    `;
    return;
  }

  elements.contentTaskList.innerHTML = openTasks
    .map(
      (task) => `
        <button class="content-task" type="button" data-content-target="${task.target}">
          <strong>${escapeHtml(task.label)}</strong>
          <span>Open ${task.target === "knowledge" ? "Knowledge Base" : task.target}</span>
        </button>
      `,
    )
    .join("");
}

function getSortedEvents() {
  return [...state.events].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getSafeDocumentUrl(url) {
  const value = String(url || "").trim();

  if (!value) {
    return "";
  }

  if (value.startsWith("/") || value.startsWith("https://") || value.startsWith("http://")) {
    return value;
  }

  return "";
}

function eventItemMarkup(event, { compact = false } = {}) {
  if (compact) {
    return `
      <a class="compact-item" href="#events" data-nav-target="events">
        <strong>${escapeHtml(event.title)}</strong>
        <span>${formatDate(event.date)} · ${escapeHtml(event.meta)}</span>
      </a>
    `;
  }

  return `
    <div class="event-item" data-type="${escapeHtml(event.type)}">
      <span>${formatDate(event.date)}</span>
      <strong>${escapeHtml(event.title)}</strong>
      <small>${eventTypeLabels[event.type] || "Event"} · ${escapeHtml(event.meta)}</small>
    </div>
  `;
}

function renderEvents() {
  const events = getSortedEvents();
  const birthdays = events.filter((event) => event.type === "birthday");
  const leaveEvents = events.filter((event) => event.type === "vacation");
  const reminders = events.filter((event) => event.type !== "birthday" && event.type !== "vacation");

  elements.eventTotal.textContent = events.length;
  elements.birthdayTotal.textContent = birthdays.length;
  elements.leaveTotal.textContent = leaveEvents.length;
  elements.reminderTotal.textContent = reminders.length;

  elements.eventsPageList.innerHTML = events.map((event) => eventItemMarkup(event)).join("");
  elements.birthdayList.innerHTML = birthdays.map((event) => eventItemMarkup(event, { compact: true })).join("");
  elements.leaveList.innerHTML = leaveEvents.map((event) => eventItemMarkup(event, { compact: true })).join("");
}

function renderHome() {
  const events = getSortedEvents();
  const vacationEvents = events.filter((event) => event.type === "vacation");
  const visibleArticles = getVisibleArticles();
  const recentArticles = [...visibleArticles]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3);

  elements.homeEmployees.textContent = state.employees.length;
  elements.homeArticles.textContent = visibleArticles.length;
  elements.homeDocuments.textContent = state.documents.length;
  elements.homeVacations.textContent = vacationEvents.length;

  elements.eventList.innerHTML = events.map((event) => eventItemMarkup(event)).join("");

  elements.recentArticles.innerHTML = recentArticles
    .map(
      (article) => `
        <a class="compact-item" href="#knowledge" data-nav-target="knowledge" data-open-article="${article.id}">
          <strong>${escapeHtml(article.title || "Untitled")}</strong>
          <span>${articleStatusLabels[article.status]} · ${formatDate(article.updatedAt)}</span>
        </a>
      `,
    )
    .join("");

  elements.featuredDocuments.innerHTML = state.documents
    .slice(0, 3)
    .map(
      (documentItem) => `
        <a class="compact-item" href="#documents" data-nav-target="documents">
          <strong>${escapeHtml(documentItem.title)}</strong>
          <span>${escapeHtml(documentItem.category)} · ${escapeHtml(documentItem.type)}</span>
        </a>
      `,
    )
    .join("");
}

function employeePersonMarkup(employee) {
  return `
    <div class="person">
      <span class="avatar" data-tone="${escapeHtml(employee.tone)}">${initials(employee.name)}</span>
      <span class="person-details">
        <strong>${escapeHtml(employee.name)}</strong>
        <span>${escapeHtml(employee.location)}</span>
      </span>
    </div>
  `;
}

function employeeContactMarkup(employee) {
  const email = String(employee.email || "").trim();
  const phone = String(employee.phone || "").trim();

  if (!email && !phone) {
    return `<span class="contact-list"><span class="subtle">Contact pending</span></span>`;
  }

  return `
    <span class="contact-list">
      ${email ? `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>` : ""}
      ${phone ? `<span class="subtle">${escapeHtml(phone)}</span>` : ""}
    </span>
  `;
}

function renderTable(filteredEmployees) {
  elements.tableBody.innerHTML = filteredEmployees
    .map(
      (employee) => `
        <tr>
          <td>${employeePersonMarkup(employee)}</td>
          <td><strong>${escapeHtml(employee.role)}</strong></td>
          <td>${escapeHtml(employee.department)}</td>
          <td><span class="tag ${escapeHtml(employee.workMode)}">${workModeLabels[employee.workMode]}</span></td>
          <td>${employeeContactMarkup(employee)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderCards(filteredEmployees) {
  elements.grid.innerHTML = filteredEmployees
    .map(
      (employee) => `
        <article class="employee-card">
          ${employeePersonMarkup(employee)}
          <div class="card-meta">
            <div class="meta-row"><span>Role</span><strong>${escapeHtml(employee.role)}</strong></div>
            <div class="meta-row"><span>Department</span><strong>${escapeHtml(employee.department)}</strong></div>
            <div class="meta-row"><span>Work mode</span><strong>${workModeLabels[employee.workMode]}</strong></div>
          </div>
          ${employeeContactMarkup(employee)}
        </article>
      `,
    )
    .join("");
}

function renderEmployees() {
  const filteredEmployees = getFilteredEmployees();

  renderTable(filteredEmployees);
  renderCards(filteredEmployees);

  const hasResults = filteredEmployees.length > 0;
  elements.emptyState.hidden = hasResults;
  elements.tableWrap.hidden = !hasResults || state.view !== "table";
  elements.grid.hidden = !hasResults || state.view !== "cards";
}

function getFilteredDocuments() {
  const query = normalize(state.documentSearch);

  return state.documents.filter((documentItem) => {
    const matchesSearch = [documentItem.title, documentItem.category, documentItem.owner, documentItem.status]
      .map(normalize)
      .some((value) => value.includes(query));
    const matchesCategory = state.documentCategory === "all" || documentItem.category === state.documentCategory;

    return matchesSearch && matchesCategory;
  });
}

function renderDocumentCategories() {
  const categories = [...new Set(state.documents.map((documentItem) => documentItem.category))].sort();

  elements.documentCategoryFilter.innerHTML = '<option value="all">All categories</option>';

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.documentCategoryFilter.append(option);
  });

  if (![...elements.documentCategoryFilter.options].some((option) => option.value === state.documentCategory)) {
    state.documentCategory = "all";
  }

  elements.documentCategoryFilter.value = state.documentCategory;
}

function renderDocuments() {
  const filteredDocuments = getFilteredDocuments();
  elements.documentEmptyState.hidden = filteredDocuments.length > 0;

  elements.documentGrid.innerHTML = filteredDocuments
    .map((documentItem) => {
      const documentUrl = getSafeDocumentUrl(documentItem.url);

      return `
        <article class="document-card">
          <div class="document-filetype">${escapeHtml(documentItem.type)}</div>
          <div>
            <h3>${escapeHtml(documentItem.title)}</h3>
            <p>${escapeHtml(documentItem.category)} · ${escapeHtml(documentItem.owner)}</p>
          </div>
          <div class="document-meta">
            <span>${formatDate(documentItem.updatedAt)}</span>
            <span class="status-pill ${documentItem.status === "Current" ? "published" : "review"}">${escapeHtml(documentItem.status)}</span>
          </div>
          ${
            documentUrl
              ? `<a class="document-action" href="${escapeHtml(documentUrl)}" target="_blank" rel="noopener">Open</a>`
              : '<span class="document-action is-disabled">Link pending</span>'
          }
        </article>
      `;
    })
    .join("");
}

function getCurrentEmployee() {
  return state.employees.find((employee) => employee.id === state.currentEmployeeId);
}

function getCurrentDocument() {
  return state.documents.find((documentItem) => documentItem.id === state.currentDocumentId);
}

function getCurrentEvent() {
  return state.events.find((event) => event.id === state.currentEventId);
}

function renderAdminEmployees() {
  elements.adminEmployeeList.innerHTML = state.employees
    .map(
      (employee) => `
        <button class="admin-record ${employee.id === state.currentEmployeeId ? "is-active" : ""}" type="button" data-employee-id="${employee.id}">
          <strong>${escapeHtml(employee.name)}</strong>
          <span>${escapeHtml(employee.role)} · ${escapeHtml(employee.location)}</span>
        </button>
      `,
    )
    .join("");
}

function renderAdminEvents() {
  elements.adminEventList.innerHTML = getSortedEvents()
    .map(
      (event) => `
        <button class="admin-record ${event.id === state.currentEventId ? "is-active" : ""}" type="button" data-event-id="${event.id}">
          <strong>${escapeHtml(event.title)}</strong>
          <span>${eventTypeLabels[event.type] || "Event"} · ${formatDate(event.date)}</span>
        </button>
      `,
    )
    .join("");
}

function renderAdminDocuments() {
  elements.adminDocumentList.innerHTML = state.documents
    .map(
      (documentItem) => `
        <button class="admin-record ${documentItem.id === state.currentDocumentId ? "is-active" : ""}" type="button" data-document-id="${documentItem.id}">
          <strong>${escapeHtml(documentItem.title)}</strong>
          <span>${escapeHtml(documentItem.category)} · ${escapeHtml(documentItem.type)}</span>
        </button>
      `,
    )
    .join("");
}

function renderAdminLists() {
  renderAdminEmployees();
  renderAdminEvents();
  renderAdminDocuments();
}

function fillEmployeeForm(employee) {
  if (!employee) {
    return;
  }

  elements.employeeFormTitle.textContent = `Edit ${employee.name}`;
  Object.entries(employee).forEach(([key, value]) => {
    const field = elements.employeeForm.elements[key];

    if (field) {
      field.value = value;
    }
  });
}

function fillDocumentForm(documentItem) {
  if (!documentItem) {
    return;
  }

  elements.documentFormTitle.textContent = `Edit ${documentItem.title}`;
  Object.entries(documentItem).forEach(([key, value]) => {
    const field = elements.documentForm.elements[key];

    if (field) {
      field.value = value;
    }
  });
}

function fillEventForm(event) {
  if (!event) {
    return;
  }

  elements.eventFormTitle.textContent = `Edit ${event.title}`;
  Object.entries(event).forEach(([key, value]) => {
    const field = elements.eventForm.elements[key];

    if (field) {
      field.value = value;
    }
  });
}

function refreshPortal() {
  renderDepartmentOptions();
  renderDocumentCategories();
  renderSummary();
  renderEmployees();
  renderDocuments();
  renderEvents();
  renderHome();
  renderContentOverview();
  renderAdminLists();
  fillEmployeeForm(getCurrentEmployee());
  fillEventForm(getCurrentEvent());
  fillDocumentForm(getCurrentDocument());
}

function selectEmployee(employeeId) {
  state.currentEmployeeId = employeeId;
  renderAdminEmployees();
  fillEmployeeForm(getCurrentEmployee());
}

function selectDocument(documentId) {
  state.currentDocumentId = documentId;
  renderAdminDocuments();
  fillDocumentForm(getCurrentDocument());
}

function selectEvent(eventId) {
  state.currentEventId = eventId;
  renderAdminEvents();
  fillEventForm(getCurrentEvent());
}

function createEmployeeRecord() {
  const employee = {
    id: createId("team"),
    name: "New team member",
    role: "Role",
    department: "Department",
    workMode: "not-set",
    location: "Location",
    email: "",
    phone: "",
    tone: "blue",
  };

  state.employees.unshift(employee);
  state.currentEmployeeId = employee.id;
  refreshPortal();
  void publishPortalData({ silent: true });
  elements.employeeForm.elements.name.focus();
  elements.employeeForm.elements.name.select();
}

function createDocumentRecord() {
  const documentItem = {
    id: createId("document"),
    title: "New document",
    category: "Category",
    owner: "Owner",
    updatedAt: new Date().toISOString().slice(0, 10),
    type: "PDF",
    status: "Draft",
    url: "",
  };

  state.documents.unshift(documentItem);
  state.currentDocumentId = documentItem.id;
  refreshPortal();
  void publishPortalData({ silent: true });
  elements.documentForm.elements.title.focus();
  elements.documentForm.elements.title.select();
}

function createEventRecord() {
  const event = {
    id: createId("event"),
    type: "document",
    title: "New event",
    date: new Date().toISOString().slice(0, 10),
    meta: "Details",
  };

  state.events.unshift(event);
  state.currentEventId = event.id;
  refreshPortal();
  void publishPortalData({ silent: true });
  elements.eventForm.elements.title.focus();
  elements.eventForm.elements.title.select();
}

function saveEmployeeFromForm(event) {
  event.preventDefault();

  const employee = getCurrentEmployee();

  if (!employee) {
    return;
  }

  const formData = new FormData(elements.employeeForm);
  ["name", "role", "department", "location", "email", "phone", "workMode", "tone"].forEach((key) => {
    employee[key] = String(formData.get(key) || "").trim();
  });

  refreshPortal();
  void publishPortalData();
}

function saveEventFromForm(event) {
  event.preventDefault();

  const portalEvent = getCurrentEvent();

  if (!portalEvent) {
    return;
  }

  const formData = new FormData(elements.eventForm);
  ["title", "type", "date", "meta"].forEach((key) => {
    portalEvent[key] = String(formData.get(key) || "").trim();
  });

  refreshPortal();
  void publishPortalData();
}

function saveDocumentFromForm(event) {
  event.preventDefault();

  const documentItem = getCurrentDocument();

  if (!documentItem) {
    return;
  }

  const formData = new FormData(elements.documentForm);
  ["title", "category", "owner", "updatedAt", "type", "status", "url"].forEach((key) => {
    documentItem[key] = String(formData.get(key) || "").trim();
  });

  refreshPortal();
  void publishPortalData();
}

function deleteEmployeeRecord() {
  if (state.employees.length <= 1 || !window.confirm("Delete this team member?")) {
    return;
  }

  state.employees = state.employees.filter((employee) => employee.id !== state.currentEmployeeId);
  state.currentEmployeeId = state.employees[0]?.id || "";
  refreshPortal();
  void publishPortalData();
}

function deleteDocumentRecord() {
  if (state.documents.length <= 1 || !window.confirm("Delete this document?")) {
    return;
  }

  state.documents = state.documents.filter((documentItem) => documentItem.id !== state.currentDocumentId);
  state.currentDocumentId = state.documents[0]?.id || "";
  refreshPortal();
  void publishPortalData();
}

function deleteEventRecord() {
  if (state.events.length <= 1 || !window.confirm("Delete this event?")) {
    return;
  }

  state.events = state.events.filter((event) => event.id !== state.currentEventId);
  state.currentEventId = state.events[0]?.id || "";
  refreshPortal();
  void publishPortalData();
}

function setAdminTab(tab) {
  state.adminTab = tab;

  elements.adminTabs.forEach((button) => {
    const isActive = button.dataset.adminTab === tab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  elements.adminSections.forEach((section) => {
    const isActive = section.dataset.adminSection === tab;
    section.hidden = !isActive;
    section.classList.toggle("is-active", isActive);
  });
}

function initializeCollections() {
  state.employees = normalizeEmployeeRecords(getStoredCollection(employeeStorageKey, cloneDefaultEmployees));
  state.documents = normalizeDocumentRecords(getStoredCollection(documentStorageKey, cloneDefaultDocuments));
  state.events = normalizeEventRecords(getStoredCollection(eventStorageKey, cloneDefaultEvents));
  state.currentEmployeeId = state.employees[0]?.id || "";
  state.currentDocumentId = state.documents[0]?.id || "";
  state.currentEventId = state.events[0]?.id || "";
}

function setView(view) {
  state.view = view;

  elements.viewButtons.forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderEmployees();
}

function setActivePage(page) {
  const pageExists = [...elements.pageViews].some((view) => view.dataset.page === page);
  const activePage = pageExists ? page : "home";

  elements.pageViews.forEach((view) => {
    const isActive = view.dataset.page === activePage;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });

  elements.navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.navTarget === activePage);
  });

  window.scrollTo(0, 0);

  if (window.location.hash !== `#${activePage}`) {
    history.replaceState(null, "", `#${activePage}`);
  }
}

function getStoredArticles() {
  let savedArticles = "";

  try {
    savedArticles = window.localStorage?.getItem(articleStorageKey);
  } catch {
    return cloneDefaultArticles();
  }

  if (!savedArticles) {
    return cloneDefaultArticles();
  }

  try {
    const parsedArticles = JSON.parse(savedArticles);
    return Array.isArray(parsedArticles) && parsedArticles.length ? parsedArticles : cloneDefaultArticles();
  } catch {
    return cloneDefaultArticles();
  }
}

function saveArticles() {
  try {
    window.localStorage?.setItem(articleStorageKey, JSON.stringify(state.articles));
  } catch {
    elements.saveStatus.textContent = "Saving is unavailable";
  }
}

function getCurrentArticle() {
  return state.articles.find((article) => article.id === state.currentArticleId);
}

function getPublishedArticles() {
  return state.articles.filter((article) => article.status === "published");
}

function getVisibleArticles() {
  return state.adminUnlocked ? state.articles : getPublishedArticles();
}

function renderKnowledgeMode() {
  const canEdit = state.adminUnlocked;

  elements.newArticleButton.hidden = !canEdit;
  elements.articleReader.hidden = canEdit;
  elements.articleEditorShell.hidden = !canEdit;
  elements.articleTitle.disabled = !canEdit;
  elements.articleStatus.disabled = !canEdit;
  elements.articleEditor.contentEditable = canEdit ? "true" : "false";
  elements.blockFormat.disabled = !canEdit;
  elements.saveArticleButton.disabled = !canEdit;
  document.querySelectorAll(".editor-toolbar button").forEach((button) => {
    button.disabled = !canEdit;
  });
}

function renderArticles() {
  const query = normalize(state.articleSearch);
  const visibleArticles = getVisibleArticles();
  const filteredArticles = visibleArticles.filter((article) =>
    normalize(`${article.title} ${state.adminUnlocked ? article.status : ""} ${article.content.replace(/<[^>]*>/g, " ")}`).includes(query),
  );

  if (!filteredArticles.length) {
    elements.articleList.innerHTML = `
      <div class="article-empty">
        <strong>No published articles yet</strong>
        <span>Published knowledge base articles will appear here.</span>
      </div>
    `;
    return;
  }

  elements.articleList.innerHTML = filteredArticles
    .map(
      (article) => `
        <button class="article-item ${article.id === state.currentArticleId ? "is-active" : ""}" type="button" data-article-id="${article.id}">
          <strong>${escapeHtml(article.title || "Untitled")}</strong>
          <span class="article-meta">
            ${state.adminUnlocked ? `<span class="status-pill ${article.status}">${articleStatusLabels[article.status]}</span>` : ""}
            <span>${formatDate(article.updatedAt)}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function loadArticle(articleId) {
  renderKnowledgeMode();

  const visibleArticles = getVisibleArticles();
  const article = visibleArticles.find((item) => item.id === articleId) || visibleArticles[0];

  if (!article) {
    state.currentArticleId = "";
    elements.articleReaderStatus.textContent = "Published";
    elements.articleReaderStatus.className = "status-pill published";
    elements.articleReaderDate.textContent = "";
    elements.articleReaderTitle.textContent = "No published articles yet";
    elements.articleReaderBody.innerHTML = "<p>Published knowledge base articles will appear here.</p>";
    elements.articleTitle.value = "";
    elements.articleStatus.value = "draft";
    elements.articleEditor.innerHTML = "";
    elements.saveStatus.textContent = "Nothing to edit";
    renderArticles();
    return;
  }

  state.currentArticleId = article.id;
  elements.articleReaderStatus.textContent = articleStatusLabels[article.status] || "Published";
  elements.articleReaderStatus.className = `status-pill ${article.status}`;
  elements.articleReaderDate.textContent = formatDate(article.updatedAt);
  elements.articleReaderTitle.textContent = article.title || "Untitled";
  elements.articleReaderBody.innerHTML = article.content || "<p></p>";
  elements.articleTitle.value = article.title;
  elements.articleStatus.value = article.status;
  elements.articleEditor.innerHTML = article.content;
  elements.saveStatus.textContent = "Changes saved";
  renderArticles();
}

function persistCurrentArticle({ silent = false } = {}) {
  if (!state.adminUnlocked) {
    return;
  }

  const article = getCurrentArticle();

  if (!article) {
    return;
  }

  article.title = elements.articleTitle.value.trim() || "Untitled";
  article.status = elements.articleStatus.value;
  article.content = elements.articleEditor.innerHTML;
  article.updatedAt = new Date().toISOString().slice(0, 10);
  saveArticles();
  renderArticles();
  renderHome();
  void publishPortalData({ silent });

  if (!silent) {
    elements.saveStatus.textContent = "Changes saved";
  }
}

function scheduleArticleSave() {
  if (!state.adminUnlocked) {
    return;
  }

  elements.saveStatus.textContent = "Saving...";
  window.clearTimeout(state.saveTimer);
  state.saveTimer = window.setTimeout(() => persistCurrentArticle(), 450);
}

function createArticle() {
  if (!state.adminUnlocked) {
    return;
  }

  persistCurrentArticle({ silent: true });

  const article = {
    id: `article-${Date.now()}`,
    title: "New article",
    status: "draft",
    updatedAt: new Date().toISOString().slice(0, 10),
    content: "<p></p>",
  };

  state.articles.unshift(article);
  saveArticles();
  loadArticle(article.id);
  void publishPortalData({ silent: true });
  elements.articleTitle.focus();
  elements.articleTitle.select();
}

function runEditorCommand(command, value = null) {
  if (!state.adminUnlocked) {
    return;
  }

  elements.articleEditor.focus();
  document.execCommand(command, false, value);
  scheduleArticleSave();
  updateToolbarState();
}

function insertLink() {
  if (!state.adminUnlocked) {
    return;
  }

  const url = window.prompt("Link URL");

  if (!url) {
    return;
  }

  runEditorCommand("createLink", url);
}

function insertImage(file) {
  if (!state.adminUnlocked || !file) {
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const alt = escapeHtml(file.name.replace(/\.[^.]+$/, ""));
    const imageMarkup = `<figure><img src="${reader.result}" alt="${alt}" /><figcaption>${alt}</figcaption></figure><p></p>`;
    runEditorCommand("insertHTML", imageMarkup);
    elements.imageUpload.value = "";
  });

  reader.readAsDataURL(file);
}

function updateToolbarState() {
  document.querySelectorAll("[data-command]").forEach((button) => {
    const command = button.dataset.command;

    if (["bold", "italic", "underline"].includes(command)) {
      button.classList.toggle("is-active", document.queryCommandState(command));
    }
  });
}

function initializeKnowledgeBase() {
  state.articles = getStoredArticles();
  state.currentArticleId = state.articles[0]?.id || "";
  loadArticle(state.currentArticleId);
  renderHome();
  renderContentOverview();
}

elements.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderEmployees();
});

elements.departmentFilter.addEventListener("change", (event) => {
  state.department = event.target.value;
  renderEmployees();
});

elements.workModeFilter.addEventListener("change", (event) => {
  state.workMode = event.target.value;
  renderEmployees();
});

elements.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

elements.navItems.forEach((navItem) => {
  navItem.addEventListener("click", (event) => {
    event.preventDefault();
    setActivePage(navItem.dataset.navTarget);
  });
});

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[data-nav-target]');

  if (!link) {
    return;
  }

  event.preventDefault();
  setActivePage(link.dataset.navTarget);

  if (link.dataset.openArticle) {
    loadArticle(link.dataset.openArticle);
  }
});

window.addEventListener("hashchange", () => {
  setActivePage(window.location.hash.replace("#", ""));
});

elements.articleSearch.addEventListener("input", (event) => {
  state.articleSearch = event.target.value;
  renderArticles();
});

elements.articleList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-article-id]");

  if (!item) {
    return;
  }

  if (state.adminUnlocked) {
    persistCurrentArticle({ silent: true });
  }

  loadArticle(item.dataset.articleId);
});

elements.articleTitle.addEventListener("input", scheduleArticleSave);
elements.articleStatus.addEventListener("change", scheduleArticleSave);
elements.articleEditor.addEventListener("input", scheduleArticleSave);
elements.articleEditor.addEventListener("keyup", updateToolbarState);
elements.articleEditor.addEventListener("mouseup", updateToolbarState);
document.addEventListener("selectionchange", () => {
  if (document.activeElement === elements.articleEditor) {
    updateToolbarState();
  }
});

elements.blockFormat.addEventListener("change", (event) => {
  runEditorCommand("formatBlock", event.target.value);
  event.target.value = "P";
});

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", () => runEditorCommand(button.dataset.command));
});

document.querySelector('[data-action="link"]').addEventListener("click", insertLink);
document.querySelector('[data-action="image"]').addEventListener("click", () => {
  if (state.adminUnlocked) {
    elements.imageUpload.click();
  }
});
elements.imageUpload.addEventListener("change", (event) => insertImage(event.target.files[0]));
elements.newArticleButton.addEventListener("click", createArticle);
elements.saveArticleButton.addEventListener("click", () => persistCurrentArticle());
elements.addEmployeeButton.addEventListener("click", () => {
  setActivePage("admin");
  setAdminTab("team");
  createEmployeeRecord();
});
elements.addDocumentButton.addEventListener("click", () => {
  setActivePage("admin");
  setAdminTab("documents");
  createDocumentRecord();
});
elements.newAdminItemButton.addEventListener("click", () => {
  if (state.adminTab === "events") {
    createEventRecord();
    return;
  }

  if (state.adminTab === "documents") {
    createDocumentRecord();
    return;
  }

  if (state.adminTab === "knowledge") {
    setActivePage("knowledge");
    createArticle();
    return;
  }

  createEmployeeRecord();
});
elements.documentSearch.addEventListener("input", (event) => {
  state.documentSearch = event.target.value;
  renderDocuments();
});
elements.documentCategoryFilter.addEventListener("change", (event) => {
  state.documentCategory = event.target.value;
  renderDocuments();
});
elements.adminTabs.forEach((button) => {
  button.addEventListener("click", () => setAdminTab(button.dataset.adminTab));
});
elements.contentTaskList.addEventListener("click", (event) => {
  const task = event.target.closest("[data-content-target]");

  if (!task) {
    return;
  }

  if (task.dataset.contentTarget === "knowledge") {
    setActivePage("knowledge");
    return;
  }

  setAdminTab(task.dataset.contentTarget);
});
elements.adminEmployeeList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-employee-id]");

  if (item) {
    selectEmployee(item.dataset.employeeId);
  }
});
elements.adminEventList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-event-id]");

  if (item) {
    selectEvent(item.dataset.eventId);
  }
});
elements.adminDocumentList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-document-id]");

  if (item) {
    selectDocument(item.dataset.documentId);
  }
});
elements.employeeForm.addEventListener("submit", saveEmployeeFromForm);
elements.eventForm.addEventListener("submit", saveEventFromForm);
elements.documentForm.addEventListener("submit", saveDocumentFromForm);
elements.createEmployeeRecordButton.addEventListener("click", createEmployeeRecord);
elements.createEventRecordButton.addEventListener("click", createEventRecord);
elements.createDocumentRecordButton.addEventListener("click", createDocumentRecord);
elements.deleteEmployeeButton.addEventListener("click", deleteEmployeeRecord);
elements.deleteEventButton.addEventListener("click", deleteEventRecord);
elements.deleteDocumentButton.addEventListener("click", deleteDocumentRecord);
elements.adminAuthForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.adminToken = elements.adminTokenInput.value.trim();
  setStoredAdminToken(state.adminToken);
  await verifyAdminAccess();
});

async function initializePortal() {
  state.adminToken = getStoredAdminToken();
  state.adminUnlocked = false;
  elements.adminTokenInput.value = state.adminToken;
  initializeCollections();
  setAdminTab(state.adminTab);
  renderAdminGate();
  refreshPortal();
  initializeKnowledgeBase();
  setActivePage(window.location.hash.replace("#", "") || "home");
  await loadSharedPortalData();
}

void initializePortal();
