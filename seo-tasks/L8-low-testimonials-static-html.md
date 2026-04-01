# L8 — Rendre les témoignages en HTML statique

**Severity:** Low  
**Effort:** 1–2 heures  
**File:** `src/components/sections/Testimonials.tsx`

## Problème

Les 5 témoignages sont dans un carousel JS (`'use client'`, `useState`, `setInterval`, `translateX`). Ils sont présents dans le DOM mais hors écran via CSS transform. Certains crawlers IA n'exécutent pas JavaScript — l'extraction des témoignages est donc peu fiable.

Les témoignages contiennent pourtant le contenu le plus citable du site : des personnes nommées avec titre et entreprise faisant des affirmations spécifiques ("undisputed master of React", etc.).

## Fix

Remplacer le carousel par une grille CSS statique affichant les 5 témoignages simultanément. Tous les éléments seront dans le DOM visible, sans dépendance JS pour l'affichage. Cela :
- Rend les témoignages fiablement accessibles aux crawlers IA
- Réduit le bundle JS
- Permet de convertir le composant en RSC (voir M1)

Le trade-off : l'animation de défilement disparaît. C'est un choix à valider visuellement.
