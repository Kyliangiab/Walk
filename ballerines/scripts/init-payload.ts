import { getPayload } from 'payload'
import config from '../payload.config'

async function initPayload() {
  try {
    const payload = await getPayload({ config })
    
    console.log('✅ Payload CMS initialized successfully with Supabase PostgreSQL!')
    console.log('🎛️ Admin panel available at: http://localhost:3000/admin')
    
    // Create default admin user if none exists
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        role: {
          equals: 'admin',
        },
      },
    })

    if (existingUsers.docs.length === 0) {
      console.log('👤 Creating default admin user...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@ballerines.com',
          password: 'admin123',
          name: 'Admin User',
          role: 'admin',
        },
      })
      console.log('✅ Default admin user created: admin@ballerines.com / admin123')
    } else {
      console.log('👤 Admin user already exists')
    }

    // Create default categories
    const existingCategories = await payload.find({
      collection: 'categories',
    })

    if (existingCategories.docs.length === 0) {
      console.log('📂 Creating default categories...')
      const categories = [
        {
          name: 'Ballerines Classiques',
          slug: 'ballerines-classiques',
          description: 'Nos ballerines classiques et intemporelles',
          isActive: true,
          sortOrder: 1,
        },
        {
          name: 'Ballerines Éco-responsables',
          slug: 'ballerines-eco',
          description: 'Ballerines fabriquées avec des matériaux durables',
          isActive: true,
          sortOrder: 2,
        },
        {
          name: 'Nouveautés',
          slug: 'nouveautes',
          description: 'Nos dernières créations',
          isActive: true,
          sortOrder: 3,
        },
      ]

      for (const category of categories) {
        await payload.create({
          collection: 'categories',
          data: category,
        })
      }
      console.log('✅ Default categories created!')
    } else {
      console.log('📂 Categories already exist')
    }

    console.log('🚀 Payload CMS is ready to use!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error initializing Payload:', error)
    console.error('💡 Make sure your Supabase DATABASE_URL is correctly configured in .env')
    process.exit(1)
  }
}

initPayload()
