export interface Reference {
  name: string;
  url: string;
}

export interface Breakpoint {
  weapon: string;
  frame: string;
  weaponsStat: string;
  statNote?: string; // e.g., "Sources vary (186-188)"
  baseTTK: string;
  baseSTK: string;
  newTTK: string;
  newSTK: string;
  perksNeeded: string;
  reference: string;
  referenceUrl?: string;
  additionalRefs?: Reference[]; // For multiple sources
}

export const breakpoints: Breakpoint[] = [
  {
    weapon: "Hand Cannon",
    frame: "Precision (180)",
    weaponsStat: "169",
    baseTTK: "1.00s",
    baseSTK: "2h2b",
    newTTK: "0.67s",
    newSTK: "3h0b",
    perksNeeded: "Enhanced Precision Instrument",
    reference: "Destiny 2 PVP Weapons Stat TTK Breakpoints v1.2",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=0#gid=0",
  },
  {
    weapon: "Hand Cannon",
    frame: "Dynamic Heat (180)",
    weaponsStat: "178",
    baseTTK: "1.00s",
    baseSTK: "2h2b",
    newTTK: "0.67s",
    newSTK: "3h0b",
    perksNeeded: "Overclocked Heatsink (+2%)",
    reference: "Destiny WeaponStat Chart v1.15",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
  },
  {
    weapon: "Pulse Rifle",
    frame: "Adaptive (390)",
    weaponsStat: "190",
    baseTTK: "0.93s",
    baseSTK: "6h1b",
    newTTK: "0.60s",
    newSTK: "6h0b",
    perksNeeded: "Elemental Honing",
    reference: "Reddit",
    referenceUrl:
      "https://www.reddit.com/r/CrucibleGuidebook/comments/1ptr0fj/are_there_any_popular_weapon_stats_breaking/",
  },
  {
    weapon: "Pulse Rifle",
    frame: "Lightweight (450)",
    weaponsStat: "187*",
    statNote: "Sources vary (186-188)",
    baseTTK: "0.87s",
    baseSTK: "7h1b",
    newTTK: "0.80s",
    newSTK: "7h0b",
    perksNeeded: "None",
    reference: "Destiny WeaponStat Chart v1.15",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
    additionalRefs: [
      {
        name: "Era's Weapon Stat Calculator",
        url: "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
      },
      {
        name: "Destiny 2 PVP Weapons Stat TTK Breakpoints v1.2",
        url: "https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=0#gid=0",
      },
    ],
  },
  {
    weapon: "Sidearm",
    frame: "Adaptive-Burst (491)",
    weaponsStat: "168",
    baseTTK: "0.73s",
    baseSTK: "6h1b",
    newTTK: "0.50s",
    newSTK: "6h0b",
    perksNeeded: "None",
    reference: "Destiny WeaponStat Chart v1.15",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
  },
  {
    weapon: "SMG",
    frame: "Lightweight (900)",
    weaponsStat: "186",
    baseTTK: "0.73s",
    baseSTK: "11h1b",
    newTTK: "0.67s",
    newSTK: "11h0b",
    perksNeeded: "None",
    reference: "Destiny WeaponStat Chart v1.15",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
  },
  {
    weapon: "SMG",
    frame: "Balanced Heat (900)",
    weaponsStat: "145",
    baseTTK: "0.73s",
    baseSTK: "11h1b",
    newTTK: "0.67s",
    newSTK: "11h0b",
    perksNeeded: "Overclocked Heatsink (+2%)",
    reference: "Destiny WeaponStat Chart v1.15",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
  },
  {
    weapon: "Scout Rifle",
    frame: "Rapid-Fire (260)",
    weaponsStat: "193",
    baseTTK: "0.93s",
    baseSTK: "3h2b",
    newTTK: "0.70s",
    newSTK: "4h0b",
    perksNeeded: "Enh. Precision Instrument",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
  {
    weapon: "Glaive Melee",
    frame: "Any",
    weaponsStat: "Melee 190",
    baseTTK: "-",
    baseSTK: "3 Hits",
    newTTK: "-",
    newSTK: "2 Hits",
    perksNeeded: "-",
    reference: "Reddit",
    referenceUrl:
      "https://www.reddit.com/r/CrucibleGuidebook/comments/1q8vze1/ttk_breakpoints_cheatsheet_weapons_stat/",
  },
];

export interface EaseOfUseBreakpoint {
  weapon: string;
  frame: string;
  ttk: string;
  baseSTK: string;
  newSTK: string;
  perksNeeded: string;
  reference: string;
  referenceUrl?: string;
}

export const easeOfUseBreakpoints: EaseOfUseBreakpoint[] = [
  {
    weapon: "Pulse Rifle",
    frame: "Aggressive Burst (450)",
    ttk: "0.73s",
    baseSTK: "7h1b",
    newSTK: "6h2b",
    perksNeeded: "Headseeker",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
  {
    weapon: "Pulse Rifle",
    frame: "High Impact (340)",
    ttk: "0.67s",
    baseSTK: "6h0b",
    newSTK: "5h1b",
    perksNeeded: "Headseeker",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
  {
    weapon: "Pulse Rifle",
    frame: "Lightweight (450)",
    ttk: "0.80s",
    baseSTK: "7h0b",
    newSTK: "5h2b",
    perksNeeded: "Sword Logic",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
  {
    weapon: "Pulse Rifle",
    frame: "Rapid-Fire (540)",
    ttk: "0.73s",
    baseSTK: "8h0b",
    newSTK: "7h1b",
    perksNeeded: "Headseeker",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
  {
    weapon: "Sidearm",
    frame: "Lightweight (360)",
    ttk: "0.67s",
    baseSTK: "4h1b",
    newSTK: "3h2b",
    perksNeeded: "Enh. Precision Instrument",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
  {
    weapon: "Scout Rifle",
    frame: "High Impact (150)",
    ttk: "0.80s",
    baseSTK: "3h0b",
    newSTK: "2h1b",
    perksNeeded: "Enh. Precision Instrument",
    reference: "Era's Weapon Stat Calculator",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=0#gid=0",
  },
];

export const references = [
  {
    name: "Destiny 2 PVP Weapons Stat TTK Breakpoints v1.2",
    url: "https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=0#gid=0",
  },
  {
    name: "Destiny WeaponStat Chart v1.15",
    url: "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
  },
  {
    name: "Reddit Discussion",
    url: "https://www.reddit.com/r/CrucibleGuidebook/comments/1ptr0fj/are_there_any_popular_weapon_stats_breaking/",
  },
];
