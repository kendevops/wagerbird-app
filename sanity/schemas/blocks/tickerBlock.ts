import { defineType, defineField } from "sanity";

export const tickerBlock = defineType({
  name: "tickerBlock",
  title: "Ticker",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID (anchor)",
      type: "string",
      description:
        "Optional. Used for in-page links (e.g. buttons that scroll here). Must be unique on the page and contain no spaces.",
      validation: (Rule) =>
        Rule.regex(/^[a-z0-9-]+$/).warning(
          "Use only lowercase letters, numbers, and hyphens for a valid HTML id.",
        ),
    }),
    defineField({ name: "text", title: "Ticker Text", type: "string", description: "Optional; leave empty to use items below" }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: { list: [{ title: "Yellow", value: "yellow" }, { title: "Dark", value: "dark" }] },
    }),
    defineField({
      name: "items",
      title: "Ticker Items",
      type: "array",
      of: [{ type: "tickerItem" }],
      description: "Optional; sport/matchup/confidence for scrolling ticker",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Ticker" };
    },
  },
});
