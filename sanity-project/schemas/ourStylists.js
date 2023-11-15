import {defineField, defineType} from 'sanity'

const ourStylists = defineType({
  name: 'ourStylists',
  type: 'document',
  title: 'Our Stylists - Home Page & Team Page',
  fields: [
    defineField({
      name: 'Stylist',
      type: 'object',
      fields: [
        defineField({
          name: 'Name',
          type: 'string',
          title: 'Stylist Name',
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
          name: 'Title',
          type: 'string',
          title: 'Stylist Title',
        }),
        defineField({
          name: 'descriptionOne',
          type: 'string',
          title: 'Stylist Description One',
        }),
        defineField({
          name: 'descriptionTwo',
          type: 'string',
          title: 'Stylist Description Two',
        }),
        defineField({
          name: 'descriptionThree',
          type: 'string',
          title: 'Stylist Description Three',
        }),
      ],
    }),
  ],
})

export default ourStylists
