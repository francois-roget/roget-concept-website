# 02 — Add canonical tag and fix www vs non-www inconsistency

**Severity:** Critical
**Category:** Indexability

## Problem

No `<link rel="canonical">` tag exists. `og:url` is `https://roget-concept.be` (non-www) while `sitemap.xml`, `robots.txt`, and the actual serving domain use `https://www.roget-concept.be`. Google must guess the canonical — and may index the wrong one (duplicate content risk).

## Steps

1. In `src/app/layout.tsx`, add `metadataBase` and `alternates.canonical`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://www.roget-concept.be'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://www.roget-concept.be',  // fix: was roget-concept.be
    // ...
  },
}
```

2. Verify `sitemap.xml` and `robots.txt` also use `https://www.roget-concept.be` consistently (they do — already correct).

## Files

- `src/app/layout.tsx`
