import { NextRequest, NextResponse } from "next/server";

/**
 * Handles two registration flows, both proxied to the monolith:
 *
 * 1. Post-checkout (session_id present):
 *    Proxies to monolith /api/v1/register with X-API-Key auth.
 *    Used by /get-started/complete after Stripe payment.
 *
 * 2. Standalone registration (no session_id):
 *    Proxies to monolith /api/v1/register without session_id.
 *    Used by /register page.
 *
 * Env: MONOLITH_URL, MONOLITH_API_KEY
 */
const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;

async function proxyToMonolith(payload: Record<string, unknown>) {
  const url = `${MONOLITH_URL}/api/v1/register`;
  const options: RequestInit & { dispatcher?: unknown } = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-Key": MONOLITH_API_KEY,
    },
    body: JSON.stringify(payload),
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
  return { response, data };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Post-checkout registration flow (session_id present)
    if (body.session_id) {
      const { response, data } = await proxyToMonolith(body);
      return NextResponse.json(data, { status: response.status });
    }

    // Standalone registration flow (no checkout session)
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

    const payload: Record<string, string> = {
      email,
      password,
      password_confirmation: password,
      ...(firstName && { first_name: firstName }),
      ...(lastName && { last_name: lastName }),
      ...(phone && { phone_number: phone }),
      ...(countryCode && { phone_number_country: countryCode }),
    };

    const { response, data } = await proxyToMonolith(payload);

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            (data as { message?: string }).message ??
            (data as { error?: string }).error ??
            "Registration failed",
          ...data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      ok: true,
      redirectUrl: data.data?.login_url,
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
