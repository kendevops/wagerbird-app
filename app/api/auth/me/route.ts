import { NextRequest, NextResponse } from "next/server";

const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    return NextResponse.json({ error: "Missing uuid" }, { status: 400 });
  }

  const url = `${MONOLITH_URL}/api/v1/auto-login-url/${uuid}`;

  try {
    const options: RequestInit & { dispatcher?: unknown } = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-Key": MONOLITH_API_KEY,
      },
    };

    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
      const { Agent } = await import("undici");
      options.dispatcher = new Agent({
        connect: { rejectUnauthorized: false },
      });
    }

    const res = await fetch(url, options);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { error: "User not found" },
        { status: res.status }
      );
    }

    return NextResponse.json({
      ok: true,
      loginUrl: (data.data as { login_url?: string })?.login_url,
    });
  } catch (err) {
    console.error("Auth me proxy error:", err);
    return NextResponse.json(
      { error: "Unable to reach auth service" },
      { status: 502 }
    );
  }
}
