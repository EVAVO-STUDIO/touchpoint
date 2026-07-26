# Touchpoint — by New Wave Synergy

Premium one-page landing site for **Touchpoint**, a digital asset
intelligence layer for the built environment, developed by
[New Wave Synergy](https://www.newwavesynergy.com).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion**, and **next-themes**.

---

## Getting started

Use Node.js 24, matching the active Vercel project and the repository engine contract.

```bash
# Install the checked-in dependency graph
npm ci

# Verify tracked-source secret safety
npm run security:source-secrets:check

# Run the dev server
npm run dev
# → open http://localhost:3000

# Production validation
npm run lint
npm run build
npm run start
```

---

## Source-control security

Touchpoint is a public repository and currently has no runtime environment-variable requirement. The contact form creates a reviewed `mailto:` link in the browser; there is no email provider, database or server-side credential in the current application.

The repository still treats future source changes as potentially sensitive. The build runs:

```bash
npm run security:source-secrets:check
```

The tracked-source guard:

- rejects real `.env` variants while allowing the placeholder-only [`.env.example`](.env.example);
- rejects private-key material and common live provider-token shapes;
- rejects credential-bearing database, cache and HTTP URLs except inert reserved example/test fixtures;
- rejects tracked npm authentication tokens;
- reports only the affected file path and rule name, never a matched secret value;
- verifies that the ignore policy, environment posture, package command and this documentation remain present.

If a future server-side integration is introduced, add only reviewed placeholder names to `.env.example`, keep real values in Vercel environment settings and add a focused runtime contract before accepting submissions or provider calls. Adding a file to `.gitignore` does not remove an already committed credential from Git history; exposed credentials must be rotated or revoked.

---

## Design system

Committed to a refined editorial aesthetic — not the default "AI slop"
look. A serif display face creates unexpected gravitas against a
geometric sans body; the green accent stays surgical.

| Role       | Font              |
|------------|-------------------|
| Display    | Fraunces (variable, opsz + SOFT axes) |
| UI / body  | Manrope           |
| Mono / labels | IBM Plex Mono  |

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
│       ├── hero.tsx            # 01 — hero with real product photo
│       ├── problem.tsx         # 02 — sharpened pain points
│       ├── solution.tsx        # 03 — "the tag is just access"
│       ├── how-it-works.tsx    # 04 — Tag → Connect → Access → Log
│       ├── system.tsx          # 05 — 3-layer architecture
│       ├── workflows.tsx       # 06 — real field workflows
│       ├── pilot.tsx           # 07 — low-risk deployment pathway
│       ├── impact.tsx          # 08 — accountability + ecosystem fit
│       ├── about.tsx           # 09 — Naomi / NWS
│       └── contact.tsx         # 10 — form + direct links
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
upgrade, replace `handleSubmit` in `components/sections/contact.tsx`
with a reviewed bounded API route and provider contract rather than
adding browser-visible credentials.

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
