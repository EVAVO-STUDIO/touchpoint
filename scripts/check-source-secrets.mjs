#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const errors = [];
const SELF_PATH = "scripts/check-source-secrets.mjs";
const MAX_FILE_BYTES = 2 * 1024 * 1024;
const EXCLUDED_DIRECTORIES = new Set([
  ".git",
  ".next",
  ".vercel",
  "node_modules",
  "out",
  "coverage",
]);
const CREDENTIAL_URL_PATTERN = /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis|rediss|https?):\/\/[^\s/:@]+:[^\s/@]+@[^\s"'`<>]+/gi;
const RESERVED_FIXTURE_HOSTS = new Set([
  "example.com",
  "example.org",
  "example.net",
  "localhost",
  "127.0.0.1",
  "::1",
]);

function normalizePath(value) {
  return value.replaceAll("\\", "/").replace(/^\.\//, "");
}

function read(relativePath) {
  const absolute = path.join(root, relativePath);
  if (!fs.existsSync(absolute)) {
    errors.push(`Missing required file: ${relativePath}`);
    return "";
  }
  return fs.readFileSync(absolute, "utf8");
}

function requireTokens(label, source, tokens) {
  for (const token of tokens) {
    if (!source.includes(token)) errors.push(`${label}: missing ${token}`);
  }
}

function requireOrder(label, source, tokens) {
  let previous = -1;
  for (const token of tokens) {
    const current = source.indexOf(token, previous + 1);
    if (current < 0 || current <= previous) {
      errors.push(`${label}: invalid ordering at ${token}`);
      return;
    }
    previous = current;
  }
}

function trackedFiles() {
  const result = spawnSync("git", ["ls-files", "-z"], {
    cwd: root,
    encoding: "buffer",
  });
  if (result.status === 0 && result.stdout?.length) {
    return result.stdout
      .toString("utf8")
      .split("\0")
      .map(normalizePath)
      .filter(Boolean);
  }

  const files = [];
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (entry.isDirectory() && EXCLUDED_DIRECTORIES.has(entry.name)) continue;
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else if (entry.isFile()) files.push(normalizePath(path.relative(root, absolute)));
    }
  }
  walk(root);
  return files;
}

function isForbiddenEnvironmentFile(relativePath) {
  const name = path.posix.basename(relativePath);
  if (name === ".env.example") return false;
  return name === ".env" || name.startsWith(".env.");
}

function isBinary(buffer) {
  return buffer.subarray(0, Math.min(buffer.length, 8_192)).includes(0);
}

function reservedFixtureUrl(raw) {
  try {
    const hostname = new URL(raw).hostname.replace(/^\[|\]$/g, "").toLowerCase();
    return (
      RESERVED_FIXTURE_HOSTS.has(hostname) ||
      hostname.endsWith(".example") ||
      hostname.endsWith(".test") ||
      hostname.endsWith(".invalid")
    );
  } catch {
    return false;
  }
}

const signatureRules = [
  ["private-key-material", /-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/],
  ["github-token", /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,})\b/],
  ["aws-access-key", /\bAKIA[0-9A-Z]{16}\b/],
  ["google-api-key", /\bAIza[0-9A-Za-z_-]{30,}\b/],
  ["stripe-live-key", /\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/],
  ["resend-live-key", /\bre_[0-9A-Za-z]{20,}\b/],
  ["slack-token", /\bxox[baprs]-[0-9A-Za-z-]{20,}\b/],
  ["supabase-secret-key", /\bsb_secret_[0-9A-Za-z_-]{20,}\b/],
];

