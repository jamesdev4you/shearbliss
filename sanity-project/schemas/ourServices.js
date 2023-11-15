import {defineField, defineType} from 'sanity'

const ourServices = defineType({
  name: 'ourServices',
  type: 'document',
  title: 'Our Services- Home Page',
  fields: [
    defineField({
      name: 'Facials',
      type: 'object',
      fields: [
        defineField({
          name: 'paragraphOne',
          type: 'string',
          title: 'Paragraph One',
        }),
        defineField({
          name: 'paragraphTwo',
          type: 'string',
          title: 'Paragraph Two',
        }),
        defineField({
          name: 'paragraphThree',
          type: 'string',
          title: 'Paragraph Three',
        }),
        defineField({
          name: 'paragraphFour',
          type: 'string',
          title: 'Paragraph Four',
        }),
      ],
    }),
    defineField({
      name: 'ManiPedi',
      type: 'object',
      fields: [
        defineField({
          name: 'paragraphOne',
          type: 'string',
          title: 'Paragraph One',
        }),
        defineField({
          name: 'paragraphTwo',
          type: 'string',
          title: 'Paragraph Two',
        }),
        defineField({
          name: 'paragraphThree',
          type: 'string',
          title: 'Paragraph Three',
        }),
        defineField({
          name: 'paragraphFour',
          type: 'string',
          title: 'Paragraph Four',
        }),
      ],
    }),
    defineField({
      name: 'HairStylist',
      type: 'object',
      fields: [
        defineField({
          name: 'paragraphOne',
          type: 'string',
          title: 'Paragraph One',
        }),
        defineField({
          name: 'paragraphTwo',
          type: 'string',
          title: 'Paragraph Two',
        }),
        defineField({
          name: 'paragraphThree',
          type: 'string',
          title: 'Paragraph Three',
        }),
        defineField({
          name: 'paragraphFour',
          type: 'string',
          title: 'Paragraph Four',
        }),
      ],
    }),
  ],
})

export default ourServices
