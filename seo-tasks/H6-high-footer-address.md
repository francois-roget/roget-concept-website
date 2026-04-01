# H6 — Ajouter l'adresse du siège social dans le footer

**Severity:** High  
**Effort:** 10 minutes  
**Files:** `src/i18n/locales/en.ts`, `src/i18n/locales/fr.ts`

## Problème

Le droit commercial belge (Code des sociétés et des associations) impose aux entreprises d'afficher leur adresse de siège social sur leur site web. Le numéro de TVA (BTW BE 1008.928.573) est bien présent, mais pas l'adresse.

C'est à la fois une obligation légale et un signal de confiance selon les critères QRG (Quality Rater Guidelines) de Google.

## Fix

Ajouter l'adresse dans la ligne légale du footer, aux côtés du numéro de TVA. Exemple :

```
Roget Concept SRL — BTW BE 1008.928.573 — [Ville], Belgique
```

Mettre à jour les fichiers de traduction EN et FR en conséquence.
