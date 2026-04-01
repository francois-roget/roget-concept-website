# Full SEO Audit Report — roget-concept.be
**Audit Date:** 2026-04-01  
**Stack:** Next.js 16 / React 19 / Tailwind 3 / Vercel  
**Auditor:** Claude Code SEO Audit (7 specialist subagents)  
**Pages in scope:** `/en`, `/fr`, `/en/privacy`, `/fr/privacy` + root `/`

---

## Executive Summary

### Overall SEO Health Score: 69 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 71 | 15.6 |
| Content Quality | 23% | 73 | 16.8 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 62 | 6.2 |
| Performance (CWV) | 10% | 72 | 7.2 |
| AI Search Readiness | 10% | 72 | 7.2 |
| Images | 5% | 58 | 2.9 |
| **Total** | | | **68.9** |

### Business Type Detected
Freelance Senior Full Stack Developer & Architect — personal brand / professional services site.  
Bilingual (EN/FR). 4 indexable pages. Single-page app with anchor-based navigation. Hosted on Vercel.

### Top 5 Critical Issues
1. `src/proxy.ts` is never loaded — middleware is broken, HTML `lang` attribute is always `"en"` even on `/fr`
2. Privacy pages (`/en/privacy`, `/fr/privacy`) have no `generateMetadata` — missing canonical, hreflang, and unique title/description
3. Every section component uses `'use client'` — visible content is JS-rendered, invisible in Google's first indexing wave
4. `dateModified` in structured data and sitemap `lastmod` regenerate on every build — falsely signals continuous content freshness
5. Profile photo `fro-pro.JPG` is 3 MB — LCP risk, excessive CDN bandwidth, slow cold-cache first render

### Top 5 Quick Wins
1. Rename `src/proxy.ts` → `src/middleware.ts` (2 minutes, fixes HTML lang + locale detection)
2. Hardcode `dateModified` in `structured-data.ts` to a real ISO date string (5 minutes, fixes misleading freshness)
3. Add `sizes` props to Hero and Paniers images (15 minutes, improves LCP srcset selection)
4. Add `legalName`, `vatID`, `serviceType` to `ProfessionalService` schema (15 minutes, improves entity trust)
5. Add registered office address to footer (5 minutes, legal compliance + trust signal)

---

## Technical SEO

**Score: 71 / 100**

### Critical

#### 1. `src/proxy.ts` is not loaded as middleware
Next.js only loads middleware from `src/middleware.ts` (or root `middleware.ts`). The file is named `proxy.ts` and the middleware manifest in `.next/server/middleware-manifest.json` confirms `"middleware": {}` — empty. Consequences:
- `Accept-Language`-based locale detection never runs — root `/` always redirects to `/en`, ignoring browser language
- `x-locale` header is never set → root layout fallback `?? 'en'` fires for every page
- `/fr` pages are served with `<html lang="en">` in SSR HTML until JavaScript hydrates

**Fix:** `mv src/proxy.ts src/middleware.ts` — no code changes needed.

#### 2. Privacy pages have no metadata
`src/app/[locale]/privacy/page.tsx` is `'use client'` with no `generateMetadata`. A client component cannot export metadata. No companion `layout.tsx` exists for the route segment. Result: `/en/privacy` and `/fr/privacy` inherit the root layout metadata with no overrides — no unique title, no description, no self-referencing canonical, no hreflang cross-link between the two language variants.

**Fix:** Create `src/app/[locale]/privacy/layout.tsx` as a server component exporting `generateMetadata`.

#### 3. All section content is `'use client'`
Hero, Services, Expertise, Clients, Testimonials, Articles, AppShowcase, ContactCTA, Footer — all carry `'use client'`. The `[locale]/page.tsx` is a server component, but every child it renders is a client component. The HTML shell delivered to Googlebot's first indexing wave is nearly empty of visible body content.

Root cause: every section calls `useTranslation()` (a React context hook), forcing them into client components. The locale is available from the URL segment at the server — it does not need to be read from context at render time.

**Fix:** Pass translated strings as props from the server-side `[locale]/page.tsx`. Remove `useTranslation()` from static sections (Hero, Services, Expertise, Clients, Articles, ContactCTA, Footer). Only Navbar (burger/locale switcher) and Testimonials (carousel) need to remain client components.

### High

