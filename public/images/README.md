# Image assets

All images in this directory are production-ready client assets. Replace them
at the same filename if the client provides updated versions — no code
changes needed.

## Current assets

### `touchpoint-logo.png` — 1333×233
Full Touchpoint wordmark with transparent background, sourced from the client
and cleaned for web use. Used in the navbar and footer via the `Logo`
component.

### `touchpoint-mark.png` — 512×512
The O-with-fingerprint extracted from the wordmark. Transparent background.
Used for the small-logo variant and as the source for favicons.

### `hero-tag-hvac.jpg` — 740×542
Client-supplied product mock-up: a Touchpoint NFC/QR tag mounted on a
stainless HVAC unit, alongside a phone showing the asset record. Used as the
hero image. Unmodified original.

### `naomi-mabvurira.jpg` — 772×994 (max 1000 wide after optimisation)
Black-and-white on-site photograph of Naomi Mabvurira (Managing Director,
New Wave Synergy) in NWS-branded PPE. Used in the About section.

### `og-touchpoint.png` — 1200×630
Custom-designed Open Graph / Twitter card image. Dark background with a
subtle green accent glow and grid pattern, featuring the Touchpoint wordmark
and the italic tagline "Digital asset intelligence for the built environment."
Regenerated from scratch in a design tool if needed — the existing file is
final.

## Favicon / icon set (at project root `public/`)
- `favicon.ico` — multi-size ICO (16/32/48/64)
- `icon-192.png` — PNG favicon for Android
- `icon-512.png` — PNG favicon for PWA
- `apple-touch-icon.png` — 180×180, dark rounded-square background with the
  mark centered, for iOS home-screen icons

All of these are derived from `touchpoint-mark.png`. If the mark changes,
regenerate via the image processing script or drop in new files at the same
paths.

## Replacing

Just overwrite any file at the listed filename. Next.js's image pipeline
will automatically serve AVIF/WebP variants at build time.
