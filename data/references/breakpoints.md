# TTK Breakpoints Reference
**Version: 1.1**

This is the source of truth for breakpoint data. Edit this file, then update `data/breakpoints.ts` to match.

Last updated: 2025-01-11

---

## Breakpoints Table

| Weapon       | Frame (RPM)          | WPN  | Base TTK | Base STK | New TTK | New STK | Perks Needed               | Source | Notes |
|--------      |-------               |------|----------|----------|---------|---------|--------------              |------- |-----  |
| Hand Cannon  | Precision (180)      | 169  | 1.00     | 2h2b     | 0.67    | 3h0b    | Enh. Precision Instrument  | dalx21 |       |
| Hand Cannon  | Dynamic Heat (180)   | 178  | 1.00     | 2h2b     | 0.67    | 3h0b    | Overclocked Heatsink (+2%) | Hugo   |       |
| Pulse        | Lightweight (450)    | 187* | 0.87     | 7h1b     | 0.80    | 7h0b    | None                       | Era + dalx21 + Hugo | *Sources vary (186-188) | 
| Sidearm      | Adaptive-Burst (491) | 168  | 0.73     | 6h1b     | 0.50    | 6h0b    | None |                     | Hugo   |       |
| SMG          | Lightweight (900)    | 186  | 0.73     | 11h1b    | 0.67    | 11h0b   | None |                     | Hugo   |       |
| SMG          | Balanced Heat (900)  | 145  | 0.73     | 11h1b    | 0.67    | 11h0b   | Overclocked Heatsink (+2%) | Hugo   |       |
| Glaive Melee | Any                  | Melee 190 | -   | 3 Hits   | -       | 2 Hits  | None                       | Mnkke  | Uses Melee stat, not Weapons |
| Pulse        | Adaptive (390)       | ???  | 1.00     | 6h2b     | ????    | 7h      | None                       | Hugo + Era | Don't know how to interpret entries for Adaptive Pulse TTK shifts |
| Pulse        | Rapid Fire (540)     | 102  | 0.8      | 7h2b     | ????    | 8h      | None                       | Hugo   | Don't know new TTK math |
| Scout        | Balanced Heat (260)  | 165  | 0.93     | 4h1b     | ????    | 4h0b    | Overclocked Heatsink       | Hugo   | Don't know new TTK math |
| Pulse        | High Impact (340)    | 150  | 0.67     | 6h       | ????    | 5h1b    | Headseeker                 | Era    | Don't know new TTK math |
| Pulse        | Rapid Fire (540)     | 102  | 0.8      | 7h2b     | ????    | 8h      | Headseeker                 | Era    | Don't know new TTK math |

---

## Ease of Use Table (No Kill Perks Required)

| Weapon  | Frame (RPM)           | WPN | TTK  | Base STK | New STK | Perks Needed              | Source | Notes |
|---------|-------                |-----|------|----------|---------|--------------             |------- | ----- |
| Sidearm | Lightweight (360)     | NA  | 0.67 | 4h1b     | 3h2b    | Enh. Precision Instrument | Era    |       |
| Pulse   | Adaptive (390)        | 168 | 1.00 | 6h2b     | 5h3b    | None                      | Hugo   |       |
| Pulse   | Aggressive Burst (450)| 106 | 0.73 | 8h       | 7h1b    | None                      | Hugo   |       |
| Pulse   | Balanced Heat (540)   | 183 | 0.73 | 8h       | 7h1b    | Overclocked Heatsink      | Hugo   |       |
| Pulse   | Dynamic Heat (540)    | 172 | 0.73 | 8h       | 7h1b    | None                      | Hugo   |       |
| Pulse   | Lightweight (450)     | 114 | 0.87 | 7h1b     | 6h2b    | None                      | Hugo   |       |
| Scout   | Balanced Heat (260)   | 152 | 0.93 | 4h1b     | 3h2b    | Overclocked Heatsink      | Hugo   |       |
| Scout   | High Impact (150)     | 198 | 0.8  | 3h0b     | 2h1b    | Enh. Precision Instrument | Era    |       |
| Scout   | Rapid Fire (260)      | 193 | 0.93 | 4h1b     | 3h2b    | None                      | Hugo   |       | 

---
## References

| Source | Title | URL |
|--------|-----  |  -- |
| dalx21 | Destiny 2 PVP Weapons Stat TTK Breakpoints v1.2 | https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=0#gid=0 |
| Hugo   | Destiny WeaponStat Chart v1.15 | https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024 |
| Era    | Era's Weapon Stat Calculator | https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0 |
| Oni    | Destiny 2 Glaive Compendium | https://docs.google.com/spreadsheets/d/1FT-BL6UA6ntNEN7_btqwlfJaPYTAeIFvlhpkvWHTajc/edit?gid=303507057#gid=303507057 |
| Mnkke  | Glaive melee is capable of a 2stab with just Melee stat! | https://www.reddit.com/r/CrucibleGuidebook/comments/1m8cyzi/glaive_melee_is_capable_of_a_2stab_with_just/ |
| Thiag0123        | Weapon Stats Breaking Points | https://www.reddit.com/r/CrucibleGuidebook/comments/1ptr0fj/are_there_any_popular_weapon_stats_breaking/ |
| TheFieryDread101 | Precision Instrument Appreciation Post | https://www.reddit.com/r/DestinyTheGame/comments/1dsd7sl/precision_instrument_appreciation_post_pvp/ |


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

- v1.1 (2025-01-11): Add Pulse/Scout breakpoints from Hugo + Era
- v1.0 (2025-01-10): Initial creation from breakpoints.ts
