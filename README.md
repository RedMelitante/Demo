# Organic Gardening Australia

Production website for **Organic Gardening Australia**, a chemical-free gardening service in Melbourne, VIC.
Built from the Claude Design handoff (`Organic Gardening Australia.html`), keeping its layout, styles and copy.

## Stack

- [Vite](https://vite.dev/) for the dev server and production build (hashed, cache-busted assets)
- [Tailwind CSS 3](https://v3.tailwindcss.com/) compiled at build time (replaces the Tailwind Play CDN used in the handoff)
- Vanilla JavaScript (ES module) for the mobile menu, smooth scrolling, service pre-select and quote form
- Google Fonts: Fraunces (display) and Plus Jakarta Sans (body)

## Getting started

Requires Node.js 20.19 or newer.

```bash
npm install
```

```bash
npm run dev       # local dev server at http://localhost:5173
```

```bash
npm run build     # production build to dist/
```

```bash
npm run preview   # serve the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, Railway, S3, etc.).
Build command: `npm run build` · Output directory: `dist`.

## Project structure

```
index.html                 Page markup (all sections, copy, SEO meta, LocalBusiness JSON-LD)
src/
  main.js                  Site behaviour (menu, smooth scroll, quote form)
  styles/main.css          Tailwind entry + custom rules from the handoff
  assets/images/           On-page photos (hashed into dist/assets at build)
public/
  favicon.svg              Leaf favicon
  og-image.jpg             1200x630 social share image
tailwind.config.js         Design tokens (colours, fonts)
postcss.config.js
vite.config.js
```

## Design tokens

| Token        | Value     | Use                               |
| ------------ | --------- | --------------------------------- |
| `forest`     | `#1E3A2B` | Primary text, dark sections       |
| `forest-900` | `#15291E` | Footer, overlays                  |
| `forest-700` | `#2A4D39` | Cards on dark sections            |
| `leaf`       | `#3F6B45` | Eyebrows, links, focus rings      |
| `sage`       | `#A8BFA0` | Accent                            |
| `sage-100`   | `#E8EFE3` | Light section backgrounds, icons  |
| `cream`      | `#F7F4EC` | Page background                   |
| `wattle`     | `#E3B341` | Primary CTA                       |
| `wattle-600` | `#CC9A2A` | Primary CTA hover                 |
| `bark`       | `#6B4F36` | Accent                            |

Fonts: `font-display` = Fraunces, `font-sans` = Plus Jakarta Sans.

## Before going live

The handoff marks several items to confirm with the client. Search `index.html` for `CONFIRM WITH CLIENT` and `REPLACE`.

- **Photos:** placeholder stock photos. To use client photos, overwrite the files in `src/assets/images/` (same names), and `public/og-image.jpg` for the share image.
- **Reviews:** the three reviews are labelled samples. Replace them with real reviews (with permission).
- **Quote form:** front-end only for now. Connect a form service (Web3Forms, Formspree or a serverless function). See the `FORM BACKEND` comment in `index.html` and the `TODO` in `src/main.js`.
- **Indexing:** remove `<meta name="robots" content="noindex, nofollow">` and update the `canonical`, `og:url`, `og:image` and JSON-LD URLs if the live domain differs from `demo.organicgardeningaustralia.com`.
- **Business details:** hours, service areas, "started in 2018", "family-run", insurance and police-check wording, email address and social links.
