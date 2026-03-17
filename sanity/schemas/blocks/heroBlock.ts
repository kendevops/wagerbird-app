import { defineType, defineField } from "sanity";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero",
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
    defineField({ name: "tickerText", title: "Ticker Text", type: "string", description: "Optional; shown in the hero ticker bar" }),
    defineField({ name: "badgeText", title: "Badge Text", type: "string", description: "Optional; small label above the title" }),
    defineField({
      name: "title",
      title: "Title",
      type: "portableTextWithAccent",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "statItem" }],
    }),
    defineField({ name: "primaryCtaLabel", title: "Primary CTA Label", type: "string" }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA URL",
      type: "url",
      description: "External URL (https://…) or internal path (e.g. /picks, /terminal)",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA Label", type: "string" }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA URL",
      type: "url",
      description: "External URL (https://…) or internal path (e.g. /picks, /terminal)",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "image", title: "Image", type: "image" }),
    defineField({ name: "imageUrl", title: "Image URL", type: "string", description: "Optional external image URL (overrides Image if set)" }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "External or relative URL",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
  ],
  preview: {
    select: { title: "description" },
    prepare() {
      return { title: "Hero" };
    },
  },
});
