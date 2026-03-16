"use client";

import Link from "next/link";
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
  const hasTwoLines = Boolean(post.heroSubtitle ?? post.heroTitle);
  const heroTitleLine1 = post.heroTitle ?? post.title ?? "";
  const heroTitleLine2 = post.heroSubtitle ?? "";
  const category = post.categories?.[0];
  const readTime = post.readTimeMinutes != null ? `${post.readTimeMinutes} min read` : "";

  return (
    <div className="min-h-screen bg-[#030308] text-white">
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
              className="font-mono text-[11px] text-white/55 no-underline transition-colors hover:text-white"
            >
              Blog
            </Link>
            <span className="font-mono text-[11px] text-white/15">/</span>
            <span className="font-mono text-[11px] text-brand-yellow">
              {category ? categoryLabel(category) : "Article"}
            </span>
          </div>

          {/* Two-line title (or single line when no subtitle) */}
          <h1 className="mb-8 leading-none">
            {hasTwoLines ? (
              <>
                <span className="block font-sans text-[clamp(15px,1.6vw,20px)] font-normal text-white/55 tracking-tight mb-2.5">
                  {heroTitleLine1}
                </span>
                <span className="block font-[family-name:var(--font-barlow-condensed)] text-[clamp(48px,4vw,116px)] font-black italic uppercase leading-[0.92] tracking-tight text-white">
                  {heroTitleLine2}
                </span>
              </>
            ) : (
              <span className="block font-[family-name:var(--font-barlow-condensed)] text-[clamp(48px,4vw,116px)] font-black italic uppercase leading-[0.92] tracking-tight text-white">
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
              <span className="text-[13px] text-white/70">{post.author ?? "WagerBird Team"}</span>
            </div>
            <span className="w-px h-4 bg-white/12" />
            <span className="font-mono text-xs text-white/50">{formatDate(post.publishedAt)}</span>
            {readTime && (
              <>
                <span className="w-px h-4 bg-white/12" />
                <span className="font-mono text-xs text-white/50">{readTime}</span>
              </>
            )}
            {category && (
              <>
                <span className="w-px h-4 bg-white/12" />
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[1.5px] uppercase text-brand-yellow border border-brand-yellow/30 px-2.5 py-1">
                  {categoryLabel(category)}
                </span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Article body */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-20 pt-16 pb-20 items-start">
          <article className="max-w-[var(--prose-max,65ch)]">
            <BlogBodyRenderer value={post.body ?? undefined} />
          </article>
          {/* Sidebar placeholder for TOC / related later */}
          <aside className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
