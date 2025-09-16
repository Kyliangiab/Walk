import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'

import { Users } from './src/collections/Users'
import { Products } from './src/collections/Products'
import { Categories } from './src/collections/Categories'
import { Orders } from './src/collections/Orders'
import { Media } from './src/collections/Media'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Ballerines CRM',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Products,
    Categories,
    Orders,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL!,
    },
  }),
})
