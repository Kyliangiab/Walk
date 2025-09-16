#!/usr/bin/env tsx

/**
 * Script pour configurer Payload CMS avec Supabase
 * Usage: tsx scripts/setup-supabase.ts
 */

import { createClient } from '@supabase/supabase-js'

async function setupSupabase() {
  console.log('🚀 Configuration de Payload CMS avec Supabase...\n')

  // Vérifier les variables d'environnement
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Variables d\'environnement Supabase manquantes!')
    console.error('💡 Assurez-vous d\'avoir configuré:')
    console.error('   - NEXT_PUBLIC_SUPABASE_URL')
    console.error('   - SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  try {
    // Tester la connexion Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    console.log('🔗 Test de connexion à Supabase...')
    const { data, error } = await supabase.from('_supabase_migrations').select('*').limit(1)
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = table doesn't exist (normal)
      throw error
    }

    console.log('✅ Connexion à Supabase réussie!')
    
    // Afficher les informations de configuration
    console.log('\n📋 Configuration actuelle:')
    console.log(`   URL Supabase: ${supabaseUrl}`)
    console.log(`   Base de données: PostgreSQL`)
    console.log(`   Payload Admin: http://localhost:3000/admin`)
    
    // Instructions pour l'URL de base de données
    console.log('\n🔧 Configuration de DATABASE_URL:')
    console.log('   Format: postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres')
    console.log('   Récupérez votre mot de passe dans: Supabase Dashboard → Settings → Database')
    
    console.log('\n🚀 Prochaines étapes:')
    console.log('   1. Configurez DATABASE_URL dans votre .env')
    console.log('   2. Exécutez: npm run payload:generate')
    console.log('   3. Exécutez: npm run payload:init')
    console.log('   4. Démarrez: npm run dev')
    console.log('   5. Accédez à: http://localhost:3000/admin')
    
  } catch (error) {
    console.error('❌ Erreur de connexion à Supabase:', error)
    console.error('💡 Vérifiez vos variables d\'environnement et votre projet Supabase')
    process.exit(1)
  }
}

setupSupabase()
