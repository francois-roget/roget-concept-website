# 22 — Add apple-touch-icon

**Severity:** Low
**Category:** Mobile / Branding

## Problem

No `apple-touch-icon` is declared. When a user adds the site to their iOS or Android home screen, the browser either uses the favicon (which scales poorly) or shows a generic screenshot. A dedicated 180×180px icon is the standard.

## Steps

1. Create `/public/apple-touch-icon.png` — 180×180px PNG version of the Roget Concept logo, with the brand dark blue background (no transparency, as iOS fills transparent icons with black).

2. Declare it in `src/app/layout.tsx` under the `icons` key:

```ts
icons: {
  apple: '/apple-touch-icon.png',
},
```

## Files

- `public/apple-touch-icon.png` (new file)
- `src/app/layout.tsx`
