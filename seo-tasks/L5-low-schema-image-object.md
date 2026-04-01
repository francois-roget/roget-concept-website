# L5 — Upgrader `Person.image` en `ImageObject`

**Severity:** Low  
**Effort:** 5 minutes  
**File:** `src/app/structured-data.ts`

## Problème

`Person.image` et `ProfessionalService.image` sont des chaînes URL nues (`https://...fro-pro.JPG`). Schema.org recommande un objet `ImageObject` avec `width`, `height` et `url` pour une meilleure éligibilité au Knowledge Panel Google.

Note : dépend de H1 — attendre que `fro-pro.JPG` soit remplacé par une version optimisée avant de mettre à jour l'URL ici.

## Fix

```ts
image: {
  '@type': 'ImageObject',
  url: `${BASE_URL}/fro-pro.webp`,
  width: 840,
  height: 1040,
},
```
