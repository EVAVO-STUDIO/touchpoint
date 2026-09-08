#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const safeEnvironment = Object.freeze({
  PATH: process.env.PATH ?? '',
  PATHEXT: process.env.PATHEXT ?? '',
  SYSTEMROOT: process.env.SYSTEMROOT ?? '',
  WINDIR: process.env.WINDIR ?? '',
  HOME: process.env.HOME ?? '',
  USERPROFILE: process.env.USERPROFILE ?? '',
  TEMP: process.env.TEMP ?? '',
  TMP: process.env.TMP ?? '',
  CI: 'true',
  NODE_ENV: 'production',
  NEXT_TELEMETRY_DISABLED: '1',
  GIT_TERMINAL_PROMPT: '0',
  GCM_INTERACTIVE: 'Never',
  npm_config_audit: 'false',
  npm_config_fund: 'false',
  npm_config_offline: 'true',
  npm_config_update_notifier: 'false',
});

function readText(relativePath) {
  const target = path.join(ROOT, relativePath);
  if (!fs.existsSync(target)) throw new Error(`Missing governed file: ${relativePath}`);
  const state = fs.lstatSync(target);
  if (!state.isFile() || state.isSymbolicLink()) {
    throw new Error(`Invalid governed file: ${relativePath}`);
  }
  return fs.readFileSync(target, 'utf8');
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function requireEqual(label, observed, expected) {
  if (observed !== expected) {
    throw new Error(`${label} must equal ${JSON.stringify(expected)}; observed ${JSON.stringify(observed)}`);
  }
}

function requireFile(relativePath) {
  const target = path.join(ROOT, relativePath);
  if (!fs.existsSync(target)) throw new Error(`Missing production asset: ${relativePath}`);
  const state = fs.lstatSync(target);
  if (!state.isFile() || state.isSymbolicLink() || state.size <= 0) {
    throw new Error(`Invalid production asset: ${relativePath}`);
  }
  return state.size;
}

const packageDocument = readJson('package.json');
const reliability = readJson('evavo.reliability.json');
const tasks = readJson('evavo.tasks.json');
const manifest = readJson('evavo.manifest.json');
const layout = readText('app/layout.tsx');
const readme = readText('README.md');
const siteConfig = readText('lib/site.ts');

requireEqual('package identity', packageDocument.name, 'touchpoint-website');
requireEqual('canonical check command', packageDocument.scripts?.check, 'node scripts/check-repository.mjs');
requireEqual(
  'complete site check command',
  packageDocument.scripts?.['check:all'],
  'npm run security:source-secrets:check && npm run quality:contact-mailto:check && npm run typecheck && npm run lint && npm run build',
);

requireEqual('reliability repository', reliability.repository, 'EVAVO-STUDIO/touchpoint');
requireEqual('reliability default branch', reliability.defaultBranch, 'main');
requireEqual('reliability hosted validation requirement', reliability.providerConfirmation?.hostedGitHubActionsRequired, false);
requireEqual('reliability local validation', reliability.providerConfirmation?.localValidation, 'npm run check');
requireEqual('reliability exact main SHA requirement', reliability.providerConfirmation?.exactMainShaRequired, true);

requireEqual('task manifest schema', tasks.schemaVersion, 1);
requireEqual('task manifest kind', tasks.kind, 'evavo-repository-task-manifest');
requireEqual('task manifest repository', tasks.repository, 'EVAVO-STUDIO/touchpoint');
requireEqual('task check runtime', tasks.tasks?.check?.runtime, 'npm-script');
requireEqual('task check entry', tasks.tasks?.check?.entry, 'check');
requireEqual('task check network', tasks.tasks?.check?.network, 'disabled');

requireEqual('estate manifest schema', manifest.schemaVersion, 'evavo.repo-manifest.v1');
requireEqual('estate manifest key', manifest.identity?.key, 'touchpoint');
requireEqual('estate manifest owner', manifest.identity?.owner, 'EVAVO-STUDIO');
requireEqual('estate manifest status', manifest.identity?.status, 'active');
requireEqual('estate manifest branch', manifest.defaultBranch, 'main');
requireEqual('estate manifest local-first runtime', manifest.runtime?.localFirst, true);
requireEqual('estate manifest paid hosted control plane', manifest.runtime?.requiresPaidHostedControlPlane, false);

if (layout.includes('next/font/google')) {
  throw new Error('Touchpoint must not require Google font downloads during build.');
}
if (!siteConfig.includes("url: 'https://touchpoint.newwavesynergy.com'")) {
  throw new Error('Touchpoint canonical site URL drifted.');
}
for (const stale of [
  '## Replacing placeholders',
  'og-touchpoint.png   # 1200×630 — replace',
  'about-naomi-mabvurira.png  # 1000×1250 — replace',
  'next/font` with Google Fonts (downloaded at build time',
]) {
  if (readme.includes(stale)) throw new Error(`README still contains stale release text: ${stale}`);
}
if (fs.existsSync(path.join(ROOT, 'public/images/about-naomi-mabvurira.png'))) {
  throw new Error('Legacy placeholder portrait file must not remain in the production asset directory.');
}

const assets = Object.fromEntries(
  [
    'public/images/naomi-mabvurira.jpg',
    'public/images/og-touchpoint.png',
    'public/images/hero-tag-disc.png',
    'public/images/nws-logo.png',
  ].map((relativePath) => [relativePath, requireFile(relativePath)]),
);

console.log('\n==> Run complete Touchpoint site validation');
const completed = spawnSync(npm, ['run', 'check:all'], {
  cwd: ROOT,
  env: safeEnvironment,
  stdio: 'inherit',
  shell: false,
  windowsHide: true,
});
if (completed.error) throw completed.error;
if (completed.status !== 0) {
  throw new Error(`Touchpoint site validation failed with exit code ${completed.status ?? 1}`);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      kind: 'evavo-touchpoint-repository-check-v1-local-first',
      repository: 'EVAVO-STUDIO/touchpoint',
      networkRequired: false,
      hostedGitHubActionsRequired: false,
      providerCredentialsInherited: false,
      productionAssets: assets,
      sourceSecurityVerified: true,
      contactBoundaryVerified: true,
      typecheckVerified: true,
      lintVerified: true,
      productionBuildVerified: true,
    },
    null,
    2,
  ),
);
