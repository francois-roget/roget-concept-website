# 25 — Add #apps link to Footer navigation

**Severity:** Low
**Category:** Internal Linking / UX

## Problem

`Footer.tsx` only links to `['services', 'expertise', 'clients', 'articles', 'contact']`. The `#apps` section (AppShowcase) is a navigation destination in the Navbar but is missing from the Footer's quick-jump links. This creates an inconsistent navigation experience.

## Steps

In `src/components/layout/Footer.tsx`, add `'apps'` to the navigation links array:

```tsx
const navLinks = ['services', 'expertise', 'clients', 'articles', 'apps', 'contact']
```

Ensure the translation key `nav.apps` exists in both `src/i18n/locales/en.ts` and `fr.ts`.

## Files

- `src/components/layout/Footer.tsx`
- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`
