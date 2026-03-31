# 07 — Add HTTP security headers and www redirect via .htaccess

**Severity:** High
**Category:** Technical SEO / Security

## Problem

No HTTP security headers are set (no CSP, no HSTS, no X-Frame-Options, no X-Content-Type-Options). OVH uses Apache — an `.htaccess` file in `public/` will be copied to `out/` on build and served from the site root. Also, no server-side redirect enforces the www canonical domain.

## Steps

Create `/public/.htaccess`:

```apache
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://cdn.vercel-insights.com; img-src 'self' https://miro.medium.com data:; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
</IfModule>

# Enforce www canonical
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^ https://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

After adding the file, rebuild and redeploy. Verify headers at https://securityheaders.com.

## Files

- `public/.htaccess` (new file)

## Notes

- Adjust the `Content-Security-Policy` if third-party sources are added in future
- The www redirect here complements (and reinforces) the canonical tag fix in task 02
