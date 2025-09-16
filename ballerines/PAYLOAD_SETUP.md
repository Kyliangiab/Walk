# Payload CMS Setup Guide avec Supabase

## 🚀 Installation et Configuration

### 1. Prérequis
- Node.js 18+
- Compte Supabase (gratuit)

### 2. Configuration Supabase
1. Créez un projet sur [supabase.com](https://supabase.com)
2. Récupérez votre URL de base de données PostgreSQL
3. Ajoutez ces variables à votre fichier `.env` :

```env
# Payload CMS - Supabase PostgreSQL
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres

# Payload CMS
PAYLOAD_SECRET=your-payload-secret-here

# Supabase (déjà configuré)
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Avantages de Supabase
- ✅ Base de données PostgreSQL gérée
- ✅ Interface d'administration intégrée
- ✅ Sauvegardes automatiques
- ✅ Scaling automatique
- ✅ Pas d'installation locale nécessaire

### 4. Récupération de l'URL Supabase
1. Allez dans votre projet Supabase
2. Settings → Database
3. Copiez la "Connection string" et remplacez `[YOUR-PASSWORD]` par votre mot de passe
4. Ou utilisez le format : `postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

### 5. Initialisation
```bash
# Générer les types TypeScript
npm run payload:generate

# Exécuter les migrations (automatique avec Supabase)
npm run payload:migrate

# Initialiser avec des données de base
npm run payload:init
```

## 📊 Collections Disponibles

### 👥 Users
- Gestion des utilisateurs avec rôles (admin, seller, customer)
- Adresses multiples
- Préférences utilisateur
- Authentification intégrée

### 🛍️ Products
- Produits avec variantes (taille, couleur, SKU)
- Gestion des stocks
- Images multiples
- Matériaux et caractéristiques
- Score éco-responsable
- SEO

### 📂 Categories
- Catégories de produits
- Images et descriptions
- Ordre de tri
- SEO

### 📦 Orders
- Commandes complètes
- Adresses de livraison/facturation
- Gestion des statuts
- Paiements
- Suivi de livraison

### 🖼️ Media
- Upload d'images
- Redimensionnement automatique
- Alt text et légendes

## 🎛️ Interface d'Administration

Accédez à l'interface d'administration à : `http://localhost:3000/admin`

### Compte par défaut
- **Email** : admin@ballerines.com
- **Mot de passe** : admin123

## 🔧 Utilisation dans l'Application

### Récupérer des produits
```typescript
import { getProducts, getProductBySlug } from '@/src/lib/payload-client'

// Tous les produits actifs
const products = await getProducts()

// Un produit par slug
const product = await getProductBySlug('ma-ballerine')
```

### Créer une commande
```typescript
import { createOrder } from '@/src/lib/payload-client'

const order = await createOrder({
  orderNumber: 'ORD-2024-001',
  customer: 'user-id',
  status: 'pending',
  items: [...],
  totals: {...},
  // ...
})
```

### Mettre à jour le stock
```typescript
import { updateProductStock } from '@/src/lib/payload-client'

await updateProductStock('product-id', 'SKU-001', 1)
```

## 🚀 Scripts Disponibles

```bash
# Générer les types TypeScript
npm run payload:generate

# Exécuter les migrations
npm run payload:migrate

# Initialiser avec des données de base
npm run payload:init
```

## 🔐 Sécurité

- Authentification requise pour l'admin
- Contrôle d'accès basé sur les rôles
- Validation des données avec Zod
- Upload sécurisé des médias

## 📱 API REST

Payload génère automatiquement une API REST :

- `GET /api/payload/products` - Liste des produits
- `GET /api/payload/products/:id` - Détail d'un produit
- `POST /api/payload/products` - Créer un produit
- `PUT /api/payload/products/:id` - Modifier un produit
- `DELETE /api/payload/products/:id` - Supprimer un produit

## 🔄 Intégration avec l'E-commerce

Payload s'intègre parfaitement avec :
- ✅ Gestion des produits et variantes
- ✅ Gestion des commandes
- ✅ Gestion des utilisateurs
- ✅ Upload de médias
- ✅ SEO et métadonnées
- ✅ Contrôle d'accès

## 🆘 Dépannage

### Erreur de connexion Supabase
- Vérifiez que votre URL DATABASE_URL est correcte
- Assurez-vous que votre projet Supabase est actif
- Vérifiez que le mot de passe dans l'URL est correct

### Erreur de types TypeScript
Exécutez `npm run payload:generate` pour régénérer les types.

### Interface admin inaccessible
Vérifiez que le serveur de développement est démarré et que les routes sont correctement configurées.

### Problème de permissions Supabase
- Vérifiez que votre clé de service a les bonnes permissions
- Assurez-vous que les politiques RLS sont correctement configurées
