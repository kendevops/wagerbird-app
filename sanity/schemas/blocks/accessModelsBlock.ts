import { defineType, defineField } from "sanity";

export const accessModelsBlock = defineType({
  name: "accessModelsBlock",
  title: "Access Models",
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
    defineField({ name: "heading", title: "Heading", type: "portableTextWithAccent" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
    defineField({ name: "packsCtaLabel", title: "Packs CTA Label", type: "string" }),
    defineField({
      name: "packsCtaHref",
      title: "Packs CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "terminalCtaLabel", title: "Terminal CTA Label", type: "string" }),
    defineField({
      name: "terminalCtaHref",
      title: "Terminal CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Access Models" };
    },
  },
});
