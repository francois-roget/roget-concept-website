# 14 — Add geographic keywords to body text

**Severity:** Medium
**Category:** On-Page SEO / Local SEO

## Problem

"Belgium", "Brussels", "Bruxelles" appear only in the contact location string. For local and near-local search ("React developer Brussels", "consultant IT Belgique"), these terms must appear in body copy to match user queries. They are entirely absent from all section headings and descriptive text.

## Steps

1. **Hero bio / sub-bio:** Add "based in Belgium" or "Brussels-based" to the bio paragraph.

2. **Services section:** Add geographic context to the services intro — e.g., "Available for missions in Belgium and remotely worldwide."

3. **Metadata description:** Add "Belgium" if character count allows (currently 157 chars, limit is ~160).

4. **Update both EN and FR locale files** (`en.ts` and `fr.ts`).

## Files

- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`
- `src/app/layout.tsx` (meta description)
