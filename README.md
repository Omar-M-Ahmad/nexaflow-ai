# NexaFlow AI Landing Page

A polished, bilingual AI SaaS landing page built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. The project is designed as a production-ready marketing page, not a static design export.

## Overview

NexaFlow AI is a conceptual SaaS landing page for teams that need a controlled workflow around AI-generated content: source collection, workspace organization, review, and approval.

The UI supports:

- English and Arabic routes.
- RTL and LTR direction handling.
- Dark and light mode.
- Responsive layouts for desktop, tablet, and mobile.
- Sign in and sign up pages aligned with the landing page identity.
- SEO-ready metadata, sitemap, and robots configuration.
- Netlify deployment support.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Radix Slot
- Class Variance Authority
- Netlify Next.js Runtime

## Routes

```txt
/en
/ar
/en/signin
/ar/signin
/en/signup
/ar/signup
```

The root route redirects to `/en` through `src/proxy.ts`.

## Project Structure

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      signin/page.tsx
      signup/page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    auth/
    landing/
    layout/
    ui/
  i18n/
    messages/
    config.ts
    get-dictionary.ts
    routes.ts
  lib/
    utils.ts
  proxy.ts
```

## Internationalization

Translations are centralized in:

```txt
src/i18n/messages/en.ts
src/i18n/messages/ar.ts
```

Locale configuration is handled in:

```txt
src/i18n/config.ts
```

Localized internal paths are generated through:

```txt
src/i18n/routes.ts
```

## Theme System

The project uses a lightweight custom theme provider instead of injecting scripts inside React components.

Theme state is stored in a cookie:

```txt
nexaflow-theme=dark | light
```

This avoids the React warning:

```txt
Encountered a script tag while rendering React component.
```

## Netlify Deployment

The project includes:

```txt
netlify.toml
```

Recommended build settings:

```txt
Build command: pnpm run build
Publish directory: .next
```

The Netlify plugin is configured automatically:

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Local Development

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

## Quality Notes

This version fixes the previously reported issues:

- Removed script injection from layout/theme logic.
- Added cookie-based theme handling.
- Added `data-scroll-behavior="smooth"` to the HTML element.
- Replaced deprecated `middleware.ts` with `proxy.ts`.
- Removed the typed routes mismatch that caused Netlify build failure.
- Added `netlify.toml` for predictable Netlify deployment.
- Pinned package versions instead of using `latest`.

## Recommended Git Commit

```bash
git commit -m "Stabilize NexaFlow AI build and deployment setup"
```
