"use client";

import { Fragment } from "react";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

const defaultAccentClass = "text-brand-yellow italic font-black not-italic";

interface PortableTextRendererProps {
  value: PortableTextBlock[] | null | undefined;
  accentClassName?: string;
}

export default function PortableTextRenderer({
  value,
  accentClassName = defaultAccentClass,
}: PortableTextRendererProps) {
  if (!value || value.length === 0) return null;

  const components: Partial<PortableTextComponents> = {
    marks: {
      accent: ({ children }) => (
        <em className={accentClassName}>{children}</em>
      ),
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },
    block: {
      normal: ({ children }) => <>{children}</>,
    },
  };

  return (
    <>
      {value.map((block, i) => (
        <Fragment key={block._key ?? i}>
          <PortableText value={[block]} components={components} />
          {i < value.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}
