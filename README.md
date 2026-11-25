# Organic Gardening Australia

Two demo websites built from Claude Design handoffs, keeping their layouts, styles and copy:

- `/`: **Organic Gardening Australia**, a chemical-free gardening service in Melbourne (`Organic Gardening Australia.html`)
- `/landscaping/`: **Notlee Landscapes**, landscape design and construction in Melbourne's south-east (`notlee-landscapes-demo.html`)
- `/Sinclair-landscaping`: **Sinclair Landscaping Solutions**, landscaping across Melbourne (`Sinclair_Landscaping_Solutions.html`)

## Stack

- [Vite](https://vite.dev/) for the dev server and production build (hashed, cache-busted assets)
- [Tailwind CSS 3](https://v3.tailwindcss.com/) compiled at build time (replaces the Tailwind Play CDN used in the handoff)
- Vanilla JavaScript (ES module) for the mobile menu, smooth scrolling, service pre-select and quote form
- Google Fonts: Fraunces and Plus Jakarta Sans (home page); Outfit and Inter (landscaping page)

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
  index.html               Notlee Landscapes page, served at /landscaping/
Sinclair-landscaping.html  Sinclair Landscaping Solutions page, served at /Sinclair-landscaping
src/
  main.js                  Home page behaviour (menu, smooth scroll, quote form)
  styles/main.css          Home page Tailwind entry + custom rules
  landscaping/main.js      Landscaping page behaviour (header, menu, 3D hero cards, blog pop-ups, quote form)
  landscaping/styles.css   Landscaping page Tailwind entry (uses its own config via @config) + custom rules
  sinclair/main.js         Sinclair page behaviour (menu, header shadow, quote form)
  sinclair/styles.css      Sinclair page Tailwind entry (own config via @config) + custom rules
  assets/images/           Home page photos (hashed into dist/assets at build)
  assets/images/landscaping/  Landscaping page photos
  assets/images/sinclair/  Sinclair page photos
public/
  favicon.svg              Leaf favicon
  og-image.jpg             1200x630 social share image
tailwind.config.js         Home page design tokens (colours, fonts)
tailwind.landscaping.config.js  Landscaping page design tokens
tailwind.sinclair.config.js     Sinclair page design tokens
postcss.config.js
vite.config.js             Build config, including the list of page entries
wrangler.jsonc             Cloudflare static-assets deploy of dist/
```

## Pages

| URL             | Source                    |
| --------------- | ------------------------- |
| `/`             | `index.html` (Organic Gardening Australia) |
| `/landscaping/` | `landscaping/index.html` (Notlee Landscapes) |
| `/Sinclair-landscaping` | `Sinclair-landscaping.html` (Sinclair Landscaping Solutions) |

Each page has its own stylesheet and Tailwind config, because the designs use different colours and fonts under the same token names (`forest`, `cream`, `sage`, `leaf`, `wattle`).

Cloudflare redirects `/landscaping` and `/landscaping/index.html` to `/landscaping/`.

`Sinclair-landscaping.html` sits at the project root, so Cloudflare serves it at exactly `/Sinclair-landscaping` (no trailing slash) and redirects `/Sinclair-landscaping.html` and `/Sinclair-landscaping/` there. Paths are case-sensitive: `/sinclair-landscaping` is a 404.

To add another page, for example `/about-us/`:

1. Create `about-us/index.html`, plus a script such as `/src/about-us/main.js` if needed.
2. Add it to `build.rolldownOptions.input` in `vite.config.js`.
3. Styles:
   - **Same design as an existing page:** link that page's stylesheet and add `'./about-us/**/*.html'` to `content` in that page's Tailwind config.
   - **Its own design:** copy `src/landscaping/styles.css` and `tailwind.landscaping.config.js`, point the `@config` line at the new config, and set its `content` to the new page's files.

   Without the `content` entry, classes used only on that page are left out of the CSS.

`wrangler.jsonc` needs no change: it uploads everything in `dist/`.

## Design tokens (home page)

The landscaping page's tokens are in `tailwind.landscaping.config.js`.

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
- **Landscaping page (Notlee):** keep the demo notice bar until the client signs off. Confirm permission to use the Instagram photos, the sample reviews, blog articles, service list, hours and service areas (search for `CONFIRM WITH CLIENT`). The quote form also has no backend yet.
- **Sinclair page:** the 10 photos in `src/assets/images/sinclair/` and `public/sinclair/og-image.jpg` are stock placeholders. Overwrite each with the client's photo of the same name (no code changes needed). The blog links point to the FAQ until `blog.html` is supplied; add it as `Sinclair-landscaping/blog.html` (served at `/Sinclair-landscaping/blog`), add it to `vite.config.js`, and repoint the links. Also review the `CONFIRM WITH CLIENT` notes (insurance, services, hours, service areas, sample reviews).
- **Business details:** hours, service areas, "started in 2018", "family-run", insurance and police-check wording, email address and social links.
