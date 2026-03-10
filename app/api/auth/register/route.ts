import { NextRequest, NextResponse } from "next/server";

/**
 * Proxies registration to the WagerBird app API. Set in .env:
 * - WAGERBIRD_APP_URL (server): app base URL, e.g. https://app.wagerbird.com
 * - AUTH_REGISTER_PATH (server, optional): path, default /api/auth/register
 * - NEXT_PUBLIC_WAGERBIRD_APP_URL (client): where to redirect after success
 */
const APP_URL = (process.env.WAGERBIRD_APP_URL ?? "https://app.wagerbird.com").replace(
  /\/$/,
  ""
);
const REGISTER_PATH = process.env.AUTH_REGISTER_PATH ?? "/api/auth/register";

export async function POST(request: NextRequest) {
  let body: {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    countryCode?: string;
    [key: string]: unknown;
  };
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
  const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body?.lastName === "string" ? body.lastName.trim() : "";
  const countryCode = typeof body?.countryCode === "string" ? body.countryCode : "";
  const phoneRaw = typeof body?.phone === "string" ? body.phone.trim() : "";
  const phone = countryCode ? `${countryCode}${phoneRaw.replace(/\D/g, "")}` : phoneRaw.replace(/\D/g, "");

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

  const url = `${APP_URL}${REGISTER_PATH}`;

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
      body: JSON.stringify(payload),
    });

    const contentType = res.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await res.json().catch(() => ({})) : {};

    if (!res.ok) {
      return NextResponse.json(
        {
          error: (data as { message?: string }).message ?? (data as { error?: string }).error ?? "Registration failed",
          ...data,
        },
        { status: res.status }
      );
    }

    return NextResponse.json({
      ok: true,
      redirectUrl: (data as { redirectUrl?: string }).redirectUrl ?? APP_URL,
      ...data,
    });
  } catch (err) {
    console.error("Auth register proxy error:", err);
    return NextResponse.json(
      { error: "Unable to reach registration service" },
      { status: 502 }
    );
  }
}
