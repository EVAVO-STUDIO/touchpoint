# Touchpoint Website Development Instructions

Touchpoint is a public client-delivery website. Read `evavo.reliability.json` before changing it.

## Direct-main rules

- Automated work uses `repository-main:EVAVO-STUDIO/touchpoint` and commits directly to `main`.
- Do not create feature, repair, validation or release branches or pull requests.
- Pull with `--ff-only`, never force-push, preserve unrelated work and use the committed npm lockfile.
- Use Node 24 and npm 10.
- Classify provider failure, intentional skip and stale provider evidence before editing source.

## Validation

```powershell
npm ci --no-audit --no-fund
npm run check:all
```

The complete check covers source-secret scanning, the safe contact-mailto boundary, TypeScript, lint and the production Next.js build.

Do not introduce hidden provider credentials, unreviewed data capture, fake contact delivery, inaccessible interactions or client claims unsupported by approved content.

Shared EVAVO analytics, operations, document, support and automation engines must be integrated rather than duplicated here.

## Provider confirmation

After the final validated commit reaches `main`, Development Studio must run:

```powershell
pnpm mainline:confirm -- --repository EVAVO-STUDIO/touchpoint --sha <exact-main-sha>
```

Only the exact-current-main GitHub and canonical Vercel evidence counts. Missing proof is evidence debt, not success.
