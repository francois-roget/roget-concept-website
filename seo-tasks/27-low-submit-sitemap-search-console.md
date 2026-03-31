# 27 — Submit sitemap to Google Search Console

**Severity:** Low
**Category:** Crawlability / Indexing

## Problem

The sitemap has not been submitted to Google Search Console (GSC). While Google will eventually discover it via `robots.txt`, manual submission triggers immediate indexing and provides visibility into crawl status, index coverage, and any issues.

## Steps

1. Verify site ownership in Google Search Console for `https://www.roget-concept.be/`
   - Add the HTML verification file to `public/` (GSC will provide it) — or use DNS verification via OVH

2. After the site is verified and the sitemap is deployed (task 01), go to:
   Search Console → Sitemaps → Enter `https://www.roget-concept.be/sitemap.xml` → Submit

3. Monitor the "Coverage" report over the following days to confirm the page is indexed.

## Notes

- This is a manual action in the Google Search Console web interface — no code changes required
- Prerequisite: task 01 (rebuild) must be completed first so the sitemap is live
