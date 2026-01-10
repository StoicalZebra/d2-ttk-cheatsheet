export interface Breakpoint {
  weapon: string;
  frame: string;
  weaponsStat: string;
  baseTTK: string;
  baseSTK: string;
  newTTK: string;
  newSTK: string;
  perksNeeded: string;
  reference: string;
  referenceUrl?: string;
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
    perksNeeded: "Overclocked Heatsink",
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
    weaponsStat: "190",
    baseTTK: "0.87s",
    baseSTK: "7h1b",
    newTTK: "0.80s",
    newSTK: "7h0b",
    perksNeeded: "None",
    reference: "Reddit",
    referenceUrl:
      "https://www.reddit.com/r/CrucibleGuidebook/comments/1ptr0fj/are_there_any_popular_weapon_stats_breaking/",
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
    perksNeeded: "Overclocked Heatsink",
    reference: "Destiny WeaponStat Chart v1.15",
    referenceUrl:
      "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
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
