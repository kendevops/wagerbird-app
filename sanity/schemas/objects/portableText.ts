import { defineType, defineArrayMember } from "sanity";

export const portableTextWithAccent = defineType({
  name: "portableTextWithAccent",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      marks: {
        annotations: [],
        decorators: [
          { title: "Accent (yellow)", value: "accent" },
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
      },
    }),
  ],
});
