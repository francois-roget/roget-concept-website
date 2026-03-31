# 28 — Delete unused font file (RedHatDisplay-Regular.ttf)

**Severity:** Low
**Category:** Housekeeping / Performance

## Problem

`src/app/fonts/RedHatDisplay-Regular.ttf` (50KB) exists in the repository but is not referenced anywhere in the codebase. It does not make it into the build output (`out/`), so it has no runtime impact — but it adds unnecessary weight to the repository and can cause confusion.

## Steps

```bash
trash src/app/fonts/RedHatDisplay-Regular.ttf
```

Verify no references to this file exist:
```bash
grep -r "RedHatDisplay-Regular" src/
```

## Files

- `src/app/fonts/RedHatDisplay-Regular.ttf` (delete)
