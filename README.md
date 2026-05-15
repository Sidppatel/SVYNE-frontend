# SVYNE Frontend

Marketing site for **SVYNE** — a Mobile, Alabama web/software studio growing site visions into living digital architecture.

## Stack

- Vite + React 19 + TypeScript
- Tailwind v4 (tokens via `@theme`)
- react-router-dom v7
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
```

Open <http://localhost:5173>.

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Type-check (`tsc -b`) then produce a production build in `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Run ESLint |

## Project structure

```
src/
  pages/         Route components (Home, Services, Work, WorkDetail, Pricing, About, Contact)
  components/
    ui/          Shared primitives (SparkMark, Wordmark, Eyebrow, Italian, Button, WorkTileSvg)
    layout/     Nav, Footer, PageWrap, CtaBand
  content/       All copy + data (studio, home, services, work, pricing, about, contact)
  hooks/         useScrollToTop, useBodyScrollLock
  lib/           validators, renderBold
  types/         Shared TS types
  styles/        index.css (tokens + base + utilities), components.css, pages.css
  routes.ts      Centralized route paths
  App.tsx        Router + layout
  main.tsx       Entry
public/
  favicon.svg    SVYNE three-layer mark
```

## Design tokens

All design tokens live in `src/styles/index.css` under `@theme` — colors, fonts, easings. Tailwind consumes them automatically. Do not hardcode hex values, font sizes, or breakpoints anywhere else.

## Routes

- `/` — Home
- `/services` — Services deep-dives
- `/work` — Work index (filter chips)
- `/work/:slug` — Case study detail
- `/pricing` — Pricing tiers, maintain plans, bundles, add-ons
- `/about` — Studio, values, team, location
- `/contact` — Contact form + journey

## Code rules

See `../CLAUDE.md` for full ruleset. Highlights:

- No comments in code (clear names instead).
- No inline `style={{}}` — use classes.
- No hardcoded values — reference tokens.
- Pages are layout + composition only; logic in `hooks/` and `lib/`.
- All copy and constants in `src/content/`.

## Brand

- All copy is **English**.
- No blue. No stock photos. No "starting at."
- The italic period after `svyne.` is part of the wordmark — render the period as a separate `<em>` element.
- The `.italian` Cormorant-italic styling stays — apply it to English accent phrases.

## Build output

Production build:

- ~42 KB CSS (~8 KB gzip)
- ~282 KB JS (~87 KB gzip)
- 53 modules transformed
