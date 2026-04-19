# Image assets

This directory holds production images referenced by the site. Replace each
placeholder below with a real image at the **exact filename** listed — the
code references these paths directly, so swapping the file is enough.

## Required images

### `og-touchpoint.png`
- **Used for:** Open Graph + Twitter card (preview when the site is shared)
- **Dimensions:** 1200 × 630 px
- **Format:** PNG or JPG
- **Guidance:** Dark background, large "Touchpoint by New Wave Synergy"
  wordmark, tagline "Digital Asset Intelligence for the Built Environment".
  Keep safe-area 80px from all edges.

### `about-naomi-mabvurira.png`
- **Used for:** About section portrait card (section 8)
- **Dimensions:** 1000 × 1250 px (4:5 portrait)
- **Format:** PNG or JPG
- **Guidance:** Professional portrait, slightly desaturated / editorial
  lighting works well against the dark theme. The card already applies a
  bottom gradient fade so the caption stays readable.

### `apple-touch-icon.png` *(optional)*
- **Used for:** iOS home screen icon
- **Dimensions:** 180 × 180 px
- **Format:** PNG
- **Guidance:** Solid dark background (#0b0d10), centered Touchpoint mark
  (white ring + green S swirl), ~20px padding.

## How to replace

1. Generate/export each image at the dimensions above.
2. Save to `public/images/` using the exact filename.
3. Remove the placeholder `.svg` if present.
4. Rebuild: `npm run dev` (or `npm run build` for production).

No code changes required.
