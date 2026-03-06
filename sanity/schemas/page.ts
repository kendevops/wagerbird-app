import { defineType, defineField } from "sanity";
import { PAGE_ICON_OPTIONS, renderPageIcon } from "../lib/pageIcons";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first in the list. Change this to reorder pages.",
      initialValue: 0,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: { list: [...PAGE_ICON_OPTIONS] },
      description: "Icon shown next to this page in the studio list.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta Title", type: "string" },
        { name: "metaDescription", title: "Meta Description", type: "text" },
        { name: "ogImage", title: "OG Image", type: "image" },
      ],
    }),
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [
        { type: "heroBlock" },
        { type: "tickerBlock" },
        { type: "signalsBlock" },
        { type: "packsBlock" },
        { type: "howItWorksBlock" },
        { type: "faqBlock" },
        { type: "ctaBannerBlock" },
        { type: "valueStripBlock" },
        { type: "hotsheetBlock" },
        { type: "hotsheetPromoBlock" },
        { type: "hotsheetFeaturesBlock" },
        { type: "hotsheetPricingBlock" },
        { type: "hotsheetWhyBlock" },
        { type: "proofSectionBlock" },
        { type: "processSectionBlock" },
        { type: "emailCaptureBlock" },
        { type: "sportsbooksHeroBlock" },
        { type: "sportsbooksSectionBlock" },
        { type: "accessModelsBlock" },
        { type: "mapSectionBlock" },
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current", icon: "icon" },
    prepare({ title, slug, icon }) {
      return {
        title: title ?? slug ?? "Untitled",
        subtitle: slug ? `/${slug}` : "",
        media: () => renderPageIcon(icon),
      };
    },
  },
});
