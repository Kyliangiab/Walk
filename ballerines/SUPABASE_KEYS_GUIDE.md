# 🔑 Guide pour récupérer vos clés Supabase

## 📍 Où trouver vos clés

### 1. **Mot de passe de la base de données**
1. Allez sur [supabase.com](https://supabase.com)
2. Connectez-vous et sélectionnez votre projet
3. Allez dans **Settings** → **Database**
4. Dans la section **Connection string**, vous verrez :
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.djnpveepgofadqnfapks.supabase.co:5432/postgres
   ```
5. Copiez le mot de passe et remplacez `[YOUR-PASSWORD]` dans votre `.env`

### 2. **Service Role Key**
1. Dans le même projet Supabase
2. Allez dans **Settings** → **API**
3. Vous verrez deux clés :
   - **anon public** (déjà configurée ✅)
   - **service_role** ← **Copiez celle-ci**
4. Remplacez `your-service-role-key-here` dans votre `.env`

## 🔧 Votre fichier .env final devrait ressembler à :

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev-secret

# Supabase Database URL
DATABASE_URL=postgresql://postgres:[VOTRE-MOT-DE-PASSE]@db.djnpveepgofadqnfapks.supabase.co:5432/postgres

# Payload CMS
PAYLOAD_SECRET=ballerines-payload-secret-key-2024

FAKEPAY_WEBHOOK_SECRET=dev-secret

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://djnpveepgofadqnfapks.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbnB2ZWVwZ29mYWRxbmZhcGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NDY1OTIsImV4cCI6MjA3MzUyMjU5Mn0.gedMV-xBU9FY7PiNirJM0-McRb72xI-inYRnF_HUg_s
SUPABASE_SERVICE_ROLE_KEY=[VOTRE-SERVICE-ROLE-KEY]
```

## 🚀 Une fois configuré :

```bash
# Tester la configuration
npm run payload:setup

# Générer les types
npm run payload:generate

# Initialiser Payload
npm run payload:init

# Démarrer l'application
npm run dev
```

## 🎛️ Accès à l'admin :
- URL : http://localhost:3000/admin
- Email : admin@ballerines.com
- Mot de passe : admin123
