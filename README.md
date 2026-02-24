# Bike Bliss — Landing Page

A responsive motorcycle landing page built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Features live weather data, smooth scroll navigation, and a fully componentised UI.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript 5 |
| HTTP client | Axios |
| Weather API | [WeatherAPI.com](https://www.weatherapi.com) |
| Font | Inter (via `next/font/google`) |

---

## Project Structure

```
bikes-landing-page/
├── app/
│   ├── api/
│   │   ├── axiosClient.ts       # Axios instance (timeout, interceptors)
│   │   └── getWeather.ts        # Server Action — fetches WeatherAPI.com
│   ├── layout.tsx               # Root layout (Inter font, metadata)
│   ├── page.tsx                 # Composes all section components
│   └── globals.css              # Tailwind theme (colors, font, scroll)
├── components/
│   ├── sections/
│   │   ├── Header.tsx           # Sticky nav + live weather bar
│   │   ├── Hero.tsx             # Full-height hero section
│   │   ├── MainFeature.tsx      # Alternating bike feature rows
│   │   ├── Testimonials.tsx     # Single testimonial block
│   │   ├── Faqs.tsx             # Accordion FAQ + contact CTA
│   │   ├── Cta.tsx              # Full-width gradient CTA banner
│   │   └── Footer.tsx           # Nav, social links, legal row
│   └── ui/
│       └── Button.tsx           # Shared button (filled / outline variants)
├── public/
│   └── images/                  # Static assets (hero, features, logos)
├── .env                         # Environment variables (see below)
└── next.config.ts
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root (one already exists — just add your key):

```env
WEATHER_API_KEY=your_weatherapi_com_key_here
```

Get a free API key at [weatherapi.com](https://www.weatherapi.com/signup.aspx).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `WEATHER_API_KEY` | Yes | WeatherAPI.com key. Stays server-side — never exposed to the browser. |

---

## Weather Integration

Weather is fetched using a **Next.js Server Action** (`app/api/getWeather.ts`).

- The `Header` component (client) calls `getWeather(lat, lon)` directly.
- The browser's **Geolocation API** supplies coordinates; falls back to New York (`40.7128, -74.006`) if permission is denied.
- Next.js transparently bridges the call to the server, keeping the API key out of the client bundle.
- Displayed data: condition icon, temperature (°C), condition label, wind speed (km/h).

```
Header (client)
  └─ navigator.geolocation → lat/lon
       └─ getWeather(lat, lon)  ← Server Action
            └─ axiosClient → api.weatherapi.com
```

---

## Reusable Components

### `Button` (`components/ui/Button.tsx`)

Accepts all standard HTML button attributes plus a `variant` prop.

```tsx
import Button from "@/components/ui/Button";

// Filled (default) — primary background, transparent on hover
<Button>Buy Now</Button>

// Outline — transparent background, primary border
<Button variant="outline">Contact</Button>

// With extra classes
<Button className="mt-4">Get Started!</Button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"filled" \| "outline"` | `"filled"` | Visual style |
| `className` | `string` | `""` | Additional Tailwind classes |
| `...props` | `ButtonHTMLAttributes` | — | All native button attributes |

---

## Design Tokens

Defined in `app/globals.css` via Tailwind v4 `@theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#56468B` | Buttons, accents, labels |
| `--color-section` | `#14121F` | Page and section backgrounds |
| `--font-sans` | Inter | Body font |

Use them as Tailwind classes: `bg-primary`, `text-primary`, `border-primary`.

---

## Adding Bike Images

The sections expect images at these paths under `public/images/`:

| File | Used in |
|---|---|
| `hero.webp` | Hero section |
| `feature1.webp` | StreetRider row |
| `feature2.webp` | ThunderBolt row |
| `feature3.webp` | TrailBlazer row |
| `testimonial.png` | Testimonials avatar |
| `footer-logo.png` | Footer logo |

---

## Deploying to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings need changing.
4. Before clicking **Deploy**, open **Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `WEATHER_API_KEY` | your WeatherAPI.com key |

5. Click **Deploy**. Done.

> Every push to the main branch triggers a new deployment automatically.

---

### Option B — Vercel CLI

```bash
# Install the CLI globally (once)
npm i -g vercel

# Login
vercel login

# Deploy from the project directory
vercel

# Deploy to production
vercel --prod
```

The CLI will prompt you to link the project and set environment variables on first run.

---

### Environment Variables on Vercel

The `WEATHER_API_KEY` must be added in the Vercel dashboard under:
**Project → Settings → Environment Variables**

Set it for all three environments (Production, Preview, Development) so branch previews also work.

Vercel never exposes server-side environment variables to the browser — the API key is safe.

---

### Preview Deployments

Every pull request gets its own preview URL automatically. Make sure `WEATHER_API_KEY` is set for the **Preview** environment (see above) so weather works on PR previews too.

---

## Scripts

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
