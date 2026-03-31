# 23 — Add theme-color meta tag

**Severity:** Low
**Category:** Mobile / Branding

## Problem

No `<meta name="theme-color">` tag is set. This tag controls the browser chrome color on mobile (address bar, status bar) and improves visual consistency with the brand identity.

## Steps

In `src/app/layout.tsx`, add to the metadata:

```ts
export const metadata: Metadata = {
  themeColor: '#1d1d58',  // brand dark blue
  // ...
}
```

Or for dark/light mode support:
```ts
themeColor: [
  { media: '(prefers-color-scheme: dark)', color: '#1d1d58' },
  { media: '(prefers-color-scheme: light)', color: '#1d1d58' },
],
```

## Files

- `src/app/layout.tsx`
