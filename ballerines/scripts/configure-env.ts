#!/usr/bin/env tsx

/**
 * Script pour configurer les variables d'environnement
 * Usage: tsx scripts/configure-env.ts
 */

import fs from 'fs'
import path from 'path'

const SUPABASE_URL = 'postgresql://postgres:[YOUR-PASSWORD]@db.djnpveepgofadqnfapks.supabase.co:5432/postgres'
const SUPABASE_PROJECT_URL = 'https://djnpveepgofadqnfapks.supabase.co'

function generateEnvContent() {
  return `# Supabase Database URL
DATABASE_URL=${SUPABASE_URL}

# Payload CMS
PAYLOAD_SECRET=your-super-secret-payload-key-${Math.random().toString(36).substring(2, 15)}

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-${Math.random().toString(36).substring(2, 15)}

# Supabase
NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_PROJECT_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Payment
FAKEPAY_WEBHOOK_SECRET=your-webhook-secret-${Math.random().toString(36).substring(2, 15)}
`
}

async function configureEnvironment() {
  console.log('🔧 Configuration des variables d\'environnement...\n')

  const envPath = path.join(process.cwd(), '.env.local')
  
  // Vérifier si le fichier existe déjà
  if (fs.existsSync(envPath)) {
    console.log('⚠️  Le fichier .env.local existe déjà.')
    console.log('💡 Voulez-vous le remplacer ? (y/N)')
    
    // En mode non-interactif, on affiche le contenu à ajouter
    console.log('\n📋 Ajoutez ces variables à votre .env.local :')
    console.log('─'.repeat(50))
    console.log(generateEnvContent())
    console.log('─'.repeat(50))
  } else {
    try {
      fs.writeFileSync(envPath, generateEnvContent())
      console.log('✅ Fichier .env.local créé avec succès!')
      console.log('📁 Chemin:', envPath)
    } catch (error) {
      console.error('❌ Erreur lors de la création du fichier:', error)
      console.log('\n📋 Créez manuellement le fichier .env.local avec ce contenu :')
      console.log('─'.repeat(50))
      console.log(generateEnvContent())
      console.log('─'.repeat(50))
    }
  }

  console.log('\n🔑 IMPORTANT: Remplacez [YOUR-PASSWORD] par votre mot de passe Supabase!')
  console.log('📍 Récupérez-le dans: Supabase Dashboard → Settings → Database')
  
  console.log('\n🚀 Prochaines étapes:')
  console.log('   1. Remplacez [YOUR-PASSWORD] dans DATABASE_URL')
  console.log('   2. Récupérez vos clés Supabase (anon-key, service-role-key)')
  console.log('   3. Exécutez: npm run payload:setup')
  console.log('   4. Exécutez: npm run payload:generate')
  console.log('   5. Exécutez: npm run payload:init')
  console.log('   6. Démarrez: npm run dev')
}

configureEnvironment().catch(console.error)
