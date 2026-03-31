# 08 — Add Belgian VAT number and Privacy Policy

**Severity:** High
**Category:** Trustworthiness / Legal / E-E-A-T

## Problem

Belgian sole traders operating commercially are legally required to display their VAT/CBE number (`BTW-nummer`) on commercial websites. Its absence creates a legal compliance gap and reduces trust with enterprise procurement departments. Additionally, Vercel Analytics collects visitor data under GDPR — there is no Privacy Policy, which may be non-compliant under Belgian/EU law.

## Steps

1. **Footer:** Add BTW number and company name to `src/components/layout/Footer.tsx`
   - Example: `Roget Concept | BTW BE XXXX.XXX.XXX`

2. **Privacy Policy:** Add a minimal privacy page or modal:
   - Option A: New route `/privacy` with a static page
   - Option B: Footer link to a simple modal explaining Vercel Analytics data collection
   - Minimum content: what data is collected (page views, performance metrics), how long it's retained, user rights (GDPR Art. 13)

3. Add a "Privacy Policy" link to the footer navigation.

## Files

- `src/components/layout/Footer.tsx`
- `src/app/privacy/page.tsx` (new file, if option A)
