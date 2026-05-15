# SONOVO | Strict Design Rules & Brand Standards
**Version:** 1.0 (Technical Slate / Studio White)
**Objective:** To maintain absolute visual consistency across the SONOVO platform, ensuring every pixel adheres to the "Technical Precision meets Organic Growth" philosophy.

---

### 1.1 Brand Identity
- **Primary Mark:** The "SparkMark" (Three-layered glyph).
  - **Top/Bottom (Sienna):** Represents Stability and Aspiration.
  - **Middle (Growth Green):** Represents Organic Development.
- **Voice:** Technical Precision meets Organic Growth. "Technical Slate" meets "Studio White".

---

## 1. Design Philosophy
- **Identity:** High-end Technical Studio.
- **Visual Tension:** A balance between razor-sharp technical grids and fluid, organic "vines" or ambient drifts.
- **Robots Policy:** Strict **No-AI** stance. Metadata must include `noai` and `noimageai` directives to protect studio IP.
- **Surface First:** Use warm parchment layers to create depth.
- **Non-Negotiable:** **No Black Sections.** Large black or near-black slabs are strictly prohibited. Use `section-dark` (Sienna-tinted technical slate) instead.
- **Aesthetic:** "Studio White" (Cream/Parchment based) with high-contrast "Technical Slate" (Ink) typography and "Prismatic" (Sienna/Violet) highlights.

---

## 2. Color Governance
Strict adherence to these color tokens is mandatory. Do not use ad-hoc hex codes.

### 2.1 Core Palette
| Token | HEX | Usage |
| :--- | :--- | :--- |
| `--color-bg` | `#f6f1e8` | Primary background (Cream/Parchment) |
| `--color-ink` | `#231815` | Primary text and dark UI elements |
| `--color-accent` | `#ff5a36` | Brand highlights, CTAs, and active states |
| `--color-surface` | `#fbf7f1` | Lighter surface for cards and sections |
| `--color-surface-2`| `#f1e9de` | Mid-tone surface for depth |
| `--color-surface-3`| `#e8dccd` | Deepest surface tone |

### 2.2 Functional Accents
- **Sienna (Warm):** `#ff5a36` (Primary) | `#d94726` (Deep)
- **Vibrant Sienna (Hero):** `#FF2A00` (High-impact headline accents)
- **Growth (Green):** `#6f8358` (Organic elements)
- **Violet (Soft):** `#8d6c9f` (Technical shimmers)
- **Gold:** `#b58b45` (Premium accents)

### 2.3 Glass & Borders
- **Glassmorphism:** `rgba(251, 247, 241, 0.84)` with `backdrop-filter: blur(12px)`.
- **Standard Border:** `rgba(58, 42, 34, 0.12)` (Hairline).
- **Strong Border:** `rgba(58, 42, 34, 0.18)`.

---

## 3. Typography System
Typography is the cornerstone of the brand. Scale must be fluid.

### 3.1 Font Families
- **Display:** `"Outfit"` (Weights: 200-800). Used for headlines and brand marks.
- **Sans:** `"Inter"` (Weights: 300-600). Used for body text and UI components.
- **Mono:** `"JetBrains Mono"`. Used for technical metadata, eyebrows, and code.
- **Italic:** `var(--font-italic)`. Used for secondary editorial accents and outcomes.

### 3.2 Scales & Rules
- **H1 (Hero):** `clamp(72px, 11vw, 168px)`. Weight: 200. Line-height: 0.88. Letter-spacing: `-0.055em`.
- **H2 (Section):** Weight: 300. Line-height: 0.92–0.95. Letter-spacing: `-0.035em` to `-0.04em`.
- **Eyebrow:** Font: Mono. Size: `10px`. Letter-spacing: `0.22em` (Preferred) / `0.2em` (Base). Text-transform: `uppercase`.
- **Body:** Size: `16px`. Line-height: 1.6. Weight: 400.
- **Editorial (Narrative):** Size: `17px`. Line-height: 1.7. Used for case study body and team bios.
- **Editorial (Lead):** Size: `22px`. Line-height: 1.55. Used for story blocks and intro decks.
- **Small (Caption):** Size: `14px` or `14.5px`. Line-height: 1.6. Used for cards and metadata.
- **Large Display (Number):** Size: `88px` to `140px`. Weight: 800. Opacity: `0.2` to `0.4`. Used for sticky section indicators and decorative quotes.
- **Process Indices:** Use lowercase Roman Numerals (`i.`, `ii.`, `iii.`) for multi-step process narratives.
- **Eyebrow Symbols:** Use the `◆` (Diamond/Spark) character to bookend eyebrows and chapter markers (e.g., `◆ Chapter 01 ◆`).
- **Italics:** Use italics for "Sienna" accented words within headlines (e.g., `<em>SVONO</em>`).

