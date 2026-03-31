# 12 — Define and implement French SEO strategy

**Severity:** Medium
**Category:** International SEO / Hreflang

## Problem

The French translation is entirely client-side JavaScript. The static export always produces `<html lang="en">`. Google sees and indexes only the English version — the French translation is completely invisible to search engines. French-speaking Belgian clients searching in French cannot find the site through organic search.

## Options

### Option A — Recommended: Path-based static routes

Generate `/en/` and `/fr/` static routes using Next.js internationalized routing with `output: 'export'`:
- Creates `out/en/index.html` and `out/fr/index.html`
- Add proper `hreflang` annotations:

```html
<link rel="alternate" hreflang="en" href="https://www.roget-concept.be/en/" />
<link rel="alternate" hreflang="fr" href="https://www.roget-concept.be/fr/" />
<link rel="alternate" hreflang="x-default" href="https://www.roget-concept.be/en/" />
```
- Update sitemap to include both localized URLs
- Redirect `/` to the user's preferred locale (via browser language detection or a redirect page)

### Option B — Minimal: Accept English-only indexing

If French organic search is not a priority:
- Add `og:locale:alternate` for `fr_BE` to the metadata
- Document the decision

## Files

- `next.config.mjs`
- `src/app/layout.tsx`
- `src/i18n/LanguageProvider.tsx`
- `public/sitemap.xml`
