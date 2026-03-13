import { defineType, defineField } from "sanity";

const US_STATES = [
  "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida",
  "Georgia", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New York",
  "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
].map((s) => ({ title: s, value: s }));

export const sportsbookCard = defineType({
  name: "sportsbookCard",
  title: "Sportsbook Card",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Sportsbook logo shown in the card header",
      options: { hotspot: true },
    }),
    defineField({ name: "brandColor", title: "Brand Color", type: "string", description: "Hex or CSS color" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "showDescription",
      title: "Show Description",
      type: "boolean",
      description: "Toggle off to hide the description on this card",
      initialValue: true,
    }),
    defineField({
      name: "pointsPack",
      title: "Points Pack",
      type: "string",
      description: "WAGERBIRD reward, e.g. +$39 Points Pack",
      initialValue: "+$39 Points Pack",
    }),
    defineField({
      name: "showPointsPack",
      title: "Show Points Pack",
      type: "boolean",
      description: "Toggle off to hide the Points Pack badge on this card",
      initialValue: true,
    }),
    defineField({
      name: "ctaHref",
      title: "CTA URL",
      type: "url",
      description: "External URL or internal path",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: "currentOffer",
      title: "Current Offer",
      type: "string",
      description: "Default offer text, e.g. BET $5, GET $200 IN BONUS BETS",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Feature bullets for the offer modal",
    }),
    defineField({
      name: "stateOffers",
      title: "State-Specific Offers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "states",
              title: "States",
              type: "array",
              of: [{ type: "string", options: { list: US_STATES } }],
              description: "Select one or more states. This offer applies to all selected states.",
              validation: (Rule) => Rule.min(1).error("Select at least one state"),
            },
            {
              name: "ctaHref",
              title: "CTA URL",
              type: "url",
              description: "Signup URL for this offer (used when user opens account)",
              validation: (Rule) => Rule.uri({ allowRelative: true }),
            },
            {
              name: "offerText",
              title: "Offer Text",
              type: "string",
              description: "Current offer headline, e.g. BET $5, GET $200 IN BONUS BETS",
            },
            {
              name: "pointsPack",
              title: "Points Pack",
              type: "string",
              description: "WAGERBIRD reward, e.g. +$39 Points Pack",
              initialValue: "+$39 Points Pack",
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
              description: "Feature bullets for the offer modal",
            },
            {
              name: "detailText",
              title: "Detail Card Text",
              type: "text",
              description: "Full text for the white detail card, e.g. Bet $5, Get $200 in Bonus Bets If Your Bet Wins!",
            },
            {
              name: "legalText",
              title: "Legal Text",
              type: "text",
              description: "Optional legal copy in the detail card (e.g. GAMBLING PROBLEM? CALL 1-800-GAMBLER...)",
            },
            {
              name: "disclaimer",
              title: "Footer Disclaimer",
              type: "text",
              description: "Optional disclaimer at bottom of modal (e.g. New accounts only. Must be 21+...)",
            },
          ],
          preview: {
            select: { states: "states" },
            prepare: ({ states }) => ({
              title: Array.isArray(states) && states.length > 0
                ? states.join(", ")
                : "Untitled offer",
            }),
          },
        },
      ],
      description: "Offers per state. One block can cover multiple states. Falls back to sportsbook defaults when no match.",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Sportsbook", value: "sportsbook" },
          { title: "DFS / Sweeps", value: "dfs_sweeps" },
        ],
      },
      initialValue: "sportsbook",
      description: "Category for filtering in the Sportsbooks tabs. Not shown on the card.",
    }),
    defineField({ name: "states", title: "States", type: "array", of: [{ type: "string" }] }),
  ],
});
