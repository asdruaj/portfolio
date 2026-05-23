# AGENTS.md — Aldash.dev Portfolio

## Stack

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | React 19 | No TypeScript — all `.jsx` |
| Bundler | Vite 7 | `@vitejs/plugin-react` (Babel) |
| Styling | Tailwind CSS 4 | `@tailwindcss/vite` plugin; uses `@import "tailwindcss"` syntax, not `@tailwind` directives |
| 3D | Three.js + R3F 9 + Drei 10 | GLB model at `public/models/spaceship.glb` |
| Animations | `motion` (React) | Import from `'motion/react'` — this is the renamed Framer Motion successor |
| Email | EmailJS | Credentials hardcoded in `src/sections/Contact.jsx` |
| Analytics | `@vercel/analytics` | Integrated in `App.jsx` |
| Easing | `maath` | Used in `Hero.jsx` for 3D camera damping |

## Commands

```sh
npm run dev       # Vite dev server (HMR)
npm run build     # Production build → dist/
npm run preview   # Serve built app locally
npm run lint      # ESLint (neostandard flat config)
```

No test runner, no test scripts, no CI/CD.

## Architecture

- **Single page, no router.** All sections render linearly in `App.jsx`. Navigation uses anchor links: `#home`, `#about-me`, `#work`, `#contact`.
- **Entry**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Sections**: `src/sections/` — Hero, About, Projects, Experience, Contact, Footer
- **Components**: `src/components/` — reusable UI pieces
- **Data**: `src/constants/index.js` — projects, experiences, socials arrays
- **Styling**: Tailwind v4 custom theme + utility classes defined in `src/index.css` (`.c-space`, `.section-spacing`, `.text-heading`, grid helpers, form fields)

## Specifics an agent would miss

- **Tailwind v4**: No `tailwind.config.js` — theme is defined via `@theme` in CSS. Adding new colors/animations goes in `src/index.css`.
- **ESLint**: Uses `neostandard` — the package, not the StandardJS CLI. Config is a one-liner: `neostandard({})`.
- **No testing infrastructure**. Do not attempt to run tests.
- **3D Canvas** lives in the Hero section. React Three Fiber's `Canvas` is a separate React tree — components inside it (like `<Spaceship />`) cannot use context or hooks from outside. The `maath/easing` utility handles camera animation via `useFrame`.
- **`motion`** is the package name — NOT `framer-motion`. Imports are `from 'motion/react'`.
- **EmailJS credentials** (service ID, template ID, public key) are in `src/sections/Contact.jsx` line 30. These are client-side safe (EmailJS public keys are meant to be exposed) but should not be committed to public forks without rotation.

## Deploy

Vercel — `aldashdev.vercel.app`. Build command is the default `vite build`.
