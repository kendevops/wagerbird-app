import { defineType, defineField } from "sanity";

export const valueStripBlock = defineType({
  name: "valueStripBlock",
  title: "Value Strip",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "valueStripItem" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Value Strip" };
    },
  },
});
