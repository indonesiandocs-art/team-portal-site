const defaultEmployees = [
  {
    id: "aisha-rahman",
    name: "Aisha Rahman",
    role: "People Operations Lead",
    department: "People & Culture",
    workMode: "office",
    location: "Singapore",
    email: "aisha.rahman@novagroup.trade",
    phone: "+65 8123 4410",
    tone: "pink",
  },
  {
    id: "marco-silva",
    name: "Marco Silva",
    role: "Frontend Engineer",
    department: "Product",
    workMode: "hybrid",
    location: "Lisbon",
    email: "marco.silva@novagroup.trade",
    phone: "+351 910 220 184",
    tone: "blue",
  },
  {
    id: "sofia-chen",
    name: "Sofia Chen",
    role: "Customer Operations Manager",
    department: "Customer Operations",
    workMode: "remote",
    location: "Hong Kong",
    email: "sofia.chen@novagroup.trade",
    phone: "+852 5123 7290",
    tone: "yellow",
  },
  {
    id: "daniel-weber",
    name: "Daniel Weber",
    role: "Financial Controller",
    department: "Finance",
    workMode: "office",
    location: "Hamburg",
    email: "daniel.weber@novagroup.trade",
    phone: "+49 151 4083 3170",
    tone: "green",
  },
  {
    id: "leyla-demir",
    name: "Leyla Demir",
    role: "Trade Compliance Counsel",
    department: "Legal & Compliance",
    workMode: "hybrid",
    location: "Istanbul",
    email: "leyla.demir@novagroup.trade",
    phone: "+90 532 512 6420",
    tone: "pink",
  },
  {
    id: "noah-jensen",
    name: "Noah Jensen",
    role: "Systems Administrator",
    department: "IT",
    workMode: "office",
    location: "Copenhagen",
    email: "noah.jensen@novagroup.trade",
    phone: "+45 60 39 10 50",
    tone: "blue",
  },
];

const workModeLabels = {
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
  },
  {
    id: "trade-compliance-policy",
    title: "Global Trade Compliance Policy",
    category: "Compliance",
    owner: "Legal & Compliance",
    updatedAt: "2026-05-14",
    type: "PDF",
    status: "Current",
  },
  {
    id: "leave-request-template",
    title: "Leave Request Template",
    category: "People",
    owner: "People & Culture",
    updatedAt: "2026-05-06",
    type: "DOCX",
    status: "Template",
  },
  {
    id: "equipment-procurement-policy",
    title: "Equipment Procurement Policy",
    category: "IT",
    owner: "IT",
    updatedAt: "2026-04-29",
    type: "PDF",
    status: "In review",
  },
  {
    id: "travel-expense-report",
    title: "Travel Expense Report",
    category: "Finance",
    owner: "Finance",
    updatedAt: "2026-04-18",
    type: "XLSX",
    status: "Template",
  },
];

const portalEvents = [
  { type: "birthday", title: "Birthday: Sofia Chen", date: "2026-05-23", meta: "Customer Operations" },
  { type: "vacation", title: "Leave: Marco Silva", date: "2026-05-27", meta: "Product, 5 days" },
  { type: "document", title: "Review procurement policy", date: "2026-05-30", meta: "IT" },
];

const articleStorageKey = "novaGroupKnowledgeArticles";
const employeeStorageKey = "novaGroupEmployees";
const documentStorageKey = "novaGroupDocuments";
const adminTokenStorageKey = "novaGroupAdminToken";
const portalDataEndpoint = "/api/portal-data";

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
  employees: [],
  documents: [],
  currentArticleId: "",
  articles: [],
  adminToken: "",
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
  officeEmployees: document.querySelector("#officeEmployees"),
  remoteEmployees: document.querySelector("#remoteEmployees"),
  departmentCount: document.querySelector("#departmentCount"),
  navItems: document.querySelectorAll(".section-nav [data-nav-target]"),
  pageViews: document.querySelectorAll("[data-page]"),
  homeEmployees: document.querySelector("#homeEmployees"),
  homeArticles: document.querySelector("#homeArticles"),
  homeDocuments: document.querySelector("#homeDocuments"),
  homeVacations: document.querySelector("#homeVacations"),
  eventList: document.querySelector("#eventList"),
  recentArticles: document.querySelector("#recentArticles"),
  featuredDocuments: document.querySelector("#featuredDocuments"),
  articleSearch: document.querySelector("#articleSearch"),
  articleList: document.querySelector("#articleList"),
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
  adminDocumentList: document.querySelector("#adminDocumentList"),
  adminAuthForm: document.querySelector("#adminAuthForm"),
  adminTokenInput: document.querySelector("#adminTokenInput"),
  adminSyncStatus: document.querySelector("#adminSyncStatus"),
  employeeForm: document.querySelector("#employeeForm"),
  employeeFormTitle: document.querySelector("#employeeFormTitle"),
  createEmployeeRecordButton: document.querySelector("#createEmployeeRecordButton"),
  deleteEmployeeButton: document.querySelector("#deleteEmployeeButton"),
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

