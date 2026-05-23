const defaultEmployees = [
  { id: "lenar", name: "Lenar", role: "Partner, General Director", department: "Leadership", workMode: "not-set", location: "Global", email: "", phone: "", tone: "blue" },
  { id: "dmitry", name: "Dmitry", role: "Partner", department: "Leadership", workMode: "not-set", location: "Global", email: "brd@drnova.org", phone: "+905057677820", tone: "green" },
  { id: "elena", name: "Elena", role: "Director", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "pink" },
  { id: "andrey", name: "Andrey", role: "Senior Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "yellow" },
  { id: "ekaterina", name: "Ekaterina", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "blue" },
  { id: "vera", name: "Vera", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "green" },
  { id: "julia", name: "Julia", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "pink" },
  { id: "veronika", name: "Veronika", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "yellow" },
  { id: "asila", name: "Asila", role: "Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "blue" },
  { id: "daria", name: "Daria", role: "Junior Manager", department: "Operations", workMode: "not-set", location: "Head office", email: "", phone: "", tone: "green" },
  { id: "alexander", name: "Alexander", role: "Financial Manager", department: "Finance", workMode: "not-set", location: "Global", email: "", phone: "", tone: "pink" },
  { id: "elena-accountant", name: "Elena", role: "Accountant", department: "Finance", workMode: "not-set", location: "Global", email: "", phone: "", tone: "yellow" },
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
  { id: "review-procurement-policy", type: "document", title: "Review procurement policy", date: "2026-05-30", meta: "IT" },
];

const eventTypeLabels = {
  birthday: "Birthday",
  vacation: "Vacation",
  document: "Reminder",
};

const employeeBirthdaysById = {
  lenar: "1987-09-23",
  dmitry: "1980-05-24",
  iskander: "1978-08-14",
  vera: "1990-06-13",
  andrey: "1996-03-22",
  ekaterina: "1985-12-09",
  julia: "1983-07-12",
  elena: "1981-02-19",
  veronika: "1995-07-20",
  asila: "1997-04-15",
};

const legacyBirthdayEventIds = new Set([
  "team-birthdays",
  "birthday-elena-director",
  ...Object.keys(employeeBirthdaysById).map((employeeId) => `birthday-${employeeId}`),
]);
const legacyEventIds = new Set(["vacation-calendar"]);

const employeeStorageKey = "novaGroupEmployees";
const documentStorageKey = "novaGroupDocuments";
const eventStorageKey = "novaGroupEvents";
const vacationRequestStorageKey = "novaGroupVacationRequests";
const adminTokenStorageKey = "novaGroupAdminToken";
const portalDataEndpoint = "/api/portal-data";
const adminCheckEndpoint = "/api/admin-check";
const vacationRequestEndpoint = "/api/vacation-request";

const state = {
  search: "",
  department: "all",
  view: "table",
  documentSearch: "",
  documentCategory: "all",
  adminTab: "team",
  currentEmployeeId: "",
  currentDocumentId: "",
  currentEventId: "",
  employees: [],
  documents: [],
  events: [],
  vacationRequests: [],
  adminToken: "",
  adminUnlocked: false,
  sharedBackendAvailable: false,
};

const elements = {
  search: document.querySelector("#employeeSearch"),
  departmentFilter: document.querySelector("#departmentFilter"),
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
  homeEvents: document.querySelector("#homeEvents"),
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
  featuredDocuments: document.querySelector("#featuredDocuments"),
  requestVacationButton: document.querySelector("#requestVacationButton"),
  vacationRequestPanel: document.querySelector("#vacationRequestPanel"),
  vacationRequestForm: document.querySelector("#vacationRequestForm"),
  vacationRequestStatus: document.querySelector("#vacationRequestStatus"),
  vacationYear: document.querySelector("#vacationYear"),
  vacationCalendar: document.querySelector("#vacationCalendar"),
  vacationLegend: document.querySelector("#vacationLegend"),
  orgChart: document.querySelector("#orgChart"),
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
  contentPendingVacations: document.querySelector("#contentPendingVacations"),
  contentUpcomingEvents: document.querySelector("#contentUpcomingEvents"),
  contentTaskList: document.querySelector("#contentTaskList"),
  adminVacationRequestList: document.querySelector("#adminVacationRequestList"),
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
  elements.addEmployeeButton.hidden = !isUnlocked;
  elements.addDocumentButton.hidden = !isUnlocked;
  elements.newAdminItemButton.hidden = !isUnlocked || state.adminTab === "vacations";
  elements.adminLockedPanel.hidden = isUnlocked;
  elements.contentOverview.hidden = !isUnlocked;
  document.querySelector(".admin-tabs").hidden = !isUnlocked;
  document.querySelector(".admin-workspace").hidden = !isUnlocked;

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
    vacationRequests: state.vacationRequests,
  };
}

function saveLocalPortalData() {
  saveCollection(employeeStorageKey, state.employees);
  saveCollection(documentStorageKey, state.documents);
  saveCollection(eventStorageKey, state.events);
  saveCollection(vacationRequestStorageKey, state.vacationRequests);
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
  const normalizedRecords = isLegacyDemoEmployeeSet(employeeRecords) ? cloneDefaultEmployees() : employeeRecords;

  const updatedRecords = normalizedRecords.map((employee) => {
    const normalizedEmployee = { ...employee };

    if (normalizedEmployee.id === "vladimir" && normalizedEmployee.department === "Legal & Compliance") {
      normalizedEmployee.department = "Legal";
    }

    if (normalizedEmployee.id === "alex" && normalizedEmployee.department === "Legal & Compliance") {
      normalizedEmployee.department = "Compliance";
    }

    if (normalizedEmployee.id === "stas" && normalizedEmployee.role === "IT") {
      normalizedEmployee.role = "IT Manager";
    }

    if (normalizedEmployee.id === "dmitry") {
      normalizedEmployee.email = normalizedEmployee.email || "brd@drnova.org";
      normalizedEmployee.phone = normalizedEmployee.phone || "+905057677820";
    }

    if (employeeBirthdaysById[normalizedEmployee.id]) {
      normalizedEmployee.birthday = normalizedEmployee.birthday || employeeBirthdaysById[normalizedEmployee.id];
    } else {
      normalizedEmployee.birthday = normalizedEmployee.birthday || "";
    }

    return normalizedEmployee;
  });

  if (!updatedRecords.some((employee) => employee.id === "elena-accountant")) {
    const financeManagerIndex = updatedRecords.findIndex((employee) => employee.id === "alexander");
    const elenaAccountant = cloneDefaultEmployees().find((employee) => employee.id === "elena-accountant");

    if (elenaAccountant) {
      updatedRecords.splice(financeManagerIndex >= 0 ? financeManagerIndex + 1 : updatedRecords.length, 0, elenaAccountant);
    }
  }

  return updatedRecords;
}

function normalizeEventRecords(records) {
  const normalizedEvents = normalizeSharedRecords(records, cloneDefaultEvents)
    .filter((event) => !legacyBirthdayEventIds.has(event.id) && !legacyEventIds.has(event.id))
    .map((event, index) => ({
      id: event.id || createId(`event-${index}`),
      employeeId: event.employeeId || "",
      requestId: event.requestId || "",
      source: event.source || "",
      type: event.type || "document",
      title: event.title || "New event",
      date: event.date || new Date().toISOString().slice(0, 10),
      meta: event.meta || "Details",
    }));

  return syncBirthdayEventsFromEmployees(normalizedEvents);
}

function normalizeVacationRequests(records) {
  return (Array.isArray(records) ? records : []).map((request, index) => ({
    id: request.id || createId(`vacation-request-${index}`),
    employeeName: request.employeeName || "Team member",
    startDate: request.startDate || new Date().toISOString().slice(0, 10),
    endDate: request.endDate || request.startDate || new Date().toISOString().slice(0, 10),
    note: request.note || "",
    status: ["pending", "approved", "rejected"].includes(request.status) ? request.status : "pending",
    submittedAt: request.submittedAt || new Date().toISOString(),
    reviewedAt: request.reviewedAt || "",
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
  state.vacationRequests = normalizeVacationRequests(data.vacationRequests);
  state.currentEmployeeId = state.employees[0]?.id || "";
  state.currentDocumentId = state.documents[0]?.id || "";
  state.currentEventId = state.events[0]?.id || "";
  saveLocalPortalData();
  refreshPortal();
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

function formatDateRange(startDate, endDate) {
  if (!startDate || !endDate || startDate === endDate) {
    return formatDate(startDate || endDate);
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

function isValidDateRange(startDate, endDate) {
  return Boolean(startDate && endDate && new Date(startDate) <= new Date(endDate));
}

function isValidBirthday(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
}

function getNextBirthdayDate(birthday) {
  if (!isValidBirthday(birthday)) {
    return "";
  }

  const [, monthValue, dayValue] = birthday.split("-").map(Number);
  const today = new Date();
  const todayDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
  let nextBirthday = new Date(Date.UTC(today.getFullYear(), monthValue - 1, dayValue));

  if (nextBirthday < todayDate) {
    nextBirthday = new Date(Date.UTC(today.getFullYear() + 1, monthValue - 1, dayValue));
  }

  return nextBirthday.toISOString().slice(0, 10);
}

function buildEmployeeBirthdayEvent(employee) {
  if (!isValidBirthday(employee.birthday)) {
    return null;
  }

  const birthYear = employee.birthday.slice(0, 4);
  const roleDetails = employee.role === "Director" ? ` ${employee.role}` : "";

  return {
    id: `birthday-${employee.id}`,
    employeeId: employee.id,
    source: "employee-birthday",
    type: "birthday",
    title: `Birthday: ${employee.name}`,
    date: getNextBirthdayDate(employee.birthday),
    meta: `${employee.department}${roleDetails} - Born ${birthYear}`,
  };
}

function syncBirthdayEventsFromEmployees(events, employees = state.employees) {
  const birthdayEvents = employees.map(buildEmployeeBirthdayEvent).filter(Boolean);
  const birthdayEventIds = new Set(birthdayEvents.map((event) => event.id));
  const remainingEvents = events.filter((event) => (
    event.source !== "employee-birthday" &&
    !legacyBirthdayEventIds.has(event.id) &&
    !birthdayEventIds.has(event.id)
  ));

  return [...remainingEvents, ...birthdayEvents];
}

function buildVacationEventFromRequest(request) {
  if (request.status !== "approved" || !isValidDateRange(request.startDate, request.endDate)) {
    return null;
  }

  return {
    id: `vacation-${request.id}`,
    requestId: request.id,
    source: "vacation-request",
    type: "vacation",
    title: `${request.employeeName} on vacation`,
    date: request.startDate,
    meta: `${formatDateRange(request.startDate, request.endDate)} · Approved vacation`,
  };
}

function syncVacationEventsFromRequests(events, requests = state.vacationRequests) {
  const vacationEvents = requests.map(buildVacationEventFromRequest).filter(Boolean);
  const vacationEventIds = new Set(vacationEvents.map((event) => event.id));
  const remainingEvents = events.filter((event) => (
    event.source !== "vacation-request" &&
    !vacationEventIds.has(event.id)
  ));

  return [...remainingEvents, ...vacationEvents];
}

function parseLocalDate(dateString) {
  const [year, month, day] = String(dateString || "").split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getVacationColor(index) {
  const colors = ["#f45b3f", "#0a7f83", "#315ccf", "#8a4bd1", "#c17a00", "#2f7d32", "#c53b73", "#57606f"];
  return colors[index % colors.length];
}

function getApprovedVacationRanges() {
  const approvedRequests = state.vacationRequests
    .filter((request) => request.status === "approved" && isValidDateRange(request.startDate, request.endDate))
    .map((request) => ({
      id: request.id,
      employeeName: request.employeeName,
      startDate: request.startDate,
      endDate: request.endDate,
      note: request.note,
      source: "request",
    }));

  const requestEventIds = new Set(approvedRequests.map((request) => `vacation-${request.id}`));
  const manualEvents = state.events
    .filter((event) => event.type === "vacation" && event.date && event.source !== "vacation-request" && !requestEventIds.has(event.id))
    .map((event) => ({
      id: event.id,
      employeeName: event.title.replace(/\s+on vacation$/i, "").replace(/^Vacation:\s*/i, "") || event.title,
      startDate: event.date,
      endDate: event.date,
      note: event.meta,
      source: "event",
    }));

  return [...approvedRequests, ...manualEvents].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function vacationTouchesDay(vacation, dateKey) {
  return vacation.startDate <= dateKey && vacation.endDate >= dateKey;
}

function renderVacationCalendar() {
  const currentYear = new Date().getFullYear();
  const monthNames = Array.from({ length: 12 }, (_, index) => (
    new Intl.DateTimeFormat("en-GB", { month: "short" }).format(new Date(currentYear, index, 1))
  ));
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
  const vacations = getApprovedVacationRanges().filter((vacation) => {
    const start = parseLocalDate(vacation.startDate);
    const end = parseLocalDate(vacation.endDate);

    return start && end && start.getFullYear() <= currentYear && end.getFullYear() >= currentYear;
  });
  const colorByName = new Map();

  vacations.forEach((vacation) => {
    if (!colorByName.has(vacation.employeeName)) {
      colorByName.set(vacation.employeeName, getVacationColor(colorByName.size));
    }
  });

  elements.vacationYear.textContent = String(currentYear);
  elements.vacationLegend.innerHTML = colorByName.size
    ? [...colorByName.entries()]
      .map(([name, color]) => `
        <span class="legend-item">
          <span class="legend-dot" style="--vacation-color: ${color}"></span>
          ${escapeHtml(name)}
        </span>
      `)
      .join("")
    : '<span class="empty-inline">No approved vacations for this year yet.</span>';

  elements.vacationCalendar.innerHTML = monthNames
    .map((monthName, monthIndex) => {
      const firstDate = new Date(currentYear, monthIndex, 1);
      const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
      const firstWeekday = (firstDate.getDay() + 6) % 7;
      const blanks = Array.from({ length: firstWeekday }, () => '<span class="calendar-day is-empty"></span>').join("");
      const days = Array.from({ length: daysInMonth }, (_, dayIndex) => {
        const date = new Date(currentYear, monthIndex, dayIndex + 1);
        const dateKey = toDateKey(date);
        const dayVacations = vacations.filter((vacation) => vacationTouchesDay(vacation, dateKey));
        const firstVacation = dayVacations[0];
        const title = dayVacations
          .map((vacation) => `${vacation.employeeName}: ${formatDateRange(vacation.startDate, vacation.endDate)}`)
          .join("\n");
        const color = firstVacation ? colorByName.get(firstVacation.employeeName) : "";

        return `
          <span class="calendar-day ${dayVacations.length ? "has-vacation" : ""}" style="${color ? `--vacation-color: ${color}` : ""}" title="${escapeHtml(title)}">
            <span>${dayIndex + 1}</span>
            ${dayVacations.length > 1 ? `<small>${dayVacations.length}</small>` : ""}
          </span>
        `;
      }).join("");

      return `
        <article class="month-card">
          <header>
            <h3>${monthName}</h3>
            <span>${vacations.filter((vacation) => {
              const monthStart = `${currentYear}-${String(monthIndex + 1).padStart(2, "0")}-01`;
              const monthEnd = `${currentYear}-${String(monthIndex + 1).padStart(2, "0")}-${String(daysInMonth).padStart(2, "0")}`;
              return vacation.startDate <= monthEnd && vacation.endDate >= monthStart;
            }).length}</span>
          </header>
          <div class="week-row">${weekDays.map((day) => `<span>${day}</span>`).join("")}</div>
          <div class="month-grid">${blanks}${days}</div>
        </article>
      `;
    })
    .join("");
}

function getEmployeeById(id) {
  return state.employees.find((employee) => employee.id === id);
}

function departmentPeople(department) {
  return state.employees.filter((employee) => employee.department === department);
}

function orgPersonMarkup(employeeId, fallbackName, fallbackRole) {
  const employee = getEmployeeById(employeeId);

  return `
    <article class="org-person-card">
      <span class="avatar" data-tone="${escapeHtml(employee?.tone || "blue")}">${initials(employee?.name || fallbackName)}</span>
      <div>
        <strong>${escapeHtml(employee?.name || fallbackName)}</strong>
        <span>${escapeHtml(employee?.role || fallbackRole)}</span>
      </div>
    </article>
  `;
}

function orgDepartmentMarkup(department) {
  const people = departmentPeople(department);

  return `
    <article class="org-department-card">
      <strong>${escapeHtml(department)}</strong>
      <span>${people.length} team member${people.length === 1 ? "" : "s"}</span>
      <small>${escapeHtml(people.slice(0, 4).map((employee) => employee.name).join(", ") || "Details pending")}${people.length > 4 ? ` +${people.length - 4}` : ""}</small>
    </article>
  `;
}

function renderOrgChart() {
  const lenarDepartments = [
    "Operations",
    "Finance",
    "Legal",
    "Compliance",
    "Logistics",
    "International Management",
    "Relationship Management",
    "Kazakhstan",
    "Kyrgyzstan",
  ].filter((department) => departmentPeople(department).length);
  const dmitryDepartments = [
    "IT",
    "China",
    "Turkey",
    "Indonesia",
    "Dubai",
    "Malaysia",
    "Nominees",
  ].filter((department) => departmentPeople(department).length);

  elements.orgChart.innerHTML = `
    <section class="org-layer">
      <div class="org-layer-title">Partners</div>
      <div class="org-node-row partners-row">
        ${orgPersonMarkup("dmitry", "Dmitry", "Partner")}
        ${orgPersonMarkup("lenar", "Lenar", "Partner")}
      </div>
    </section>

    <section class="org-layer">
      <div class="org-connector"></div>
      <div class="org-layer-title">Executive management</div>
      <div class="org-node-row">
        ${orgPersonMarkup("lenar", "Lenar", "General Director")}
      </div>
    </section>

    <section class="org-layer">
      <div class="org-connector split"></div>
      <div class="org-scope-grid">
        <article class="org-scope">
          <header>
            <span>Draft scope</span>
            <strong>Lenar</strong>
          </header>
          <div class="org-department-grid">
            ${lenarDepartments.map(orgDepartmentMarkup).join("")}
          </div>
        </article>
        <article class="org-scope">
          <header>
            <span>Draft scope</span>
            <strong>Dmitry</strong>
          </header>
          <div class="org-department-grid">
            ${dmitryDepartments.map(orgDepartmentMarkup).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function getFilteredEmployees() {
  const query = normalize(state.search);

  return state.employees.filter((employee) => {
    const matchesSearch = [employee.name, employee.role, employee.department, employee.location]
      .map(normalize)
      .some((value) => value.includes(query));
    const matchesDepartment = state.department === "all" || employee.department === state.department;
    return matchesSearch && matchesDepartment;
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
  const upcomingEvents = getSortedEvents().length;
  const pendingVacations = state.vacationRequests.filter((request) => request.status === "pending").length;
  const openTasks = [];

  elements.contentTeamCount.textContent = state.employees.length;
  elements.contentDocumentLinks.textContent = `${linkedDocuments}/${state.documents.length}`;
  elements.contentPendingVacations.textContent = pendingVacations;
  elements.contentUpcomingEvents.textContent = upcomingEvents;

  if (!state.employees.length) {
    openTasks.push({ label: "Add team members", target: "team" });
  }

  if (linkedDocuments < state.documents.length) {
    openTasks.push({ label: `Add links to ${state.documents.length - linkedDocuments} documents`, target: "documents" });
  }

  if (pendingVacations) {
    openTasks.push({ label: `Review ${pendingVacations} vacation request${pendingVacations === 1 ? "" : "s"}`, target: "vacations" });
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
          <span>Open ${task.target === "vacations" ? "Vacation requests" : task.target}</span>
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

  elements.homeEmployees.textContent = state.employees.length;
  elements.homeEvents.textContent = events.length;
  elements.homeDocuments.textContent = state.documents.length;
  elements.homeVacations.textContent = vacationEvents.length;

  elements.eventList.innerHTML = events.map((event) => eventItemMarkup(event)).join("");

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

function vacationRequestMarkup(request) {
  const isPending = request.status === "pending";

  return `
    <div class="vacation-request-card" data-vacation-request-id="${escapeHtml(request.id)}">
      <div>
        <strong>${escapeHtml(request.employeeName)}</strong>
        <span>${formatDateRange(request.startDate, request.endDate)}</span>
        ${request.note ? `<small>${escapeHtml(request.note)}</small>` : ""}
      </div>
      <span class="status-pill ${request.status === "approved" ? "published" : request.status === "rejected" ? "review" : ""}">
        ${escapeHtml(request.status)}
      </span>
      ${
        isPending
          ? `<div class="request-actions">
              <button class="secondary-action" type="button" data-vacation-action="approve">Approve</button>
              <button class="danger-action" type="button" data-vacation-action="reject">Reject</button>
            </div>`
          : ""
      }
    </div>
  `;
}

function renderAdminVacationRequests() {
  const requests = [...state.vacationRequests].sort((a, b) => {
    if (a.status === "pending" && b.status !== "pending") {
      return -1;
    }

    if (a.status !== "pending" && b.status === "pending") {
      return 1;
    }

    return new Date(b.submittedAt) - new Date(a.submittedAt);
  });

  elements.adminVacationRequestList.innerHTML = requests.length
    ? requests.map(vacationRequestMarkup).join("")
    : `
      <div class="empty-panel">
        <strong>No vacation requests</strong>
        <span>Submitted requests will appear here for approval.</span>
      </div>
    `;
}

function renderAdminLists() {
  renderAdminEmployees();
  renderAdminEvents();
  renderAdminDocuments();
  renderAdminVacationRequests();
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
  state.events = syncBirthdayEventsFromEmployees(state.events);
  state.events = syncVacationEventsFromRequests(state.events);
  renderDepartmentOptions();
  renderDocumentCategories();
  renderSummary();
  renderEmployees();
  renderDocuments();
  renderEvents();
  renderVacationCalendar();
  renderOrgChart();
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
    birthday: "",
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
  ["name", "role", "department", "location", "email", "phone", "birthday", "tone"].forEach((key) => {
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

async function submitVacationRequest(event) {
  event.preventDefault();

  const formData = new FormData(elements.vacationRequestForm);
  const request = {
    id: createId("vacation-request"),
    employeeName: String(formData.get("employeeName") || "").trim(),
    startDate: String(formData.get("startDate") || "").trim(),
    endDate: String(formData.get("endDate") || "").trim(),
    note: String(formData.get("note") || "").trim(),
    status: "pending",
    submittedAt: new Date().toISOString(),
    reviewedAt: "",
  };

  if (!request.employeeName || !isValidDateRange(request.startDate, request.endDate)) {
    elements.vacationRequestStatus.textContent = "Check the name and vacation dates.";
    elements.vacationRequestStatus.dataset.status = "error";
    return;
  }

  elements.vacationRequestStatus.textContent = "Sending request...";
  elements.vacationRequestStatus.dataset.status = "idle";

  if (state.sharedBackendAvailable && window.fetch && window.location.protocol !== "file:") {
    try {
      const response = await fetch(vacationRequestEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      const payload = await response.json();
      state.vacationRequests = normalizeVacationRequests(payload.vacationRequests);
      elements.vacationRequestForm.reset();
      elements.vacationRequestStatus.textContent = "Request sent for approval.";
      elements.vacationRequestStatus.dataset.status = "ready";
      refreshPortal();
      return;
    } catch {
      elements.vacationRequestStatus.textContent = "Could not send request. Try again later.";
      elements.vacationRequestStatus.dataset.status = "error";
      return;
    }
  }

  state.vacationRequests.unshift(request);
  saveLocalPortalData();
  elements.vacationRequestForm.reset();
  elements.vacationRequestStatus.textContent = "Request saved in this browser.";
  elements.vacationRequestStatus.dataset.status = "ready";
  refreshPortal();
}

function reviewVacationRequest(requestId, status) {
  const request = state.vacationRequests.find((item) => item.id === requestId);

  if (!request || request.status !== "pending") {
    return;
  }

  request.status = status;
  request.reviewedAt = new Date().toISOString();

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
  elements.newAdminItemButton.hidden = !state.adminUnlocked || tab === "vacations";

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
  state.vacationRequests = normalizeVacationRequests(getStoredCollection(vacationRequestStorageKey, () => []));
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

function focusVacationRequestForm() {
  window.setTimeout(() => {
    elements.vacationRequestPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    elements.vacationRequestForm.elements.employeeName.focus();
  }, 80);
}

elements.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderEmployees();
});

elements.departmentFilter.addEventListener("change", (event) => {
  state.department = event.target.value;
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

  if (link.dataset.focusVacationRequest) {
    focusVacationRequestForm();
  }
});

window.addEventListener("hashchange", () => {
  setActivePage(window.location.hash.replace("#", ""));
});

elements.requestVacationButton.addEventListener("click", focusVacationRequestForm);
elements.vacationRequestForm.addEventListener("submit", submitVacationRequest);
elements.addEmployeeButton.addEventListener("click", () => {
  if (!state.adminUnlocked) {
    setActivePage("admin");
    return;
  }

  setActivePage("admin");
  setAdminTab("team");
  createEmployeeRecord();
});
elements.addDocumentButton.addEventListener("click", () => {
  if (!state.adminUnlocked) {
    setActivePage("admin");
    return;
  }

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
elements.adminVacationRequestList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-vacation-action]");
  const requestCard = event.target.closest("[data-vacation-request-id]");

  if (!actionButton || !requestCard) {
    return;
  }

  reviewVacationRequest(
    requestCard.dataset.vacationRequestId,
    actionButton.dataset.vacationAction === "approve" ? "approved" : "rejected",
  );
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
  setActivePage(window.location.hash.replace("#", "") || "home");
  await loadSharedPortalData();
}

void initializePortal();
