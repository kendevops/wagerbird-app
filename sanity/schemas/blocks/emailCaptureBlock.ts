import { defineType, defineField } from "sanity";

export const emailCaptureBlock = defineType({
  name: "emailCaptureBlock",
  title: "Email Capture",
  type: "object",
  fields: [
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
