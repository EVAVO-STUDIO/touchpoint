# Touchpoint Review Action Notes

Touchpoint is the next product push under New Wave Synergy. Preserve approved client copy and current NWS attribution while improving release confidence.

## Review findings

- Touchpoint is already clearly tied to New Wave Synergy in site config, hero, footer, and structured data.
- The current homepage copy should be treated as approved client copy.
- The contact form is usable with JavaScript, but the form itself has no no-JS submit fallback. Direct email and phone links still provide a fallback path.
- JSON-LD structured data is currently injected after interactive JavaScript; server-rendered JSON-LD would be stronger for SEO resilience.
- The current site uses Next Image for key imagery and has responsive sections, but any visual edits need mobile/tablet/desktop screenshot review.

## Safe future fixes

- Keep all approved copy unchanged.
- Keep current NWS parent-brand attribution unchanged or stronger.
- Add a no-JS contact form fallback if a backend endpoint is available.
- Move JSON-LD to server-rendered markup if doing a code polish pass.
- Add screenshot review before changing layout or hero/product imagery.
