# Implementation Plan

## Stack Decisions

| Decision | Choice |
|---|---|
| Frontend | Nuxt 4 (with `app/` directory convention) |
| CSS | Tailwind CSS v4 |
| Font | Fredoka |
| Language | TypeScript |
| State | Composables (no Pinia) |
| Hosting | Netlify (SSG via `nuxt generate`) |

---

## Milestone 1: Project Initialization & Scaffold ✅

- [x] `package.json` — nuxt 4, `@nuxt/image`, `tailwindcss v4`, `@tailwindcss/vite`
- [x] `nuxt.config.ts` — SSG mode, Tailwind v4 plugin, Fredoka font, `@nuxt/image` module
- [x] `tsconfig.json`
- [x] `netlify.toml` — build command, publish dir, SPA redirect
- [x] `app/app.vue` — root with `<NuxtLayout>` + `<NuxtPage>`
- [x] `app/layouts/default.vue` — gradient background shell
- [x] `app/assets/css/main.css` — Tailwind v4 entry with Fredoka as default sans
- [x] Directory scaffold: `app/pages/`, `app/components/`, `app/composables/`, `app/data/`, `public/audio/`, `public/images/`

---

## Milestone 2: Global Sound Controller + Alphabet Module ✅

- [x] `app/composables/useAudioEngine.ts` — Singleton audio controller: queue-based, prevents overlap, supports Web Speech API + file playback
- [x] `app/composables/useProgressTracker.ts` — LocalStorage-based progress with reactive `useState`
- [x] `app/components/AudioButton.vue` — 3 sizes (48/64/80px), pulsing animation while playing, meets 64px touch target requirement
- [x] `app/components/LetterCard.vue` — Full-screen letter view: uppercase + lowercase, word, emoji association, audio buttons
- [x] `app/data/alphabet.ts` — 26 letters with Indonesian word associations + emoji
- [x] `app/pages/index.vue` — Home page with 4 module navigation cards + star badges on completed modules
- [x] `app/pages/learning/letters.vue` — A–Z colorful grid, tap for detail overlay with prev/next navigation, auto-plays pronunciation via Web Speech API, "Selesai" button marks completion

---

## Milestone 3: Numbers & Animals Modules ✅

### Numbers Module (`/learning/numbers`)

- [x] `app/data/numbers.ts` — Data for numbers 1–20
- [x] `app/components/NumberCard.vue` — Bold digit display with audio pronunciation
- [x] Update `app/pages/learning/numbers.vue` — 1–20 grid, tap for detail view with audio pronunciation

### Animals Module (`/learning/animals`)

- [x] `app/data/animals.ts` — Animal data categorized by habitat (Farm, Jungle, Ocean) with emoji/illustration placeholders
- [x] `app/components/AnimalCard.vue` — Grid card with thumbnail and name
- [x] `app/components/AnimalDetail.vue` — Full-screen view: illustration, phonetic label, animal sound button, name pronunciation button
- [x] `app/components/CategoryTabs.vue` — Horizontal tab bar for habitat categories
- [x] Update `app/pages/learning/animals.vue` — Category tabs, grid of cards, tap for full-screen detail

### Cross-module

- [x] Mobile responsive audit for both pages
- [x] Update `nuxt.config.ts` prerender routes for new pages

---

## Milestone 4: Objects Module + Gamification + Deploy ⚠️ (deploy pending)

### Objects Module (`/learning/objects`)

- [x] `app/data/objects.ts` — Data categorized by Fruits, Vehicles, Shapes, Colors
- [x] `app/components/ObjectCard.vue` — Flashcard with image + label, tap for audio
- [x] Update `app/pages/learning/objects.vue` — Category selection, flashcard/matching mechanics with audio confirmation

### Gamification

- [x] `app/components/ConfettiOverlay.vue` — Full-screen CSS confetti burst triggered on module completion
- [x] `app/components/BadgeDisplay.vue` — Shows earned badges/stars per module
- [x] Wire `useProgressTracker` into each module page → mark module complete after interaction
- [x] Wire `ConfettiOverlay` + success chime on completion

### Polish & Deploy

- [x] Responsive audit: ensure 64px touch targets, no CLS, mobile-first layout tested at 320px–768px
- [x] Final `netlify.toml` verification
- [x] Verify `npm run generate` builds cleanly to `dist/`
- [ ] Deploy to Netlify
