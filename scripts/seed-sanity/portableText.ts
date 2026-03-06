/**
 * Build Sanity Portable Text. Each "line" is one block; a line can be one string or
 * multiple segments (string or { text, accent }) for mixed styling (e.g. "The " + accented "Edge.").
 */
function makeSpan(text: string, marks: string[] = []) {
  return { _type: "span" as const, text, marks };
}

function makeBlock(children: { _type: "span"; text: string; marks: string[] }[], key: string) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    children,
    markDefs: [],
  };
}

export type PortableTextSegment = string | { text: string; accent?: boolean };
/** One line = one block. Can be a single string, a single segment, or array of segments (for mixed styling). */
export type PortableTextLine = PortableTextSegment | PortableTextSegment[];

/**
 * Convert lines to Portable Text. Each item is a line: string, { text, accent }, or array of segments.
 */
export function portableText(
  lines: PortableTextLine[]
): { _type: "block"; _key: string; style: "normal"; children: { _type: "span"; text: string; marks: string[] }[]; markDefs: unknown[] }[] {
  return lines.map((line, i) => {
    const segments = Array.isArray(line) ? line : [line];
    const children = segments.map((seg) =>
      typeof seg === "string" ? makeSpan(seg) : makeSpan(seg.text, seg.accent ? ["accent"] : [])
    );
    return makeBlock(children, `pt-${i}`);
  });
}

/**
 * Helper: one line, optional accent on the whole line.
 */
export function ptLine(text: string, accent = false): PortableTextLine[] {
  return [accent ? { text, accent: true } : text];
}

/**
 * Helper: multiple lines, accent on the last one.
 */
export function ptLines(lines: string[], accentLast = false): PortableTextLine[] {
  if (lines.length === 0) return [];
  return lines.map((text, i) =>
    accentLast && i === lines.length - 1 ? { text, accent: true } : text
  );
}
