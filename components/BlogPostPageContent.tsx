"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PortableTextBlock } from "@portabletext/types";
import type { BlogPostResult } from "@/sanity/lib/queries";
import BlogBodyRenderer from "./BlogBodyRenderer";

const CATEGORY_LABELS: Record<string, string> = {
  strategy: "Strategy",
  analytics: "Analytics",
  bankroll: "Bankroll",
  markets: "Markets",
  platform: "Platform",
};

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function categoryLabel(value: string): string {
  return CATEGORY_LABELS[value] ?? value;
}

interface BlogPostPageContentProps {
  post: NonNullable<BlogPostResult>;
}

export default function BlogPostPageContent({ post }: BlogPostPageContentProps) {
  const [lightMode, setLightMode] = useState(false);
  const hasTwoLines = Boolean(post.heroSubtitle ?? post.heroTitle);
  const heroTitleLine1 = post.heroTitle ?? post.title ?? "";
  const heroTitleLine2 = post.heroSubtitle ?? "";
  const category = post.categories?.[0];
  const readTime = post.readTimeMinutes != null ? `${post.readTimeMinutes} min read` : "";
  const heroStats = post.heroStats ?? [];
  const keyTakeaways = post.keyTakeaways ?? [];
  const related = post.relatedPosts ?? [];

  const tocItems = useMemo(() => {
    const bodyBlocks = (post.body ?? []) as any[];
    return bodyBlocks
      .filter((block) => block?._type === "block" && block.style === "h2")
      .map((block) => {
        const text = (block.children ?? [])
          .map((child: any) => child?.text ?? "")
          .join("")
          .trim();
        const id = text.toLowerCase().replace(/\s+/g, "-");
        return { id, label: text };
      })
      .filter((item) => item.id && item.label);
  }, [post.body]);

  const isLight = lightMode;

  return (
    <div className={`min-h-screen ${isLight ? "bg-[#f4f3ee] text-[#050510]" : "bg-[#030308] text-white"}`}>
      {/* Article hero */}
      <header className="relative overflow-hidden border-b border-white/15 pt-[100px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[100px] -right-20 w-[600px] h-[600px] rounded-full bg-[rgba(0,37,225,.06)] blur-[100px]" />
        </div>
        <div className="relative max-w-[860px] mx-auto px-5 md:px-12 lg:px-[60px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/blog"
              className={`font-mono text-[11px] no-underline transition-colors ${
                isLight ? "text-[#4b5563] hover:text-[#111827]" : "text-white/55 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <span className={`font-mono text-[11px] ${isLight ? "text-[#9ca3af]" : "text-white/15"}`}>/</span>
            <span className="font-mono text-[11px] text-brand-yellow">
              {category ? categoryLabel(category) : "Article"}
            </span>
          </div>

          {/* Two-line title (or single line when no subtitle) */}
          <h1 className="mb-8 leading-none">
            {hasTwoLines ? (
              <>
                <span
                  className={`block font-sans text-[clamp(15px,1.6vw,20px)] font-normal tracking-tight mb-2.5 ${
                    isLight ? "text-[#4b5563]" : "text-white/55"
                  }`}
                >
                  {heroTitleLine1}
                </span>
                <span
                  className={`block font-[family-name:var(--font-barlow-condensed)] text-[clamp(48px,4vw,116px)] font-black italic uppercase leading-[0.92] tracking-tight ${
                    isLight ? "text-[#050510]" : "text-white"
                  }`}
                >
                  {heroTitleLine2}
                </span>
              </>
            ) : (
              <span
                className={`block font-[family-name:var(--font-barlow-condensed)] text-[clamp(48px,4vw,116px)] font-black italic uppercase leading-[0.92] tracking-tight ${
                  isLight ? "text-[#050510]" : "text-white"
                }`}
              >
                {post.title}
              </span>
            )}
          </h1>

          {/* Meta strip */}
          <div className="flex items-center gap-5 flex-wrap mb-12">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0">
                <span className="font-[family-name:var(--font-barlow-condensed)] font-black text-sm text-[#050510]">
                  {(post.author ?? "W")[0]}
                </span>
              </div>
              <span className={`text-[13px] ${isLight ? "text-[#4b5563]" : "text-white/70"}`}>
                {post.author ?? "WagerBird Team"}
              </span>
            </div>
            <span className={`w-px h-4 ${isLight ? "bg-black/10" : "bg-white/12"}`} />
            <span className={`font-mono text-xs ${isLight ? "text-[#6b7280]" : "text-white/50"}`}>
              {formatDate(post.publishedAt)}
            </span>
            {readTime && (
              <>
                <span className={`w-px h-4 ${isLight ? "bg-black/10" : "bg-white/12"}`} />
                <span className={`font-mono text-xs ${isLight ? "text-[#6b7280]" : "text-white/50"}`}>
                  {readTime}
                </span>
              </>
            )}
            {category && (
              <>
                <span className={`w-px h-4 ${isLight ? "bg-black/10" : "bg-white/12"}`} />
                <span
                  className={`font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[1.5px] uppercase border px-2.5 py-1 ${
                    isLight
                      ? "text-[#0025E1] border-[#0025E1]/40"
                      : "text-brand-yellow border-brand-yellow/30"
                  }`}
                >
                  {categoryLabel(category)}
                </span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Article body */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-[60px]">
        {/* Hero stat strip */}
        {heroStats.length > 0 && (
          <div
            className={`border-t border-x-0 border-b-0 mt-8 pt-7 pb-1 max-w-[860px] mx-auto ${
              isLight ? "border-black/10" : "border-white/15"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {heroStats.slice(0, 3).map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-left ${idx < 2 ? "md:border-r md:border-white/15 md:pr-6" : "md:pl-6"}`}
                >
                  <div
                    className={`font-[family-name:var(--font-barlow-condensed)] text-[26px] md:text-[30px] font-bold ${
                      isLight ? "text-[#050510]" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <p
                    className={`mt-1 text-[13px] leading-snug ${
                      isLight ? "text-[#6b7280]" : "text-white/60"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-20 pt-16 pb-20 items-start">
          <article className="max-w-[var(--prose-max,65ch)]">
            {/* Key Takeaways box */}
            {keyTakeaways.length > 0 && (
              <section
                className={`mb-10 border px-6 py-5 ${
                  isLight ? "border-black/10 bg-white" : "border-white/15 bg-white/[0.02]"
                }`}
              >
                <p
                  className={`font-[family-name:var(--font-barlow-condensed)] text-[14px] font-bold tracking-[2px] uppercase mb-3 ${
                    isLight ? "text-[#0025E1]" : "text-brand-yellow"
                  }`}
                >
                  Key Takeaways
                </p>
                <ul
                  className={`list-disc pl-5 space-y-2 text-[15px] leading-relaxed ${
                    isLight ? "text-[#111827]" : "text-white/85"
                  }`}
                >
                  {keyTakeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <BlogBodyRenderer
              value={(post.body as PortableTextBlock[] | null | undefined) ?? undefined}
              mode={isLight ? "light" : "dark"}
            />
          </article>
          {/* Sidebar: TOC, reading mode toggle, CTA */}
          <aside className="hidden lg:block sticky top-20 pt-2 space-y-6">
            {tocItems.length > 0 && (
              <section>
                <p
                  className={`font-[family-name:var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[2px] mb-3 ${
                    isLight ? "text-[#6b7280]" : "text-white/60"
                  }`}
                >
                  In This Article
                </p>
                <nav className="flex flex-col gap-1.5">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`text-[13px] hover:text-brand-yellow ${
                        isLight ? "text-[#4b5563]" : "text-white/70"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </section>
            )}

            <section
              className={`pt-4 border-t ${isLight ? "border-black/10" : "border-white/15"}`}
            >
              <p
                className={`font-mono text-[10px] mb-2 ${
                  isLight ? "text-[#6b7280]" : "text-white/60"
                }`}
              >
                Reading mode
              </p>
              <button
                type="button"
                onClick={() => setLightMode((v) => !v)}
                className={`flex w-full items-center gap-2 border px-3 py-2.5 text-[10px] font-[family-name:var(--font-space-mono)] uppercase tracking-[1.2px] transition-colors hover:border-brand-yellow/60 ${
                  isLight
                    ? "border-black/10 bg-white text-[#4b5563]"
                    : "border-white/20 bg-white/5 text-white/70"
                }`}
              >
                <span>{lightMode ? "Dark Mode" : "Light Mode"}</span>
              </button>
            </section>

            <section className="border border-brand-yellow/25 px-5 py-4 bg-gradient-to-br from-[rgba(0,37,225,.08)] to-[rgba(228,242,34,.04)]">
                <p
                  className={`font-[family-name:var(--font-barlow-condensed)] text-[18px] font-bold uppercase mb-2 leading-tight ${
                    isLight ? "text-[#050510]" : "text-white"
                  }`}
              >
                  Try the{" "}
                  <span className={`italic ${isLight ? "text-[#0025E1]" : "text-brand-yellow"}`}>
                    Terminal
                  </span>
              </p>
              <Link
                href="/pricing"
                className="mt-2 block text-center font-[family-name:var(--font-space-mono)] text-[10px] font-bold uppercase tracking-[1.5px] bg-brand-yellow text-[#050510] py-2.5 no-underline transition-colors hover:bg-white"
              >
                Get Access
              </Link>
            </section>
          </aside>
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="border-t border-white/15 py-12">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-[60px]">
            <p
              className={`font-[family-name:var(--font-barlow-condensed)] text-[13px] font-bold uppercase tracking-[2.5px] mb-8 ${
                isLight ? "text-[#6b7280]" : "text-white/60"
              }`}
            >
              Related Articles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {related.map((rel) =>
                rel.slug ? (
                  <Link key={rel._id} href={`/blog/${rel.slug}`} className="no-underline">
                    <article
                      className={`border px-4 py-4 hover:border-brand-yellow/40 transition-colors ${
                        isLight ? "border-black/10" : "border-white/15"
                      }`}
                    >
                      <p
                        className={`font-[family-name:var(--font-space-mono)] text-[10px] font-bold uppercase tracking-[1.5px] mb-1.5 ${
                          isLight ? "text-[#0025E1]" : "text-brand-yellow"
                        }`}
                      >
                        {rel.categories?.[0] ? categoryLabel(rel.categories[0]) : "Article"}
                      </p>
                      <p
                        className={`font-[family-name:var(--font-barlow-condensed)] text-[16px] font-semibold uppercase mb-1.5 line-clamp-2 ${
                          isLight ? "text-[#050510]" : "text-white"
                        }`}
                      >
                        {rel.title}
                      </p>
                      <p
                        className={`font-mono text-[11px] ${
                          isLight ? "text-[#6b7280]" : "text-white/55"
                        }`}
                      >
                        {formatDate(rel.publishedAt)}{readTime ? ` · ${readTime}` : ""}
                      </p>
                    </article>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
