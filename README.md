# NexaFlow AI — AI SaaS Landing Page

> A production-minded AI SaaS landing page built with Next.js App Router, bilingual UX, RTL/LTR support, polished dark/light mode, and conversion-focused sections.

NexaFlow AI is a modern landing page template for an AI workflow product that helps teams turn scattered AI outputs into structured, reviewable, and approval-ready workflows.

This project was converted from a Figma-generated React design into a clean, maintainable Next.js codebase with reusable components, centralized translations, and a stronger production structure.

---

## Preview

> Add your deployed URL here:

```txt
https://your-domain.com
```

---

## What This Project Is

NexaFlow AI is designed as a premium SaaS landing page for products in the AI workflow, productivity, automation, and team collaboration space.

It is not just a visual landing page. The structure is prepared to become a real product frontend with authentication pages, localized content, SEO files, reusable UI components, and theme handling.

---

## Target Audience

This landing page is best suited for:

- AI SaaS startups
- Workflow automation platforms
- Productivity tools
- Team collaboration products
- AI content approval systems
- B2B software products
- Founders validating a new AI product
- Developers building premium landing page templates

---

## Core Message

AI output alone is not enough.

Modern teams need a controlled workflow around AI-generated work:

```txt
Create → Review → Approve → Publish
```

NexaFlow AI communicates that idea through a polished SaaS interface, strong visual hierarchy, and clear conversion flow.

---

## Features

- Built with Next.js App Router
- TypeScript-first codebase
- Tailwind CSS v4 styling
- Arabic and English support
- RTL and LTR layout handling
- Dark and light mode
- Cookie-based theme persistence
- No theme script warning inside React components
- Sign In page
- Sign Up page
- SEO-ready structure
- `robots.ts` included
- `sitemap.ts` included
- Reusable UI components
- Clean folder architecture
- Responsive design for mobile, tablet, and desktop
- Conversion-focused landing sections
- Figma-to-code friendly structure

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Utilities | CVA, clsx, tailwind-merge |
| Icons | lucide-react |
| i18n | Dictionary-based local translations |
| Theme | Cookie-based dark/light mode |
| Routing | Locale-based routes |
| SEO | Next.js Metadata API, sitemap, robots |

---

## Routes

| Route | Description |
| --- | --- |
| `/en` | English landing page |
| `/ar` | Arabic landing page |
| `/en/signin` | English sign in page |
| `/ar/signin` | Arabic sign in page |
| `/en/signup` | English sign up page |
| `/ar/signup` | Arabic sign up page |

The root route redirects users to `/en` by default through `src/proxy.ts`.

---

## Project Structure

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      signin/
        page.tsx
      signup/
        page.tsx
    globals.css
    robots.ts
    sitemap.ts

  components/
    auth/
      auth-shell.tsx
    landing/
      landing-page.tsx
    layout/
      language-switcher.tsx
      logo.tsx
      site-footer.tsx
      site-header.tsx
      theme-provider.tsx
      theme-toggle.tsx
    ui/
      badge.tsx
      button.tsx
      card.tsx
      input.tsx

  i18n/
    config.ts
    get-dictionary.ts
    messages/
      ar.ts
      en.ts

  lib/
    utils.ts

  proxy.ts
```

---

## Architecture Decisions

### 1. Locale-Based Routing

The project uses locale segments instead of duplicating pages:

```txt
/en
/ar
```

This keeps the routing clear and makes the project easier to expand later.

---

### 2. Centralized Translations

All page copy lives in:

```txt
src/i18n/messages/en.ts
src/i18n/messages/ar.ts
```

This avoids hardcoded strings inside components and keeps Arabic/English content easy to maintain.

---

### 3. RTL/LTR Support

Direction is resolved from the active locale:

```txt
ar → rtl
en → ltr
```

This allows the same components to work in both languages without creating duplicate layouts.

---

### 4. Cookie-Based Theme Handling

Dark/light mode is persisted using a cookie:

```txt
nexaflow-theme=dark
nexaflow-theme=light
```

The theme is read on the server inside the locale layout, which avoids client-side theme flicker and prevents React script rendering warnings.

---

### 5. Reusable UI Layer

The UI components are kept small and reusable:

```txt
button.tsx
card.tsx
badge.tsx
input.tsx
```

This keeps styling consistent across the landing page and auth screens.

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run development server

```bash
pnpm dev
```

### 3. Open the project

```txt
http://localhost:3000
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint and auto-fix issues |

