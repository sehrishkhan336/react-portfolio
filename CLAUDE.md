# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build into /build
npm test           # Run tests in watch mode
npm run deploy     # Build then push to gh-pages (deploys to GitHub Pages)
```

## Architecture

Single-page React portfolio. No router — all sections live on one page and are scrolled to via anchor links (`#about`, `#skills`, etc.).

**Stack:** React 18, plain CSS (CSS custom properties), `react-icons` for all icons. No MUI, no Tailwind, no CSS-in-JS.

**Component tree:**
```
App                        (theme state, IntersectionObserver for .reveal)
├── Navbar                 (sticky glass bar, active-section highlight, hamburger drawer)
└── main
    ├── Hero               (full-viewport, typing effect via useRef ticker)
    ├── About              (photo placeholder, bio, animated stat counters)
    ├── Skills             (4-col icon grid, bars animate on scroll-entry)
    ├── Projects           (3 glassmorphism cards with tags + action buttons)
    ├── Experience         (vertical timeline with glowing dots)
    └── Contact            (form with touched/error validation + social links)
        └── <footer>       (name, copyright, icon links — rendered inside Contact)
```

**Styling system:** All design tokens (colors, spacing, shadows, radii) are CSS custom properties in `src/App.css`. Dark/light mode is toggled by setting `data-theme="light"` on `<html>` — light overrides are in the `[data-theme="light"]` block. To change the accent color, update `--color-accent` and `--color-accent-alt` in `:root`.

**Scroll reveal:** `App.js` runs one `IntersectionObserver` on mount that adds `.visible` to every `.reveal` element. Staggered delays use `.reveal-delay-1` through `.reveal-delay-5` utility classes (defined in `App.css`).

**Skill bar animation:** `Skills.js` runs its own observer on the `<section>` element; when it enters the viewport, `.skills--animated` is added to the grid, which sets `width: var(--bar-pct)` on each `.skills__bar-fill` via a CSS transition. The observer disconnects after firing once.

**Stat counters (About):** Each `<StatCard>` runs its own `IntersectionObserver` + `requestAnimationFrame` ease-out loop (`useCountUp` hook).

**Typing effect (Hero):** Pure `useRef` + `setTimeout` ticker (`useTypingEffect` hook) — no external library. State is stored in a ref so the closure never goes stale.

**Resume PDF:** Served as a static asset from `public/Resume/Sehrish-Khan.pdf`. Linked with `href="/Resume/Sehrish-Khan.pdf" download`.

**Deployment:** GitHub Pages via `gh-pages`. The `homepage` field in `package.json` is set to `https://sehrishkhan336.github.io/react-portfolio`.

## Working Rules

- Do not make changes unless explicitly asked.
- Make only one scoped change at a time.
- Explain what you are changing before making the change.
- Do not refactor unrelated code.
- Preserve existing logic unless the task is specifically to modify it.
- Read the relevant file(s) first before editing.
