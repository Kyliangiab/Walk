import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customer', 'status', 'total', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'admin' || user?.role === 'seller') {
        return true
      }
      return {
        customer: {
          equals: user?.id,
        },
      }
    },
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Processing',
          value: 'processing',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Delivered',
          value: 'delivered',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
      ],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'variant',
          type: 'group',
          fields: [
            {
              name: 'size',
              type: 'text',
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
          ],
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
        },
      ],
      minRows: 1,
    },
    {
      name: 'shippingAddress',
      type: 'group',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
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
          name: 'phone',
          type: 'text',
        },
      ],
    },
    {
      name: 'billingAddress',
      type: 'group',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
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
      ],
    },
    {
      name: 'totals',
      type: 'group',
      fields: [
        {
          name: 'subtotal',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'shipping',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'tax',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'discount',
          type: 'number',
          min: 0,
        },
        {
          name: 'total',
          type: 'number',
          required: true,
          min: 0,
        },
      ],
    },
    {
      name: 'payment',
      type: 'group',
      fields: [
        {
          name: 'method',
          type: 'select',
          options: [
            { label: 'Credit Card', value: 'credit_card' },
            { label: 'PayPal', value: 'paypal' },
            { label: 'Bank Transfer', value: 'bank_transfer' },
            { label: 'Cash on Delivery', value: 'cod' },
          ],
          required: true,
        },
        {
          name: 'transactionId',
          type: 'text',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Paid', value: 'paid' },
            { label: 'Failed', value: 'failed' },
            { label: 'Refunded', value: 'refunded' },
          ],
          defaultValue: 'pending',
        },
      ],
    },
    {
      name: 'shipping',
      type: 'group',
      fields: [
        {
          name: 'method',
          type: 'select',
          options: [
            { label: 'Standard', value: 'standard' },
            { label: 'Express', value: 'express' },
            { label: 'Overnight', value: 'overnight' },
          ],
          required: true,
        },
        {
          name: 'trackingNumber',
          type: 'text',
        },
        {
          name: 'carrier',
          type: 'text',
        },
        {
          name: 'estimatedDelivery',
          type: 'date',
        },
        {
          name: 'actualDelivery',
          type: 'date',
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes visible only to staff',
      },
    },
  ],
}
