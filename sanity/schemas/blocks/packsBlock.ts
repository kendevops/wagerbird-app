import { defineType, defineField } from "sanity";

export const packsBlock = defineType({
  name: "packsBlock",
  title: "Packs",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "packs",
      title: "Packs",
      type: "array",
      of: [{ type: "priceCard" }],
    }),
    defineField({ name: "footnote", title: "Footnote", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Packs" };
    },
  },
});
