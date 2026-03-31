# 21 — Declare SVG favicon in <head>

**Severity:** Low
**Category:** Technical / Branding

## Problem

`src/app/favicon.svg` exists but is not declared in the `<head>`. The HTML only references `favicon.ico`. Modern browsers (Chrome, Firefox, Safari) prefer `image/svg+xml` over `.ico`. SVG favicons scale perfectly at all sizes and support dark/light mode variants via `prefers-color-scheme` inside the SVG.

## Steps

In `src/app/layout.tsx`, add an `icons` entry for the SVG favicon:

```ts
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',  // see task 22
  },
  // ...
}
```

## Files

- `src/app/layout.tsx`
- `src/app/favicon.svg` (already exists)
