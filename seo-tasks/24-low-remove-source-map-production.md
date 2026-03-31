# 24 — Disable source maps in production build

**Severity:** Low
**Category:** Security / Performance

## Problem

A `.js.map` source map file is present in `out/_next/static/chunks/`. If served publicly via GitHub Pages or OVH, this exposes the full application source code to anyone who inspects network requests. Source maps should only be used for local error tracking, not served to end users.

## Steps

In `next.config.mjs`, add:

```js
const nextConfig = {
  output: 'export',
  productionBrowserSourceMaps: false,  // add this line
  // ...
}
```

Rebuild and verify the `.map` file is no longer in `out/`.

## Files

- `next.config.mjs`
