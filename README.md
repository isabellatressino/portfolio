# Portfolio — Isabella Tressino

Personal portfolio website showcasing projects, tech stack, and background. Built with React + Vite, styled with Tailwind CSS, and animated with Framer Motion. The site supports i18n (PT/EN) and a theme toggle.

## Live Demo

- https://isabellatressino.github.io/portfolio/

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- i18next + react-i18next

## Features

- Fully responsive layout
- Smooth entrance animations
- Language toggle (PT/EN)
- Theme toggle (dark by default)

## Project Structure

```
src/
  components/
    layout/        # Navbar, footer, mobile menu
    sections/      # Hero, About, Projects, Tech Stack
    utils/         # UI helpers
  data/            # Projects and tech stack data
  locales/         # i18n JSON (pt.json, en.json)
  styles/          # Tailwind layers and theme tokens
  pages/           # Page-level composition
```

## i18n

Translations live in:

- `src/locales/pt.json`
- `src/locales/en.json`

`src/i18n.js` initializes i18next.

## Deployment

This repo is configured for GitHub Pages via `gh-pages`:

## Copyright

© 2026 Isabella Tressino. All rights reserved.