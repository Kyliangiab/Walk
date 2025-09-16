# 🚀 Configuration Rapide Supabase + Payload

## ✅ Étape 1 : Récupérer votre mot de passe Supabase

1. Allez sur [supabase.com](https://supabase.com) et connectez-vous
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Database**
4. Dans la section **Connection string**, copiez votre mot de passe
5. Ouvrez le fichier `.env.local` et remplacez `[YOUR-PASSWORD]` par votre mot de passe

## ✅ Étape 2 : Récupérer vos clés Supabase

1. Dans **Settings** → **API**
2. Copiez :
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY`

## ✅ Étape 3 : Initialiser Payload

```bash
# Vérifier la configuration
npm run payload:setup

# Générer les types TypeScript
npm run payload:generate

# Initialiser avec des données de base
npm run payload:init
```

## ✅ Étape 4 : Démarrer l'application

```bash
npm run dev
```

## 🎛️ Accès à l'interface d'administration

- **URL** : http://localhost:3000/admin
- **Email** : admin@ballerines.com
- **Mot de passe** : admin123

## 🔧 Votre URL de base de données

```
postgresql://postgres:[VOTRE-MOT-DE-PASSE]@db.djnpveepgofadqnfapks.supabase.co:5432/postgres
```

## 📊 Collections disponibles

- **Users** : Gestion des utilisateurs
- **Products** : Produits avec variantes
- **Categories** : Catégories de produits
- **Orders** : Commandes
- **Media** : Upload d'images

## 🆘 En cas de problème

1. Vérifiez que votre mot de passe est correct
2. Vérifiez que votre projet Supabase est actif
3. Vérifiez que les clés API sont correctes
4. Consultez les logs dans le terminal

## 🎉 Une fois configuré

Vous pourrez :
- ✅ Gérer vos produits via l'interface admin
- ✅ Créer des commandes
- ✅ Uploader des images
- ✅ Gérer les utilisateurs
- ✅ Utiliser l'API REST automatique
