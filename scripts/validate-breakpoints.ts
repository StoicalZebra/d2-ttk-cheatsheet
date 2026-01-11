/**
 * Validates breakpoint data for issues like NaN values.
 * Run with: npx tsx scripts/validate-breakpoints.ts
 */

import { breakpoints } from "../data/breakpoints";

let hasErrors = false;

for (const bp of breakpoints) {
  const baseNum = parseFloat(bp.baseTTK);
  const newNum = parseFloat(bp.newTTK);

  // Skip entries with dash (intentionally no TTK)
  if (bp.baseTTK === "-" || bp.newTTK === "-") {
    continue;
  }

  // Check for entries with ???? that should have statNote
  if (bp.newTTK.includes("?") && !bp.statNote) {
    console.error(
      `ERROR: ${bp.weapon} ${bp.frame} has placeholder TTK "${bp.newTTK}" but no statNote explaining why`
    );
    hasErrors = true;
  }

  // Check for unexpected NaN (valid numbers that somehow produce NaN)
  if (!bp.newTTK.includes("?")) {
    const diff = baseNum - newNum;
    const percentage = (diff / baseNum) * 100;

    if (isNaN(percentage)) {
      console.error(
        `ERROR: ${bp.weapon} ${bp.frame} produces NaN percentage! baseTTK="${bp.baseTTK}" newTTK="${bp.newTTK}"`
      );
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error("\n❌ Breakpoint validation failed!");
  process.exit(1);
} else {
  console.log("✅ All breakpoints validated successfully");
}
