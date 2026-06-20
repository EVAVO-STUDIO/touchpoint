# EVAVO foundation

This folder contains low-risk foundation assets for progressive integration.

## `evavo-foundation-tokens.css`

Shared EVAVO CSS variables for light/dark/system theme work.

Current status: tokens are present and imported from `app/globals.css`.

The import is token-only. Existing Touchpoint `--color-*` variables and theme provider remain authoritative, so this should not force a visual redesign.

Next step: run build/visual QA, then selectively map low-risk components to EVAVO variables where useful.
