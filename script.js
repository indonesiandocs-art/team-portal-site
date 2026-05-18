const employees = [
  {
    name: "Анна Соколова",
    role: "HR-директор",
    department: "Люди и культура",
    workMode: "office",
    location: "Москва",
    email: "anna.sokolova@company.ru",
    phone: "+7 900 111-24-10",
    tone: "pink",
  },
  {
    name: "Илья Морозов",
    role: "Frontend-разработчик",
    department: "Продукт",
    workMode: "hybrid",
    location: "Санкт-Петербург",
    email: "ilya.morozov@company.ru",
    phone: "+7 900 220-18-44",
    tone: "blue",
  },
  {
    name: "Мария Ким",
    role: "Руководитель поддержки",
    department: "Клиентский сервис",
    workMode: "remote",
    location: "Казань",
    email: "maria.kim@company.ru",
    phone: "+7 900 315-72-90",
    tone: "yellow",
  },
  {
    name: "Дмитрий Лебедев",
    role: "Финансовый контролер",
    department: "Финансы",
    workMode: "office",
    location: "Москва",
    email: "dmitry.lebedev@company.ru",
    phone: "+7 900 408-33-17",
    tone: "green",
  },
  {
    name: "Екатерина Романова",
    role: "Юрист",
    department: "Правовой отдел",
    workMode: "hybrid",
    location: "Екатеринбург",
    email: "ekaterina.romanova@company.ru",
    phone: "+7 900 512-64-20",
    tone: "pink",
  },
  {
    name: "Павел Орлов",
    role: "Системный администратор",
    department: "IT",
    workMode: "office",
    location: "Москва",
    email: "pavel.orlov@company.ru",
    phone: "+7 900 603-91-05",
    tone: "blue",
  },
];

const workModeLabels = {
  office: "Офис",
  remote: "Удаленно",
  hybrid: "Гибрид",
};

const articleStatusLabels = {
  draft: "Черновик",
  review: "На проверке",
  published: "Опубликовано",
};

const defaultArticles = [
  {
    id: "welcome",
    title: "Онбординг нового сотрудника",
    status: "published",
    updatedAt: "2026-05-18",
    content: `
      <h2>Первый рабочий день</h2>
      <p>Проверьте доступы к почте, календарю, корпоративным чатам и внутренним системам.</p>
      <ul>
        <li>Заполните профиль в портале.</li>
        <li>Познакомьтесь с руководителем и командой.</li>
        <li>Откройте план адаптации на первые две недели.</li>
      </ul>
    `,
  },
  {
    id: "vacation",
    title: "Как согласовать отпуск",
    status: "review",
    updatedAt: "2026-05-12",
    content: `
      <h2>Порядок согласования</h2>
      <p>Перед заявкой обсудите даты с руководителем и проверьте пересечения внутри команды.</p>
      <blockquote>Заявку лучше отправлять минимум за две недели до начала отпуска.</blockquote>
    `,
  },
  {
    id: "equipment",
    title: "Получение техники",
    status: "draft",
    updatedAt: "2026-05-08",
    content: `
      <h2>Что можно запросить</h2>
      <p>Ноутбук, монитор, гарнитуру, токен доступа и периферийные устройства для рабочего места.</p>
    `,
  },
];

const storageKey = "employeePortalKnowledgeArticles";

const state = {
  search: "",
  department: "all",
  workMode: "all",
  view: "table",
  articleSearch: "",
  currentArticleId: "",
  articles: [],
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
  navItems: document.querySelectorAll("[data-nav-target]"),
  pageViews: document.querySelectorAll("[data-page]"),
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

function getFilteredEmployees() {
  const query = normalize(state.search);

  return employees.filter((employee) => {
    const matchesSearch = [employee.name, employee.role, employee.department, employee.location]
      .map(normalize)
      .some((value) => value.includes(query));
    const matchesDepartment = state.department === "all" || employee.department === state.department;
    const matchesWorkMode = state.workMode === "all" || employee.workMode === state.workMode;

    return matchesSearch && matchesDepartment && matchesWorkMode;
  });
}

function renderDepartmentOptions() {
  const departments = [...new Set(employees.map((employee) => employee.department))].sort();

  departments.forEach((department) => {
    const option = document.createElement("option");
    option.value = department;
    option.textContent = department;
    elements.departmentFilter.append(option);
  });
}

function renderSummary() {
  elements.totalEmployees.textContent = employees.length;
  elements.officeEmployees.textContent = employees.filter((employee) => employee.workMode === "office").length;
  elements.remoteEmployees.textContent = employees.filter((employee) => employee.workMode === "remote").length;
  elements.departmentCount.textContent = new Set(employees.map((employee) => employee.department)).size;
}

function employeePersonMarkup(employee) {
  return `
    <div class="person">
      <span class="avatar" data-tone="${employee.tone}">${initials(employee.name)}</span>
      <span class="person-details">
        <strong>${employee.name}</strong>
        <span>${employee.location}</span>
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
          <td><strong>${employee.role}</strong></td>
          <td>${employee.department}</td>
          <td><span class="tag ${employee.workMode}">${workModeLabels[employee.workMode]}</span></td>
          <td>
            <span class="contact-list">
              <a href="mailto:${employee.email}">${employee.email}</a>
              <span class="subtle">${employee.phone}</span>
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
            <div class="meta-row"><span>Роль</span><strong>${employee.role}</strong></div>
            <div class="meta-row"><span>Отдел</span><strong>${employee.department}</strong></div>
            <div class="meta-row"><span>Формат</span><strong>${workModeLabels[employee.workMode]}</strong></div>
          </div>
          <span class="contact-list">
            <a href="mailto:${employee.email}">${employee.email}</a>
            <span class="subtle">${employee.phone}</span>
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
  const activePage = pageExists ? page : "employees";

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
    savedArticles = window.localStorage?.getItem(storageKey);
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
    window.localStorage?.setItem(storageKey, JSON.stringify(state.articles));
  } catch {
    elements.saveStatus.textContent = "Сохранение недоступно";
  }
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
  }).format(new Date(dateString));
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
          <strong>${escapeHtml(article.title || "Без названия")}</strong>
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
  elements.saveStatus.textContent = "Изменения сохранены";
  renderArticles();
}

function persistCurrentArticle({ silent = false } = {}) {
  const article = getCurrentArticle();

  if (!article) {
    return;
  }

  article.title = elements.articleTitle.value.trim() || "Без названия";
  article.status = elements.articleStatus.value;
  article.content = elements.articleEditor.innerHTML;
  article.updatedAt = new Date().toISOString().slice(0, 10);
  saveArticles();
  renderArticles();

  if (!silent) {
    elements.saveStatus.textContent = "Изменения сохранены";
  }
}

function scheduleArticleSave() {
  elements.saveStatus.textContent = "Сохранение...";
  window.clearTimeout(state.saveTimer);
  state.saveTimer = window.setTimeout(() => persistCurrentArticle(), 450);
}

function createArticle() {
  persistCurrentArticle({ silent: true });

  const article = {
    id: `article-${Date.now()}`,
    title: "Новая статья",
    status: "draft",
    updatedAt: new Date().toISOString().slice(0, 10),
    content: "<p></p>",
  };

  state.articles.unshift(article);
  saveArticles();
  loadArticle(article.id);
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
  const url = window.prompt("Ссылка");

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

renderDepartmentOptions();
renderSummary();
renderEmployees();
initializeKnowledgeBase();
setActivePage(window.location.hash.replace("#", "") || "employees");
