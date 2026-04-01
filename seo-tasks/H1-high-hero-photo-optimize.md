# H1 — Optimiser la photo de profil `fro-pro.JPG`

**Severity:** High  
**Effort:** 15 minutes  
**Files:** `public/fro-pro.JPG` → `public/fro-pro.webp`, `src/components/sections/Hero.tsx`

## Problème

`public/fro-pro.JPG` est un JPEG Canon EOS 70D original à 3648×2432 px, soit **3 MB**. La taille d'affichage max est 420×520 px (desktop). C'est le candidat LCP de la page.

Même si Next.js Image Optimization redimensionne à la volée, le fichier source de 3 MB est chargé au premier hit cold-cache, ce qui ralentit le LCP.

## Fix

1. Exporter une version recadrée : **840×1040 px** (2× retina), format WebP, qualité 85, cible < 150 KB
2. Placer le fichier dans `public/fro-pro.webp`
3. Dans `src/components/sections/Hero.tsx`, remplacer les deux occurrences de `src="/fro-pro.JPG"` par `src="/fro-pro.webp"`
