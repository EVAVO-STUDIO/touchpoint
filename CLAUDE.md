# Claude Contract for Touchpoint

Read `AGENTS.md` and `evavo.reliability.json` first.

Work directly on `main` under `repository-main:EVAVO-STUDIO/touchpoint`. Do not create branches, pull requests or repositories. Pull with `--ff-only`, never force-push, preserve unrelated work and use the committed npm lockfile with Node 24 and npm 10.

Run `npm ci` and `npm run check:all`. Preserve source-secret, contact-mailto, accessibility, content and client-claim boundaries. Shared EVAVO capabilities belong in their canonical repositories and must not be reimplemented in this site.

After the final commit, Development Studio must dispatch `pnpm mainline:confirm -- --repository EVAVO-STUDIO/touchpoint --sha <exact-main-sha>`. Missing exact-SHA provider evidence is not a passing result.
