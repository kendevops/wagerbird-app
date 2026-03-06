import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export async function POST(request: NextRequest) {
  if (!REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: "Revalidate secret not configured" },
      { status: 500 }
    );
  }

  const auth = request.headers.get("authorization");
  const token =
    auth?.startsWith("Bearer ") ? auth.slice(7) : request.nextUrl.searchParams.get("secret");

  if (token !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const path = (body.path ?? body.slug?.current ?? body.slug ?? request.nextUrl.searchParams.get("path")) as
    | string
    | undefined;
  const slug = typeof path === "string" ? path.replace(/^\//, "") : undefined;

  const knownSlugs = [
    "home", "terminal", "pricing", "sportsbooks", "hotsheet", "odds",
    "about", "affiliates", "coming-soon", "contact", "faq", "learn",
    "live-odds", "results", "privacy-policy", "terms-of-service",
  ];

  try {
    revalidatePath("/");
    if (slug && slug !== "home") {
      revalidatePath(`/${slug}`);
    } else if (!slug) {
      knownSlugs.forEach((s) => {
        if (s !== "home") revalidatePath(`/${s}`);
      });
    }
    return NextResponse.json({ revalidated: true, path: path ?? "/" });
  } catch (e) {
    return NextResponse.json(
      { error: "Revalidation failed", details: String(e) },
      { status: 500 }
    );
  }
}