function getPortalDataPayload() {
  return {
    employees: state.employees,
    documents: state.documents,
    articles: state.articles,
  };
}

function saveLocalPortalData() {
  saveCollection(employeeStorageKey, state.employees);
  saveCollection(documentStorageKey, state.documents);
  saveArticles();
}

function normalizeSharedRecords(records, fallback) {
  return Array.isArray(records) && records.length ? records : fallback();
}

function applySharedPortalData(data) {
  if (!data || typeof data !== "object") {
    return;
  }

  state.employees = normalizeSharedRecords(data.employees, cloneDefaultEmployees);
  state.documents = normalizeSharedRecords(data.documents, cloneDefaultDocuments);
  state.articles = normalizeSharedRecords(data.articles, cloneDefaultArticles);
  state.currentEmployeeId = state.employees[0]?.id || "";
  state.currentDocumentId = state.documents[0]?.id || "";
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
      setAdminStatus("Shared content loaded", "ready");
      return;
    }

    setAdminStatus("Shared storage is ready", "ready");
  } catch {
    state.sharedBackendAvailable = false;
    setAdminStatus("Shared storage unavailable, using this browser", "error");
  }
}

async function publishPortalData({ silent = false } = {}) {
  saveLocalPortalData();

  if (!state.sharedBackendAvailable) {
    if (!silent) {
      setAdminStatus("Saved in this browser only", "error");
    }
    return false;
  }

  if (!state.adminToken) {
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
      setAdminStatus("Admin key is not accepted", "error");
      return false;
    }

    if (!response.ok) {
      throw new Error(`Save failed with ${response.status}`);
    }

    setAdminStatus("Shared content saved", "ready");
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
  elements.officeEmployees.textContent = state.employees.filter((employee) => employee.workMode === "office").length;
  elements.remoteEmployees.textContent = state.employees.filter((employee) => employee.workMode === "remote").length;
  elements.departmentCount.textContent = new Set(state.employees.map((employee) => employee.department)).size;
}

function renderHome() {
  const vacationEvents = portalEvents.filter((event) => event.type === "vacation");
  const recentArticles = [...state.articles]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3);

  elements.homeEmployees.textContent = state.employees.length;
  elements.homeArticles.textContent = state.articles.length;
  elements.homeDocuments.textContent = state.documents.length;
  elements.homeVacations.textContent = vacationEvents.length;

  elements.eventList.innerHTML = portalEvents
    .map(
      (event) => `
        <div class="event-item" data-type="${escapeHtml(event.type)}">
          <span>${formatDate(event.date)}</span>
          <strong>${escapeHtml(event.title)}</strong>
          <small>${escapeHtml(event.meta)}</small>
        </div>
      `,
    )
    .join("");

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

