import { defineField, defineType } from 'sanity'

export const howItWorksSection = defineType({
  name: 'howItWorksSection',
  title: 'How It Works Section',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),
    defineField({
      name: 'highlightWord',
      title: 'Highlight Word',
      type: 'string',
    }),
  ],
})

export const howItWorksStep = defineType({
  name: 'howItWorksStep',
  title: 'How It Works Step',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Step Number',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
