## Walk Ballerines — Installation & Démarrage

### Prérequis
- Node.js 18+ (recommandé 20+)
- npm 9+ (ou pnpm/yarn/bun si tu préfères)
- Compte Supabase (projet + clés)

### Variables d’environnement
Crée un fichier `.env.local` à la racine et renseigne:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=remplacer-par-un-secret-solide

NEXT_PUBLIC_SUPABASE_URL=ton-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=ta-cle-anon
# Optionnel côté serveur pour des scripts sécurisés
SUPABASE_SERVICE_ROLE_KEY=ta-cle-service-role

FAKEPAY_WEBHOOK_SECRET=dev-secret
```

### Installation
```bash
npm install
```

### Lancer en local
```bash
npm run dev
```
Ouvre http://localhost:3000

### Scripts utiles
- `npm run dev`: Dev server Next.js
- `npm test`: Tests unitaires (Vitest)
- `npm run test:e2e`: Tests e2e (Playwright)

### Structure
- `app/` pages et layouts (App Router)
- `components/` UI réutilisable (header, hero, cartes…)
- `src/lib/supabaseClient.ts` client Supabase navigateur
- `src/lib/supabaseServer.ts` client Supabase côté serveur

### Déploiement
- Vercel recommandé. Configure les mêmes variables d’environnement dans le projet Vercel.

### Prochaines étapes
- Création du schéma Supabase (produits, variantes, commandes, etc.)
- Page `/shop` reliée à Supabase (recherche + filtres)
