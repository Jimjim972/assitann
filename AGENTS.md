# AGENTS.md

## 1. Contexte du projet

Ce projet est le site vitrine d'Assist'Ann, développé avec Next.js (App Router).

Objectifs prioritaires :

1. Site rapide.
2. Site statique autant que possible.
3. Excellent SEO technique.
4. Accessibilité propre.
5. Maintenance simple.
6. Dépendances minimales.
7. Déploiement peu coûteux (Vercel, plan gratuit).
8. Pas de WordPress.
9. Pas de backend inutile.
10. Pas de complexité gratuite.

Le site doit être pensé comme une vitrine professionnelle : pages marketing, pages de services, page contact (formulaire de devis), mentions légales, politique de confidentialité, éventuellement blog ou cas clients si demandé.

Ne pas transformer ce projet en application SaaS, dashboard, CMS, usine à gaz ou architecture microservices sans demande explicite.

---

## 2. Règle officielle Next.js pour les agents

<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant documentation in:

```txt
node_modules/next/dist/docs/
```

Ne jamais se fier uniquement à sa mémoire de la doc Next.js (les APIs changent entre versions — App Router vs Pages Router, `next/image`, `next/font`, route handlers, Server Actions, metadata API…). Ce projet utilise Next.js **14.2.5** (voir `package.json`) : vérifier le comportement exact dans `node_modules/next/dist/docs/` avant d'utiliser une API, surtout si elle semble avoir changé récemment.

Si `node_modules` n'existe pas encore (dépendances non installées), lancer `npm install` avant de commencer, ou à défaut se référer à la documentation officielle correspondant précisément à la version `14.2.5`.

<!-- END:nextjs-agent-rules -->

---

## 3. Design — DESIGN.md à respecter impérativement

Un fichier [`DESIGN.md`](./DESIGN.md) existe à la racine du projet et fixe toutes les règles visuelles : couleurs (`--navy`, `--indigo`, `--blue`, dégradé), typographie (Cinzel / Raleway), layout, composants, boutons, formulaire.

**Toute modification visuelle, ajout de composant ou nouvelle page doit s'y conformer strictement.** Ne jamais :
- introduire une nouvelle couleur hors de celles définies dans `DESIGN.md` / `app/globals.css`,
- remplacer Cinzel/Raleway par une police générique,
- arrondir les angles au-delà de ce qui est spécifié,
- ajouter des icônes/emojis décoratifs,
- s'écarter du design sans demande explicite de l'utilisateur.

En cas de doute ou de conflit entre une demande et `DESIGN.md`, lire `DESIGN.md` en premier et signaler l'écart avant de coder.

---

## 4. Stack technique

- **Framework** : Next.js 14.2.5, App Router (`app/`).
- **UI** : React 18.3.1, TypeScript 5.5.4.
- **Style** : CSS global (`app/globals.css`), variables CSS définies dans `:root`. Pas de framework CSS (Tailwind, MUI, etc.) sauf demande explicite.
- **Composants** : `components/` (Nav, Hero, About, Services, Process, QuoteForm, Footer).
- **API** : une seule route, `app/api/quote/route.ts`, pour le formulaire de devis.
- **Déploiement** : Vercel (gratuit), domaine relié en DNS chez le registrar existant.

Ne pas ajouter de dépendance sans nécessité réelle (chaque paquet ajouté doit se justifier par un besoin fonctionnel concret, jamais par confort ou habitude).

---

## 5. Formulaire de devis

Champs obligatoires : nom, email, service, message (validation avant envoi). Le composant `components/QuoteForm.tsx` poste vers `/api/quote` (route déjà créée, à connecter à un vrai fournisseur d'email — Resend recommandé, gratuit jusqu'à 3000 emails/mois).

Ne pas changer les champs du formulaire sans besoin exprimé par l'utilisateur.

---

## 6. Garde-fous généraux

- Pas de refonte d'architecture, pas de migration vers un CMS headless, pas d'ajout de base de données sans demande explicite.
- Pas de dashboard, d'espace membre ou d'authentification tant que ce n'est pas demandé.
- Toute page ajoutée (blog, cas clients, etc.) doit rester statique (SSG) autant que possible — éviter le rendu dynamique/serveur sauf nécessité (ex. API route du formulaire).
- Vérifier systématiquement l'accessibilité (contrastes, `alt`, structure de titres, navigation clavier) et le SEO technique (metadata, `sitemap.xml`, `robots.txt`, balises Open Graph) sur toute page créée ou modifiée.
- Avant de livrer une modification, lancer `npm run build` et `npm run lint` pour vérifier qu'il n'y a pas de régression.
