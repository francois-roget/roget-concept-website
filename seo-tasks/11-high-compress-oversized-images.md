# 11 — Compress oversized logo and app images

**Severity:** High
**Category:** Performance / Core Web Vitals

## Problem

Multiple images are massively oversized relative to their display dimensions:

| File | File Size | Displayed At | Issue |
|---|---|---|---|
| `paniers-icon.png` | 641 KB | ~240px | 641KB for a 240px icon |
| `Be_Brussels.png` | 275 KB | ~120×60px | 275KB for a 60px logo |
| `Eurocontrol.png` | 34 KB | ~120×60px | 3840×2160px source |
| `Worldline.png` | 81 KB | ~120×60px | 1200×835px source |
| `Paynovate.png` | 100 KB | ~120×60px | Oversized for thumbnail |
| Medium article thumbnails | External | ~350px | Fetched at `resize:fit:4800` |

## Steps

1. Convert and resize all logo images to WebP at 2× their display size (e.g., 240×120px for logos displayed at 120×60px). Target under 20KB per logo.

2. Resize `paniers-icon.png` to 480×480px WebP. Target under 50KB.

3. Fix Medium article image URLs in `src/data/site-data.ts`: change `resize:fit:4800` to `resize:fit:700` to match ~350px display width.

```bash
# Example with squoosh CLI
npx @squoosh/cli --webp '{"quality":80}' --resize '{"width":240}' public/logos/Be_Brussels.png -d public/logos/
```

## Files

- `public/logos/*.png` → replace with optimized WebP versions
- `public/paniers-icon.png` → replace with optimized WebP
- `src/data/site-data.ts` (article image URL parameters)
