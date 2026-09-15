# Dinesh Kumar Katal — Portfolio

Product & Growth Manager portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

- [Next.js](https://nextjs.org) — App Router, React Server Components
- [React 19](https://react.dev) + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com) with oklch design tokens
- [shadcn/ui](https://ui.shadcn.com) primitives
- [Lucide](https://lucide.dev) icons
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Lint / typecheck / production build
npm run lint
npm run typecheck
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploying

This repository is set up for **GitHub → Vercel** deployment — no extra configuration needed; Vercel auto-detects Next.js.

### 1. Push to GitHub

Create a new repository on GitHub, then:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** on the repository you just pushed.
3. Vercel detects Next.js automatically — keep the default framework preset (Next.js).
4. Click **Deploy**. The production build runs `npm run build` with zero env variables required.
5. Once the build succeeds, your site is live at `<project>.vercel.app`. You can then add your custom domain under **Settings → Domains**.

Every push to `main` triggers a new production deployment automatically.

## Project Structure

```
src/
  app/          # Routes (/, /work, /beyond, /blog, /quick, case studies)
  components/   # React components
  lib/          # Utilities
public/         # Static assets (images, resume PDF, JS)
```