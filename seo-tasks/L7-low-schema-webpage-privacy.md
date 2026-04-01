# L7 — Ajouter un schema `WebPage` sur les pages privacy

**Severity:** Low  
**Effort:** 15 minutes  
**File:** `src/app/[locale]/privacy/layout.tsx` (créé en C2)

## Problème

Les pages privacy héritent du schema global (`@graph`) du layout racine mais n'ont aucun nœud `WebPage` spécifique à leur URL. C'est une incohérence mineure par rapport au reste du site.

## Fix

Dans le layout privacy (C2), ajouter un script JSON-LD minimal :

```ts
{
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/${locale}/privacy#webpage`,
  url: `${BASE_URL}/${locale}/privacy`,
  name: locale === 'fr' ? 'Politique de confidentialité — Roget Concept' : 'Privacy Policy — Roget Concept',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: locale,
}
```
