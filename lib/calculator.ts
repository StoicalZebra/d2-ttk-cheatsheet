/**
 * Weapons Stat Calculator
 *
 * WEAPONS STAT (101-200):
 * Governs weapon damage.
 * Formula: D = (W - 100) × 0.05%
 * where D = damage % increase, W = weapons stat
 * Range: 100 = 0%, 200 = 5% damage increase
 *
 * MELEE STAT (101-200):
 * Governs melee damage, including uncharged melees and Glaives.
 * Formula: D = (M - 100) × 0.2% (??? Need to verify)
 * where D = damage % increase, M = melee stat
 * Range: 100 = 0%, 200 = 20% damage increase (PvP)
 *
 * Base Glaive melee damage in PvP: 69 HP ??? Somehow, base glaive melee + 190 weapon has to be greater than 115 HP for Glaive melee 2 tap
 * Source: https://docs.google.com/spreadsheets/d/1FT-BL6UA6ntNEN7_btqwlfJaPYTAeIFvlhpkvWHTajc/edit?gid=303507057#gid=303507057
 */

/**
 * Calculate damage percentage increase from weapons stat
 * @param weaponsStat - The weapons stat value (typically 100-200)
 * @returns The damage percentage increase as a decimal (e.g., 0.05 for 5%)
 */
export function calcDamagePercent(weaponsStat: number): number {
  return (weaponsStat - 100) * 0.0005;
}

/**
 * Calculate required weapons stat for a target damage percentage
 * @param targetDamagePercent - The target damage percentage as a decimal (e.g., 0.05 for 5%)
 * @returns The required weapons stat value
 */
export function calcRequiredStat(targetDamagePercent: number): number {
  return targetDamagePercent / 0.0005 + 100;
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
  { stat: 110, damagePercent: 0.005 },
  { stat: 120, damagePercent: 0.01 },
  { stat: 130, damagePercent: 0.015 },
  { stat: 140, damagePercent: 0.02 },
  { stat: 150, damagePercent: 0.025 },
  { stat: 160, damagePercent: 0.03 },
  { stat: 170, damagePercent: 0.035 },
  { stat: 180, damagePercent: 0.04 },
  { stat: 190, damagePercent: 0.045 },
  { stat: 200, damagePercent: 0.05 },
];
