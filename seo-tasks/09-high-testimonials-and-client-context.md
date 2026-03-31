# 09 — Add testimonials and client engagement context

**Severity:** High
**Category:** E-E-A-T / Authoritativeness

## Problem

The Clients section is 8 grayscale logos with zero accompanying text. No sector, no role, no duration, no outcome. No testimonial from any named contact. This is the largest E-E-A-T gap after structured data — a logo wall without context is a weak authority signal to both users and search evaluators.

## Steps

1. **Client context:** Add one line per client below or beside each logo:
   - Example: "Eurocontrol — React architecture lead, 2 years"
   - Minimum 3 clients, ideally all 8

2. **Testimonials:** Add a testimonial section with at least 2–3 quotes:
   - Source: LinkedIn recommendations (with permission to republish)
   - Format: quote text, person name, title, company
   - Place between Clients and Articles, or directly within the Clients section

## Files

- `src/components/sections/Clients.tsx`
- `src/data/site-data.ts` (if client/testimonial data is stored here)