#### 4. Profile photo `fro-pro.JPG` is 3 MB
Original Canon EOS 70D JPEG at 3648×2432 px. Largest rendered size: 420×520 px on desktop. Next.js Image Optimization resizes on-demand, but the 3 MB source means cold-cache first requests are slow and processing overhead is visible in Lighthouse.

**Fix:** Resize to 840×1040 px WebP, targeting under 150 KB. Place in `/public/fro-pro.webp`.

#### 5. PNG logos — 7 of 8 in PNG format
`Be_Brussels.png` (281 KB), `Worldline.png` (83 KB), `Paynovate.png` (102 KB) are significantly over budget for 120×60 px display slots.

**Fix:** Batch-convert PNG logos to WebP. Save ~450 KB in source assets.

### Medium

#### 6. `h1` is visually hidden (`sr-only`)
`Hero.tsx:39` — the semantic H1 uses `sr-only`, while the large visible "François" display text uses a `<p>` tag. Google weights visible heading text more than off-screen text. The `sr-only` H1 is not hidden deliberately for keyword stuffing (content is legitimate), but it creates a disconnect worth monitoring.

#### 7. `LanguageProvider` sets `document.documentElement.lang` client-side only
`<html lang>` in SSR HTML is always `"en"` (fallback). Resolved automatically by fixing issue #1 (rename `proxy.ts`).

#### 8. Structured data `@id` values reference root URL (a redirect)
`structured-data.ts` uses `BASE_URL + '/'` for `ProfilePage.url` and all `@id` anchors. Root `/` is a server-side redirect to `/en`. The ProfilePage entity points to a URL that never resolves to a 200. On `/fr`, the schema claims `url: "/"` while canonical is `/fr`.

**Fix:** Move structured data into `[locale]/layout.tsx` where locale is known; use `BASE_URL/[locale]` as the `ProfilePage` URL per language.

### Low

#### 9. IndexNow protocol not implemented
No instant-indexing notification for Bing/Yandex on content updates.

#### 10. `Anthropic-AI` user agent not in explicit allow list
`robots.ts` already allows `*` + named bots. Adding `Anthropic-AI` is consistent with the explicit-allow strategy.

### Passing Items
- robots.txt: all major AI bots explicitly allowed ✓
- HTTPS + www redirect (301) via `vercel.json` ✓
- HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy ✓
- hreflang on `/en` and `/fr`: symmetric EN/FR/x-default triplets ✓
- OG + Twitter card metadata on all content pages ✓
- Static generation (`generateStaticParams`) — best possible TTFB ✓
- `sharp` installed — Next.js Image Optimization active ✓
- Source maps disabled in production ✓
- No external JS frameworks, no tag managers ✓

---

## Content Quality

**Score: 74 / 100 (Content), 72 / 100 (E-E-A-T)**

### E-E-A-T Breakdown

| Signal | Score | Notes |
|--------|-------|-------|
| Experience | 16/20 | Strong client tenure data; missing measurable outcomes |
| Expertise | 20/25 | Granular tech skills; no certifications mentioned |
| Authoritativeness | 17/25 | Named clients + testimonials; no external press citations |
| Trustworthiness | 19/30 | Legal entity present; missing physical address |

### High

#### 1. No individual service pages
The Training service has zero keyword co-location between "training/workshop/courses" and "Belgium" in any paragraph text. A standalone `/en/services/training` with 800+ words would substantially improve ranking for "React training Belgium", "TypeScript workshop Belgium", etc.

#### 2. Missing registered office address — legal compliance gap
Belgian commercial law requires a registered business's office address on its website. VAT number (BTW BE 1008.928.573) is present but address is absent. This is simultaneously a legal gap and a QRG trustworthiness signal.

#### 3. `dateModified` dynamically generated
`structured-data.ts:13` — `new Date().toISOString().split('T')[0]` changes on every deploy. Google flags manipulated freshness signals as a trust issue.

### Medium

#### 4. Testimonials in JS carousel — limited AI accessibility
All five testimonials are in a `'use client'` carousel with CSS `translateX`. Off-screen content may not be extracted by AI crawlers. These are the richest quotable third-party endorsements on the site.

#### 5. "Pragmatic, no-nonsense solutions" appears verbatim twice
In `hero.bioSub` and `services.consultancy.points[3]` — exact phrase repetition on the same page.

#### 6. Training service has no CTA
Neither service card contains a direct call-to-action. Users reading the Training card must scroll the full page to reach Contact.

#### 7. "Belgium" keyword weak co-occurrence with services
"Belgium" appears only 3 times on the EN page and never in the same sentence as "training", "workshop", "TypeScript", or "React".

