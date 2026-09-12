// Renders dynamic content from data.js into the current page.
// Runs only if the relevant container exists on the page.

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.57L23 22h-6.9l-5.4-6.9L4.6 22H1.5l8.02-9.17L1 2h7.06l4.9 6.3L18.9 2Zm-1.2 18h1.7L7 3.9H5.2L17.7 20Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15c.54.53.9 1.06 1.15 1.77.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33Zm0 2c-3.15 0-3.5.01-4.73.07-1.05.05-1.62.22-2 .37-.5.19-.86.42-1.24.8-.38.38-.6.74-.8 1.24-.15.38-.32.95-.37 2-.06 1.23-.07 1.58-.07 4.72s.01 3.5.07 4.73c.05 1.05.22 1.62.37 2 .19.5.42.86.8 1.24.38.38.74.6 1.24.8.38.15.95.32 2 .37 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1.05-.05 1.62-.22 2-.37.5-.2.86-.42 1.24-.8.38-.38.6-.74.8-1.24.15-.38.32-.95.37-2 .06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.05-1.05-.22-1.62-.37-2a3.3 3.3 0 0 0-.8-1.24 3.3 3.3 0 0 0-1.24-.8c-.38-.15-.95-.32-2-.37C15.5 4.21 15.15 4.2 12 4.2Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm4.6-2.6a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5s-.23-1.63-.94-2.35c-.9-.94-1.9-.95-2.36-1C16.9 3 12 3 12 3h-.01s-4.9 0-8.2.15c-.46.05-1.46.06-2.36 1C.72 4.87.5 6.5.5 6.5S.27 8.4.27 10.31v1.87c0 1.9.23 3.81.23 3.81s.23 1.63.93 2.35c.9.95 2.08.92 2.6 1.02C5.9 20.85 12 20.9 12 20.9s4.9-.01 8.2-.16c.46-.06 1.46-.06 2.36-1.01.7-.72.94-2.35.94-2.35s.23-1.9.23-3.81v-1.87c0-1.9-.23-3.81-.23-3.81ZM9.7 14.7V8.9l6.15 2.91-6.15 2.9Z"/></svg>`,
  website: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.5 2.7 3.8 6 3.8 9.5s-1.3 6.8-3.8 9.5c-2.5-2.7-3.8-6-3.8-9.5S9.5 5.2 12 2.5Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 6.5L21 6"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9.5 14.5 14.5 9.5"/><path d="M11 6.5 12.6 4.9a3.6 3.6 0 0 1 5.1 5.1L16 11.5"/><path d="M13 17.5 11.4 19.1a3.6 3.6 0 0 1-5.1-5.1L8 12.5"/></svg>`,
};

function initials(name) {
  return (name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {
  // Nav brand avatar + name
  document.querySelectorAll(".mini-avatar").forEach((el) => (el.textContent = initials(SITE.name)));
  document.querySelectorAll(".brand-name").forEach((el) => (el.textContent = SITE.name));

  // Hero avatar + name
  const heroAvatar = document.getElementById("hero-avatar");
  if (heroAvatar) heroAvatar.textContent = initials(SITE.name);

  const heroName = document.getElementById("site-name");
  const heroTagline = document.getElementById("site-tagline");
  const aboutText = document.getElementById("about-text");
  if (heroName) heroName.textContent = SITE.name;
  if (heroTagline) heroTagline.textContent = SITE.tagline;
  if (aboutText) {
    aboutText.innerHTML = SITE.about
      .trim()
      .split(/\n\s*\n/)
      .map((p) => `<p>${p.trim()}</p>`)
      .join("");
  }

  // Social links
  const socialGrid = document.getElementById("social-grid");
  if (socialGrid) {
    socialGrid.innerHTML = SOCIAL_LINKS.map(
      (s) => `
      <a class="social-card" href="${s.url}" target="_blank" rel="noopener noreferrer">
        <span class="icon">${ICONS[s.icon] || ICONS.link}</span> ${s.name}
      </a>`
    ).join("");
  }

  // Learnings list (used on index preview + full learnings page)
  const learningsList = document.getElementById("learnings-list");
  if (learningsList) {
    const limit = learningsList.dataset.limit ? Number(learningsList.dataset.limit) : LEARNINGS.length;
    const sorted = [...LEARNINGS].sort((a, b) => (a.date < b.date ? 1 : -1));
    const items = sorted.slice(0, limit);

    if (items.length === 0) {
      learningsList.innerHTML = `<p class="learning-excerpt">No entries yet — check back soon.</p>`;
    } else {
      learningsList.innerHTML = items
        .map(
          (l) => `
        <a class="learning-item" href="${l.file}">
          <span class="learning-date">${formatDate(l.date)}</span>
          <h3 class="learning-title">${l.title}</h3>
          <p class="learning-excerpt">${l.excerpt}</p>
          <div>${(l.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </a>`
        )
        .join("");
    }
  }

  // Contact
  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) {
    contactEmail.href = `mailto:${SITE.email}`;
    contactEmail.querySelector(".label").textContent = SITE.email;
    const icon = contactEmail.querySelector(".icon");
    if (icon) icon.innerHTML = ICONS.email;
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Header shadow/border on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
});

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}
