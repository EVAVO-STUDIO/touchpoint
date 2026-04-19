# Touchpoint — by New Wave Synergy

Premium one-page landing site for **Touchpoint**, a digital asset
intelligence layer for the built environment, developed by
[New Wave Synergy](https://www.newwavesynergy.com).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion**, and **next-themes**.

---

## Getting started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
# → open http://localhost:3000

# Production build
npm run build
npm run start
```

Node 18.17+ required (Next.js 14).

---

## Design system

Committed to a refined editorial aesthetic — not the default "AI slop"
look. A serif display face creates unexpected gravitas against a
geometric sans body; the green accent stays surgical.

| Role       | Font              |
|------------|-------------------|
| Display    | Instrument Serif  |
| UI / body  | Manrope           |
| Mono / labels | JetBrains Mono |

All theming is driven by CSS variables in `app/globals.css` with a
`.dark` class toggle via `next-themes`. Full dark + light parity.
Theme toggle lives in the top nav.

### Colour tokens

| Token              | Dark         | Light        |
|--------------------|--------------|--------------|
| `--color-bg`       | `#0b0d10`    | `#faf9f6`    |
| `--color-surface`  | `#13161b`    | `#ffffff`    |
| `--color-text`     | `#f4f4f1`    | `#14171c`    |
| `--color-accent`   | `#34d399`    | `#0a8f5a`    |

---

## Project structure

```
touchpoint-website/
├── app/
│   ├── layout.tsx              # root layout: fonts, SEO, theme, JSON-LD
│   ├── page.tsx                # main one-page site (imports all sections)
│   ├── globals.css             # tokens, typography, component classes
│   ├── sitemap.ts              # dynamic sitemap.xml
│   ├── robots.ts               # dynamic robots.txt
│   ├── privacy/page.tsx        # Privacy Policy (Privacy Act 1988 / APPs)
│   └── terms/page.tsx          # Terms of Use (AU Consumer Law)
├── components/
│   ├── navbar.tsx              # scroll-aware nav + mobile sheet
│   ├── footer.tsx              # sitemap, legal, social
│   ├── logo.tsx                # wordmark + mark (SVG)
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── reveal.tsx              # scroll-triggered motion wrapper
│   ├── section-eyebrow.tsx
│   ├── legal-page.tsx
│   └── sections/
│       ├── hero.tsx            # 01 — hero + animated NFC card
│       ├── problem.tsx         # 02 — problem
│       ├── solution.tsx        # 03 — introducing Touchpoint
│       ├── how-it-works.tsx    # 04 — 4-step flow
│       ├── pilot.tsx           # 05 — pilot pathway
│       ├── impact.tsx          # 06 — impact bento
│       ├── data-layer.tsx      # 07 — future-state vision
│       ├── use-cases.tsx       # 08 — where it starts
│       ├── about.tsx           # 09 — Naomi / NWS
│       └── contact.tsx         # 10 — form (mailto) + direct links
├── lib/
│   ├── site.ts                 # single source of truth: nav, contact
│   └── utils.ts                # cn() helper
└── public/
    ├── favicon.svg
    ├── favicon.ico
    ├── apple-touch-icon.png
    ├── manifest.webmanifest
    └── images/
        ├── README.md           # instructions for replacing placeholders
        ├── og-touchpoint.png   # 1200×630 — replace
        └── about-naomi-mabvurira.png  # 1000×1250 — replace
```

---

## Replacing placeholders

See [`public/images/README.md`](./public/images/README.md) for the full
list. The two images with visible placeholders are:

1. **`public/images/about-naomi-mabvurira.png`** — portrait in the About
   section (4:5 ratio).
2. **`public/images/og-touchpoint.png`** — social-share preview
   (1200×630).

No code changes required — just drop the replacement file in at the
same path.

---

## Contact form

The contact form in section 10 generates a prefilled mailto to
`naomi@newwavesynergy.com`. No backend is required. When ready to
upgrade, swap `handleSubmit` in `components/sections/contact.tsx` for a
fetch to your preferred handler (Formspree, Resend, Netlify Forms, a
custom API route under `app/api/contact/route.ts`, etc.).

The footer also links directly to the parent NWS contact page.

---

## SEO

- Next.js Metadata API: title templates, OG, Twitter cards, canonical
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- JSON-LD structured data: `Organization`, `SoftwareApplication`, `WebSite`
- Semantic HTML, `en-AU` locale, skip-to-content link
- `next/font` with Google Fonts (downloaded at build time, no CLS)

Before deploying, update `siteConfig.url` in `lib/site.ts` to the final
domain.

---

## Legal pages

- `/privacy` — Privacy Act 1988 (Cth) and Australian Privacy Principles
  (APPs) compliant
- `/terms` — Australian Consumer Law compliant, governing law Victoria,
  Australia

Both include proper contact details and an OAIC complaints pathway.
Have a lawyer review both before production launch.

---

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<article>`)
- Skip-to-content link
- Keyboard-navigable focus states
- `aria-label` on all icon-only buttons
- Reduced-motion support (`prefers-reduced-motion`)
- Colour contrast meets WCAG AA in both themes

---

## Stack

| Package         | Version   | Purpose                    |
|-----------------|-----------|----------------------------|
| next            | 14.2.15   | React framework, SSR, SEO  |
| react / react-dom | 18.3.1  |                            |
| framer-motion   | 11.11.9   | Scroll + stagger motion    |
| next-themes     | 0.3.0     | Dark/light toggle          |
| lucide-react    | 0.453.0   | Icon set                   |
| tailwindcss     | 3.4.13    | Styling                    |
| typescript      | 5.6.3     | Types                      |

---

## Credits

Design + build for **New Wave Synergy Pty Ltd**, Australia.
Product: Touchpoint — Digital Asset Intelligence for the Built
Environment.
