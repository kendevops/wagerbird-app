import { defineType, defineField } from "sanity";

export const priceCard = defineType({
  name: "priceCard",
  title: "Price Card",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "points", title: "Points", type: "string" }),
    defineField({ name: "goodFor", title: "Good For", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "popular", title: "Popular", type: "boolean", initialValue: false }),
  ],
});