---

## 4. Layout & Grid
The layout must feel grounded and technical.

### 4.1 Constraints & Breakpoints
- **Max Width:** `1440px` (`--doc-max-width`).
- **Narrow Width:** `1080px`.
- **Breakpoints:**
  - `1440px`: Ultra-wide.
  - `1024px`: Tablet / Small Laptop transition.
  - `768px`: Tablet Portrait.
  - `640px`: Mobile Standard.
- **Gutter (Padding):**
  - Desktop: `48px`.
  - Tablet: `28px`.
  - Mobile: `20px`.

### 4.2 The Triple Grid System
The site uses hierarchical grids to manage visual density:
1.  **Ambient Grid (Master):** `88px`. Used for background drifts and large layouts.
2.  **Work Grid (Tile):** `42px`. Used for work previews and project shells.
3.  **Micro Grid (Detail):** `32px`. Used for CTA backgrounds and high-density textures.

### 4.3 Spacing
- **Vertical Section Gap:** `100px` (Desktop) / `60px` (Mobile).
- **Structural Spacing:** Multiples of `8px` for containers and major blocks.
- **Optical Spacing:** `10px`, `18px`, `22px` used for component internal rhythm and balanced gutters.
- **Navigation Height:** `80px`.
- **Active Link Indicator:** `4px` dot centered `22px` below the navigation link.

### 4.4 Surface Transparency (color-mix)
- **Deep Parchment:** `color-mix(in srgb, var(--color-surface-2) 65%, transparent)`.
- **Cream Fade:** `color-mix(in srgb, var(--color-surface) 60%, transparent)`.

### 4.4 Z-Index Stack
- **Global Navigation:** `100`
- **Hero Overlays:** `10`
- **Interactive Canvas (Plexus):** `3`
- **Content Layers:** `1`
- **Global Background:** `-1`

---

## 5. Motion & Interaction
Motion should be buttery, intentional, and never distracting.

### 5.1 Page Transitions (Framer Motion)
- **Entrance:** `initial={{ opacity: 0, y: 10 }}`.
- **Presence:** `animate={{ opacity: 1, y: 0 }}`.
- **Exit:** `exit={{ opacity: 0, y: -10 }}`.
- **Timing:** `duration: 0.4s` using `[0.23, 1, 0.32, 1]` ease.

### 5.2 Global Physics (Lenis)
- **Duration:** `1.2s`.
- **Easing:** `exponential-out` (`(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`).
- **Feel:** Smooth, weighted decelerations.

### 5.2 Transition Scale
- **0.2s:** UI feedback (Inputs, Toggles).
- **0.3s:** Standard transitions (Buttons, Links, Opacity).
- **0.4s:** Heavy UI (Pricing packages, Cards).
- **0.5s:** Structural reveals (Work tiles, Grid shifts).
- **0.6s:** Secondary animations (Preview panels, Staggers).
- **1.0s+:** Ambient drifts and ambient-vine movements.

