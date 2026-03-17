import { defineType, defineField } from "sanity";

export const sportsbooksSectionBlock = defineType({
  name: "sportsbooksSectionBlock",
  title: "Sportsbooks Section",
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
    defineField({
      name: "sportsbooks",
      title: "Sportsbooks",
      type: "array",
      of: [{ type: "sportsbookCard" }],
    }),
    defineField({ name: "disclaimer", title: "Disclaimer", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Sportsbooks Section" };
    },
  },
});
