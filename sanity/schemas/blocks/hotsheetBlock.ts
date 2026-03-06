import { defineType, defineField } from "sanity";

export const hotsheetBlock = defineType({
  name: "hotsheetBlock",
  title: "Hotsheet",
  type: "object",
  fields: [
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hotsheet" };
    },
  },
});
