# Varothayan Arumairatnam — Portfolio

Personal portfolio for **Varo**, a Software Engineering Technology (Artificial Intelligence) co-op student at Centennial College. Built with React for COMP229 Assignment 1 and designed to double as a recruiter-facing portfolio.

## Pages

Home · About Me · Projects · Education · Services · Contact Me (plus a 404 page)

## Features

- Six-page React app with client-side routing (React Router)
- Data-driven content: personal details, projects, skills and education live in `src/data/`
- Reusable components: `Button`, `ProjectCard`, `SectionHeading`, `SocialLinks`, `Icon`, `Logo`
- Original custom logo, responsive navbar with active state, mobile menu and résumé button
- Contact form with field validation that redirects to Home with a confirmation message
- Accessible by default: skip link, visible focus states, labelled controls, alt text, reduced-motion support
- Per-page titles and meta descriptions, favicon, Open Graph tags
- Vercel-ready with SPA rewrite so direct links to any route work

## Tech stack

React 18 · React Router 6 · Vite 5 · plain CSS (design tokens) · Vercel

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, Button, ProjectCard, ...)
  pages/        One file per route
  data/         siteConfig.js, projects.js, profileContent.js
  hooks/        usePageMeta (per-page title/description)
public/         images, favicon, og-image.png, résumé PDF
vercel.json     SPA rewrite for direct route loading
```

## Updating content

- Contact details, links and résumé path: `src/data/siteConfig.js`
- Projects (add screenshots, GitHub links): `src/data/projects.js`
- Skills, services and education: `src/data/profileContent.js`
- To replace the résumé, overwrite `public/Varothayan_Arumairatnam_Resume.pdf`

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel choose **Add New → Project**, import the repo.
3. Framework preset **Vite** (build `npm run build`, output `dist`). Deploy.

Or with the CLI: `npm i -g vercel && vercel --prod`.
