import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'role', 'createdAt'],
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
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Seller',
          value: 'seller',
        },
        {
          label: 'Customer',
          value: 'customer',
        },
      ],
      defaultValue: 'customer',
      required: true,
    },
    {
      name: 'addresses',
      type: 'array',
      fields: [
        {
          name: 'street',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'postalCode',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
          defaultValue: 'France',
        },
        {
          name: 'isDefault',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'dateOfBirth',
      type: 'date',
    },
    {
      name: 'preferences',
      type: 'group',
      fields: [
        {
          name: 'newsletter',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'sms',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'size',
          type: 'select',
          options: [
            { label: '35', value: '35' },
            { label: '36', value: '36' },
            { label: '37', value: '37' },
            { label: '38', value: '38' },
            { label: '39', value: '39' },
            { label: '40', value: '40' },
            { label: '41', value: '41' },
            { label: '42', value: '42' },
          ],
        },
      ],
    },
  ],
}
