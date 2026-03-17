import { defineType, defineField } from "sanity";

export const packsBlock = defineType({
  name: "packsBlock",
  title: "Packs",
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
      name: "packs",
      title: "Packs",
      type: "array",
      of: [{ type: "priceCard" }],
    }),
    defineField({ name: "footnote", title: "Footnote", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Packs" };
    },
  },
});
