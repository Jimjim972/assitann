# Design System — Assist'Ann

Ce document fixe les règles visuelles du site. Toute modification (par un agent IA ou un développeur) doit s'y conformer, sauf demande explicite de changement de design.

## Identité

Basé sur le logo `public/logo-assistann-cropped.png` : monogramme + wordmark navy, style luxe/éditorial.

## Couleurs (voir `app/globals.css` → `:root`)

| Variable | Valeur | Usage |
|---|---|---|
| `--navy` | `#16165A` | Textes forts, dégradé (début) |
| `--indigo` | `#2E2E9A` | Accents, liens, bordures actives |
| `--blue` | `#4646C8` | Dégradé (fin) |
| `--grad` | dégradé navy→indigo→blue 135° | CTA, chiffres clés, soulignements — **jamais plus de 2 usages par section** |
| `--bg` | `#FAFAFA` | Fond principal (clair) |
| `--bg2` | `#F3F3F8` | Fond alterné (sections paires) |
| `--text` | `#0D0D3D` | Texte principal |
| `--muted` | `#7070A0` | Texte secondaire / description |
| `--border` | `#E0E0EE` | Séparateurs, cadres |

**Règle** : fond blanc dominant. Le dégradé marine/indigo est réservé aux CTA, aux chiffres-clés et au texte `.grad-text` — ne jamais l'utiliser en fond de section large (sauf variante sombre optionnelle, non utilisée en prod).

Ne pas introduire de nouvelles couleurs. Si besoin d'une teinte supplémentaire, dériver en `oklch()` à partir de `--navy` / `--indigo`.

## Typographie

- **Titres** : `Cinzel` (serif, majuscules capitales espacées pour les labels). Poids 400 pour les gros titres, 500-600 pour sous-titres/nombres.
- **Corps** : `Raleway`, graisse **300 (light)** pour tout le texte courant — ne pas passer en regular/bold sauf labels.
- Labels de section (ex. "SERVICES", "À PROPOS") : Cinzel, 10px, `letter-spacing: .22em`, `text-transform: uppercase`, couleur `--indigo`.

## Layout & composants

- Largeur de contenu max : `1160px` (`680px` pour le formulaire).
- Padding de section : `112px 48px` desktop.
- Grilles de cartes (`Services`, `Process`) : `gap: 1px` avec fond `--border` visible entre les cellules (effet "table" sobre, pas de card shadow par défaut).
- **Angles droits partout** (`border-radius: 2px` max) — pas de coins arrondis façon SaaS générique.
- Boutons : contour ou dégradé plein, texte Cinzel majuscule espacé, jamais de bouton "pilule" arrondie.
- Un seul soulignement/divider fin (`width:48px;height:1px;background:var(--grad)`) utilisé pour ponctuer les titres de section.

## Formulaire de devis

Champs obligatoires : nom, email, service, message (validation avant envoi). Le composant `QuoteForm.tsx` poste vers `/api/quote` (route déjà créée, à connecter à un vrai fournisseur d'email — Resend recommandé, gratuit jusqu'à 3000 emails/mois). Ne pas changer les champs sans besoin exprimé par l'utilisateur.

## Ce qu'il ne faut PAS faire

- Pas d'emoji, pas d'icônes décoratives génériques.
- Pas de card avec bordure colorée à gauche.
- Pas de gradient de fond pleine page.
- Ne pas remplacer Cinzel/Raleway par une police générique (Inter, Roboto, Arial).
- Ne pas dupasser 2 couleurs de fond par page (blanc + gris clair `--bg2`).

## Variante sombre (optionnelle, non activée)

Le HTML de référence (`Assit Ann.html`, racine du projet) contient un mode sombre complet (fonds `--bg-dark`/`--bg-dark2`, textes `--text-dark`/`--muted-dark`, bordures `--border-dark`) si le client demande un jour un thème nuit. Non implémenté dans ce projet Next.js par défaut — s'y référer si besoin.