### Low

#### 8. No education credentials on-site
BSc in Computer Science (ESI Bruxelles, 2009) is public and a legitimate expertise signal — absent from the site.

#### 9. "consultant/consultancy" absent from body paragraph copy
Used in section/card titles but not in paragraph text where natural language signals are read.

#### 10. No Terms of Service / General Conditions page
For a professional services business, a T&C page is a minor trust gap per QRG transparency criteria.

### Keyword Targeting Summary

| Target Keyword | Status |
|----------------|--------|
| Freelance developer Belgium | Good |
| Full stack developer Belgium | Good |
| Software architect Belgium | Good |
| React developer Belgium | Weak co-occurrence |
| TypeScript consultant Belgium | Gap |
| React training Belgium | Gap |
| TypeScript workshop Belgium | Gap |
| IT Consultancy Belgium | Partial |

---

## On-Page SEO

**Score: 65 / 100**

### Issues

| Severity | Issue |
|----------|-------|
| Critical | Privacy pages: identical title + description to homepage (inherited, no override) |
| Critical | Privacy pages: no self-referencing canonical URLs |
| Critical | Privacy pages: no hreflang cross-links between EN and FR variants |
| High | H1 is `sr-only` — not visible to users or given full weight by Google |
| Medium | "Belgium" keyword underused in service descriptions |
| Low | Article cards lack per-card author attribution |
| Low | `consultant`/`consultancy` absent from body paragraph copy |

### Passing Items
- EN homepage: unique, keyword-rich title ✓
- EN/FR: distinct meta descriptions in both languages ✓
- Heading hierarchy: H1 → H2 → H3 logical ✓
- Internal anchor navigation covers all key sections ✓
- Footer: email, social links, legal entity clearly present ✓

---

## Schema / Structured Data

**Score: 62 / 100**

### Detected Schema (all pages, global `@graph`)
- `ProfilePage` (`#webpage`)
- `Person` (`#person`) — François Roget
- `ProfessionalService` (`#business`)
- `WebSite` (`#website`)
- `ItemList` (5 Medium articles)

### Critical

#### C1. `dateModified` always equals today's date
`new Date().toISOString()` at build time means every deployment resets it. Hardcode to last actual content change date.

#### C2. ProfilePage `url` points to a redirect, not the canonical
`url: BASE_URL + '/'` — root redirects to `/en`. The ProfilePage entity cannot be correctly associated with any crawlable canonical URL. The same global schema block appears on `/fr`, claiming `url: "/"` while canonical is `/fr`.

### High

#### H1. No `SoftwareApplication` schema for Paniers app
App Store link, platform list, and feature set are present — a `SoftwareApplication` node with `applicationCategory`, `operatingSystem`, `downloadUrl`, and `offers` would make Paniers a named, citable product.

#### H2. No `Review`/`AggregateRating` for testimonials
Five named, attributed reviews with professional credentials exist in `site-data.ts` but are not exposed in structured data.

#### H3. `ProfessionalService` missing `legalName`, `vatID`, `serviceType`
Privacy page confirms: "Roget Concept SRL", "BTW BE 1008.928.573". These trust signals are not in the schema.

### Medium

#### M1. No `BreadcrumbList` on privacy pages
A `Home > Privacy Policy` breadcrumb on `/en/privacy` and `/fr/privacy` would enable breadcrumb rich results.

#### M2. Schema not localized per language URL
Both `/en` and `/fr` receive identical schema. ProfilePage `url`, `inLanguage`, and `name` should reflect the current locale.

#### M3. `PostalAddress` missing `addressLocality`
Both `Person` and `ProfessionalService` have `addressCountry: 'BE'` only.

#### M4. `ItemList` uses bare `url` on `ListItem` instead of `item` property
Google recommends `ListItem.item` as a `Thing` with `@type`, `name`, and `url` for carousel rich result eligibility.

#### M5. `Person.image` is a bare URL string, not `ImageObject`
Upgrade to `ImageObject` with `width`, `height`, `url` for Knowledge Panel eligibility.

### Low
- `WebSite` missing `potentialAction` SearchAction
- `ProfessionalService.sameAs` missing Medium profile
- No `Service` nodes for IT Consultancy and Technical Training
- No `WebPage` schema on privacy pages

---

## Performance (Core Web Vitals)

**Score: 72 / 100**  
**Estimated PageSpeed: 85–92 desktop / 65–78 mobile**

