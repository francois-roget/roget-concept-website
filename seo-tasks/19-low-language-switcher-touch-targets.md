# 19 — Fix language switcher touch targets on mobile

**Severity:** Low
**Category:** Mobile Usability

## Problem

The FR / EN language switcher buttons in the Navbar have no explicit padding and render at approximately 24×20px on mobile — well below the 44px minimum recommended by Google and Apple. This makes them difficult to tap accurately on touchscreens.

## Steps

Add minimum padding to the language switcher buttons in `src/components/layout/Navbar.tsx`:

```tsx
// Before
<button onClick={() => setLocale('fr')}>FR</button>

// After
<button
  onClick={() => setLocale('fr')}
  className="min-w-[44px] min-h-[44px] flex items-center justify-center"
>
  FR
</button>
```

Or add `px-3 py-3` to the existing button classes.

## Files

- `src/components/layout/Navbar.tsx`
