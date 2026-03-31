# 16 — Convert font from TTF to WOFF2

**Severity:** Medium
**Category:** Performance / FCP

## Problem

`RedHatDisplay-Variable.ttf` is 95KB. WOFF2 format would compress this to ~45KB — a 50% saving that directly improves FCP (First Contentful Paint). The font is currently preloaded as TTF, which is less efficient than WOFF2.

## Steps

1. Download the WOFF2 version of Red Hat Display variable font (available from Google Fonts or the font vendor directly).

2. Replace `src/app/fonts/RedHatDisplay-Variable.ttf` with `src/app/fonts/RedHatDisplay-Variable.woff2`

3. Update `src/app/layout.tsx` (the `localFont` configuration):
```ts
const redHatDisplay = localFont({
  src: './fonts/RedHatDisplay-Variable.woff2',  // was .ttf
  variable: '--font-red-hat-display',
  display: 'swap',
})
```

4. Verify the `<link rel="preload">` in the built HTML now references the `.woff2` file with `type="font/woff2"`.

## Files

- `src/app/fonts/RedHatDisplay-Variable.ttf` → replace with `.woff2`
- `src/app/layout.tsx`
