import { defineType, defineField } from "sanity";

export const tickerItem = defineType({
  name: "tickerItem",
  title: "Ticker Item",
  type: "object",
  fields: [
    defineField({ name: "sport", title: "Sport", type: "string" }),
    defineField({ name: "matchup", title: "Matchup", type: "string" }),
    defineField({ name: "confidence", title: "Confidence", type: "number" }),
  ],
});
