# Personal Website

A simple, fast, dependency-free personal website built with plain HTML, CSS, and JavaScript. Includes:

- **Home** — hero, short bio, and quick links into the sections below
- **Journey** — your personal story and a milestone timeline
- **Work** — professional experience and projects you've built
- **Writing** — a growing log of notes/learnings you add over time
- **Connect** — a hub of your social media links

## Project structure

```
personal-website/
├── index.html          # Home page (bio, explore cards, writing preview, socials)
├── journey.html         # Personal journey: narrative + milestone timeline
├── work.html             # Experience + projects
├── learnings.html       # Full list of all writing/learnings posts
├── learnings/
│   └── welcome.html     # Example learning entry
├── css/style.css        # All styling (light + dark mode built in)
├── js/data.js            # <-- YOUR CONTENT LIVES HERE
└── js/main.js            # Renders data.js content into the pages
```

## Customize it

Almost everything you need to change lives in **`js/data.js`**:

- `SITE.name`, `SITE.tagline`, `SITE.bio` — home page identity
- `SOCIAL_LINKS` — add/remove/edit your social profiles
- `JOURNEY.intro` and `JOURNEY.milestones` — your story + timeline (journey.html)
- `WORK.intro`, `WORK.experience`, `WORK.projects` — your work history (work.html)
- `LEARNINGS` — the list of writing/learning entries shown on the site

### Add a new "learning" post

1. Copy `learnings/welcome.html` to a new file, e.g. `learnings/my-new-post.html`, and edit its title/date/content.
2. Add an entry to the `LEARNINGS` array in `js/data.js`:

```js
{
  date: "2026-10-01",
  title: "My new post title",
  excerpt: "One or two sentences describing it.",
  tags: ["career"],
  file: "learnings/my-new-post.html",
}
```

It will automatically show up on the home page and the Learnings page, newest first.

## Preview locally

Just open `index.html` in your browser — no build step or server required.

Or, for a local dev server (optional, avoids some browser file:// quirks):

```bash
npx serve .
```

## Deploy for free

**Option A — GitHub Pages**
1. Push this folder to a GitHub repository.
2. In the repo settings, go to **Pages** → set source to the `main` branch, root folder.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Option B — Netlify / Vercel**
1. Create a free account and connect your GitHub repo (or drag-and-drop the folder for Netlify).
2. No build command needed — it's static HTML.
3. You'll get a free `*.netlify.app` or `*.vercel.app` URL, with an option to add a custom domain later.

## Custom domain (optional)

Once deployed, most hosts let you add a custom domain (e.g. `yourname.com`) for free — you just need to buy the domain from a registrar and point its DNS to your host.
