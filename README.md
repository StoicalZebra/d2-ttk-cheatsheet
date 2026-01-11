# D2 TTK Breakpoints Cheatsheet

A quick-reference tool for Destiny 2 PvP weapon stat breakpoints that affect time-to-kill (TTK).

## What It Does

Displays weapon stat thresholds where damage bonuses reduce shots-to-kill, improving TTK. Covers various weapon types including Hand Cannons, Pulse Rifles, Sidearms, SMGs, and Glaives.

## Data Structure

- `data/references/breakpoints.md` - Source of truth (human-editable)
- `data/breakpoints.ts` - App data (synced from markdown)

## Versioning Workflow

Both files track version numbers for historical reference.

### Updating Breakpoints

1. Edit `data/references/breakpoints.md`
2. Update `data/breakpoints.ts` to match
3. Bump version in both files (e.g., 1.0 → 1.1)
4. Add changelog entry in `breakpoints.md`
5. Commit and tag:
   ```bash
   git add data/breakpoints.ts data/references/breakpoints.md
   git commit -m "docs: update breakpoints to v1.X"
   git tag breakpoints-v1.X
   git push && git push --tags
   ```

### Viewing Old Versions

```bash
git tag | grep breakpoints          # List versions
git show breakpoints-v1.0:data/breakpoints.ts  # View old file
git diff breakpoints-v1.0 breakpoints-v1.1 -- data/breakpoints.ts  # Compare
```
