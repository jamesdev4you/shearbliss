import {defineField, defineType} from 'sanity'

const ourMenu = defineType({
  name: 'ourMenu',
  type: 'document',
  title: 'Our Menu - Home Page',
  fields: [
    defineField({
      name: 'Hair',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemThreePrice',
          type: 'string',
          title: 'Item Three Price',
        }),
      ],
    }),
    defineField({
      name: 'Facial',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemThreePrice',
          type: 'string',
          title: 'Item Three Price',
        }),
        defineField({
          name: 'ItemFour',
          type: 'string',
          title: 'Item Four',
        }),
        defineField({
          name: 'ItemFourPrice',
          type: 'string',
          title: 'Item Four Price',
        }),
        defineField({
          name: 'ItemFive',
          type: 'string',
          title: 'Item Five',
        }),
        defineField({
          name: 'ItemFivePrice',
          type: 'string',
          title: 'Item Five Price',
        }),
      ],
    }),
    defineField({
      name: 'ManiPedi',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemThreePrice',
          type: 'string',
          title: 'Item Three Price',
        }),
      ],
    }),
    defineField({
      name: 'Color',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemThreePrice',
          type: 'string',
          title: 'Item Three Price',
        }),
        defineField({
          name: 'ItemFour',
          type: 'string',
          title: 'Item Four',
        }),
        defineField({
          name: 'ItemFourPrice',
          type: 'string',
          title: 'Item Four Price',
        }),
      ],
    }),
    defineField({
      name: 'CustomColor',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
      ],
    }),
    defineField({
      name: 'Wax',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemThreePrice',
          type: 'string',
          title: 'Item Three Price',
        }),
        defineField({
          name: 'ItemFour',
          type: 'string',
          title: 'Item Four',
        }),
        defineField({
          name: 'ItemFourPrice',
          type: 'string',
          title: 'Item Four Price',
        }),
      ],
    }),
    defineField({
      name: 'Textures',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemTwoPrice',
          type: 'string',
          title: 'Item Two Price',
        }),
      ],
    }),
    defineField({
      name: 'Extensions',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemOnePrice',
          type: 'string',
          title: 'Item One Price',
        }),
      ],
    }),
  ],
})

export default ourMenu
