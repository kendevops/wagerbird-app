import { defineType, defineField } from "sanity";

export const hotsheetFeaturesBlock = defineType({
  name: "hotsheetFeaturesBlock",
  title: "Hotsheet Features",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", description: "Optional section label" }),
  ],
  preview: {
    prepare() {
      return { title: "Hotsheet Features" };
    },
  },
});
