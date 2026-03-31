# 05 — Compress hero photo (2.9MB → <200KB WebP)

**Severity:** Critical
**Category:** Performance / Core Web Vitals (LCP)

## Problem

`/public/fro-pro.JPG` is 3648×2432px and 2.9MB. It is the LCP element on the page, displayed at 420×520px on desktop and 72×88px on mobile. Next.js image optimization is disabled (`images: { unoptimized: true }` in `next.config.mjs`) because of the static export. The browser downloads 2.9MB to display a 520px image — pushing LCP into the "Needs Improvement" range (2.5–4s).

## Steps

1. Convert and resize to WebP:
   - Target dimensions: 840×1040px (2× retina of 420×520 display)
   - Target size: under 200KB
   - Use `squoosh`, `sharp` CLI, or `cwebp`

```bash
npx @squoosh/cli --webp '{"quality":82}' --resize '{"width":840}' public/fro-pro.JPG -d public/
# → creates fro-pro.webp
```

2. Update `src/components/sections/Hero.tsx` to reference `fro-pro.webp` instead of `fro-pro.JPG`
3. Optionally keep `fro-pro.JPG` as fallback inside a `<picture>` element

## Files

- `public/fro-pro.JPG` → replace with `public/fro-pro.webp`
- `src/components/sections/Hero.tsx`

## Expected impact

LCP improvement from ~3–4s to under 2.5s on 4G (Good threshold).
