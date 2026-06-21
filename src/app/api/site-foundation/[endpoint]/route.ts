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
const componentOptIn = { status: 'focus-ring-applied', file: 'src/foundation/evavo-foundation-components.css', mode: 'explicit-opt-in', appliedTo: ['homepage hero CTAs'] };
const quality = { status: 'baseline', seo: 'baseline', accessibility: 'baseline', performance: 'baseline', dayMode: 'preserve-existing', darkMode: 'preserve-existing', noClientBlockingFoundationCalls: true, preserveCurrentLoadingBehaviour: true };
const viewportQuality = { status: 'configured', viewports: ['mobile', 'tablet', 'desktop'], safeByDefault: true, reserveImageSpace: true, reserveVideoSpace: true, respectReducedMotion: true, maxLayoutShift: 0.1 };
const security = { status: 'configured', surface: 'public-site', safeByDefault: true, requiresPreviewForVisibleChanges: true, requiresApprovalForVisibleChanges: true, requiresSecurityHeadersReview: true, requiresDependencyAudit: true };
const assets = { status: 'configured', preferredSources: ['public-directory', 'cloudinary'], optimized: true, cloudinaryFolder: 'evavo/sites/touchpoint', publicAssetPrefix: '/public', preserveCurrentAssetPathsByDefault: true };
const editSurfaces = { status: 'configured', mode: 'preview-only', surfaceCount: 7, safeByDefault: true, textSurfaceCount: 2, imageSurfaceCount: 1, layoutSurfaceCount: 2 };
const appIntegrations = { status: 'configured', contractCount: 1, surfaces: ['chat'], capabilities: ['preview-alignment-change', 'preview-copy-change', 'preview-layout-change', 'preview-media-change', 'preview-seo-change', 'preview-visibility-change', 'read-edit-surfaces', 'read-manifest', 'read-quality-profile', 'read-readiness', 'read-route-inventory', 'read-site-elements', 'read-stack-inventory', 'request-approved-change'], preservesExistingCopyByDefault: true, preservesExistingLayoutByDefault: true, preservesExistingStyleByDefault: true, usesReadinessApi: true };

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
    return json(createEnvelope(endpoint, { api: { name: 'EVAVO Site Foundation API', version: API_VERSION, basePath: BASE_PATH, endpoints }, site: { id: SITE_ID, name: 'Touchpoint', integrationWave: 'wave-4-focus-ring-applied', mode: 'read-only' }, tokenAdoption, componentOptIn, quality, viewportQuality, security, assets, editSurfaces, appIntegrations }));
  }

  if (endpoint === 'health') {
    return json(createEnvelope(endpoint, { status: 'ok', checks: [{ id: 'foundation-route', status: 'pass' }, { id: 'json-only', status: 'pass' }, { id: 'noindex', status: 'pass' }, { id: 'viewport-quality', status: viewportQuality.safeByDefault ? 'pass' : 'review' }, { id: 'security-policy', status: security.safeByDefault ? 'pass' : 'review' }, { id: 'asset-policy', status: assets.optimized ? 'pass' : 'review' }, { id: 'edit-surfaces', status: editSurfaces.safeByDefault ? 'pass' : 'review' }] }));
  }

  if (endpoint === 'readiness') {
    return json(createEnvelope(endpoint, { status: 'wave-4-focus-ring-applied', routeInventory: routeInventory.status, stackInventory: stackInventory.status, tokenAdoption: tokenAdoption.status, componentOptIn: componentOptIn.status, quality, viewportQuality, security, assets, editSurfaces, appIntegrations }));
  }

  if (endpoint === 'route-inventory') return json(createEnvelope(endpoint, routeInventory));
  return json(createEnvelope(endpoint, stackInventory));
}
