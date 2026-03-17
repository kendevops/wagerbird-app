import { defineType, defineField } from "sanity";

export const howItWorksBlock = defineType({
  name: "howItWorksBlock",
  title: "How It Works",
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
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "stepItem" }],
    }),
    defineField({
      name: "stepVariant",
      title: "Step Variant",
      type: "string",
      options: { list: [{ title: "Badge", value: "badge" }, { title: "Card", value: "card" }] },
    }),
  ],
  preview: {
    prepare() {
      return { title: "How It Works" };
    },
  },
});
