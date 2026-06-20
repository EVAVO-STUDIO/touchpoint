import { NextResponse } from 'next/server';

const SITE_ID = 'touchpoint';
const API_VERSION = '2026-06-19.v1';
const BASE_PATH = '/api/site-foundation';

const endpoints = ['manifest', 'health', 'readiness', 'route-inventory', 'stack-inventory'] as const;
type FoundationEndpoint = (typeof endpoints)[number];

const routeInventory = {
  status: 'inventoried',
  framework: 'next-app-router',
  routes: [
    { path: '/', kind: 'page', surface: 'public', visualRisk: 'low' },
    { path: '/api/site-foundation/[endpoint]', kind: 'api', surface: 'internal', visualRisk: 'low' },
  ],
  safeFirstRouteTargets: ['/', '/api/site-foundation/[endpoint]'],
  blockedRouteTargets: [],
};

const stackInventory = {
  status: 'inventoried',
  runtime: 'next-app',
  packageManager: 'npm',
  styleSystem: ['tailwind', 'global-css'],
  safeCommands: ['npm install', 'npm run build', 'npm run lint'],
};

const tokenAdoption = { status: 'tokens-imported', file: 'src/foundation/evavo-foundation-tokens.css', importPath: 'app/globals.css', mode: 'tokens-only' };
const componentOptIn = { status: 'classes-available', file: 'src/foundation/evavo-foundation-components.css', mode: 'explicit-opt-in' };

function isEndpoint(value: string): value is FoundationEndpoint {
  return (endpoints as readonly string[]).includes(value);
}

function json(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, { ...init, headers: { 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow', 'x-evavo-foundation-site': SITE_ID, ...(init?.headers || {}) } });
}

function createEnvelope(endpoint: FoundationEndpoint, data: unknown) {
  return { ok: true, version: API_VERSION, siteId: SITE_ID, endpoint, generatedAt: new Date().toISOString(), data };
}

export function GET(_request: Request, context: { params: { endpoint: string } }) {
  const endpoint = context.params.endpoint;

  if (!isEndpoint(endpoint)) {
    return json({ ok: false, version: API_VERSION, siteId: SITE_ID, endpoint, error: 'Unknown EVAVO foundation endpoint.' }, { status: 404 });
  }

  if (endpoint === 'manifest') {
    return json(createEnvelope(endpoint, { api: { name: 'EVAVO Site Foundation API', version: API_VERSION, basePath: BASE_PATH, endpoints }, site: { id: SITE_ID, name: 'Touchpoint', integrationWave: 'wave-4-component-opt-in', mode: 'read-only' }, tokenAdoption, componentOptIn }));
  }

  if (endpoint === 'health') {
    return json(createEnvelope(endpoint, { status: 'ok', checks: [{ id: 'foundation-route', status: 'pass' }, { id: 'json-only', status: 'pass' }, { id: 'noindex', status: 'pass' }] }));
  }

  if (endpoint === 'readiness') {
    return json(createEnvelope(endpoint, { status: 'wave-4-component-opt-in-prepared', routeInventory: routeInventory.status, stackInventory: stackInventory.status, tokenAdoption: tokenAdoption.status, componentOptIn: componentOptIn.status }));
  }

  if (endpoint === 'route-inventory') return json(createEnvelope(endpoint, routeInventory));
  return json(createEnvelope(endpoint, stackInventory));
}
