import { defineType, defineField } from "sanity";

export const signalCard = defineType({
  name: "signalCard",
  title: "Signal Card",
  type: "object",
  fields: [
    defineField({ name: "matchup", title: "Matchup", type: "string" }),
    defineField({ name: "sport", title: "Sport", type: "string" }),
    defineField({ name: "time", title: "Time", type: "string" }),
    defineField({ name: "betType", title: "Bet Type", type: "string" }),
    defineField({ name: "confidence", title: "Confidence", type: "number" }),
    defineField({ name: "locked", title: "Locked", type: "boolean", initialValue: false }),
  ],
});
