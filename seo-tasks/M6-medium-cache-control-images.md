# M6 — Ajouter `Cache-Control` sur les images statiques

**Severity:** Medium  
**Effort:** 10 minutes  
**File:** `vercel.json`

## Problème

Vercel sert les fichiers du répertoire `/public` avec un `max-age` très court par défaut (~0–1h). Les logos et icônes sont stables et ne changent pas — ils devraient être mis en cache longtemps côté navigateur pour accélérer les visites répétées.

## Fix

Ajouter dans le tableau `headers` de `vercel.json` :

```json
{
  "source": "/logos/:file*",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
},
{
  "source": "/:file(.*\\.(?:png|jpg|JPG|webp|svg)$)",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=2592000" }
  ]
}
```

Note : ne pas mettre `immutable` sur le second pattern sauf si les noms de fichiers sont hashés.
