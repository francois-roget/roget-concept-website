# 13 — Add keyword-bearing H1 heading

**Severity:** Medium
**Category:** On-Page SEO

## Problem

The current H1 renders as "François" — a purely decorative heading. Google uses H1 as a primary topic signal for the page. Primary keywords (`Full Stack Developer`, `React`, `TypeScript`, `Belgium`) appear only in the `<title>`, `<meta description>`, and body text — not in the H1. This weakens topical relevance signaling.

## Steps

Choose one of:

**Option A — Restructure H1 (visually impactful):**
Change the H1 to "François Roget — Senior React Consultant & Technical Trainer" and adjust the visual styling accordingly.

**Option B — Visually hidden supplement:**
Add a visually hidden (CSS `sr-only`) H1 above the existing decorative heading:
```tsx
<h1 className="sr-only">François Roget — Senior Full Stack Developer & Freelance Consultant, Belgium</h1>
```
Then demote the current "François" display to an `<h2>` or styled `<p>`.

**Option C — Enrich the eyebrow text to H1:**
Promote the availability badge / eyebrow text to H1 with keyword context.

## Files

- `src/components/sections/Hero.tsx`
- `src/i18n/locales/en.ts`
