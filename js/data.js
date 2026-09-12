// ============================================================
// Edit this file to personalize your site — no HTML editing
// needed for the content below.
// ============================================================

const SITE = {
  name: "Shubham Singh",
  tagline: "Building things, learning in public, and sharing the journey.",
  // Short intro shown on the Home page. Separate paragraphs with a blank
  // line — each becomes its own <p>.
  bio: `
Hi, I'm Shubham — [your role/what you do, e.g. "a software engineer based in ___"].
This site is where I share a bit about who I am, what I've worked on, what
I'm learning, and how to reach me.

[Add 1–2 more sentences about your current focus or what you care about.]
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

// ===== Personal Journey (journey.html) =====
// A longer narrative plus a timeline of milestones.
const JOURNEY = {
  intro: `
This is the fuller story — where I started, the turns along the way, and
how I got to what I'm doing now. Replace this with your own narrative in
js/data.js.

[Talk about your background, what shaped your path, and any pivots or
turning points worth sharing.]
  `,
  milestones: [
    {
      year: "20XX",
      title: "Milestone title",
      description: "A sentence or two about what happened and why it mattered.",
    },
    {
      year: "20XX",
      title: "Another milestone",
      description: "Add as many of these as you like, newest or oldest first — your call.",
    },
    {
      year: "Today",
      title: "What I'm doing now",
      description: "Where things stand currently, and what you're focused on.",
    },
  ],
};

// ===== Work (work.html) =====
// Professional experience and things you've built.
const WORK = {
  intro: `
A summary of my professional experience and things I've built. Replace this
with your own overview in js/data.js.
  `,
  experience: [
    {
      role: "Job title",
      org: "Company / organization",
      period: "20XX — Present",
      description: "One or two sentences about your role and impact there.",
    },
  ],
  projects: [
    {
      name: "Project name",
      description: "A short description of the project and what it does.",
      url: "https://github.com/your-username/project",
      tags: ["tag1", "tag2"],
    },
  ],
};

// ===== Writing / Knowledge sharing (learnings.html) =====
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
