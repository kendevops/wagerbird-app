import { defineType, defineField } from "sanity";

export const ctaBannerBlock = defineType({
  name: "ctaBannerBlock",
  title: "CTA Banner",
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
    defineField({ name: "watermark", title: "Watermark", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
  ],
  preview: {
    prepare() {
      return { title: "CTA Banner" };
    },
  },
});
