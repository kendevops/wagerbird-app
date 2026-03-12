import { NextRequest, NextResponse } from "next/server";

/**
 * Handles two registration flows:
 *
 * 1. Post-checkout (session_id present):
 *    Proxies to monolith /api/v1/register with X-API-Key auth.
 *    Used by /get-started/complete after Stripe payment.
 *    Env: MONOLITH_URL, MONOLITH_API_KEY
 *
 * 2. Standalone registration (no session_id):
 *    Proxies to the WagerBird app Fortify registration.
 *    Used by /register page.
 *    Env: WAGERBIRD_APP_URL, AUTH_REGISTER_PATH (optional),
 *         NEXT_PUBLIC_WAGERBIRD_APP_URL (client redirect)
 */
const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;
const WAGERBIRD_APP_URL = (
  process.env.WAGERBIRD_APP_URL ?? "https://app.wagerbird.com"
).replace(/\/$/, "");
const AUTH_REGISTER_PATH =
  process.env.AUTH_REGISTER_PATH ?? "/api/auth/register";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // If session_id is present, this is the post-checkout registration flow
    // Proxy to monolith /api/v1/register with API key auth
    if (body.session_id) {
      const url = `${MONOLITH_URL}/api/v1/register`;
      const options: RequestInit & { dispatcher?: unknown } = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-Key": MONOLITH_API_KEY,
        },
        body: JSON.stringify(body),
      };

      // Allow self-signed certs in local development
      if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
        const { Agent } = await import("undici");
        options.dispatcher = new Agent({
          connect: { rejectUnauthorized: false },
        });
      }

      const response = await fetch(url, options);
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    // Standalone registration flow (no checkout session)
    // Proxy to monolith Fortify registration
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    const firstName =
      typeof body?.firstName === "string" ? body.firstName.trim() : "";
    const lastName =
      typeof body?.lastName === "string" ? body.lastName.trim() : "";
    const countryCode =
      typeof body?.countryCode === "string" ? body.countryCode : "";
    const phoneRaw =
      typeof body?.phone === "string" ? body.phone.trim() : "";
    const phone = countryCode
      ? `${countryCode}${phoneRaw.replace(/\D/g, "")}`
      : phoneRaw.replace(/\D/g, "");

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const payload = {
      email,
      password,
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(phone && { phone }),
      ...(countryCode && { countryCode }),
    };

    const url = `${WAGERBIRD_APP_URL}${AUTH_REGISTER_PATH}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(request.headers.get("user-agent") && {
          "User-Agent": request.headers.get("user-agent")!,
        }),
      },
      body: JSON.stringify(payload),
    });

    const contentType = res.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await res.json().catch(() => ({})) : {};

    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            (data as { message?: string }).message ??
            (data as { error?: string }).error ??
            "Registration failed",
          ...data,
        },
        { status: res.status }
      );
    }

    return NextResponse.json({
      ok: true,
      redirectUrl:
        (data as { redirectUrl?: string }).redirectUrl ?? WAGERBIRD_APP_URL,
      ...data,
    });
  } catch (error) {
    console.error("[register] Proxy error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
