import { defineType, defineField } from "sanity";

export const mapSectionBlock = defineType({
  name: "mapSectionBlock",
  title: "Map Section",
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
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Multi-line: use \\n for line breaks",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "disclaimer", title: "Disclaimer", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Map Section" };
    },
  },
});
