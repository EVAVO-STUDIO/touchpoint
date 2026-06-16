# Touchpoint Release QA Notes

Touchpoint is a product under the New Wave Synergy brand. The current approved site copy and design must be preserved unless a future client-approved change explicitly updates it.

## Brand and content rules

- Preserve the approved Touchpoint positioning copy.
- Preserve the current New Wave Synergy attribution and product relationship.
- Do not shorten approved homepage copy.
- Do not remove the New Wave Synergy parent-brand cues.
- Do not rewrite the client-approved tone into generic SaaS or AI-style marketing copy.

## Mobile, tablet, and desktop QA

Before any production release or major change, review:

- 375px mobile
- 390px mobile
- 768px tablet
- 1024px tablet / small laptop
- 1280px desktop
- 1440px desktop

Check:

- hero text does not clip;
- Touchpoint disc image scales correctly;
- mobile navigation is usable;
- CTAs do not overlap;
- footer New Wave Synergy attribution stays readable;
- contact details remain visible and tappable;
- dark and light themes remain legible.

## SEO QA

- Touchpoint remains identified as a New Wave Synergy product.
- Metadata title and description stay specific to digital asset intelligence for the built environment.
- Open Graph image remains configured.
- JSON-LD structured data remains available without depending on client-side JavaScript.
- Canonical URL remains correct.

## Accessibility QA

- Skip link remains available.
- Core navigation has a no-JS fallback.
- Mobile menu button exposes expanded state.
- Primary CTAs are normal links.
- Meaningful product imagery keeps descriptive alt text.
- Social links keep accessible labels.

## Performance QA

- No analytics or tracking should be added without approval.
- No heavy client-only product widgets should load by default.
- Primary content should remain server-rendered/static.
- Keep images optimized through Next Image where possible.
- Avoid adding new dependencies unless needed and approved.
