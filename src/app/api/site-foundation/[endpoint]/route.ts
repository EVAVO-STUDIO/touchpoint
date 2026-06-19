import { NextResponse } from 'next/server';

const SITE_ID = 'touchpoint';
const API_VERSION = '2026-06-19.v1';
const BASE_PATH = '/api/site-foundation';

const endpoints = ['manifest', 'health', 'readiness', 'route-inventory', 'stack-inventory'] as const;
type FoundationEndpoint = (typeof endpoints)[number];

function isEndpoint(value: string): value is FoundationEndpoint {
  return (endpoints as readonly string[]).includes(value);
}

function json(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
      'x-evavo-foundation-site': SITE_ID,
      ...(init?.headers || {}),
    },
  });
}

function createEnvelope(endpoint: FoundationEndpoint, data: unknown) {
  return {
    ok: true,
    version: API_VERSION,
    siteId: SITE_ID,
    endpoint,
    generatedAt: new Date().toISOString(),
    data,
  };
}

export function GET(_request: Request, context: { params: { endpoint: string } }) {
  const endpoint = context.params.endpoint;

  if (!isEndpoint(endpoint)) {
    return json(
      {
        ok: false,
        version: API_VERSION,
        siteId: SITE_ID,
        endpoint,
        error: 'Unknown EVAVO foundation endpoint.',
      },
      { status: 404 },
    );
  }

  if (endpoint === 'manifest') {
    return json(
      createEnvelope(endpoint, {
        api: {
          name: 'EVAVO Site Foundation API',
          version: API_VERSION,
          basePath: BASE_PATH,
          endpoints,
          guarantees: [
            'JSON responses only',
            'No DOM rendering',
            'No layout mutation',
            'No image mutation',
            'No public copy mutation',
            'No SEO mutation',
          ],
        },
        site: {
          id: SITE_ID,
          name: 'Touchpoint',
          integrationWave: 'wave-1-readonly-api',
          mode: 'read-only',
        },
      }),
    );
  }

  if (endpoint === 'health') {
    return json(
      createEnvelope(endpoint, {
        status: 'ok',
        checks: [
          { id: 'foundation-route', status: 'pass' },
          { id: 'json-only', status: 'pass' },
          { id: 'noindex', status: 'pass' },
        ],
      }),
    );
  }

  if (endpoint === 'readiness') {
    return json(
      createEnvelope(endpoint, {
        status: 'wave-1-mounted',
        notes: ['Read-only foundation API route is mounted. No visible site behaviour is changed.'],
      }),
    );
  }

  return json(
    createEnvelope(endpoint, {
      status: 'not-configured',
      notes: ['This endpoint is reserved for later inventory integration.'],
    }),
  );
}
