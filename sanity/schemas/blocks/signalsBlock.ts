import { defineType, defineField } from "sanity";

export const signalsBlock = defineType({
  name: "signalsBlock",
  title: "Signals",
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
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path (e.g. /terminal)",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: "items",
      title: "Signal Cards",
      type: "array",
      of: [{ type: "signalCard" }],
    }),
    defineField({ name: "footerText", title: "Footer Text", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Signals" };
    },
  },
});
