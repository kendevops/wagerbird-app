import { defineType, defineField } from "sanity";

const CATEGORY_OPTIONS = [
  { title: "Strategy", value: "strategy" },
  { title: "Analytics", value: "analytics" },
  { title: "Bankroll", value: "bankroll" },
  { title: "Markets", value: "markets" },
  { title: "Platform", value: "platform" },
];

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short summary for listing cards and meta description.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show as featured card on blog index.",
      initialValue: false,
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: CATEGORY_OPTIONS,
        layout: "tags",
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      description: "Optional small label above title on post page (e.g. category).",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title Line 1",
      type: "string",
      description: "Optional first line of hero (defaults to title if empty).",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Title Line 2",
      type: "string",
      description: "Optional second line in large type (e.g. italic headline).",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "WagerBird Team",
    }),
    defineField({
      name: "readTimeMinutes",
      title: "Read Time (minutes)",
      type: "number",
      description: "For 'X min read' display.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Accent (yellow)", value: "accent" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                ],
              },
            ],
          },
        },
      ],
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
  ],
  preview: {
    select: { title: "title", slug: "slug.current", publishedAt: "publishedAt" },
    prepare({ title, slug, publishedAt }) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : "";
      return {
        title: title ?? "Untitled",
        subtitle: [slug ? `/${slug}` : "", date].filter(Boolean).join(" · "),
      };
    },
  },
  orderings: [
    {
      title: "Published date, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published date, oldest first",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
