import { defineType, defineField } from "sanity";

export const howItWorksBlock = defineType({
  name: "howItWorksBlock",
  title: "How It Works",
  type: "object",
  fields: [
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
