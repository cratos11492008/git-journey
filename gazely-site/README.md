# Gazely landing page (static)

This is a simple, professional one‑page site for **Gazely**.

## Quick start (local)

Open `index.html` directly in a browser, or run a tiny local server:

```bash
# from this folder
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy options

### Option A — GitHub Pages
1. Create a new GitHub repo (e.g. `gazely-site`).
2. Upload everything in this folder (including `assets/`).
3. In **Settings → Pages**, set:
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
4. Your site will be live at the Pages URL.

### Option B — Netlify (drag & drop)
1. Go to Netlify → **Add new site → Deploy manually**.
2. Drag this folder into the upload area.
3. Done.

### Option C — Vercel
1. Import the repo in Vercel.
2. Framework preset: **Other**
3. Output: static (no build step needed).

## Customize
- Update copy in `index.html`.
- Brand colors are CSS variables near the top of `styles.css`.
- Replace screenshot images in `assets/` (keep the filenames or update HTML).
- Update the waitlist email in `index.html` (search for `YOUR_EMAIL_HERE`).

## Notes
- The email form uses `mailto:` to avoid backend setup.
- If you want a real form endpoint, swap to Formspree / Netlify Forms.
