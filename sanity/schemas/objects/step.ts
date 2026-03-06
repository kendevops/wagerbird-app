import { defineType, defineField } from "sanity";

export const stepItem = defineType({
  name: "stepItem",
  title: "Step",
  type: "object",
  fields: [
    defineField({ name: "number", title: "Number", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});
