const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const filterButtons = document.querySelectorAll("[data-filter]");
const publications = document.querySelectorAll(".publication-item");
const publicationSearch = document.querySelector("[data-publication-search]");
const publicationEmpty = document.querySelector("[data-publication-empty]");
const upcomingEvents = document.querySelector('[data-events="upcoming"]');
const pastEvents = document.querySelector('[data-events="past"]');
const eventSearch = document.querySelector("[data-event-search]");
const eventType = document.querySelector("[data-event-type]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const researchTabs = document.querySelectorAll("[data-research-tab]");
const researchPanels = document.querySelectorAll("[data-research-panel]");
const profileButtons = document.querySelectorAll("[data-profile]");
const profileDialog = document.querySelector("[data-profile-dialog]");
const profileClose = document.querySelector("[data-profile-close]");
const backToTop = document.querySelector("[data-back-to-top]");
const nextEventTitle = document.querySelector("[data-next-event-title]");
const nextEventDate = document.querySelector("[data-next-event-date]");

let activePublicationFilter = "all";
let renderedEventItems = [];

function syncHeader() {
  const isScrolled = window.scrollY > 12;
  header.classList.toggle("is-scrolled", isScrolled);
  backToTop?.classList.toggle("is-visible", window.scrollY > 680);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("lab-theme", theme);
  themeToggle?.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
}

function formatEventDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function getUpcomingEvents(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events.filter((event) => new Date(`${event.date}T12:00:00`) >= today);
}

function createEventItem(event) {
  const item = document.createElement("article");
  item.className = "event-item";
  item.dataset.eventType = event.type.toLowerCase();
  item.dataset.eventText = `${event.title} ${event.description} ${event.type}`.toLowerCase();

  const link = event.link
    ? `<a href="${event.link}">${event.title}</a>`
    : `<span>${event.title}</span>`;

  item.innerHTML = `
    <p class="event-meta">${formatEventDate(event.date)} - ${event.type}</p>
    <h4>${link}</h4>
    <p>${event.description}</p>
  `;

  return item;
}

function syncEventFilters() {
  const query = eventSearch?.value.trim().toLowerCase() || "";
  const type = eventType?.value || "all";

  renderedEventItems.forEach((item) => {
    const matchesQuery = !query || item.dataset.eventText.includes(query);
    const matchesType = type === "all" || item.dataset.eventType === type;
    item.classList.toggle("is-hidden", !(matchesQuery && matchesType));
  });
}

function populateEventTypes(events) {
  if (!eventType) return;

  const types = [...new Set(events.map((event) => event.type))].sort();
  eventType.replaceChildren(
    new Option("All update types", "all"),
    ...types.map((type) => new Option(type, type.toLowerCase()))
  );
}

function renderEvents() {
  if (!upcomingEvents || !pastEvents || !window.labEvents) return;

  const sortedEvents = [...window.labEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcoming = getUpcomingEvents(sortedEvents);
  const past = sortedEvents
    .filter((event) => !upcoming.includes(event))
    .reverse();

  populateEventTypes(sortedEvents);
  upcomingEvents.replaceChildren(...upcoming.map(createEventItem));
  pastEvents.replaceChildren(...past.map(createEventItem));
  renderedEventItems = [...document.querySelectorAll(".event-item")];

  if (!upcoming.length) {
    upcomingEvents.innerHTML = '<p class="empty-state">No upcoming events posted yet.</p>';
  }

  if (!past.length) {
    pastEvents.innerHTML = '<p class="empty-state">No recent news posted yet.</p>';
  }

  if (upcoming[0] && nextEventTitle && nextEventDate) {
    nextEventTitle.textContent = upcoming[0].title;
    nextEventDate.textContent = `${formatEventDate(upcoming[0].date)} - ${upcoming[0].type}`;
  }
}

function syncPublicationFilters() {
  const query = publicationSearch?.value.trim().toLowerCase() || "";
  let visibleCount = 0;

  publications.forEach((publication) => {
    const matchesCategory =
      activePublicationFilter === "all" || publication.dataset.category === activePublicationFilter;
    const matchesSearch = !query || publication.textContent.toLowerCase().includes(query);
    const shouldShow = matchesCategory && matchesSearch;
    publication.classList.toggle("is-hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  publicationEmpty?.classList.toggle("is-hidden", visibleCount > 0);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const savedTheme = localStorage.getItem("lab-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(savedTheme || preferredTheme);

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === "dark" ? "light" : "dark");
});

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

researchTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.researchTab;

    researchTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    researchPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.researchPanel === selected);
    });
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePublicationFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    syncPublicationFilters();
  });
});

publicationSearch?.addEventListener("input", syncPublicationFilters);
eventSearch?.addEventListener("input", syncEventFilters);
eventType?.addEventListener("change", syncEventFilters);

profileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!profileDialog) return;

    profileDialog.querySelector("[data-profile-name]").textContent = button.dataset.name;
    profileDialog.querySelector("[data-profile-role]").textContent = button.dataset.role;
    profileDialog.querySelector("[data-profile-focus]").textContent = button.dataset.focus;
    profileDialog.querySelector("[data-profile-bio]").textContent = button.dataset.bio;
    profileDialog.showModal();
  });
});

profileClose?.addEventListener("click", () => profileDialog.close());

profileDialog?.addEventListener("click", (event) => {
  if (event.target === profileDialog) {
    profileDialog.close();
  }
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderEvents();
