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

  const body = await request.json().catch(() => ({})) as {
    _type?: string;
    path?: string;
    slug?: { current?: string } | string;
  };
  const docType = body._type;
  const slugVal = body.slug;
  const pathRaw = body.path ?? (typeof slugVal === "string" ? slugVal : slugVal?.current) ?? request.nextUrl.searchParams.get("path");
  const path = typeof pathRaw === "string" ? pathRaw : undefined;
  const slug = path ? path.replace(/^\//, "") : undefined;

  // siteSettings, signInPage, registerPage affect all / those routes — revalidate everything when they change
  const revalidateAll =
    docType === "siteSettings" || docType === "signInPage" || docType === "registerPage" || !slug;

  const knownSlugs = [
    "home", "terminal", "pricing", "sportsbooks", "hotsheet", "odds",
    "about", "affiliates", "coming-soon", "contact", "faq", "learn",
    "live-odds", "results", "privacy-policy", "terms-of-service",
    "signin", "register",
  ];

  try {
    revalidatePath("/");
    if (slug && slug !== "home" && !revalidateAll) {
      revalidatePath(`/${slug}`);
    } else if (revalidateAll) {
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
