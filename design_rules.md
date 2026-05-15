# SONOVO | Strict Design Rules & Brand Standards
**Version:** 1.0 (Technical Slate / Studio White)
**Objective:** To maintain absolute visual consistency across the SONOVO platform, ensuring every pixel adheres to the "Technical Precision meets Organic Growth" philosophy.

---

## 1. Design Philosophy
- **Identity:** High-end Technical Studio.
- **Visual Tension:** A balance between razor-sharp technical grids and fluid, organic "vines" or ambient drifts.
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
- **Eyebrow:** Font: Mono. Size: `10px`. Letter-spacing: `0.2em` to `0.22em`. Text-transform: `uppercase`.
- **Body:** Size: `16px`. Line-height: 1.6. Weight: 400.
- **Italics:** Use italics for "Sienna" accented words within headlines (e.g., `<em>SVONO</em>`).

---

## 4. Layout & Grid
The layout must feel grounded and technical.

### 4.1 Constraints
- **Max Width:** `1440px` (`--doc-max-width`).
- **Narrow Width:** `1080px`.
- **Gutter (Padding):**
  - Desktop: `48px`.
  - Tablet: `28px`.
  - Mobile: `20px`.

### 4.2 Spacing
- **Vertical Section Gap:** `100px` (Desktop) / `60px` (Mobile).
- **Internal Component Gap:** Multiples of `4px` or `8px`.
- **Navigation Height:** `80px`.

---

## 5. Motion & Interaction
Motion should be buttery, intentional, and never distracting.

### 5.1 Easing Curves
- **Brand Curve:** `cubic-bezier(0.16, 1, 0.3, 1)` (The "SVYNE" smooth curve).
- **Standard Out:** `cubic-bezier(0.2, 0.8, 0.2, 1)`.

### 5.2 Micro-Animations
- **Hover Transitions:** `0.3s` using `--ease-out`.
- **Fade-Up Staggers:** `1s` duration with `0.15s` increments (`d1` through `d5`).
- **Logo Rotate:** `15s` linear infinite (Y-axis).
- **Scroll Indicator:** `2s` loop with `10px` wheel travel.
- **Kinetic Shimmer:** `9s` duration. Note: Keyframes may vary between linear sweeps (`-200%` to `200%`) and ease-in-out pulses (`0%` to `100%`) depending on module.

---

## 6. Component Standards

### 6.1 Buttons
- **Shape:** Pill-shaped (`border-radius: 100px`).
- **Typography:** Sans, 14px, Weight 600.
- **Padding:** `14px 28px` (Primary).
- **Hover:** `translateY(-2px)` + `box-shadow: 0 10px 20px -5px var(--color-accent-soft)`.

### 6.2 Navigation
- **Blur:** `backdrop-filter: blur(12px)`.
- **Links:** Mono, 11px, Uppercase, `0.18em` letter-spacing.
- **Active State:** `4px` dot indicator centered `22px` below the link.

### 6.3 Dividers (Hairlines)
- **Height:** `1px`.
- **Color:** `var(--color-parchment-darker)` or `var(--color-border)`.
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

---

## 8. Development Rules
1. **No Inline Styles:** All styling must reside in `.css` modules or the global `base.css`.
2. **Semantic HTML:** Use `<section>`, `<article>`, `<aside>` for structure.
3. **Accessibility:** Ensure a minimum contrast ratio of 4.5:1 for body text (Ink on Cream exceeds this).
4. **Naming:** Use BEM-lite or descriptive lowercase-kebab classes (e.g., `hero-inner`, `btn-primary`).
