import { defineType, defineField } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site SEO & Icons",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      description: "Brand/site name used in titles (e.g. Wagerbird)",
      initialValue: "Wagerbird",
    }),
    defineField({
      name: "defaultMetaTitle",
      title: "Default Meta Title",
      type: "string",
      description: "Default <title> when a page doesn't set one. Use %s for page title.",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "defaultMetaDescription",
      title: "Default Meta Description",
      type: "text",
      description: "Default meta description when a page doesn't set one.",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default OG Image",
      type: "image",
      description: "Default Open Graph image for social sharing when a page doesn't set one.",
      options: { hotspot: true },
    }),
    defineField({
      name: "favicon",
      title: "Favicon / Tab Icon",
      type: "image",
      description: "Browser tab icon (e.g. 32×32 or 48×48). PNG or ICO.",
      options: { hotspot: false },
    }),
    defineField({
      name: "appleTouchIcon",
      title: "Apple Touch Icon",
      type: "image",
      description: "Icon for Apple devices (e.g. 180×180). Optional.",
      options: { hotspot: false },
    }),
    defineField({
      name: "twitterHandle",
      title: "Twitter / X Handle",
      type: "string",
      description: "e.g. @wagerbird (without @)",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site SEO & Icons" };
    },
  },
});
