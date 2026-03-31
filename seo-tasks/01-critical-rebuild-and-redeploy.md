# 01 — Rebuild and redeploy to ship robots.txt and sitemap.xml

**Severity:** Critical
**Category:** Crawlability

## Problem

`robots.txt` and `sitemap.xml` were created in `public/` during the SEO audit but the `out/` directory was built before those files existed. With `output: 'export'`, Next.js only copies `public/` to `out/` during `next build`. Both files currently return 404 in production — Google has no sitemap and no crawl directives.

## Steps

1. Run `npm run build`
2. Verify `out/robots.txt` and `out/sitemap.xml` are present
3. Deploy `out/` to OVH

## Files

- `public/robots.txt`
- `public/sitemap.xml`
- `out/` (build output)
