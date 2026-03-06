import { defineType, defineField } from "sanity";

export const hotsheetPricingBlock = defineType({
  name: "hotsheetPricingBlock",
  title: "Hotsheet Pricing",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", description: "Optional section label" }),
  ],
  preview: {
    prepare() {
      return { title: "Hotsheet Pricing" };
    },
  },
});
