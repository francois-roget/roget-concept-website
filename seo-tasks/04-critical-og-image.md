# 04 — Create and add OG / Twitter social preview image

**Severity:** Critical
**Category:** On-Page SEO / Visual

## Problem

No `og:image` or `twitter:image` tag exists. `twitter:card` is set to `summary_large_image` but provides no image — completely wasted. Every social share on LinkedIn, Slack, WhatsApp, X renders as a plain text link with no preview.

## Steps

1. Create a 1200×630px branded image:
   - Dark blue background matching brand (`#1d1d58`)
   - Profile photo (left), name + title + logo (right)
   - Save as `/public/og-image.jpg` (JPEG, under 300KB)

2. Add to `src/app/layout.tsx`:

```ts
openGraph: {
  images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'François Roget — Senior Full Stack Developer & Architect' }],
},
twitter: {
  card: 'summary_large_image',
  images: ['/og-image.jpg'],
},
```

## Files

- `public/og-image.jpg` (new file)
- `src/app/layout.tsx`
