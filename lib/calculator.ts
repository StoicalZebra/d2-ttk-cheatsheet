/**
 * Weapons Stat Calculator
 * Formula: D = (W - 100) × 0.06
 * where D = damage % increase, W = weapons stat
 */

/**
 * Calculate damage percentage increase from weapons stat
 * @param weaponsStat - The weapons stat value (typically 100-200)
 * @returns The damage percentage increase as a decimal (e.g., 0.05 for 5%)
 */
export function calcDamagePercent(weaponsStat: number): number {
  return (weaponsStat - 100) * 0.0006;
}

/**
 * Calculate required weapons stat for a target damage percentage
 * @param targetDamagePercent - The target damage percentage as a decimal (e.g., 0.05 for 5%)
 * @returns The required weapons stat value
 */
export function calcRequiredStat(targetDamagePercent: number): number {
  return targetDamagePercent / 0.0006 + 100;
}

/**
 * Format damage percentage for display
 * @param damagePercent - The damage percentage as a decimal
 * @returns Formatted string like "5.0%"
 */
export function formatDamagePercent(damagePercent: number): string {
  return `${(damagePercent * 100).toFixed(1)}%`;
}

/**
 * Format weapons stat for display
 * @param stat - The weapons stat value
 * @returns Formatted string, rounded to nearest integer
 */
export function formatWeaponsStat(stat: number): string {
  return Math.round(stat).toString();
}

/**
 * Reference table data for quick lookup
 */
export const referenceTable = [
  { stat: 100, damagePercent: 0 },
  { stat: 110, damagePercent: 0.006 },
  { stat: 120, damagePercent: 0.012 },
  { stat: 130, damagePercent: 0.018 },
  { stat: 140, damagePercent: 0.024 },
  { stat: 150, damagePercent: 0.03 },
  { stat: 160, damagePercent: 0.036 },
  { stat: 170, damagePercent: 0.042 },
  { stat: 180, damagePercent: 0.048 },
  { stat: 190, damagePercent: 0.054 },
  { stat: 200, damagePercent: 0.06 },
];