### LCP (Likely: Needs Improvement on mobile)
- LCP candidate: `fro-pro.JPG` (hero photo) on desktop; large decorative text on mobile
- 2.9 MB source JPEG — cold cache first render is slow
- `priority` prop correctly set ✓
- `sizes` prop **missing** on both hero instances → browser requests incorrect srcset variant

### CLS (Likely: Good)
- All images use `fill` with explicit-dimension parent containers ✓
- Font uses `font-display: swap` — FOUT possible; no `adjustFontFallback` configured
- Testimonials carousel uses CSS `translateX` — no layout shift ✓

### INP (Likely: Good in steady state, Medium risk before hydration)
- Full client bundle hydration on every page
- Static sections (Services, Expertise, etc.) could be RSC — unnecessary JS parse cost
- No heavy event handlers; carousel properly cleaned up ✓

### Key Findings

| Issue | Severity | File |
|-------|----------|------|
| `fro-pro.JPG` 3 MB source | High | `/public/fro-pro.JPG` |
| Missing `sizes` on hero images | Medium | `Hero.tsx:107,114` |
| No `adjustFontFallback` | Medium | `layout.tsx` (font declaration) |
| No `Cache-Control` for `/public` images | Low | `vercel.json` |
| No `preconnect` for `miro.medium.com` | Low | `layout.tsx` |

### Passing Items
- Self-hosted font via `next/font/local` — no Google Fonts latency ✓
- Static generation (SSG) for all locale routes — minimal TTFB ✓
- `sharp` installed — WebP/AVIF serving active ✓
- Only 3 external origins total ✓
- No blocking third-party scripts ✓
- Vercel Analytics / Speed Insights are deferred and non-blocking ✓

---

## AI Search Readiness (GEO)

**Score: 72 / 100**

### Platform Scores

| Platform | Score | Notes |
|----------|-------|-------|
| Google AI Overviews | 6.5/10 | ProfilePage schema + meta clear; no SpeakableSpecification |
| ChatGPT / ChatGPT Search | 6.0/10 | llms.txt good; testimonials in JS carousel |
| Perplexity | 7.5/10 | Named clients + tenures = strong factual anchors |
| Bing Copilot | 7.0/10 | OG complete; missing `legalName` in schema |

### Strengths
- robots.txt explicitly allows all major AI crawlers ✓
- `llms.txt` present, well-formed, and structured ✓
- Structured data injected server-side — visible without JS ✓
- Named enterprise clients with tenure durations (Eurocontrol 9y, etc.) ✓
- Legal entity (Roget Concept SRL, VAT) present ✓

### Gaps

#### High
1. **Testimonials in JS carousel** — richest quotable content unreliable for AI extraction
2. **No `SpeakableSpecification`** — Google AI Overviews and voice AI cannot identify optimal passages
3. **No dedicated bio/about page** — no single canonical URL for "who is François Roget" queries

#### Medium
4. **Hero bio fragmented** — split across 3 `<span>` elements; AI parsers may extract disconnected passages
5. **llms.txt missing RSL 1.0 license** — some AI systems skip citation without explicit license
6. **Client tenures missing from llms.txt** — names only, no tenure data

#### Low
7. **No YouTube presence** — highest-known correlation signal for AI citation (0.737)
8. **No Wikipedia / Wikidata entry** — prevents canonical entity resolution by AI knowledge graphs
9. **No Reddit/community presence** attributable to the name

---

## Images

**Score: 58 / 100**

### Critical
- `fro-pro.JPG`: 3.03 MB, 3648×2432 px for a 420×520 display slot
- `paniers-icon.png`: 655 KB PNG for a ~240 px display slot

### High
- `sizes` prop missing on hero headshot (both instances) and Paniers icon
- 7 of 8 client logos in PNG format (only Tunz.webp is modern format)
- Alt text on headshot: `"François Roget"` — misses keyword opportunity
- `Be_Brussels.png`: 281 KB for a 120×60 slot

### Medium
- OG image is a photo-based JPEG with no visible branding — poor link preview performance
- `Person.image` in schema is a 3 MB JPEG URL — crawlers fetching this schema image hit the unoptimized file
- Article `sizes` prop uses `25vw` at 1024px+ (actual rendered size is ~33vw in 3-column grid)
- No separate OG image for FR locale

### Low
- No `manifest.json` for PWA/Android home screen icons
- Logo filenames: `Be_Brussels.png` uses underscore (minor, no practical impact)

