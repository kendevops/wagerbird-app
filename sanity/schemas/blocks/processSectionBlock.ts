import { defineType, defineField } from "sanity";

export const processSectionBlock = defineType({
  name: "processSectionBlock",
  title: "Process Section",
  type: "object",
  fields: [
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
