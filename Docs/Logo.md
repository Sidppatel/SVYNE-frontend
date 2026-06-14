# svyne. Logo & Brand Mark Specifications

This document defines the geometry, markup, spacing, and colorways of the **svyne.** logo assets (the SparkMark and the wordmark lockup). For the philosophy, design narrative, and connection to the SVYNE engineering methodology, see [The Story Behind the svyne. Logo](file:///d:/SVYNE/design-system/logo-story.md).

---

## 1. The SparkMark Logo

The SparkMark represents a system hub accepting three primary data conduits (Leads, Appointments, Invoices) that aggregate multiple smaller operational tributaries/roots (e.g. emails, calendar events, messages, invoices, CRM data) and producing one optimized output node. It is vector-driven and must always match the exact coordinates below.

### 1.1 SVG Source Specification

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 57 213 126" width="100%" height="100%">
  <defs>
    <linearGradient id="branch-fade-sienna" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0" />
      <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="1" />
    </linearGradient>
  </defs>
  <path d="M 10 60 Q 40 45 96 104" class="spark-line-input-branch-base" stroke="url(#branch-fade-sienna)" stroke-width="4" stroke-linecap="round" />
  <path d="M 14 85 Q 50 92 96 110" class="spark-line-input-branch-base" stroke="url(#branch-fade-sienna)" stroke-width="4" stroke-linecap="round" />
  <path d="M 24 98 Q 50 85 96 116" class="spark-line-input-branch-base" stroke="url(#branch-fade-sienna)" stroke-width="5" stroke-linecap="round" />
  <path d="M 28 125 Q 60 135 96 124" class="spark-line-input-branch-base" stroke="url(#branch-fade-sienna)" stroke-width="5" stroke-linecap="round" />
  <path d="M 12 150 Q 50 140 96 130" class="spark-line-input-branch-base" stroke="url(#branch-fade-sienna)" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 16 180 Q 45 190 96 136" class="spark-line-input-branch-base" stroke="url(#branch-fade-sienna)" stroke-width="4.5" stroke-linecap="round" />
  <path d="M 32 68 Q 65 72 96 112" class="spark-line-input-base" stroke="var(--color-accent)" stroke-width="10" stroke-linecap="round" />
  <path d="M 56 110 Q 78 105 96 120" class="spark-line-input-base" stroke="var(--color-accent)" stroke-width="10" stroke-linecap="round" />
  <path d="M 36 168 Q 60 160 96 128" class="spark-line-input-base" stroke="var(--color-accent)" stroke-width="10" stroke-linecap="round" />
  <circle cx="32" cy="68" r="6" class="spark-node-input" fill="var(--color-accent)" />
  <circle cx="56" cy="110" r="11" class="spark-node-input" fill="var(--color-accent)" />
  <circle cx="36" cy="168" r="8" class="spark-node-input" fill="var(--color-accent)" />
  <circle cx="120" cy="120" r="24" class="spark-hub-outer" fill="transparent" stroke="var(--color-ink)" stroke-width="10" />
  <circle cx="120" cy="120" r="8" class="spark-hub-inner" fill="var(--color-accent)" />
  <path d="M144 120 L195 120" class="spark-line-output-base" stroke="var(--color-growth)" stroke-width="10" stroke-linecap="round" />
  <circle cx="200" cy="120" r="10" class="spark-node-output" fill="var(--color-growth)" />
</svg>
```

---

## 2. Horizontal Wordmark Lockup

On standard horizontal layouts (such as the Global Navigation Header), the SparkMark is paired with the wordmark `svyne.`.

* **Wordmark Text:** Rendered in lowercase using the display font (Outfit, `var(--font-display)`).
* **Period Element:** The trailing period must be wrapped in a `<span className="brand-period">.</span>` element and colored Sienna (`var(--color-accent)`).
* **Lockup Gap:** The SparkMark and the wordmark are separated by a micro-grid gap spacing (`var(--grid-micro)` or `32px` on desktop, scaled down proportionally on smaller screens).

---

## 3. Clear Space & Size Constraints

To maintain maximum visual clarity, the logo lockup must be insulated from other layout elements:

* **Clear Space Rule:** Minimum clear space surrounding all sides of the logo lockup must equal half the height of the SparkMark icon (`0.5 * height`). No text, graphics, or borders may intrude into this zone.
* **Minimum Sizing:**
  * **Desktop Lockup:** SparkMark height must be a minimum of `32px`.
  * **Mobile Lockup:** SparkMark height must be a minimum of `24px`.
  * **Favicon:** The favicon uses the SparkMark alone with viewBox `2 57 213 126` to crop closely to the canvas boundaries.

---

## 4. Logo Colorway Variants

The logo adapts to the surface tone of the section to maintain readable contrast:

### 4.1 Light Brand Theme (Default)

Used on cream (`var(--color-surface)`), parchment deep (`var(--color-surface-2)`), and light backgrounds:

* **Input Lines & Nodes:** Sienna (`var(--color-accent)` / `#ff5a36`)
* **Hub Outer Ring:** Ink (`var(--color-ink)` / `#231815`)
* **Hub Inner Core:** Sienna (`var(--color-accent)` / `#ff5a36`)
* **Output Line & Node:** Growth Green (`var(--color-growth)` / `#0fa968`)

### 4.2 Dark Theme (Optional / Utility)

For future dark templates or deep sienna backgrounds:

* **Input Lines & Nodes:** Sienna (`var(--color-accent)` / `#ff5a36`)
* **Hub Outer Ring:** Cream (`var(--color-surface)` / `#fbf7f1`)
* **Hub Inner Core:** Sienna (`var(--color-accent)` / `#ff5a36`)
* **Output Line & Node:** Growth Green (`var(--color-growth)` / `#0fa968`)

---

## 5. Opacity & Motion Hierarchy

To reflect the structured visual hierarchy, different opacity levels and animation properties are assigned to the elements of the SparkMark logo:

### 5.1 Opacities

* **Main Input Conduits & Output Conduit**: High static base opacity of `0.15` to represent the established primary pathways.
* **Tributary Branch Lines**: Fainter base opacity of `0.06` to keep background signals secondary. Because they use a horizontal linear gradient, they fade completely to transparent (`0` opacity) on the far left.

### 5.2 Animations & Motion

* **Base Input Conduits**: Stable, non-pulsing background paths.
* **Tributary Branch Lines**: Gently pulse/breathe between `0.03` and `0.09` opacity (duration `6s` ease-in-out) to represent raw, fluctuating operations.
* **Main Flow Pulses**: Travel at full sienna/growth intensity (`1.0` maximum opacity) to represent fast, clear, and consolidated system operations.
* **Tributary Flow Pulses**: Travel at a softer intensity (`0.35` maximum opacity) to represent background data movements feeding into main streams.
