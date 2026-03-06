import { defineType, defineField } from "sanity";

export const accessModelsBlock = defineType({
  name: "accessModelsBlock",
  title: "Access Models",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "portableTextWithAccent" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
    defineField({ name: "packsCtaLabel", title: "Packs CTA Label", type: "string" }),
    defineField({
      name: "packsCtaHref",
      title: "Packs CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "terminalCtaLabel", title: "Terminal CTA Label", type: "string" }),
    defineField({
      name: "terminalCtaHref",
      title: "Terminal CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Access Models" };
    },
  },
});
