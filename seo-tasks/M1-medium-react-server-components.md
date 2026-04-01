# M1 — Convertir les sections statiques en React Server Components

**Severity:** Medium  
**Effort:** 2–4 heures  
**Files:** `src/app/[locale]/page.tsx` + tous les composants de section

## Problème

Tous les composants de section utilisent `'use client'` uniquement parce qu'ils appellent `useTranslation()` (un hook de contexte React). La locale est disponible côté serveur via le segment d'URL `[locale]` — elle n'a pas besoin d'être lue depuis un contexte au moment du render.

Conséquences actuelles :
- Le HTML livré par Vercel au premier indexage de Google contient un shell quasi-vide
- Le bundle JS client est plus lourd (toutes les sections incluses)
- TTI et INP dégradés sur appareils lents

## Fix

1. Dans `src/app/[locale]/page.tsx` (server component), résoudre les traductions côté serveur et les passer en props aux composants de section
2. Retirer `useTranslation()` et `'use client'` de : `Hero`, `Services`, `Expertise`, `Clients`, `Articles`, `ContactCTA`, `Footer`
3. Garder `'use client'` sur : `Navbar` (état burger menu), `Testimonials` (carousel avec `useState`/`useEffect`), `LanguageProvider`

## Impact attendu

- Contenu visible dans le HTML SSR → indexé dès le premier passage Googlebot
- Réduction du bundle JS client
- Amélioration LCP et INP
