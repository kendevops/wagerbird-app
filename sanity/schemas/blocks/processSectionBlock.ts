import { defineType, defineField } from "sanity";

export const processSectionBlock = defineType({
  name: "processSectionBlock",
  title: "Process Section",
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
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "stepItem" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Process Section" };
    },
  },
});
