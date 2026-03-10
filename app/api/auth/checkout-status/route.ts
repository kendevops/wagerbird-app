import { NextRequest, NextResponse } from "next/server";

const MONOLITH_URL = process.env.MONOLITH_URL!;
const MONOLITH_API_KEY = process.env.MONOLITH_API_KEY!;

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: "Missing session_id parameter." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${MONOLITH_URL}/api/v1/checkout-status?session_id=${encodeURIComponent(sessionId)}`,
      {
        headers: {
          Accept: "application/json",
          "X-API-Key": MONOLITH_API_KEY,
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
