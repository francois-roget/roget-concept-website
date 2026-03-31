# 17 — Add dates and excerpts to article cards

**Severity:** Medium
**Category:** Content Freshness / E-E-A-T / AI Citability

## Problem

Article cards display only the title. No publication date, no excerpt, no reading time. This means:
- Visitors cannot assess content freshness
- AI citation engines cannot determine topic relevance
- There is no keyword-rich text on the card to match search queries

## Steps

1. Add publication date and a 1–2 sentence excerpt to each article entry in `src/data/site-data.ts` (or wherever article data is stored).

2. Update `src/components/sections/Articles.tsx` to render:
   - Publication date (e.g., "March 2025") below the title
   - A short excerpt (30–50 words) as a `<p>` tag inside the card

3. Update both `src/i18n/locales/en.ts` and `fr.ts` if article descriptions are translated.

## Files

- `src/data/site-data.ts`
- `src/components/sections/Articles.tsx`
- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`
