# Kinu Wedding Invitation 💌

An elegant, config-driven wedding invitation built with **Vite + React + Framer Motion**. One-pager with a hero, story, interactive timeline of events, scroll-animated photo gallery, and RSVP.

Everything user-facing lives in **`src/config.js`** — names, date, events, photos, quotes, RSVP links. No need to touch components.

---

## 🚀 Local development

The project lives inside the `kinu` conda environment.

```bash
# 1. Activate the conda env
conda activate kinu

# 2. From this folder
cd ~/kinu/invitation

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

## 📝 Editing the invitation

Open **`src/config.js`** and edit:

- `couple` — bride/groom names, hashtag, tagline
- `hero` — wedding date, location line, eyebrow text
- `story` — intro paragraphs
- `events` — array of all functions (Mehendi, Haldi, Sangeet, etc.). Add/remove freely; the timeline auto-builds.
- `photos` — array of `{ src, alt, quote, author }`. Drop your images into `public/photos/` and reference them as `/photos/myphoto.jpg`.
- `rsvp` — title, subtitle, primary/secondary CTA links (mailto, tel, Google Form, anything).

Save the file and the page hot-reloads.

## 🖼️ Adding your own photos

1. Drop image files into `public/photos/` (JPG/PNG/WebP).
2. In `src/config.js`, change each `photos[].src` to `/photos/yourfile.jpg`.
3. Customize `quote` and `author` to taste.

## 🏗️ Production build

```bash
npm run build      # outputs to ./dist
npm run preview    # serve the built site locally
```

## 🌐 Deploy to GitHub Pages (free)

This project is **deploy-ready** — but is *not* deployed yet. Push it to your own GitHub repo and use either of these flows:

### Option A — `gh-pages` branch (built-in script)

1. Create a new GitHub repo, e.g. `kinu-wedding`.
2. Push this folder to that repo.
3. Set the correct base path so assets resolve under `/<repo>/`:
   ```bash
   VITE_BASE=/kinu-wedding/ npm run build
   npm run deploy
   ```
   This pushes `dist/` to a `gh-pages` branch.
4. In your repo on GitHub: **Settings → Pages → Build and deploy → Branch: `gh-pages` / root** → Save.
5. Your site appears at `https://<your-user>.github.io/kinu-wedding/`.

> If you publish to `https://<your-user>.github.io/` (a *user site* repo named `<your-user>.github.io`), use `VITE_BASE=/` instead.

### Option B — GitHub Actions (auto-deploy on push)

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push: { branches: [main] }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: VITE_BASE=/<your-repo-name>/ npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.d.outputs.page_url }} }
    steps:
      - id: d
        uses: actions/deploy-pages@v4
```

Then in repo settings: **Pages → Source: GitHub Actions**.

## 🎨 Customizing colors

All colors are CSS variables at the top of `src/index.css` (`--c-bg`, `--c-rose`, `--c-gold`, etc.). Tweak there to match your palette.

## 📁 Project structure

```
invitation/
├── public/
│   ├── photos/         # ← drop your images here
│   └── .nojekyll       # required for GH Pages
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Story.jsx
│   │   ├── Timeline.jsx
│   │   ├── Gallery.jsx
│   │   ├── Rsvp.jsx
│   │   └── Footer.jsx
│   ├── config.js       # ← edit me
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

Made with 🤍 for Kinu.
