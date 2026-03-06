import { defineType, defineField } from "sanity";

export const hotsheetWhyBlock = defineType({
  name: "hotsheetWhyBlock",
  title: "Hotsheet Why",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", description: "Optional section label" }),
  ],
  preview: {
    prepare() {
      return { title: "Hotsheet Why" };
    },
  },
});
