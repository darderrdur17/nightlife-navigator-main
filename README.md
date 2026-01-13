# Bassline – Nightlife Navigator

Discover the best bars, clubs, and late-night eats in San Francisco with searchable filters, map view, and saved favorites backed by Supabase auth.

## Features
- City-specific guide with curated venue data (`src/data/venues.ts`) split into bars, clubs, and munchies
- Search and filter by vibe, neighborhood, price tier, and “open past 2AM”
- Grid or Leaflet-powered map view with custom markers
- Save/unsave venues to your profile (Supabase auth + `saved_venues` table)
- Responsive UI built with Tailwind + shadcn/ui components and animated with Framer Motion

## Tech Stack
- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui, Lucide icons
- React Router, React Query
- Leaflet / React-Leaflet for maps
- Supabase for auth and saved-venue persistence
- ESLint for linting

## Getting Started
1) Install dependencies (Node 18+ recommended):
```sh
npm install
```
2) Create an `.env.local` file in the project root and set:
```sh
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
```
3) Run the dev server:
```sh
npm run dev
```
4) Open the provided localhost URL to explore the app.

## Database Setup (Supabase)
- Tables expected: `profiles` and `saved_venues` (schemas defined in `src/integrations/supabase/types.ts`).
- Migrations live in `supabase/migrations/`; apply them to your project (e.g., `supabase db push` or run through the Supabase dashboard).
- The app uses the publishable (anon) key in the browser; keep service keys out of client env files.

## Project Structure
- `src/pages/` – top-level routes (`Index`, `Explore`, `Saved`, `Auth`, `NotFound`)
- `src/components/` – UI building blocks (filters, cards, map, modals, header)
- `src/data/venues.ts` – static venue catalog plus search/filter helpers
- `src/hooks/useAuth.tsx` – Supabase auth context (sign-in/up/out)
- `src/hooks/useSavedVenues.tsx` – saved venue CRUD via Supabase
- `src/integrations/supabase/` – Supabase client and generated types
- `public/` – PWA assets and service worker
- `supabase/` – migration files and config

## Key Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Using the App
- Home page highlights hero search, quick vibes, and late-night picks.
- Explore page supports text search, type/neighborhood/price filters, “open past 2AM” toggle, and map/grid views.
- Save venues from cards or modals after signing in; view them on the `Saved` page.

## Deployment
- Any static host (Vercel, Netlify, Cloudflare Pages, etc.) works. Build with `npm run build` and deploy `dist/`.
- Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in your hosting provider’s environment settings.