---

## Recommended Quality Checks

Before deploying or publishing the template, run:

```bash
pnpm lint
pnpm build
```

For a clean local restart:

```bash
rm -rf .next
pnpm dev
```

---

## Design Direction

The design follows a premium AI SaaS visual style:

- Deep dark background
- Soft gradients
- Glass-like surfaces
- Clean product mockups
- Strong call-to-action sections
- Calm but premium spacing
- High contrast typography
- Modern B2B SaaS layout

The light mode keeps the same visual identity instead of becoming a generic white page.

---

## Landing Page Sections

The landing page is structured to support conversion:

1. Header
2. Hero section
3. Product preview
4. Problem framing
5. Workflow explanation
6. Feature grid
7. Metrics/social proof
8. Pricing
9. FAQ
10. Final CTA
11. Footer

---

## Auth Pages

The project includes branded authentication pages:

- Sign In
- Sign Up

These pages are visual-only and ready to be connected later with a real authentication system such as:

- NextAuth/Auth.js
- Clerk
- Supabase Auth
- Custom credentials auth
- Laravel API backend

---

## SEO Notes

The project includes:

- Metadata configuration
- Open Graph metadata foundation
- Sitemap route
- Robots route
- Clean locale URLs
- Semantic landing page structure

Before deployment, update the production domain in:

```txt
src/app/[locale]/layout.tsx
src/app/sitemap.ts
```

Replace placeholder URLs with your final production URL.

---

## Deployment

Recommended platforms:

- Vercel
- Netlify
- Cloudflare Pages

For Vercel:

```bash
pnpm build
```

Then deploy the repository through the Vercel dashboard.

---

## Customization Guide

### Change Brand Name

Update:

```txt
src/components/layout/logo.tsx
src/i18n/messages/en.ts
src/i18n/messages/ar.ts
```

### Change Landing Page Copy

Update:

```txt
src/i18n/messages/en.ts
src/i18n/messages/ar.ts
```

### Change Theme Styling

Update:

```txt
src/app/globals.css
```

### Add New Sections

Add section components under:

```txt
src/components/landing/
```

Then compose them inside:

```txt
src/components/landing/landing-page.tsx
```

---

## Future Improvements

Good next steps for turning this template into a full product:

- Add real authentication
- Add dashboard layout
- Add waitlist or email capture
- Add pricing checkout flow
- Add CMS-driven content
- Add blog/docs section
- Add analytics events
- Add form validation with server actions
- Add real product screenshots
- Add Open Graph image
- Add Arabic SEO metadata per locale

---

## Production Checklist

- [ ] Replace placeholder domain
- [ ] Add real favicon
- [ ] Add Open Graph image
- [ ] Add real product screenshots
- [ ] Connect auth forms
- [ ] Add analytics
- [ ] Run Lighthouse checks
- [ ] Test Arabic RTL pages
- [ ] Test English LTR pages
- [ ] Test mobile navigation
- [ ] Run `pnpm lint`
- [ ] Run `pnpm build`

---

## Why This Template Is Strong

NexaFlow AI is built to show more than visual design.

It demonstrates:

- Clean frontend architecture
- Bilingual product thinking
- SaaS positioning
- RTL/LTR support
- Modern Next.js routing
- Production-ready structure
- Strong UI consistency
- Reusable component design

That makes it useful as a portfolio project, a free template, or a starting point for a real AI SaaS product.

---

## Git Commit Message

```bash
git commit -m "Add professional README for NexaFlow AI landing page"
```

---

## License

You can define your preferred license here.

Recommended options:

- MIT License for open-source/free template usage
- Commercial license if you plan to sell it as a premium template

