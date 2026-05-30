# SVYNE — The Living Architecture

> *Growing your site vision through warm, structured technology.*

**SVYNE** (Site Vision + Vine) is a one-person web studio based in **Mobile, Alabama**, founded by **Siddh Patel**. We build custom websites and web platforms that take root, launch cleanly, and keep growing after release.

The name captures the philosophy: a vine grows by connection and structure. So does a good web system — clear direction above, flexible growth through the middle, stable infrastructure underneath.

---

## What SVYNE Does

SVYNE operates on three pillars — the full lifecycle of a website or web product:

### i. Build — *foundation*

From a clean marketing site to a custom event platform with ticketing. Design, code, and ship — fully working, owned by you.

**What I make:**

- Marketing sites — 5 to 20 pages, fully responsive, fast
- Custom dashboards — admin tools, internal panels, reporting
- Event platforms — ticketing, scanning, member access
- Web applications — multi-user products with auth + database
- Integrations — Stripe, Mailchimp, calendars, third-party APIs

| Detail | Value |
| --- | --- |
| Timeline | 2–6 weeks |
| Price range | $3,500 – $25,000+ |
| Code ownership | 100% yours |

### ii. Launch — *going live*

Launch day is not a "fingers crossed" moment. Hosting set up, SEO foundation laid, day-of monitoring in place.

- Domain & hosting — fully configured, SSL active
- SEO foundation — sitemap, robots, meta tags, OG images
- Analytics — Plausible or Fathom, privacy-first
- Email — hello@yourdomain working day one
- Day-of coordination — 24-hour monitoring

### iii. Maintain — *ongoing care*

Launching is 20% of the work. Maintain is the other 80%.

| Tier | Price | Includes |
| --- | --- | --- |
| **Essential** | $99/mo | Uptime monitoring · weekly backups · security patches · 1-hour outage response |
| **Active** | $299/mo | Essential + 4 hrs monthly content updates + performance report |
| **Full** | $799/mo | Active + 10 dev hours/mo + priority response + monthly strategy call |

---

## Pricing

| Tier | Price | Best For |
| --- | --- | --- |
| **Foundation** | $3,500 – $6,000 | Restaurants, local services, single-product businesses |
| **Custom** | $8,000 – $25,000 | Event hosts, SaaS tools, internal platforms |
| **Bespoke** | $25,000+ | Established businesses, multi-feature platforms |

**Payment terms:** 50% deposit on signing, 50% on launch. Net 14 invoicing. Maintain can be cancelled with 30-day notice.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Vite + React 19 + TypeScript |
| Styling | Vanilla CSS with CSS variables (design token system) |
| Routing | react-router-dom v7 |
| Animations | Framer Motion + Lenis smooth scroll |
| Scheduling | Calendly popup widget |
| Package manager | pnpm |
| Node | >= 20.0.0 |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Type-check + production build to `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Run ESLint |

---

## Project Structure

```text
src/
  App.tsx              Router + layout shell
  main.tsx             Entry point
  routes.ts            Centralized route paths
  pages/               Route-level components
    Home.tsx
    Services.tsx
    Work.tsx
    WorkDetail.tsx
    Pricing.tsx
    About.tsx
    Contact.tsx
  components/
    ui/                Shared primitives (Button, Eyebrow, Accent, Plexus, CalendlyBadge, etc.)
    layout/            Nav, Footer, PageWrap, AmbientBackground, CtaBand, FinalCta
  content/             All copy + data constants (studio, home, services, work, pricing, about, contact)
  hooks/               useScrollToTop, useBodyScrollLock
  lib/                 Validators, renderBold utility
  types/               Shared TypeScript types
  styles/
    base.css           Design tokens, global resets, CSS variables
    modules/           Per-component CSS (services, about, contact, pricing, etc.)
    shared.css         Layout utilities (.doc, .section, etc.)
public/
  favicon.svg          SVYNE three-layer mark
```

---

## Pages

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Hero, three pillars, work preview, process, CTA |
| `/systems` | Systems | Deep-dive into Build / Launch / Maintain (operational modules) |
| `/outcomes` | Outcomes | Case study and business outcomes index |
| `/outcomes/:slug` | Outcome Detail | Individual case study analysis |
| `/investment` | Investment | Pricing packages, maintain plans, bundles, add-ons |
| `/about` | About | Studio story, values, team, location |
| `/contact` | Contact | Inquiry form + next steps |
| `/faq` | FAQ | Frequently asked questions |

---

## Design System

The visual identity follows a **"Studio White"** and **"Technical Slate"** aesthetic:

- **Color palette:** Warm parchment backgrounds, ink-dark text, sienna accent (`#ff5a36`), gold highlights
- **Typography:** Outfit (display), Inter (sans), JetBrains Mono (mono), Cormorant Garamond (italic accents fallback)
- **Motion:** Lenis smooth scroll, Framer Motion page transitions, ambient Plexus particle animation
- **Layout:** `.doc` container with responsive padding (48px → 28px → 20px)

All tokens are centralized in `src/styles/base.css`. No hardcoded hex values, font sizes, or breakpoints elsewhere.

For the full design specification, see [`design_rules.md`](./design_rules.md).

---

## Brand Guidelines

- The italic period after **svyne.** is part of the wordmark
- No blue. No stock photos. No "starting at."
- All copy in `src/content/` — never hardcode strings in components
- Cormorant italic styling for accent phrases

---

## Contact

- **Email:** <hello@svyne.com>
- **Location:** Mobile, Alabama
- **Schedule:** [calendly.com/patelsiddh1408/30min](https://calendly.com/patelsiddh1408/30min)

---

*SVYNE · EST. 2026 · site vision · growth · foundation.*
