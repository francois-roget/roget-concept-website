# M2 — Convertir les logos PNG en WebP

**Severity:** Medium  
**Effort:** 20 minutes  
**Files:** `public/logos/`

## Problème

7 des 8 logos clients sont en PNG. Seul `Tunz.webp` est au format moderne. Les plus lourds :

| Fichier | Taille | Taille affichée |
|---------|--------|-----------------|
| `Be_Brussels.png` | 281 KB | 120×60 px |
| `Paynovate.png` | 102 KB | 120×60 px |
| `Worldline.png` | 83 KB | 120×60 px |

Next.js Image Optimization sert déjà du WebP à la volée, mais partir d'une source optimisée réduit le temps de traitement et le stockage CDN.

## Fix

Convertir avec `cwebp`, `sharp`, ou Squoosh :

```bash
for f in public/logos/*.png; do cwebp -q 90 "$f" -o "${f%.png}.webp"; done
```

Aucun changement de code nécessaire si les références dans `site-data.ts` sont mises à jour pour pointer vers les `.webp`.
