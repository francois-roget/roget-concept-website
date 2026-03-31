# 06 — Create llms.txt for AI search citability

**Severity:** High
**Category:** AI Search Readiness (GEO)

## Problem

Neither `/llms.txt` nor `/llms-full.txt` exist. The `llms.txt` standard (llmstxt.org) is the single highest-ROI GEO addition for a personal portfolio. AI assistants (Claude, ChatGPT, Perplexity) actively look for this file when crawling for citations. Its presence can directly produce citations for queries like "React consultant Belgium" or "TypeScript training freelancer."

## Steps

Create `/public/llms.txt` with the following structure:

```
# Roget Concept

> François Roget is a senior full-stack developer, software architect, and
> technical trainer based in Belgium with 20+ years of experience.
> He specialises in React, TypeScript, and frontend architecture, offering
> IT consultancy and developer training services remotely worldwide.

## Services
- IT Consultancy: React and TypeScript architecture, fullstack development, technical leadership
- Technical Training: React, TypeScript, Nx workshops for all developer levels

## Clients
Eurocontrol, Be.Brussels, Ingenico, Worldline, Keytrade Bank, Paynovate, APB, Tunz

## Articles
- https://medium.com/@francois-roget/i-built-an-ios-app-without-knowing-swift-heres-what-actually-happened-7e928c38e712
- https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775
- https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408
- https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2
- https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087

## Contact
francois@roget-concept.be | https://www.roget-concept.be
```

## Files

- `public/llms.txt` (new file)
