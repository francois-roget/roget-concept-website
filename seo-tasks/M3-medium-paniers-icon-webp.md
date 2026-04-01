# M3 — Remplacer `paniers-icon.png` par WebP

**Severity:** Medium  
**Effort:** 10 minutes  
**Files:** `public/paniers-icon.png` → `public/paniers-icon.webp`, `src/components/sections/AppShowcase.tsx`

## Problème

`public/paniers-icon.png` pèse **655 KB** pour une taille d'affichage de ~240 px. C'est 6× au-dessus d'un budget raisonnable.

## Fix

1. Convertir en WebP, cible < 80 KB :
   ```bash
   cwebp -q 90 public/paniers-icon.png -o public/paniers-icon.webp
   ```

2. Dans `src/components/sections/AppShowcase.tsx`, mettre à jour la référence :
   ```tsx
   src="/paniers-icon.webp"
   ```
