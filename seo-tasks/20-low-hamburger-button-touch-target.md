# 20 — Increase hamburger menu button touch target

**Severity:** Low
**Category:** Mobile Usability

## Problem

The mobile hamburger menu button in `Navbar.tsx` is `w-10 h-10` (40px). The Google-recommended minimum touch target is 44px, and Apple recommends 44–48px. The current 40px size is 4px below the threshold.

## Steps

In `src/components/layout/Navbar.tsx`, change the hamburger button size from `w-10 h-10` to `w-11 h-11` (44px):

```tsx
// Before
<button className="w-10 h-10 ...">

// After
<button className="w-11 h-11 ...">
```

## Files

- `src/components/layout/Navbar.tsx`
