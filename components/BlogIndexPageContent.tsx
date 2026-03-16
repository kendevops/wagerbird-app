"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPostSummary } from "@/sanity/lib/queries";

const CATEGORY_PILLS = [
  { id: "all", label: "All" },
  { id: "strategy", label: "Strategy" },
  { id: "analytics", label: "Analytics" },
  { id: "bankroll", label: "Bankroll" },
  { id: "markets", label: "Markets" },
  { id: "platform", label: "Platform" },
] as const;

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
  const found = CATEGORY_PILLS.find((p) => p.id === value);
  return found ? found.label : value;
}

export type BlogPostWithUrl = BlogPostSummary & { mainImageUrl?: string };

interface BlogIndexPageContentProps {
  posts: BlogPostWithUrl[];
}

export default function BlogIndexPageContent({ posts }: BlogIndexPageContentProps) {
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const gridPosts = featuredPost ? posts.filter((p) => p._id !== featuredPost._id) : posts;

  return (
    <div className="min-h-screen bg-[#030308] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/15 pt-[140px] pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-16 w-[500px] h-[500px] rounded-full bg-[rgba(0,37,225,.07)] blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-12 lg:px-[60px]">
          <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-normal tracking-[2.5px] uppercase text-brand-yellow mb-5">
            WagerBird Intelligence
          </p>
          <h1 className="font-[family-name:var(--font-barlow-condensed)] text-[clamp(52px,8vw,96px)] font-black leading-[0.95] uppercase tracking-tight text-white mb-6">
            The <em className="italic font-semibold text-brand-yellow">Edge</em>
            <br /> Report
          </h1>
          <p className="text-base text-white/55 max-w-[480px] leading-[1.65]">
            Strategy, analytics, and market intelligence for bettors who think in probabilities — not predictions.
          </p>

          {/* Category pills — static for v1 */}
          <div className="flex flex-wrap gap-2 mt-12" aria-label="Categories">
            {CATEGORY_PILLS.map((pill) => (
              <span
                key={pill.id}
                className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[1.5px] uppercase py-[7px] px-4 border border-white/15 text-white/55 cursor-default"
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 lg:px-[60px]">
        {/* Featured card */}
        {featuredPost && featuredPost.slug && (
          <div className="pt-16">
            <Link href={`/blog/${featuredPost.slug}`} className="no-underline block group">
              <article className="grid grid-cols-1 lg:grid-cols-2 border border-white/[0.07] bg-white/[0.03] overflow-hidden transition-colors group-hover:border-brand-yellow/30">
                <div className="relative overflow-hidden min-h-[260px] lg:min-h-[360px] bg-gradient-to-br from-[#0a0a18] to-[#050510]">
                  {featuredPost.mainImageUrl ? (
                    <Image
                      src={featuredPost.mainImageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[120px] h-[120px] opacity-20">
                        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                          <rect x="10" y="10" width="100" height="100" stroke="currentColor" strokeWidth="1" />
                          <line x1="10" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                          <polyline points="10,90 30,55 50,70 75,30 95,50 110,20" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="75" cy="30" r="5" fill="currentColor" opacity="0.6" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,37,225,.18)] to-[rgba(228,242,34,.08)]" />
                  <span className="absolute top-5 left-5 z-10 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[2px] uppercase text-brand-yellow bg-[rgba(5,5,16,.7)] px-2.5 py-1.5 border border-brand-yellow/30">
                    Featured
                  </span>
                  <span className="absolute bottom-5 right-6 font-[family-name:var(--font-space-mono)] text-[80px] font-bold text-brand-yellow/10 leading-none select-none">
                    01
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[2px] uppercase text-brand-yellow mb-4">
                      {featuredPost.categories?.[0] ? categoryLabel(featuredPost.categories[0]) : "Article"}
                    </p>
                    <h2 className="font-[family-name:var(--font-barlow-condensed)] font-bold uppercase leading-[1.05] text-white text-2xl lg:text-4xl mb-5">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm text-white/55 leading-[1.65] mb-8 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 text-[11px] text-white/55 font-mono mb-6">
                      <span>WagerBird Team</span>
                      <span className="w-1 h-4 bg-white/12" />
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                      <span className="w-1 h-4 bg-white/12" />
                      <span>Read Article</span>
                    </div>
                    <span className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[1.5px] uppercase text-brand-yellow inline-flex items-center gap-2 group-hover:gap-3 transition-[gap]">
                      Read Article
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 pb-24">
          {gridPosts.map((post) => {
            if (!post.slug) return null;
            const cat = post.categories?.[0];
            return (
              <Link key={post._id} href={`/blog/${post.slug}`} className="no-underline">
                <article className="h-full border border-white/[0.07] bg-white/[0.03] overflow-hidden flex flex-col transition-all hover:border-brand-yellow/25 hover:-translate-y-0.5">
                  <div className="h-[200px] relative overflow-hidden bg-gradient-to-br from-[#0a0a18] to-[#060618]">
                    {post.mainImageUrl ? (
                      <Image
                        src={post.mainImageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#0a0a18]" />
                    )}
                    <span className="absolute top-4 left-4 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[2px] uppercase text-brand-yellow bg-[rgba(5,5,16,.75)] px-2 py-1 border border-brand-yellow/25 z-[2]">
                      {cat ? categoryLabel(cat) : "Article"}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[2px] uppercase text-brand-yellow">
                      {cat ? categoryLabel(cat) : "Article"}
                    </p>
                    <h3 className="font-[family-name:var(--font-barlow-condensed)] font-bold uppercase leading-[1.05] text-white text-xl line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-[1.65] line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 font-mono text-[11px] text-white/55 mt-auto">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="w-1 h-1 rounded-full bg-white/15" />
                      <span>Read</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <section className="pb-24">
          <div className="border border-brand-yellow/20 py-16 px-8 md:px-12 text-center relative overflow-hidden bg-gradient-to-br from-[rgba(0,37,225,.06)] to-[rgba(228,242,34,.04)]">
            <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-normal tracking-[2.5px] uppercase text-brand-yellow mb-4">
              Bet Smarter with WagerBird
            </p>
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-3xl md:text-5xl font-black uppercase text-white mb-4">
              Stop Predicting. Start <em className="italic text-brand-yellow">Pricing.</em>
            </h2>
            <p className="text-[15px] text-white/55 max-w-[460px] mx-auto mb-9 leading-[1.65]">
              Access confidence-scored signals, line comparisons, and the analytics framework that gives serious bettors a structural edge.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/pricing"
                className="font-[family-name:var(--font-space-mono)] text-xs font-bold tracking-[1.5px] uppercase bg-brand-yellow text-[#050510] py-4 px-8 no-underline transition-colors hover:bg-white"
              >
                Enter the Terminal
              </Link>
              <Link
                href={posts[0]?.slug ? `/blog/${posts[0].slug}` : "/blog"}
                className="font-[family-name:var(--font-space-mono)] text-xs font-bold tracking-[1.5px] uppercase border border-white/15 text-white/55 py-4 px-8 no-underline transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
              >
                Read the Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
