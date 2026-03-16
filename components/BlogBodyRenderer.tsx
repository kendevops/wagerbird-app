"use client";

import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

type Mode = "dark" | "light";

interface BlogBodyRendererProps {
  value: PortableTextBlock[] | null | undefined;
  mode?: Mode;
}

export default function BlogBodyRenderer({ value, mode = "dark" }: BlogBodyRendererProps) {
  if (!value || value.length === 0) return null;

  const isLight = mode === "light";
  const accentClass = isLight
    ? "text-[#0025E1] italic font-semibold"
    : "text-brand-yellow italic font-semibold";
  const bodyTextClass = isLight ? "text-[#050510]/85" : "text-white/85";
  const headingTextClass = isLight ? "text-[#050510]" : "text-white";
  const mutedTextClass = isLight ? "text-[#050510]/70" : "text-white/75";

  const components: Partial<PortableTextComponents> = {
    marks: {
      accent: ({ children }) => <em className={accentClass}>{children}</em>,
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => {
        const href = value?.href ?? "#";
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow underline hover:no-underline"
          >
            {children}
          </a>
        );
      },
    },
    block: {
      normal: ({ children }) => (
        <p className={`mb-5 text-[16px] leading-relaxed ${bodyTextClass}`}>{children}</p>
      ),
      h2: ({ children }) => (
        <h2
          id={children?.toString().replace(/\s+/g, "-").toLowerCase()}
          className={`font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold uppercase tracking-tight ${headingTextClass} mt-10 mb-4`}
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3
          className={`font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-tight ${headingTextClass} mt-8 mb-3`}
        >
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4
          className={`font-[family-name:var(--font-barlow-condensed)] text-lg font-bold uppercase ${headingTextClass} mt-6 mb-2`}
        >
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className={`border-l-2 border-brand-yellow pl-5 my-6 italic ${mutedTextClass}`}>
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className={`list-disc list-inside mb-5 space-y-2 ${bodyTextClass}`}>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className={`list-decimal list-inside mb-5 space-y-2 ${bodyTextClass}`}>{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="text-[16px] leading-relaxed">{children}</li>,
      number: ({ children }) => <li className="text-[16px] leading-relaxed">{children}</li>,
    },
  };

  return (
    <div className="blog-prose">
      <PortableText value={value} components={components} />
    </div>
  );
}
