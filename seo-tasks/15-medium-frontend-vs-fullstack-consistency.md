# 15 — Resolve frontend vs. fullstack positioning inconsistency

**Severity:** Medium
**Category:** On-Page SEO / Content Clarity

## Problem

The hero bio says "senior frontend developer" but the Services section leads with "fullstack development". This frontend vs. fullstack inconsistency appears across multiple sections and confuses both users and search engines about the site's primary topic and positioning. It dilutes keyword relevance.

## Steps

1. Decide on the primary positioning (frontend specialist vs. fullstack consultant — both are valid but must be consistent).

2. Apply the chosen term consistently across:
   - Hero bio (`src/i18n/locales/en.ts` + `fr.ts`)
   - Services section titles and descriptions
   - `<title>` tag and `<meta description>` in `layout.tsx`
   - JSON-LD `jobTitle` field (task 03)

3. The secondary positioning can still be mentioned but should be subordinate to the primary one.

## Files

- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`
- `src/app/layout.tsx`
