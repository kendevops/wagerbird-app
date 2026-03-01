import { defineField, defineType } from 'sanity'

export const signalsSection = defineType({
  name: 'signalsSection',
  title: 'Signals Section',
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
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
  ],
})

export const signal = defineType({
  name: 'signal',
  title: 'Signal',
  type: 'document',
  fields: [
    defineField({
      name: 'matchup',
      title: 'Matchup',
      type: 'string',
    }),
    defineField({
      name: 'sport',
      title: 'Sport',
      type: 'string',
      options: {
        list: ['MLB', 'NBA', 'NFL', 'NHL'],
      },
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'betType',
      title: 'Bet Type',
      type: 'string',
      options: {
        list: ['ML', 'Spread', 'O/U', 'RL'],
      },
    }),
    defineField({
      name: 'confidence',
      title: 'Confidence',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'locked',
      title: 'Locked',
      type: 'boolean',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
