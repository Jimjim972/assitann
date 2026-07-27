# Assist'Ann — Next.js

## Démarrer
```
npm install
npm run dev
```
Ouvrir http://localhost:3000

## Déployer (gratuit)
1. Poussez ce dossier sur GitHub.
2. Créez un compte sur [vercel.com](https://vercel.com), "Import Project" → sélectionnez le repo.
3. Reliez votre nom de domaine existant dans Vercel → Settings → Domains (réglage DNS chez votre registrar).

## Formulaire de devis
La route `app/api/quote/route.ts` envoie les soumissions avec Resend.

Pour tester en local sans domaine vérifié :

1. Créez une clé API dans Resend.
2. Renseignez `RESEND_API_KEY` et `RESEND_TO_EMAIL` dans `.env.local`. Le destinataire doit être l'adresse utilisée pour le compte Resend.
3. Conservez `Assist'Ann <onboarding@resend.dev>` comme `RESEND_FROM_EMAIL`.
4. Redémarrez le serveur avec `npm run dev`, puis envoyez le formulaire.

Après vérification du domaine, utilisez `Assist'Ann <devis@assistann.fr>` comme expéditeur et `contact@assistann.fr` comme destinataire. Ne publiez jamais `.env.local` ni la clé API.

## Design
Toutes les règles visuelles (couleurs, typo, layout) sont documentées dans `DESIGN.md`. À respecter pour toute modification.
