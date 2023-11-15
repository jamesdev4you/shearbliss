import {defineField, defineType} from 'sanity'

const picture = defineType({
  name: 'galleryPicture',
  type: 'document',
  title: 'Gallery Pictures - Gallery Page',
  fields: [
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
  ],
})

export default picture
