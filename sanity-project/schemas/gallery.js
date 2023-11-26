import {defineField, defineType} from 'sanity'

const gallery = defineType({
  name: 'gallery',
  type: 'document',
  title: 'Gallery - all photos',
  fields: [
    defineField({
      name: 'photoOne',
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
        name: 'photoTwo',
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
        name: 'photoThree',
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
        name: 'photoFour',
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
        name: 'photoFive',
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
        name: 'photoSix',
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
        name: 'photoSeven',
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
        name: 'photoEight',
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
        name: 'photoNine',
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
        name: 'photoTen',
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
        name: 'photoEleven',
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
        name: 'photoTwelve',
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
  ],
})

export default header
