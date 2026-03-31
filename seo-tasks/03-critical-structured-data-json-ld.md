# 03 — Add JSON-LD structured data (Person, ProfessionalService, WebSite, WebPage, ItemList)

**Severity:** Critical
**Category:** Schema / Structured Data

## Problem

Zero structured data on the site (no JSON-LD, no Microdata, no RDFa). This is the highest-leverage SEO and AI-citability fix for a personal freelance portfolio. Google uses `Person` and `ProfessionalService` schema as the primary E-E-A-T signals for individuals and businesses.

## Steps

Add the following JSON-LD blocks to `src/app/layout.tsx` (inside `<head>` via `<script>` tags):

1. **ProfilePage + Person** — identity, sameAs (LinkedIn, GitHub, Medium), knowsAbout
2. **ProfessionalService** — services offered, location (Belgium), email, founder reference
3. **WebSite** — site name, URL, publisher reference
4. **WebPage** — page entity, author, dateModified
5. **ItemList** — article links with author attribution

Full JSON-LD code is available in the schema agent audit output.

## Files

- `src/app/layout.tsx`

## Notes

- Use `@id` anchors (`#person`, `#business`, `#website`) to cross-reference entities
- `SoftwareApplication` schema for Paniers app can be added in the AppShowcase component (Medium priority)
- Do NOT add FAQPage schema — no Google rich result benefit on commercial sites (restricted since Aug 2023)
