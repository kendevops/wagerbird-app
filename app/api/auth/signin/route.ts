import { NextRequest, NextResponse } from "next/server";

/**
 * Proxies sign-in to the monolith /api/v1/login endpoint.
 * Returns a signed auto-login URL on success.
 *
 * Env: MONOLITH_URL, MONOLITH_API_KEY, NEXT_PUBLIC_WAGERBIRD_APP_URL
 */
const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const url = `${MONOLITH_URL}/api/v1/login`;

  try {
    const options: RequestInit & { dispatcher?: unknown } = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MONOLITH_API_KEY,
      },
      body: JSON.stringify({ email, password }),
    };

    // Allow self-signed certs in local development
    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
      const { Agent } = await import("undici");
      options.dispatcher = new Agent({
        connect: { rejectUnauthorized: false },
      });
    }

    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            (data as { message?: string }).message ??
            (data as { error?: string }).error ??
            "Sign in failed",
          ...data,
        },
        { status: res.status }
      );
    }

    return NextResponse.json({
      ok: true,
      redirectUrl: data.data?.login_url,
      ...data,
    });
  } catch (err) {
    console.error("Auth signin proxy error:", err);
    return NextResponse.json(
      { error: "Unable to reach sign in service" },
      { status: 502 }
    );
  }
}
