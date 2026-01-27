# NextDoor Handyman Long Island Website

## Project Overview
SEO-optimized website for a handyman business serving Suffolk County, NY.

**Live Site:** https://nextdoorhandymanli.com
**GitHub:** https://github.com/system32s/nextdoor-handyman-li

## Tech Stack
- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS 4.x
- **Hosting:** Vercel
- **Forms:** Formspree (endpoint: `https://formspree.io/f/mjgwzalr`)
- **Domain:** nextdoorhandymanli.com (Namecheap)

## Business Information
- **Name:** NextDoor Handyman Long Island
- **Phone:** (631) 295-4020
- **Email:** contact@nextdoorhandymanli.com
- **Service Area:** Suffolk County, NY (based in Yaphank)
- **Type:** Service-based business (no physical storefront)

## Project Structure
```
src/
├── layouts/BaseLayout.astro    # Main layout with SEO meta tags
├── pages/
│   ├── index.astro             # Homepage
│   ├── about.astro             # About Us
│   ├── contact.astro           # Contact with quote form
│   └── services/
│       ├── index.astro         # Services overview
│       └── [slug].astro        # Dynamic service pages (11 total)
├── components/
│   ├── Header.astro            # Navigation with mobile menu
│   ├── Footer.astro            # Footer with NAP & Google Maps
│   ├── Hero.astro              # Reusable hero section
│   ├── ServiceCard.astro       # Service listing card
│   ├── QuoteForm.astro         # Formspree contact form
│   ├── LocalBusinessSchema.astro   # JSON-LD schema
│   └── ServiceSchema.astro     # Service + FAQ schema
├── data/services.ts            # All service data & business info
└── styles/global.css           # Tailwind + custom colors
```

## Services (11 total)
1. General Repairs
2. Plumbing
3. Electrical
4. Carpentry
5. Painting
6. Drywall
7. Furniture Assembly
8. Office Furniture Assembly
9. Pressure Washing
10. Gutter Cleaning
11. TV Mounting

## Color Scheme
- **Primary:** #1e3a5f (Navy Blue)
- **Secondary:** #2563eb (Bright Blue)
- **Accent:** #f59e0b (Orange - CTAs)
- **Light:** #f8fafc
- **Dark:** #0f172a

## Commands
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment
Vercel auto-deploys on push to `master` branch.

## Key Files to Edit
- `src/data/services.ts` - Service content, business info, Suffolk County towns
- `src/pages/index.astro` - Homepage content
- `src/components/QuoteForm.astro` - Form fields
- `public/logo.png` - Logo image

## SEO Features
- LocalBusiness schema on all pages
- Service schema on each service page
- FAQ schema for featured snippets
- Auto-generated sitemap at `/sitemap-index.xml`
- robots.txt configured
- Unique meta titles/descriptions per page
- Open Graph tags for social sharing
