import { defineType, defineField } from 'sanity'

export const packsSection = defineType({
  name: 'packsSection',
  title: 'Packs Section',
  type: 'document',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'text' }),
    defineField({ name: 'highlightWord', title: 'Highlight Word', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'footnote', title: 'Footnote', type: 'text' }),
  ],
})

export const pack = defineType({
  name: 'pack',
  title: 'Pack',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'points', title: 'Points', type: 'string' }),
    defineField({ name: 'goodFor', title: 'Good For', type: 'string' }),
    defineField({ name: 'price', title: 'Price', type: 'number' }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'popular', title: 'Popular', type: 'boolean' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
