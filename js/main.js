// Renders dynamic content from data.js into the current page.
// Runs only if the relevant container exists on the page.

document.addEventListener("DOMContentLoaded", () => {
  // Hero / about
  const heroName = document.getElementById("site-name");
  const heroTagline = document.getElementById("site-tagline");
  const aboutText = document.getElementById("about-text");
  if (heroName) heroName.textContent = SITE.name;
  if (heroTagline) heroTagline.textContent = SITE.tagline;
  if (aboutText) aboutText.textContent = SITE.about.trim();

  // Social links
  const socialGrid = document.getElementById("social-grid");
  if (socialGrid) {
    socialGrid.innerHTML = SOCIAL_LINKS.map(
      (s) => `
      <a class="social-card" href="${s.url}" target="_blank" rel="noopener noreferrer">
        <span class="icon">${s.icon}</span> ${s.name}
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
    contactEmail.textContent = SITE.email;
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}
