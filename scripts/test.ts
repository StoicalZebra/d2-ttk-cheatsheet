/**
 * Test suite for D2 TTK Cheatsheet
 * Run with: npm test
 *
 * Tests:
 * 1. Version consistency (breakpoints.ts matches breakpoints.md)
 * 2. Breakpoint data validation (no NaN, required fields)
 * 3. Reference URL validation
 * 4. No hardcoded versions in components
 * 5. Component column rendering (all data fields rendered)
 */

import * as fs from "fs";
import * as path from "path";
import {
  BREAKPOINTS_VERSION,
  breakpoints,
  easeOfUseBreakpoints,
} from "../data/breakpoints";

let failures: string[] = [];
let passes = 0;

function test(name: string, fn: () => void) {
  try {
    fn();
    passes++;
    console.log(`  ✓ ${name}`);
  } catch (e) {
    failures.push(`${name}: ${(e as Error).message}`);
    console.log(`  ✗ ${name}`);
  }
}

function assertEqual(actual: unknown, expected: unknown, msg: string) {
  if (actual !== expected) {
    throw new Error(`${msg}\n    Expected: ${expected}\n    Actual: ${actual}`);
  }
}

function assertTrue(condition: boolean, msg: string) {
  if (!condition) {
    throw new Error(msg);
  }
}

console.log("\n📋 D2 TTK Cheatsheet Test Suite\n");

// =============================================================================
// Version Consistency Tests
// =============================================================================
console.log("Version Consistency:");

test("breakpoints.md version matches BREAKPOINTS_VERSION", () => {
  const mdPath = path.join(__dirname, "../data/references/breakpoints.md");
  const mdContent = fs.readFileSync(mdPath, "utf-8");
  const versionMatch = mdContent.match(/\*\*Version:\s*(\d+\.\d+)\*\*/);
  assertTrue(!!versionMatch, "Could not find version in breakpoints.md");
  assertEqual(
    versionMatch![1],
    BREAKPOINTS_VERSION,
    "breakpoints.md version mismatch"
  );
});

test("Footer uses BREAKPOINTS_VERSION (no hardcoded version)", () => {
  const footerPath = path.join(__dirname, "../components/Footer.tsx");
  const footerContent = fs.readFileSync(footerPath, "utf-8");
  assertTrue(
    footerContent.includes("BREAKPOINTS_VERSION"),
    "Footer should import and use BREAKPOINTS_VERSION"
  );
  // Check no hardcoded version like v1.0, v1.1, etc.
  const hardcodedVersion = footerContent.match(/>v\d+\.\d+</);
  assertTrue(
    !hardcodedVersion,
    `Footer has hardcoded version: ${hardcodedVersion?.[0]}`
  );
});

// =============================================================================
// Breakpoint Data Validation
// =============================================================================
console.log("\nBreakpoint Data Validation:");

test("All breakpoints have required fields", () => {
  for (const bp of breakpoints) {
    assertTrue(!!bp.weapon, `Missing weapon for entry`);
    assertTrue(!!bp.frame, `Missing frame for ${bp.weapon}`);
    assertTrue(!!bp.weaponsStat, `Missing weaponsStat for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.baseTTK, `Missing baseTTK for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.baseSTK, `Missing baseSTK for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.newTTK, `Missing newTTK for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.newSTK, `Missing newSTK for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.perksNeeded, `Missing perksNeeded for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.reference, `Missing reference for ${bp.weapon} ${bp.frame}`);
  }
});

test("Placeholder TTK entries have statNote explaining why", () => {
  for (const bp of breakpoints) {
    if (bp.newTTK.includes("?") || bp.weaponsStat.includes("?")) {
      assertTrue(
        !!bp.statNote,
        `${bp.weapon} ${bp.frame} has placeholder but no statNote`
      );
    }
  }
});

test("Valid TTK entries don't produce NaN percentages", () => {
  for (const bp of breakpoints) {
    if (bp.baseTTK === "-" || bp.newTTK === "-") continue;
    if (bp.newTTK.includes("?")) continue;

    const baseNum = parseFloat(bp.baseTTK);
    const newNum = parseFloat(bp.newTTK);
    const diff = baseNum - newNum;
    const percentage = (diff / baseNum) * 100;

    assertTrue(
      !isNaN(percentage),
      `${bp.weapon} ${bp.frame} produces NaN percentage`
    );
  }
});

