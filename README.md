# NexaFlow AI Landing Page

Production-ready Next.js landing page converted from the Figma-generated React/Vite design.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- next-themes for Dark/Light mode
- Dictionary-based i18n for Arabic/English
- RTL/LTR layout support
- Auth UI pages for Sign In and Sign Up

## Routes

- `/en` — English landing page
- `/ar` — Arabic landing page
- `/en/signin` — Sign in page
- `/ar/signin` — Arabic sign in page
- `/en/signup` — Sign up page
- `/ar/signup` — Arabic sign up page

The root route redirects to `/en` through middleware.

## Getting started

```bash
pnpm install
pnpm dev
```

Then open:

```bash
http://localhost:3000
```

## Project structure

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      signin/page.tsx
      signup/page.tsx
    globals.css
  components/
    auth/
    landing/
    layout/
    ui/
  i18n/
    config.ts
    get-dictionary.ts
    messages/
  lib/
```

## Design notes

The original Figma output was a single React component with a dark SaaS visual identity. This version keeps the same design language while improving the production structure:

- Sections are reusable and isolated.
- Text is centralized in translation dictionaries.
- Layout supports Arabic RTL without duplicating components.
- Theme tokens preserve the original dark design and provide a polished light mode.
- Sign in/sign up pages follow the same brand system instead of feeling detached.

## Git commit message

```bash
git commit -m "Convert Figma SaaS landing design to localized Next.js app"
```
