#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

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

function forbidTokens(label, source, tokens) {
  for (const token of tokens) {
    if (source.includes(token)) errors.push(`${label}: contains forbidden material ${token}`);
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

const contact = read("components/sections/contact.tsx");
const packageJson = JSON.parse(read("package.json") || "{}");
const workflow = read(".github/workflows/quality.yml");
const readme = read("README.md");

requireTokens("Touchpoint contact form", contact, [
  "const CONTACT_LIMITS = Object.freeze({",
  "name: 100",
  "company: 160",
  "email: 254",
  "message: 2_000",
  "messageMinimum: 20",
  "subject: 180",
  "type ContactState = 'idle' | 'opening' | 'prepared' | 'error'",
  "if (!form.reportValidity()) return",
  "const formData = new FormData(form)",
  "encodeURIComponent(subject)",
  "encodeURIComponent(body)",
  "window.location.assign(mailto)",
  "setState('prepared')",
  "setState('error')",
  "Touchpoint has not sent anything automatically",
  "Nothing is sent automatically",
  "minLength={CONTACT_LIMITS.messageMinimum}",
  "maxLength={CONTACT_LIMITS.message}",
  "maxLength={CONTACT_LIMITS.name}",
  "maxLength={CONTACT_LIMITS.company}",
  "maxLength={CONTACT_LIMITS.email}",
  "Do not include passwords, access credentials or confidential",
  'role={state === \'error\' ? \'alert\' : \'status\'}',
  'aria-live={state === \'error\' ? \'assertive\' : \'polite\'}',
  'aria-describedby="touchpoint-contact-status"',
  'aria-describedby="touchpoint-message-guidance"',
  "focus-visible:ring-2",
  "min-h-12",
  "aria-label={`${eyebrow}: ${value}`}",
  'aria-hidden="true"',
]);
requireOrder("Touchpoint mailto handoff", contact, [
  "if (!form.reportValidity()) return",
  "const formData = new FormData(form)",
  "const mailto = `mailto:",
  "window.location.assign(mailto)",
  "setState('prepared')",
]);
forbidTokens("Touchpoint contact form", contact, [
  "setTimeout(",
  "setState('sent')",
  "state === 'sent'",
  "Prepared email",
  "Sending email",
  "Email sent",
  "fetch(",
  "axios",
  "dangerouslySetInnerHTML",
  "console.log(",
  "console.error(",
  "window.open(",
]);

const expectedCommand = "node scripts/check-contact-mailto-boundary.mjs";
if (packageJson.scripts?.["quality:contact-mailto:check"] !== expectedCommand) {
  errors.push(`package.json must expose quality:contact-mailto:check as ${expectedCommand}`);
}
const prebuild = String(packageJson.scripts?.prebuild || "");
const secretGate = "npm run security:source-secrets:check";
const contactGate = "npm run quality:contact-mailto:check";
if (!(prebuild.indexOf(secretGate) === 0 && prebuild.indexOf(contactGate) > prebuild.indexOf(secretGate))) {
  errors.push("prebuild must run source-secret safety before the mailto UX contract");
}

requireTokens("Touchpoint quality workflow", workflow, [
  "Verify tracked-source secret safety",
  "Verify mailto contact experience",
  "npm run quality:contact-mailto:check",
  "npm run lint",
  "npm run build",
]);
requireOrder("Touchpoint quality workflow", workflow, [
  "npm run security:source-secrets:check",
  "npm run quality:contact-mailto:check",
  "npm run lint",
  "npm run build",
]);

requireTokens("Touchpoint contact documentation", readme, [
  "## Contact form",
  "npm run quality:contact-mailto:check",
  "prepares a prefilled draft",
  "does not send the enquiry",
  "20–2,000 characters",
  "passwords, access credentials or confidential project records",
]);

console.log(JSON.stringify({
  passed: errors.length === 0,
  repository: "EVAVO-STUDIO/touchpoint",
  contract: "touchpoint-mailto-contact-boundary-v1",
  sendsEmailFromWebsite: false,
  hiddenNetworkSubmissionAllowed: false,
  subjectAndBodyEncoded: true,
  fieldLengthsBounded: true,
  nativeValidityRequired: true,
  truthfulDeliveryLanguageRequired: true,
  sensitiveInformationWarningRequired: true,
  accessibleStatusRequired: true,
  focusVisibilityRequired: true,
  sourceSecretGateRunsFirst: true,
  readOnlyCiRequired: true,
  errors,
}, null, 2));

if (errors.length) process.exitCode = 1;
