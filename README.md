# Pocket Gallery

A mobile-first art portfolio that turns your phone into a small museum: swipe
vertically through "rooms," each holding one spotlighted artwork with a
sliding wall placard (title, year, medium, notes) and a side rail showing
where you are in the collection.

## Adding your art

1. Put image files into `public/art/` (jpg, png, or webp — keep them
   reasonably web-sized, ~1500px on the long edge is plenty).
2. Open `src/artworks.js` and add one object per image, in display order.
   The file has the exact format and an example to copy.
3. Optionally edit `artistInfo` in the same file (your name + tagline shown
   on the entrance screen).

That's it — no other code needs to change.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL. Resize your browser narrow, or open dev tools'
device toolbar, to preview the phone layout — that's the primary target.

## Deploy to GitHub Pages

**Option A — GitHub Actions (recommended, auto-deploys on every push)**

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the included workflow
   (`.github/workflows/deploy.yml`) builds and deploys automatically.
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

**Option B — `gh-pages` package (manual deploy from your machine)**

1. Edit `homepage` in `package.json` to your real GitHub Pages URL.
2. Run:
   ```bash
   npm install
   npm run deploy
   ```
3. In **Settings → Pages**, set **Source** to the `gh-pages` branch.

Both options work because this is a static Vite build — `vite.config.js`
already uses a relative base (`base: './'`) so it works from any sub-path,
including a project page like `/your-repo-name/`.

## Notes on the design

- Built mobile-first; desktop just centers the same phone-shaped experience
  isn't implemented since the brief was phone-only, but everything is in
  relative units (dvh, %, clamp) so it adapts to small tablets fine.
- Uses CSS scroll-snap rather than a JS swipe library — fast, no extra
  dependencies, native momentum scrolling and gesture feel on iOS/Android.
- Empty `artworks.js` shows a deliberate "empty room" state instead of a
  blank screen.
