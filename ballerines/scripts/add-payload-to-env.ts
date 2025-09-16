#!/usr/bin/env tsx

/**
 * Script pour ajouter les variables Payload à un fichier .env existant
 * Usage: tsx scripts/add-payload-to-env.ts
 */

import fs from 'fs'
import path from 'path'

const SUPABASE_URL = 'postgresql://postgres:[YOUR-PASSWORD]@db.djnpveepgofadqnfapks.supabase.co:5432/postgres'

function addPayloadVariables() {
  console.log('🔧 Ajout des variables Payload à votre fichier .env...\n')

  const envPath = path.join(process.cwd(), '.env')
  
  // Vérifier si le fichier .env existe
  if (!fs.existsSync(envPath)) {
    console.log('❌ Fichier .env non trouvé.')
    console.log('💡 Créez un fichier .env à la racine du projet avec ce contenu :')
    console.log('─'.repeat(60))
    console.log(generateCompleteEnvContent())
    console.log('─'.repeat(60))
    return
  }

  try {
    // Lire le contenu existant
    const existingContent = fs.readFileSync(envPath, 'utf8')
    
    // Variables Payload à ajouter
    const payloadVariables = `
# Payload CMS - Supabase PostgreSQL
DATABASE_URL=${SUPABASE_URL}

# Payload CMS
PAYLOAD_SECRET=your-super-secret-payload-key-${Math.random().toString(36).substring(2, 15)}
`

    // Vérifier si les variables existent déjà
    if (existingContent.includes('DATABASE_URL=')) {
      console.log('⚠️  DATABASE_URL existe déjà dans votre .env')
      console.log('💡 Remplacez la valeur existante par :')
      console.log(`   DATABASE_URL=${SUPABASE_URL}`)
    } else {
      // Ajouter les variables à la fin du fichier
      const newContent = existingContent + payloadVariables
      fs.writeFileSync(envPath, newContent)
      console.log('✅ Variables Payload ajoutées à votre .env!')
    }

    if (!existingContent.includes('PAYLOAD_SECRET=')) {
      console.log('✅ PAYLOAD_SECRET ajouté!')
    } else {
      console.log('⚠️  PAYLOAD_SECRET existe déjà')
    }

    console.log('\n🔑 IMPORTANT: Remplacez [YOUR-PASSWORD] par votre mot de passe Supabase!')
    console.log('📍 Récupérez-le dans: Supabase Dashboard → Settings → Database')
    
    console.log('\n📋 Variables ajoutées :')
    console.log('   - DATABASE_URL (Supabase PostgreSQL)')
    console.log('   - PAYLOAD_SECRET (clé de sécurité)')
    
    console.log('\n🚀 Prochaines étapes:')
    console.log('   1. Remplacez [YOUR-PASSWORD] dans DATABASE_URL')
    console.log('   2. Exécutez: npm run payload:setup')
    console.log('   3. Exécutez: npm run payload:generate')
    console.log('   4. Exécutez: npm run payload:init')
    console.log('   5. Démarrez: npm run dev')
    
  } catch (error) {
    console.error('❌ Erreur lors de la modification du fichier .env:', error)
    console.log('\n📋 Ajoutez manuellement ces variables à votre .env :')
    console.log('─'.repeat(60))
    console.log(payloadVariables)
    console.log('─'.repeat(60))
  }
}

function generateCompleteEnvContent() {
  return `# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://djnpveepgofadqnfapks.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Payload CMS - Supabase PostgreSQL
DATABASE_URL=${SUPABASE_URL}

# Payload CMS
PAYLOAD_SECRET=your-super-secret-payload-key-here

# Payment
FAKEPAY_WEBHOOK_SECRET=your-webhook-secret-here`
}

addPayloadVariables()
