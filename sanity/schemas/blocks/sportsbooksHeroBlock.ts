import { defineType, defineField } from "sanity";

export const sportsbooksHeroBlock = defineType({
  name: "sportsbooksHeroBlock",
  title: "Sportsbooks Hero",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Sportsbooks Hero" };
    },
  },
});
