# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

BillCraft landing page — a Next.js 16 marketing site for a German accounting SaaS (billcraft.at). German-language UI throughout.

## Commands

- **Dev server:** `npm run dev` (uses Turbopack)
- **Build:** `npm run build`
- **Start production:** `npm run start`
- **Lint:** `npm run lint`

## Tech Stack

- Next.js 16 (App Router) with TypeScript
- React 19, Tailwind CSS v4, Framer Motion
- Supabase (client in `src/utils/supabaseClient.ts`)
- Font: Sora (local variable font via `next/font/local`)
- Path alias: `@/*` → `./src/*`

## Architecture

**Routing (src/app/):** German URL slugs — `/preise` (pricing), `/rechnungen` (invoices). Each route has its own `page.tsx`. Root layout handles metadata, fonts, and SEO (German Open Graph/Twitter cards).

**Components (src/components/):** Feature-grouped subdirectories (`invoice/`, `pricing/`, `product-hero/`) with barrel exports (`index.ts`). Top-level shared components: `Header.tsx` (mega-menu nav with desktop hover + mobile accordion), `Footer.tsx`, `Button.tsx` (polymorphic, 3 variants/sizes), `Logo.tsx`.

**Animation pattern:** Framer Motion `whileInView` for scroll-triggered reveals. Common easing: `[0.22, 1, 0.36, 1]`. Custom CSS animations (blob, fade-mask) in `globals.css`.

**Styling:** Tailwind utility-first. Custom color tokens defined as CSS variables in `globals.css` (primary blue `#5C6CFE`, pink, orange, purple, green). No component CSS modules.

**Static site:** No API routes or middleware. All components are presentational with client-side interactivity via `"use client"` + Framer Motion.

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Conventions

- All user-facing text is in German
- Images use WebP format via Next.js `<Image>` component
- Deployed on Vercel
