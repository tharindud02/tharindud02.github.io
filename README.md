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

Production is served from Vercel at https://www.hashantha.com (the apex `hashantha.com` redirects to `www`).
The canonical host is set in `astro.config.mjs` (`site`) and `src/data/portfolio.ts` (`site.url`); keep both in sync.

A GitHub Actions workflow also builds `dist/` and deploys a copy to GitHub Pages (https://tharindud02.github.io).
Its pages declare `www.hashantha.com` as canonical, so search engines consolidate on the custom domain.
