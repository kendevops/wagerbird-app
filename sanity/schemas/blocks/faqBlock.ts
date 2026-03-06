import { defineType, defineField } from "sanity";

export const faqBlock = defineType({
  name: "faqBlock",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({
      name: "items",
      title: "FAQ Items",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "FAQ" };
    },
  },
});
