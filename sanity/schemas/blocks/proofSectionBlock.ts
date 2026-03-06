import { defineType, defineField } from "sanity";

export const proofSectionBlock = defineType({
  name: "proofSectionBlock",
  title: "Proof Section",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", description: "Optional section label" }),
  ],
  preview: {
    prepare() {
      return { title: "Proof Section" };
    },
  },
});
