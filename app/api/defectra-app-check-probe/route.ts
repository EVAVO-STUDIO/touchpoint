import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const EXPECTED = Object.freeze({
  projectId: "defectra-fa684",
  appId: "1:784337791023:web:7e20b6c984aa9b9bba7eda",
  messagingSenderId: "784337791023",
});

function noStore(response: NextResponse): NextResponse {
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}

function failure(status: number, code: string, detail?: string): NextResponse {
  return noStore(
    NextResponse.json(
      {
        ok: false,
        code,
        ...(detail ? { detail: detail.slice(0, 240) } : {}),
      },
      { status }
    )
  );
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const apiKey = request.nextUrl.searchParams.get("apiKey")?.trim();
  if (!apiKey || !/^AIza[0-9A-Za-z_-]{20,}$/u.test(apiKey)) {
    return failure(400, "PUBLIC_API_KEY_REQUIRED");
  }

  const endpoint = new URL(
    `https://firebase.googleapis.com/v1beta1/projects/-/webApps/${encodeURIComponent(EXPECTED.appId)}/config`
  );
  endpoint.searchParams.set("key", apiKey);

  let upstream: Response;
  try {
    upstream = await fetch(endpoint, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
  } catch (error) {
    return failure(
      502,
      "FIREBASE_CONFIG_UNREACHABLE",
      error instanceof Error ? error.message : String(error)
    );
  }

  const text = await upstream.text();
  if (!upstream.ok) {
    return failure(
      502,
      "FIREBASE_CONFIG_REJECTED",
      `HTTP ${upstream.status}: ${text}`
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(text) as Record<string, unknown>;
  } catch {
    return failure(502, "FIREBASE_CONFIG_INVALID_JSON");
  }

  if (
    payload.projectId !== EXPECTED.projectId ||
    payload.appId !== EXPECTED.appId ||
    payload.messagingSenderId !== EXPECTED.messagingSenderId ||
    payload.apiKey !== apiKey
  ) {
    return failure(409, "FIREBASE_IDENTITY_MISMATCH");
  }

  const siteKey =
    typeof payload.recaptchaSiteKey === "string"
      ? payload.recaptchaSiteKey.trim()
      : "";
  if (!/^6L[0-9A-Za-z_-]{20,}$/u.test(siteKey)) {
    return failure(404, "APP_CHECK_SITE_KEY_ABSENT");
  }

  return noStore(
    NextResponse.json({
      ok: true,
      projectId: EXPECTED.projectId,
      appId: EXPECTED.appId,
      messagingSenderId: EXPECTED.messagingSenderId,
      siteKey,
      siteKeySha256: createHash("sha256").update(siteKey).digest("hex"),
    })
  );
}
