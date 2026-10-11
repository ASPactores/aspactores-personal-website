# Anakin Skywalker Pactores - Portfolio & CMS Monorepo

This repository is split into two independent services:

1. **`portfolio/`**: Static portfolio website powered by **Bun + Astro 5** and **React 19**.
2. **`cms/`**: Content Management System powered by **Payload 3.0** and **Next.js 15**.

---

## Architecture Overview

```
sky-personal-website/
├── portfolio/                 # Static Frontend (Astro 5 + Bun + React 19)
│   ├── src/
│   │   ├── components/        # React client islands & UI components
│   │   ├── layouts/           # Astro Layout with SEO, theme anti-FOUC & JSON-LD
│   │   ├── pages/             # Astro static routes (queries Payload API at build time)
│   │   ├── lib/cms.ts         # Payload CMS REST API client
│   │   ├── styles/globals.css # Theme palette (Cyan Light Mode & Dark Mode)
│   │   └── types/             # Lightweight frontend types
│   ├── public/                # Static assets, favicons, logos, sitemap, robots
│   ├── astro.config.mjs       # Astro configuration (React + Tailwind integrations)
│   ├── tailwind.config.mjs    # Tailwind configuration with dynamic theme variables
│   └── package.json           # Bun + Astro scripts & dependencies
│
├── cms/                       # Backend & Admin Dashboard (Payload 3.0 + Next.js 15)
│   ├── src/
│   │   ├── app/(payload)/     # Payload admin UI & REST/GraphQL API endpoints
│   │   ├── payload/           # Collections, globals, blocks, access rules
│   │   ├── payload.config.ts  # Payload configuration (Postgres, Vercel Blob, Lexical)
│   │   └── payload-types.ts   # Generated Payload database types
│   ├── next.config.mjs        # Next.js configuration for Payload
│   └── package.json           # Next.js + Payload dependencies
│
└── package.json               # Root monorepo workspace scripts
```

---

## Getting Started

### 1. CMS (`cms/`)

The CMS manages your portfolio content and provides both an admin dashboard and a REST API (`/api/globals/links`, `/api/globals/navigation-links`, `/api/pages`).

```bash
cd cms
npm install
npm run dev # Runs Next.js + Payload on http://localhost:3000
```

Admin dashboard: `http://localhost:3000/admin`  
REST API: `http://localhost:3000/api`

### 2. Portfolio (`portfolio/`)

The portfolio is a blazing-fast static website built with Astro and served with Bun. During build time, Astro queries the Payload CMS REST API to bake all content into static HTML.

```bash
cd portfolio
bun install   # Or: npm install
bun dev       # Or: npm run dev (Runs Astro on http://localhost:4321)
bun run build # Static site generation querying Payload CMS API
bun run preview
```

Environment variables for `portfolio/`:
```bash
# In portfolio/.env:
PUBLIC_CMS_URL=http://localhost:3000 # Or your deployed CMS URL
```

### Root Monorepo Commands

From the root directory, you can also run:
```bash
npm run dev:cms        # Start CMS server (http://localhost:3000)
npm run dev:portfolio  # Start Astro portfolio (http://localhost:4321)
npm run build:portfolio# Build static portfolio with Astro
npm run build:cms      # Build Next.js CMS
```