function scan(relativePath, source) {
  for (const [rule, pattern] of signatureRules) {
    if (pattern.test(source)) errors.push(`${relativePath}: ${rule}`);
  }

  CREDENTIAL_URL_PATTERN.lastIndex = 0;
  for (const match of source.matchAll(CREDENTIAL_URL_PATTERN)) {
    if (!reservedFixtureUrl(match[0])) {
      errors.push(`${relativePath}: credential-bearing-url`);
    }
  }

  if (path.posix.basename(relativePath) === ".npmrc") {
    for (const line of source.split(/\r?\n/)) {
      if (/(?:^|:)_authToken\s*=\s*[^${<\s][^\s]*/i.test(line)) {
        errors.push(`${relativePath}: npm-auth-token`);
      }
    }
  }
}

for (const fixture of [
  { value: "https://user:password@example.com/path", allowed: true },
  { value: "postgres://user:password@db.example.invalid/app", allowed: true },
  { value: "mysql://user:password@production.internal/app", allowed: false },
]) {
  if (reservedFixtureUrl(fixture.value) !== fixture.allowed) {
    errors.push(`credential URL fixture classification failed: ${fixture.value}`);
  }
}

const files = trackedFiles();
for (const relativePath of files) {
  if (isForbiddenEnvironmentFile(relativePath)) {
    errors.push(`${relativePath}: tracked environment file is forbidden`);
    continue;
  }
  if (relativePath === SELF_PATH) continue;

  const absolute = path.join(root, relativePath);
  if (!fs.existsSync(absolute)) continue;
  const stat = fs.statSync(absolute);
  if (!stat.isFile() || stat.size > MAX_FILE_BYTES) continue;
  const buffer = fs.readFileSync(absolute);
  if (isBinary(buffer)) continue;
  scan(relativePath, buffer.toString("utf8"));
}

const gitignore = read(".gitignore");
for (const token of [".env", ".env.*", "!.env.example", ".vercel", "*.pem"]) {
  if (!gitignore.split(/\r?\n/).includes(token)) {
    errors.push(`.gitignore: missing ${token}`);
  }
}

const environmentExample = read(".env.example");
for (const token of [
  "currently requires no runtime environment variables",
  "only tracked .env variant",
  "Never place provider credentials",
]) {
  if (!environmentExample.includes(token)) {
    errors.push(`.env.example: missing ${token}`);
  }
}

const packageJson = JSON.parse(read("package.json") || "{}");
const lockJson = JSON.parse(read("package-lock.json") || "{}");
const expectedCommand = "node scripts/check-source-secrets.mjs";
if (packageJson.scripts?.["security:source-secrets:check"] !== expectedCommand) {
  errors.push(`package.json must expose security:source-secrets:check as ${expectedCommand}`);
}
if (packageJson.scripts?.prebuild !== "npm run security:source-secrets:check") {
  errors.push("prebuild must run only the tracked-source secret gate before Next.js build");
}
if (packageJson.engines?.node !== "24.x") {
  errors.push("package.json must require the active Vercel Node 24 runtime");
}
if (lockJson.name !== packageJson.name || lockJson.packages?.[""]?.name !== packageJson.name) {
  errors.push("package.json and package-lock.json root package identities must remain aligned");
}

const readme = read("README.md");
for (const token of [
  "Use Node.js 24",
  "npm ci",
  "## Source-control security",
  "npm run security:source-secrets:check",
  "currently has no runtime environment-variable requirement",
  "public repository",
  "reports only the affected file path and rule name",
]) {
  if (!readme.includes(token)) errors.push(`README.md: missing ${token}`);
}

const workflow = read(".github/workflows/quality.yml");
requireTokens("Touchpoint quality workflow", workflow, [
  "permissions:\n  contents: read",
  "persist-credentials: false",
  'node-version: "24"',
  "npm ci --no-audit --no-fund",
  "npm run security:source-secrets:check",
  "npm run lint",
  "npm run build",
  '      - ".env.example"',
  '      - ".gitignore"',
  '      - "scripts/**"',
  "cancel-in-progress: true",
]);
requireOrder("Touchpoint quality workflow", workflow, [
  "npm ci --no-audit --no-fund",
  "npm run security:source-secrets:check",
  "npm run lint",
  "npm run build",
]);
for (const forbidden of [
  "vercel deploy",
  "VERCEL_TOKEN:",
  "secrets.",
  "persist-credentials: true",
]) {
  if (workflow.includes(forbidden)) {
    errors.push(`Touchpoint quality workflow contains forbidden material: ${forbidden}`);
  }
}

console.log(JSON.stringify({
  passed: errors.length === 0,
  repository: "EVAVO-STUDIO/touchpoint",
  contract: "touchpoint-tracked-source-secret-safety-v2-read-only-ci",
  trackedFilesInspected: files.length,
  maximumScannedFileBytes: MAX_FILE_BYTES,
  activeNodeRuntime: "24.x",
  runtimeEnvironmentVariablesRequired: false,
  trackedRealEnvironmentFilesAllowed: false,
  privateKeyMaterialAllowed: false,
  liveProviderTokensAllowed: false,
  nonReservedCredentialBearingUrlsAllowed: false,
  reservedFixtureCredentialUrlsAllowed: true,
  rawSecretValuesPrinted: false,
  packageLockRequired: true,
  prebuildGateRequired: true,
  readOnlyCiRequired: true,
  deploymentFromCiAllowed: false,
  ciCredentialsAllowed: false,
  errors,
}, null, 2));

if (errors.length) process.exitCode = 1;
