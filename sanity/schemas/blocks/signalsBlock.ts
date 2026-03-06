import { defineType, defineField } from "sanity";

export const signalsBlock = defineType({
  name: "signalsBlock",
  title: "Signals",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path (e.g. /terminal)",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: "items",
      title: "Signal Cards",
      type: "array",
      of: [{ type: "signalCard" }],
    }),
    defineField({ name: "footerText", title: "Footer Text", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Signals" };
    },
  },
});
