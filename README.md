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
index.html                 Home page, served at / (all sections, copy, SEO meta, LocalBusiness JSON-LD)
landscaping/
  index.html               Landscaping page, served at /landscaping/ (starter content)
src/
  main.js                  Home page behaviour (menu, smooth scroll, quote form)
  landscaping/main.js      Landscaping page behaviour (menu, header shadow, year)
  styles/main.css          Shared Tailwind entry + custom rules from the handoff
  assets/images/           On-page photos (hashed into dist/assets at build)
public/
  favicon.svg              Leaf favicon
  og-image.jpg             1200x630 social share image
tailwind.config.js         Design tokens (colours, fonts) and the files Tailwind scans
postcss.config.js
vite.config.js             Build config, including the list of page entries
wrangler.jsonc             Cloudflare static-assets deploy of dist/
```

## Pages

| URL             | Source                    |
| --------------- | ------------------------- |
| `/`             | `index.html`              |
| `/landscaping/` | `landscaping/index.html`  |

Cloudflare redirects `/landscaping` and `/landscaping/index.html` to `/landscaping/`.

To add another page, for example `/about-us/`:

1. Create `about-us/index.html`. Link `/src/styles/main.css` for the shared styles and add a script such as `/src/about-us/main.js` if needed.
2. Add it to `build.rolldownOptions.input` in `vite.config.js`.
3. Add `'./about-us/**/*.html'` to `content` in `tailwind.config.js`. Without this, classes used only on that page are left out of the CSS.

`wrangler.jsonc` needs no change: it uploads everything in `dist/`.

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

The handoff marks several items to confirm with the client. Search `index.html` and `landscaping/index.html` for `CONFIRM WITH CLIENT`, `PLACEHOLDER` and `REPLACE`.

- **Photos:** placeholder stock photos. To use client photos, overwrite the files in `src/assets/images/` (same names), and `public/og-image.jpg` for the share image.
- **Reviews:** the three reviews are labelled samples. Replace them with real reviews (with permission).
- **Quote form:** front-end only for now. Connect a form service (Web3Forms, Formspree or a serverless function). See the `FORM BACKEND` comment in `index.html` and the `TODO` in `src/main.js`.
- **Indexing:** remove `<meta name="robots" content="noindex, nofollow">` and update the `canonical`, `og:url`, `og:image` and JSON-LD URLs if the live domain differs from `demo.organicgardeningaustralia.com`.
- **Landscaping page:** the copy is draft starter text and the photos are reused from the home page. Replace both, and consider linking to the page from the home page nav.
- **Business details:** hours, service areas, "started in 2018", "family-run", insurance and police-check wording, email address and social links.
