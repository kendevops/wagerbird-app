import { defineType, defineField } from "sanity";

export const emailCaptureBlock = defineType({
  name: "emailCaptureBlock",
  title: "Email Capture",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID (anchor)",
      type: "string",
      description:
        "Optional. Used for in-page links (e.g. buttons that scroll here). Must be unique on the page and contain no spaces.",
      validation: (Rule) =>
        Rule.regex(/^[a-z0-9-]+$/).warning(
          "Use only lowercase letters, numbers, and hyphens for a valid HTML id.",
        ),
    }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "portableTextWithAccent" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "portableTextWithAccent" }),
    defineField({ name: "cardTitle", title: "Card Title", type: "string" }),
    defineField({ name: "cardSubtitle", title: "Card Subtitle", type: "string" }),
    defineField({ name: "buttonLabel", title: "Button Label", type: "string" }),
    defineField({ name: "disclaimer", title: "Disclaimer", type: "text" }),
  ],
  preview: {
    prepare() {
      return { title: "Email Capture" };
    },
  },
});
