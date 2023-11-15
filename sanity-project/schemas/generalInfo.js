import {defineField, defineType} from 'sanity'

const generalInfo = defineType({
  name: 'info',
  type: 'document',
  title: 'General Info - All Pages',
  fields: [
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      type: 'object',
      fields: [
        defineField({
          name: 'Monday',
          type: 'string',
        }),
        defineField({
          name: 'Tuesday',
          type: 'string',
        }),
        defineField({
          name: 'Wednesday',
          type: 'string',
        }),
        defineField({
          name: 'Thursday',
          type: 'string',
        }),
        defineField({
          name: 'Friday',
          type: 'string',
        }),
        defineField({
          name: 'Saturday',
          type: 'string',
        }),
        defineField({
          name: 'Sunday',
          type: 'string',
        }),
      ],
    }),
  ],
})

export default generalInfo
