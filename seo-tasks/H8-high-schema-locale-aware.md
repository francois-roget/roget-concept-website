# H8 — Rendre le schema `ProfilePage` locale-aware

**Severity:** High  
**Effort:** 30–60 minutes  
**Files:** `src/app/structured-data.ts`, `src/app/[locale]/layout.tsx`, `src/app/layout.tsx`

## Problème

Le schema structuré est défini comme une constante dans `structured-data.ts` et injecté dans le layout racine (`src/app/layout.tsx`). Il est donc identique sur `/en` et `/fr`.

Problèmes concrets :
- `ProfilePage.url` pointe vers `https://www.roget-concept.be/` (un redirect 307/308 vers `/en`), pas vers la canonical de la page
- Sur `/fr`, le schema déclare `url: "/"` alors que la canonical est `/fr`
- `ProfilePage.inLanguage` est `['en', 'fr']` sur les deux pages au lieu de `'en'` ou `'fr'` selon la locale

## Fix

1. Transformer `structuredData` en fonction dans `structured-data.ts` :
   ```ts
   export function getStructuredData(locale: 'en' | 'fr') { ... }
   ```

2. Déplacer l'injection du schema depuis `src/app/layout.tsx` vers `src/app/[locale]/layout.tsx` (où la locale est connue)

3. Dans le nœud `ProfilePage` :
   - `url` → `${BASE_URL}/${locale}`
   - `'@id'` → `${BASE_URL}/${locale}#webpage`
   - `inLanguage` → `locale`
