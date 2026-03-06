import { defineType, defineField } from "sanity";

export const sportsbooksSectionBlock = defineType({
  name: "sportsbooksSectionBlock",
  title: "Sportsbooks Section",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "sportsbooks",
      title: "Sportsbooks",
      type: "array",
      of: [{ type: "sportsbookCard" }],
    }),
    defineField({ name: "disclaimer", title: "Disclaimer", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Sportsbooks Section" };
    },
  },
});
