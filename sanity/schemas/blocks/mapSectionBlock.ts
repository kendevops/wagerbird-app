import { defineType, defineField } from "sanity";

export const mapSectionBlock = defineType({
  name: "mapSectionBlock",
  title: "Map Section",
  type: "object",
  fields: [
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