test("All ease-of-use breakpoints have required fields", () => {
  for (const bp of easeOfUseBreakpoints) {
    assertTrue(!!bp.weapon, `Missing weapon for ease-of-use entry`);
    assertTrue(!!bp.frame, `Missing frame for ${bp.weapon}`);
    assertTrue(!!bp.weaponsStat, `Missing weaponsStat for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.ttk, `Missing ttk for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.baseSTK, `Missing baseSTK for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.newSTK, `Missing newSTK for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.perksNeeded, `Missing perksNeeded for ${bp.weapon} ${bp.frame}`);
    assertTrue(!!bp.reference, `Missing reference for ${bp.weapon} ${bp.frame}`);
  }
});

// =============================================================================
// Reference URL Validation
// =============================================================================
console.log("\nReference URL Validation:");

test("All breakpoints with referenceUrl have valid URLs", () => {
  for (const bp of breakpoints) {
    if (bp.referenceUrl) {
      assertTrue(
        bp.referenceUrl.startsWith("http"),
        `${bp.weapon} ${bp.frame} has invalid referenceUrl: ${bp.referenceUrl}`
      );
    }
  }
});

test("All ease-of-use breakpoints with referenceUrl have valid URLs", () => {
  for (const bp of easeOfUseBreakpoints) {
    if (bp.referenceUrl) {
      assertTrue(
        bp.referenceUrl.startsWith("http"),
        `${bp.weapon} ${bp.frame} has invalid referenceUrl: ${bp.referenceUrl}`
      );
    }
  }
});

test("Reddit URLs use reddit.com domain", () => {
  for (const bp of breakpoints) {
    if (bp.referenceUrl?.includes("reddit")) {
      assertTrue(
        bp.referenceUrl.includes("reddit.com"),
        `${bp.weapon} ${bp.frame} Reddit URL malformed: ${bp.referenceUrl}`
      );
    }
  }
});

test("Google Sheets URLs use docs.google.com domain", () => {
  for (const bp of breakpoints) {
    if (bp.referenceUrl?.includes("spreadsheet")) {
      assertTrue(
        bp.referenceUrl.includes("docs.google.com"),
        `${bp.weapon} ${bp.frame} Google Sheets URL malformed: ${bp.referenceUrl}`
      );
    }
  }
});

// =============================================================================
// Component Column Rendering Tests
// =============================================================================
console.log("\nComponent Column Rendering:");

test("BreakpointsTable renders all data columns", () => {
  const tablePath = path.join(__dirname, "../components/BreakpointsTable.tsx");
  const tableContent = fs.readFileSync(tablePath, "utf-8");

  // Required columns from Breakpoint interface (excluding optional fields)
  const requiredColumns = [
    "weapon",
    "frame",
    "weaponsStat",
    "baseTTK",
    "baseSTK",
    "newTTK",
    "newSTK",
    "perksNeeded",
    "reference",
  ];

  for (const col of requiredColumns) {
    assertTrue(
      tableContent.includes(`data.${col}`) || tableContent.includes(`bp.${col}`),
      `BreakpointsTable missing column: ${col}`
    );
  }
});

test("EaseOfUseTable renders all data columns", () => {
  const tablePath = path.join(__dirname, "../components/EaseOfUseTable.tsx");
  const tableContent = fs.readFileSync(tablePath, "utf-8");

  // Required columns from EaseOfUseBreakpoint interface
  const requiredColumns = [
    "weapon",
    "frame",
    "weaponsStat",
    "ttk",
    "baseSTK",
    "newSTK",
    "perksNeeded",
    "reference",
  ];

  for (const col of requiredColumns) {
    assertTrue(
      tableContent.includes(`data.${col}`) || tableContent.includes(`bp.${col}`),
      `EaseOfUseTable missing column: ${col}`
    );
  }
});

// =============================================================================
// Summary
// =============================================================================
console.log("\n" + "=".repeat(50));
if (failures.length === 0) {
  console.log(`\n✅ All ${passes} tests passed!\n`);
  process.exit(0);
} else {
  console.log(`\n❌ ${failures.length} test(s) failed:\n`);
  for (const failure of failures) {
    console.log(`  - ${failure}`);
  }
  console.log("");
  process.exit(1);
}