### 5.3 Micro-Animations
- **Brand Curve:** `cubic-bezier(0.16, 1, 0.3, 1)` (The "SVYNE" smooth curve).
- **Standard Out:** `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Logo Rotate:** `15s` linear infinite (Y-axis).
- **Living Circle Morph:** `5s` duration. Transitions between `50%` radius (circle) and `4px` radius (square) with a custom `.41, .06, .37, .98` curve.
- **Ambient Drift:** `34s` duration (Field), `28s` (Grid), `38s` (Vine-A), `42s` (Vine-B).
- **Vine Morph:** Borders oscillate between `48% 52% 46% 54%` and `58% 42% 54% 46%` to simulate organic growth.
- **Scroll Indicator:** `2s` loop with `10px` wheel travel.

---

## 6. Component Standards

### 6.1 Border Radius Scale
- **4px:** Micro tags and small indicators.
- **6px:** Form inputs and utility panels.
- **8px:** Submit buttons and action triggers.
- **10px:** Addons and smaller cards.
- **12px:** Secondary containers and steps.
- **14px:** Work tiles and primary interactive cards.
- **16px:** Hero cards and large section wrappers.
- **18px:** Bundles and etymology blocks.
- **20px:** Pricing packages and value cards.
- **100px:** Pill-shaped primary buttons.

### 6.2 Shadow & Glow System
- **Elevate:** `0 10px 20px -5px rgba(58, 42, 34, 0.1)`.
- **Glow (Sienna):** `0 12px 28px -10px var(--color-sienna-deep-glow)`.
- **Glow (Gold):** `0 8px 20px -8px var(--color-gold-faint)`.
- **Prismatic:** `0 32px 64px -24px rgba(58, 42, 34, 0.18)`.

### 6.3 Dividers & Links
- **Hairlines:** `1px` height. Uses `var(--color-parchment-darker)` on light surfaces; `var(--color-border)` on dark surfaces.
- **Link Draw:** `1.5px` solid underline that expands from `width: 0` on hover or active state.
- **Max Width:** `1320px` (centered).

---

## 7. Visual Elements & Texture

### 7.1 The Grid
- **Dot Pattern:** `0.75px` circles.
- **Grid Pattern:** `1px` hairlines at `88px` intervals.
- **Animation:** Linear drift over `28s` to `30s`.

### 7.2 Prismatic Shimmers
- Use `linear-gradient(110deg, var(--color-ink), var(--color-accent), var(--color-violet-soft), var(--color-ink))`.
- Background size: `300% 100%`.
- Animation: `kinetic-shimmer 9s ease-in-out infinite`.

### 7.3 Technical Plexus
- **Nodes:** `var(--color-gold)` circles, size `1.2px` to `3.7px`.
- **Connections:** `var(--color-ink)` hairlines, dynamic opacity based on distance.
- **Physics:** High-velocity movement with standard mouse attraction (`radius: 180px`).

### 7.4 Micro-Decorations
- **Signature Line:** `28px x 2px` solid `var(--color-accent)`. Used as a visual lead-in for attribution and metadata.
- **Sticky Numbers:** Large, low-opacity numbers (`88px`) pinned to the viewport during section scrolls to provide structural context.
- **Quote Marks:** Large `120px` to `140px` italic glyphs used as background textures for testimonials.
- **Phantom Index:** Project titles displayed as lowercase background text within `WorkTileSvg` at `0.035` opacity.

### 7.5 Brand Archetypes
- **Foundation (Build):** Technical, structured, grounded.
- **Growth Point (Launch):** Dynamic, transitional, forward-moving.
- **Living System (Maintain):** Adaptive, ongoing, organic.

### 7.6 Narrative Primitives
- **Etymology Formula:** `TERM A + TERM B = BRAND`. Use `em` for terms, `span` for operators, and `.brand-period` for the final mark.
- **Portraits (Initial-only):** Team or persona portraits should use circular initial blocks rather than photography, maintaining a "Studio-Clean" look.

---

## 8. Development Rules
1. **No Inline Styles:** All styling must reside in `.css` modules or the global `base.css`.
   - **Exception:** Dynamic React properties (calculated animation delays, canvas dimensions, or state-driven transforms).
2. **Naming Convention:** Use BEM-lite with lowercase-kebab classes (e.g., `footer-inner`, `pkg-featured`). Avoid camelCase or Tailwind-style utilities in JSX.
   - **Note:** Tailwind is permitted within `.css` files (via `@apply`) but strictly forbidden in JSX `className` attributes.
3. **Semantic HTML:** Use `<section>`, `<article>`, `<aside>` for structure.
4. **Accessibility:**
   - **Contrast:** Ensure a minimum contrast ratio of 4.5:1.
   - **Decorative:** Use `aria-hidden="true"` for purely decorative elements like `Plexus` or `AmbientBackground`.
   - **Reduced Motion:** Honor `prefers-reduced-motion` by reducing all ambient and structural animation durations to `0.01ms`.
