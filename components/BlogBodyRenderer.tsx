"use client";

import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

const accentClass = "text-brand-yellow italic font-semibold";

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
    normal: ({ children }) => <p className="mb-5 text-[16px] leading-relaxed text-white/85">{children}</p>,
    h2: ({ children }) => (
      <h2 id={children?.toString().replace(/\s+/g, "-").toLowerCase()} className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold uppercase tracking-tight text-white mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-tight text-white mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold uppercase text-white mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand-yellow pl-5 my-6 text-white/75 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-5 space-y-2 text-white/85">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-5 space-y-2 text-white/85">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[16px] leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="text-[16px] leading-relaxed">{children}</li>,
  },
};

interface BlogBodyRendererProps {
  value: PortableTextBlock[] | null | undefined;
}

export default function BlogBodyRenderer({ value }: BlogBodyRendererProps) {
  if (!value || value.length === 0) return null;
  return (
    <div className="blog-prose">
      <PortableText value={value} components={components} />
    </div>
  );
}
