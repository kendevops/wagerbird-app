import { defineType, defineField } from "sanity";

export const valueStripBlock = defineType({
  name: "valueStripBlock",
  title: "Value Strip",
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
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "valueStripItem" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Value Strip" };
    },
  },
});
