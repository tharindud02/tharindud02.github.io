# Portfolio — Astro

Static personal portfolio rebuilt in Astro for near-zero JS and Lighthouse-oriented performance.

## Stack

- Astro 5 (static output)
- Tailwind CSS
- Self-hosted variable fonts (Inter + Outfit)
- Sharp image pipeline (WebP)

## Commands

```bash
npm install
npm run optimize:images   # regenerate optimized WebP assets
npm run dev
npm run build
npm run preview
```

## Deploy

GitHub Actions builds `dist/` and deploys to GitHub Pages on push to `main`/`master`.

Site URL: https://tharindud02.github.io
