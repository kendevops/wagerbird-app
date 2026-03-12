import { defineType, defineField } from "sanity";

export const sportsbookCard = defineType({
  name: "sportsbookCard",
  title: "Sportsbook Card",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Sportsbook logo shown in the card header",
      options: { hotspot: true },
    }),
    defineField({ name: "brandColor", title: "Brand Color", type: "string", description: "Hex or CSS color" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "showDescription",
      title: "Show Description",
      type: "boolean",
      description: "Toggle off to hide the description on this card",
      initialValue: true,
    }),
    defineField({ name: "pointsPack", title: "Points Pack", type: "string" }),
    defineField({
      name: "showPointsPack",
      title: "Show Points Pack",
      type: "boolean",
      description: "Toggle off to hide the Points Pack badge on this card",
      initialValue: true,
    }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "states", title: "States", type: "array", of: [{ type: "string" }] }),
  ],
});
