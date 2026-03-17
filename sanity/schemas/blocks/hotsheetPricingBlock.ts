import { defineType, defineField } from "sanity";

export const hotsheetPricingBlock = defineType({
  name: "hotsheetPricingBlock",
  title: "Hotsheet Pricing",
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
    defineField({ name: "label", title: "Label", type: "string", description: "Optional section label" }),
  ],
  preview: {
    prepare() {
      return { title: "Hotsheet Pricing" };
    },
  },
});
