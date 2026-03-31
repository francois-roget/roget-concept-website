# 18 — Fix IDE deployment path (dist → out)

**Severity:** Medium
**Category:** Technical / Deployment

## Problem

`.idea/deployment.xml` maps the local deployment source to `$PROJECT_DIR$/dist`, but Next.js static export outputs to `$PROJECT_DIR$/out`. If a deploy is ever triggered from the IDE (PhpStorm/WebStorm), it would upload a stale or empty `dist/` directory instead of the actual build output.

## Steps

1. Open `.idea/deployment.xml`
2. Change the `local` path from `$PROJECT_DIR$/dist` to `$PROJECT_DIR$/out`
3. Verify the change by inspecting the deployment configuration in the IDE settings

## Files

- `.idea/deployment.xml`