### Passing Items
- `next/image` used consistently throughout ✓
- `priority` on both hero photo instances ✓
- `sizes` on article cards ✓
- OG image: 1200×630, 65 KB ✓
- SVG favicon + ICO fallback + apple-touch-icon ✓
- Article thumbnails: WebP via Medium CDN ✓

---

## Sitemap

**Score: 85 / 100**

### URL Coverage

| URL | In Sitemap | Status |
|-----|------------|--------|
| `/` | No | Correct — redirects to `/en`, redirect sources excluded |
| `/en` | Yes ✓ | 200 |
| `/fr` | Yes ✓ | 200 |
| `/privacy` | No | Correct — redirects to `/en/privacy` |
| `/en/privacy` | Yes ✓ | 200 |
| `/fr/privacy` | Yes ✓ | 200 |

### Issues

| Severity | Issue |
|----------|-------|
| High | `lastmod` is `new Date()` at request time — changes on every fetch, Google ignores it |
| Medium | `changefreq` and `priority` are present — Google officially ignores both, remove clutter |
| Low | No `<xhtml:link>` hreflang annotations in sitemap (HTML `<head>` handles it — not a bug, but sitemap-level hreflang is more reliable) |

### Recommended Fix (`src/app/sitemap.ts`)

```ts
import { MetadataRoute } from 'next'
const BASE_URL = 'https://www.roget-concept.be'
const HOME_LASTMOD = new Date('2026-03-01')
const PRIVACY_LASTMOD = new Date('2026-03-01')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: HOME_LASTMOD,
      alternates: { languages: { en: `${BASE_URL}/en`, fr: `${BASE_URL}/fr`, 'x-default': `${BASE_URL}/en` } },
    },
    {
      url: `${BASE_URL}/fr`,
      lastModified: HOME_LASTMOD,
      alternates: { languages: { en: `${BASE_URL}/en`, fr: `${BASE_URL}/fr`, 'x-default': `${BASE_URL}/en` } },
    },
    {
      url: `${BASE_URL}/en/privacy`,
      lastModified: PRIVACY_LASTMOD,
      alternates: { languages: { en: `${BASE_URL}/en/privacy`, fr: `${BASE_URL}/fr/privacy` } },
    },
    {
      url: `${BASE_URL}/fr/privacy`,
      lastModified: PRIVACY_LASTMOD,
      alternates: { languages: { en: `${BASE_URL}/en/privacy`, fr: `${BASE_URL}/fr/privacy` } },
    },
  ]
}
```

---

## Appendix: Source Files Referenced

| File | Issues |
|------|--------|
| `src/proxy.ts` | Rename to `middleware.ts` |
| `src/app/layout.tsx` | Font fallback, preconnect hints, global schema injection |
| `src/app/structured-data.ts` | dateModified, ProfilePage url, add Review/SoftwareApplication nodes |
| `src/app/sitemap.ts` | lastmod, changefreq, priority, add alternates |
| `src/app/robots.ts` | Add `Anthropic-AI` token |
| `src/app/[locale]/layout.tsx` | Move schema here for locale-awareness |
| `src/app/[locale]/privacy/page.tsx` | Create companion layout.tsx with generateMetadata |
| `src/components/sections/Hero.tsx` | RSC conversion, sizes prop, alt text |
| `src/components/sections/Testimonials.tsx` | Consider static HTML rendering |
| `src/components/sections/Services.tsx` | RSC conversion, CTA addition, Belgium keyword |
| `src/components/sections/Articles.tsx` | RSC conversion, fix sizes (25vw→33vw) |
| `src/components/sections/Clients.tsx` | RSC conversion, add sizes="120px" |
| `src/components/sections/AppShowcase.tsx` | Add sizes, improve alt text |
| `src/i18n/locales/en.ts` | Remove duplicate "Pragmatic, no-nonsense solutions" |
| `src/data/site-data.ts` | Source for Review schema data |
| `vercel.json` | Add Cache-Control for public images |
| `public/fro-pro.JPG` | Replace with WebP under 150 KB |
| `public/paniers-icon.png` | Replace with WebP under 80 KB |
| `public/logos/Be_Brussels.png` | Convert to WebP |
| `public/logos/Worldline.png` | Convert to WebP |
| `public/logos/Paynovate.png` | Convert to WebP |
| `public/llms.txt` | Add RSL 1.0 license, add client tenures |