function renderTable(filteredEmployees) {
  elements.tableBody.innerHTML = filteredEmployees
    .map(
      (employee) => `
        <tr>
          <td>${employeePersonMarkup(employee)}</td>
          <td><strong>${escapeHtml(employee.role)}</strong></td>
          <td>${escapeHtml(employee.department)}</td>
          <td><span class="tag ${escapeHtml(employee.workMode)}">${workModeLabels[employee.workMode]}</span></td>
          <td>
            <span class="contact-list">
              <a href="mailto:${escapeHtml(employee.email)}">${escapeHtml(employee.email)}</a>
              <span class="subtle">${escapeHtml(employee.phone)}</span>
            </span>
          </td>
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
          <span class="contact-list">
            <a href="mailto:${escapeHtml(employee.email)}">${escapeHtml(employee.email)}</a>
            <span class="subtle">${escapeHtml(employee.phone)}</span>
          </span>
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
    .map(
      (documentItem) => `
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
        </article>
      `,
    )
    .join("");
}

function getCurrentEmployee() {
  return state.employees.find((employee) => employee.id === state.currentEmployeeId);
}

function getCurrentDocument() {
  return state.documents.find((documentItem) => documentItem.id === state.currentDocumentId);
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

function refreshPortal() {
  renderDepartmentOptions();
  renderDocumentCategories();
  renderSummary();
  renderEmployees();
  renderDocuments();
  renderHome();
  renderAdminLists();
  fillEmployeeForm(getCurrentEmployee());
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

function createEmployeeRecord() {
  const employee = {
    id: createId("team"),
    name: "New team member",
    role: "Role",
    department: "Department",
    workMode: "hybrid",
    location: "Location",
    email: "name@novagroup.trade",
    phone: "+00 000 000 000",
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
  };

  state.documents.unshift(documentItem);
  state.currentDocumentId = documentItem.id;
  refreshPortal();
  void publishPortalData({ silent: true });
  elements.documentForm.elements.title.focus();
  elements.documentForm.elements.title.select();
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

function saveDocumentFromForm(event) {
  event.preventDefault();

  const documentItem = getCurrentDocument();

  if (!documentItem) {
    return;
  }

  const formData = new FormData(elements.documentForm);
  ["title", "category", "owner", "updatedAt", "type", "status"].forEach((key) => {
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
  state.employees = getStoredCollection(employeeStorageKey, cloneDefaultEmployees);
  state.documents = getStoredCollection(documentStorageKey, cloneDefaultDocuments);
  state.currentEmployeeId = state.employees[0]?.id || "";
  state.currentDocumentId = state.documents[0]?.id || "";
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

function renderArticles() {
  const query = normalize(state.articleSearch);
  const filteredArticles = state.articles.filter((article) =>
    normalize(`${article.title} ${article.status} ${article.content.replace(/<[^>]*>/g, " ")}`).includes(query),
  );

  elements.articleList.innerHTML = filteredArticles
    .map(
      (article) => `
        <button class="article-item ${article.id === state.currentArticleId ? "is-active" : ""}" type="button" data-article-id="${article.id}">
          <strong>${escapeHtml(article.title || "Untitled")}</strong>
          <span class="article-meta">
            <span class="status-pill ${article.status}">${articleStatusLabels[article.status]}</span>
            <span>${formatDate(article.updatedAt)}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function loadArticle(articleId) {
  const article = state.articles.find((item) => item.id === articleId) || state.articles[0];

  if (!article) {
    return;
  }

  state.currentArticleId = article.id;
  elements.articleTitle.value = article.title;
  elements.articleStatus.value = article.status;
  elements.articleEditor.innerHTML = article.content;
  elements.saveStatus.textContent = "Changes saved";
  renderArticles();
}

function persistCurrentArticle({ silent = false } = {}) {
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
  elements.saveStatus.textContent = "Saving...";
  window.clearTimeout(state.saveTimer);
  state.saveTimer = window.setTimeout(() => persistCurrentArticle(), 450);
}

function createArticle() {
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
  elements.articleEditor.focus();
  document.execCommand(command, false, value);
  scheduleArticleSave();
  updateToolbarState();
}

function insertLink() {
  const url = window.prompt("Link URL");

  if (!url) {
    return;
  }

  runEditorCommand("createLink", url);
}

function insertImage(file) {
  if (!file) {
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

  persistCurrentArticle({ silent: true });
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
document.querySelector('[data-action="image"]').addEventListener("click", () => elements.imageUpload.click());
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
elements.adminEmployeeList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-employee-id]");

  if (item) {
    selectEmployee(item.dataset.employeeId);
  }
});
elements.adminDocumentList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-document-id]");

  if (item) {
    selectDocument(item.dataset.documentId);
  }
});
elements.employeeForm.addEventListener("submit", saveEmployeeFromForm);
elements.documentForm.addEventListener("submit", saveDocumentFromForm);
elements.createEmployeeRecordButton.addEventListener("click", createEmployeeRecord);
elements.createDocumentRecordButton.addEventListener("click", createDocumentRecord);
elements.deleteEmployeeButton.addEventListener("click", deleteEmployeeRecord);
elements.deleteDocumentButton.addEventListener("click", deleteDocumentRecord);
elements.adminAuthForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.adminToken = elements.adminTokenInput.value.trim();
  setStoredAdminToken(state.adminToken);
  await publishPortalData();
});

async function initializePortal() {
  state.adminToken = getStoredAdminToken();
  elements.adminTokenInput.value = state.adminToken;
  initializeCollections();
  setAdminTab(state.adminTab);
  refreshPortal();
  initializeKnowledgeBase();
  setActivePage(window.location.hash.replace("#", "") || "home");
  await loadSharedPortalData();
}

void initializePortal();
