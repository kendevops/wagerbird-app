import { defineField, defineType } from 'sanity'

export const hotsheetSection = defineType({
  name: 'hotsheetSection',
  title: 'Hotsheet Section',
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
      name: 'perks',
      title: 'Perks',
      type: 'string',
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
  ],
})

export const emailCaptureSection = defineType({
  name: 'emailCaptureSection',
  title: 'Email Capture Section',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'cardTitle',
      title: 'Card Title',
      type: 'string',
    }),
    defineField({
      name: 'cardSubtitle',
      title: 'Card Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'string',
    }),
  ],
})

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
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

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})

export const ctaBannerSection = defineType({
  name: 'ctaBannerSection',
  title: 'CTA Banner Section',
  type: 'document',
  fields: [
    defineField({
      name: 'watermark',
      title: 'Watermark Text',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
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
  ],
})
