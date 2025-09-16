import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category', 'isActive', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'compareAtPrice',
      type: 'number',
      min: 0,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
      minRows: 1,
    },
    {
      name: 'variants',
      type: 'array',
      fields: [
        {
          name: 'size',
          type: 'select',
          options: [
            { label: '28', value: '28' },
            { label: '29', value: '29' },
            { label: '30', value: '30' },
            { label: '31', value: '31' },
            { label: '32', value: '32' },
            { label: '33', value: '33' },
            { label: '34', value: '34' },
            { label: '35', value: '35' },
            { label: '36', value: '36' },
            { label: '37', value: '37' },
            { label: '38', value: '38' },
            { label: '39', value: '39' },
            { label: '40', value: '40' },
            { label: '41', value: '41' },
            { label: '42', value: '42' },
            { label: '43', value: '43' },
            { label: '44', value: '44' },
            { label: '45', value: '45' },
            { label: '46', value: '46' },
          ],
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          required: true,
        },
        {
          name: 'sku',
          type: 'text',
          required: true,
        },
        {
          name: 'stock',
          type: 'number',
          required: true,
          defaultValue: 0,
          min: 0,
        },
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'materials',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'percentage',
          type: 'number',
          min: 0,
          max: 100,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isEcoFriendly',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'ecoScore',
      type: 'number',
      min: 0,
      max: 100,
    },
    {
      name: 'weight',
      type: 'number',
      min: 0,
    },
    {
      name: 'dimensions',
      type: 'group',
      fields: [
        {
          name: 'length',
          type: 'number',
          min: 0,
        },
        {
          name: 'width',
          type: 'number',
          min: 0,
        },
        {
          name: 'height',
          type: 'number',
          min: 0,
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          type: 'text',
        },
      ],
    },
  ],
}
