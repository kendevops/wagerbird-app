import { NextRequest, NextResponse } from "next/server";

const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userUuid = typeof body?.userUuid === "string" ? body.userUuid : "";

    if (!userUuid) {
      return NextResponse.json(
        { error: "Missing user identifier" },
        { status: 400 }
      );
    }

    const url = `${MONOLITH_URL}/api/v1/onboarding/${encodeURIComponent(userUuid)}`;
    const options: RequestInit & { dispatcher?: unknown } = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MONOLITH_API_KEY,
      },
      body: JSON.stringify({
        betting_experience: body.bettingExperience ?? null,
        monthly_bankroll: body.monthlyBankroll ?? null,
        active_sports: body.activeSports ?? null,
        betting_goal: body.bettingGoal ?? null,
      }),
    };

    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
      const { Agent } = await import("undici");
      options.dispatcher = new Agent({
        connect: { rejectUnauthorized: false },
      });
    }

    const response = await fetch(url, options);
    let data: Record<string, unknown> = {};
    try {
      data = await response.json();
    } catch (err) {
      console.error("[onboarding] Failed to parse upstream response:", err);
      data = { message: "Unexpected response from server." };
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("[onboarding] Proxy error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
