import { defineType, defineField } from "sanity";

export const sportsbooksHeroBlock = defineType({
  name: "sportsbooksHeroBlock",
  title: "Sportsbooks Hero",
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
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Sportsbooks Hero" };
    },
  },
});
