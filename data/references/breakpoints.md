# TTK Breakpoints Reference

This is the source of truth for breakpoint data. Edit this file, then update `data/breakpoints.ts` to match.

Last updated: 2025-01-10

---

## Breakpoints Table

| Weapon | Frame (RPM) | WPN Stat | Base TTK | Base STK | New TTK | New STK | Perks Needed | Notes |
|--------|-------|----------|----------|----------|---------|---------|--------------|-------|
| Hand Cannon | Precision (180) | 169 | 1.00s | 2h2b | 0.67s | 3h0b | Enh. Precision Instrument | |
| Hand Cannon | Dynamic Heat (180) | 178 | 1.00s | 2h2b | 0.67s | 3h0b | Overclocked Heatsink (+2%) | |
| Pulse Rifle | Adaptive (390) | 190 | 0.93s | 6h1b | 0.60s | 6h0b | Elemental Honing | |
| Pulse Rifle | Lightweight (450) | 187* | 0.87s | 7h1b | 0.80s | 7h0b | None | *Sources vary (186-188) |
| Sidearm | Adaptive-Burst (491) | 168 | 0.73s | 6h1b | 0.50s | 6h0b | None | |
| SMG | Lightweight (900) | 186 | 0.73s | 11h1b | 0.67s | 11h0b | None | |
| SMG | Balanced Heat (900) | 145 | 0.73s | 11h1b | 0.67s | 11h0b | Overclocked Heatsink (+2%) | |
| Scout | Rapid-Fire (260) | 193 | 0.93s | 3h2b | 0.7s | 4h | Enh. Precision Instrument | | 
| Glaive Melee | Any | Melee 190 | - | 3 Hits | - | 2 Hits | - | Uses Melee stat, not Weapons |

---

## Ease of Use Table (No Kill Required)

| Weapon | Frame (RPM) | TTK | Base STK | New STK | Perks Needed | Notes |
|--------|-------|-----|----------|---------|--------------|-------|
| Pulse  | Agressive Burst (450) | 0.73s | 7h1b | 6h2b | Headseeker  | Era's | 
| Pulse  | High Impact (340)     | 0.67s | 6h   | 5h1b | Headseeker  | Era's | 
| Pulse  | Lightweight (450)     | 0.8s  | 7h   | 5h2b | Sword Logic | Era's | 
| Pulse  | Rapid Fire (540)      | 0.73s | 8h   | 7h1b | Headseeker  | Era's | 
| Sidearm| Lightweight (360) | 0.67s | 4h1b | 3h2b | Enh. Precision Instrument | Era's | 
| Scout  | High Impact (150) | 0.8s  | 3h0b | 2h1b | Enh. Precision Instrument | Era's |

---
## References

| Source | URL |
|--------|-----|
| Destiny 2 PVP Weapons Stat TTK Breakpoints v1.2 | https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=0#gid=0 |
| Destiny WeaponStat Chart v1.15 | https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024 |
| Era's Weapon Stat Calculator | https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0 |
| Reddit - Weapon Stats Breaking Points | https://www.reddit.com/r/CrucibleGuidebook/comments/1ptr0fj/are_there_any_popular_weapon_stats_breaking/ |
| Destiny 2 Glaive Compendium | https://docs.google.com/spreadsheets/d/1FT-BL6UA6ntNEN7_btqwlfJaPYTAeIFvlhpkvWHTajc/edit?gid=303507057#gid=303507057 |
| Reddit - Precision Instrument Appreciation Post | https://www.reddit.com/r/DestinyTheGame/comments/1dsd7sl/precision_instrument_appreciation_post_pvp/ |
| Reddit - TTK Breakpoints Cheatsheet | https://www.reddit.com/r/CrucibleGuidebook/comments/1q8vze1/ttk_breakpoints_cheatsheet_weapons_stat/ |

---

## Formulas

### Weapons Stat (101-200)
- Governs weapon damage
- Formula: `D = (W - 100) × 0.05%`
- Range: 100 = 0%, 200 = 5% damage increase

### Melee Stat (101-200)
- Governs melee damage (uncharged melees, Glaives)
- Formula: `D = (M - 100) × 0.2%` (needs verification)
- Range: 100 = 0%, 200 = 20% damage increase (PvP)

---

## Changelog

- 2025-01-10: Initial creation from breakpoints.ts
