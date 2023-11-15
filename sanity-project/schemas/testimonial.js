import {defineField, defineType} from 'sanity'

const testimonial = defineType({
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials - Reviews Page',
  fields: [
    defineField({
      name: 'Testimonial',
      type: 'object',
      fields: [
        defineField({
          name: 'Name',
          type: 'string',
          title: 'Reviewer Name',
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
        defineField({
          name: 'Quote',
          type: 'string',
          title: 'Review Quote',
        }),
      ],
    }),
  ],
})

export default testimonial
