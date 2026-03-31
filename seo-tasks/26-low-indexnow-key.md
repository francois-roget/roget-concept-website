# 26 — Add IndexNow key for faster Bing/Yandex re-indexing

**Severity:** Low
**Category:** Technical SEO / Crawlability

## Problem

No IndexNow integration exists. IndexNow is a protocol supported by Bing and Yandex that allows instant notification when content changes. For a static site updated infrequently, a manual IndexNow submission after each deployment ensures rapid re-indexing without waiting for crawler visits.

## Steps

1. Generate an IndexNow API key at https://www.indexnow.org/
2. Create a key verification file: `/public/<your-key>.txt` containing the key value
3. Add the key file declaration to `public/robots.txt` (optional, Bing may auto-discover it)
4. After each deployment, submit the updated URL manually:

```bash
curl "https://api.indexnow.org/indexnow?url=https://www.roget-concept.be/&key=<your-key>"
```

Or automate this as a post-deploy script.

## Files

- `public/<indexnow-key>.txt` (new file)
- `public/robots.txt` (optional: add key reference)
