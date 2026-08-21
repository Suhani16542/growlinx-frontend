# Growlinx Frontend

Growlinx is a modern **Digital Marketing & Growth Agency** website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx`, `tailwind-merge`

## Project Structure

```text
growlinx-frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── sections/
│   │   │   └── CTASection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   └── PortfolioCard.tsx
│   │   └── common/
│   │       ├── Container.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── IconWrapper.tsx
│   │       └── Logo.tsx
│   │
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   └── blog.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── metadata.ts
│   │
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   │
│   └── types/
│       └── index.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```
