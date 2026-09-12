// ============================================================
// Edit this file to personalize your site — no HTML editing
// needed for the content below.
// ============================================================

const SITE = {
  name: "Your Name",
  tagline: "Building things, learning in public, and sharing the journey.",
  // Separate paragraphs with a blank line — each becomes its own <p>.
  about: `
I'm [your name] — [your role/what you do]. This site is where I share my
personal journey, the things I'm learning, and how to reach me.

Replace this text in js/data.js with your own story — where you've been,
what you're working on now, and what you care about.
  `,
  email: "you@example.com",
};

// Add / remove / edit your social links here.
// "icon" must be one of: github, linkedin, twitter, instagram, youtube, website, email
// (see ICONS in js/main.js) — or omit it to use a generic link icon.
const SOCIAL_LINKS = [
  { name: "GitHub", icon: "github", url: "https://github.com/your-username" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/your-username" },
  { name: "X / Twitter", icon: "twitter", url: "https://x.com/your-username" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com/your-username" },
];

// Add a new entry each time you want to share a learning.
// "file" should point to an HTML file inside /learnings/.
const LEARNINGS = [
  {
    date: "2026-09-12",
    title: "Welcome to my learnings log",
    excerpt: "The first entry — why I'm starting this, and what to expect here.",
    tags: ["meta"],
    file: "learnings/welcome.html",
  },
];
