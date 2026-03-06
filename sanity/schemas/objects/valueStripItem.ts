import { defineType, defineField } from "sanity";

export const valueStripItem = defineType({
  name: "valueStripItem",
  title: "Value Strip Item",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "description", title: "Description", type: "string" }),
  ],
});
