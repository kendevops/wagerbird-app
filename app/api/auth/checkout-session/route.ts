import { NextRequest, NextResponse } from "next/server";

const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Pass this deployment's origin so the monolith builds the correct
    // Stripe return_url (works for any Vercel preview / staging URL).
    const origin = request.nextUrl.origin;

    const url = `${MONOLITH_URL}/api/v1/checkout-session`;
    const options: RequestInit & { dispatcher?: unknown } = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MONOLITH_API_KEY,
      },
      body: JSON.stringify({ ...body, return_url_origin: origin }),
    };

    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
      const { Agent } = await import("undici");
      options.dispatcher = new Agent({
        connect: { rejectUnauthorized: false },
      });
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("[checkout-session] Proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
