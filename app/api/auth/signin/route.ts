import { NextRequest, NextResponse } from "next/server";

/**
 * Proxies sign-in to the WagerBird app API. Set in .env:
 * - WAGERBIRD_APP_URL (server): app base URL, e.g. https://app.wagerbird.com
 * - AUTH_SIGNIN_PATH (server, optional): path, default /api/auth/signin
 * - NEXT_PUBLIC_WAGERBIRD_APP_URL (client): where to redirect after success
 */
const APP_URL = (process.env.WAGERBIRD_APP_URL ?? "https://app.wagerbird.com").replace(
  /\/$/,
  ""
);
const SIGNIN_PATH = process.env.AUTH_SIGNIN_PATH ?? "/api/auth/signin";

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

  const url = `${APP_URL}${SIGNIN_PATH}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(request.headers.get("user-agent") && {
          "User-Agent": request.headers.get("user-agent")!,
        }),
      },
      body: JSON.stringify({ email, password }),
    });

    const contentType = res.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await res.json().catch(() => ({})) : {};

    if (!res.ok) {
      return NextResponse.json(
        { error: (data as { message?: string }).message ?? data?.error ?? "Sign in failed", ...data },
        { status: res.status }
      );
    }

    return NextResponse.json({
      ok: true,
      redirectUrl: (data as { redirectUrl?: string }).redirectUrl ?? APP_URL,
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
