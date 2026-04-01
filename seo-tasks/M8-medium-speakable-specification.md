# M8 — Ajouter `SpeakableSpecification` au schema

**Severity:** Medium  
**Effort:** 20 minutes  
**Files:** `src/app/structured-data.ts`, composants Hero et Services

## Problème

`SpeakableSpecification` indique à Google quels passages d'une page sont les meilleurs candidats pour les réponses vocales et Google AI Overviews. Aucun passage n'est actuellement balisé.

## Fix

1. Ajouter des attributs `id` stables sur les éléments DOM cibles :
   - Bio hero → `id="hero-bio"`
   - Description service IT Consultancy → `id="service-consultancy"`
   - Description service Training → `id="service-training"`

2. Dans le nœud `ProfilePage` de `structured-data.ts`, ajouter :
   ```ts
   speakable: {
     '@type': 'SpeakableSpecification',
     cssSelector: ['#hero-bio', '#service-consultancy', '#service-training'],
   },
   ```
