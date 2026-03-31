# 10 — Add "freelance" / "freelancer" to on-page copy

**Severity:** High
**Category:** Keyword Optimization / On-Page SEO

## Problem

The word "freelance" or "freelancer" appears nowhere on the site — neither in visible content nor in metadata — despite this being the primary commercial model. Anyone searching "freelance React developer Belgium" or "freelance TypeScript consultant Bruxelles" finds no keyword match on this page.

## Steps

1. **Hero bio:** Update the bio text in `src/i18n/locales/en.ts` (and `fr.ts`) to include "freelance":
   - Example: "A freelance senior full-stack developer, architect, and technical mentor with 20+ years of experience."

2. **Services section:** Add "freelance" to the services intro paragraph or CTA.

3. **Metadata description** (`src/app/layout.tsx`): Consider adding "freelance" to the meta description if character count allows.

## Files

- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`
- `src/app/layout.tsx`
