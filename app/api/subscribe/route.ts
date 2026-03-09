import { NextRequest, NextResponse } from "next/server";

const SUBSTACK_PUBLICATION = (
  process.env.NEXT_PUBLIC_SUBSTACK_PUBLICATION ?? ""
).trim();

export async function POST(request: NextRequest) {
  if (!SUBSTACK_PUBLICATION) {
    return NextResponse.json(
      { error: "Newsletter not configured" },
      { status: 503 }
    );
  }

  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  const url = `https://${SUBSTACK_PUBLICATION}.substack.com/api/v1/free?nojs=true`;
  const params = new URLSearchParams({
    email,
    source: "subscribe_page",
  });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (compatible; WagerBird/1.0)",
      },
      body: params.toString(),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Subscription failed", details: text.slice(0, 200) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Substack subscribe error:", err);
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 502 }
    );
  }
}
