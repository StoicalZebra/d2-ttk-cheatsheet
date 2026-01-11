"use client";

import { useState } from "react";

interface UpdateEntry {
  date: string;
  title: string;
  url: string;
  notes: string;
}

interface UpdateSection {
  year: string;
  expansion: string;
  entries: UpdateEntry[];
  highlights?: string[];
}

const updateSections: UpdateSection[] = [
  {
    year: "2025",
    expansion: "Renegades",
    entries: [
      {
        date: "2025-11-11",
        title: "Dev Insights - Renegades Weapon Tuning Preview",
        url: "https://www.bungie.net/7/en/News/Article/dev_insight_renegades_weapons",
        notes: "Major Dev Insights - Ammo system, archetypes, Exotics, perks",
      },
      {
        date: "2025-11-26",
        title: "This Week in Destiny - 11/26/2025",
        url: "https://www.bungie.net/7/en/News/Article/twid_11_26_2025",
        notes: "Pre-launch TWID",
      },
    ],
    highlights: [
      "Mint Retrograde: Reserve ammo reduced (45% Kinetic slot usage)",
      "Ace of Spades: Memento Mori PvE +18% → +30%",
      "Hawkmoon: Added PvE damage bonus per Paracausal Charge",
    ],
  },
  {
    year: "2025",
    expansion: "Ash & Iron",
    entries: [
      {
        date: "2025-09-05",
        title: "Dev Insights - Ash & Iron Weapon Tuning Preview",
        url: "https://www.bungie.net/7/en/News/Article/weapon_tuning_preview_ashiron",
        notes: "Major Dev Insights - 15 Exotic weapon updates",
      },
    ],
    highlights: [
      "MIDA Multi-Tool: Complete rework with new trait",
      "Buffs: Whirling Ovation, No Land Beyond, Thunderlord",
      "Nerfs: Graviton Spike, Tarrabah, Lord of Wolves",
    ],
  },
  {
    year: "2025",
    expansion: "Episode Heresy",
    entries: [
      {
        date: "2025-01-23",
        title: "This Week in Destiny - 01/23/2025",
        url: "https://www.bungie.net/7/en/News/Article/twid-01-23-25",
        notes: "Major sandbox update - 100+ changes for Episode Heresy launch",
      },
      {
        date: "2025-03-27",
        title: "This Week in Destiny - 03/27/2025",
        url: "https://origin-static01.bungie.net/7/en/News/Article/twid_03_27_2025",
        notes: "Mid-season update",
      },
    ],
    highlights: [
      "Glaives: Increased Aim Assist, Aim Magnetism, Damage Falloff Ranges",
      "Scout Rifles & Auto Rifles: Archetype buffs",
      "D.A.R.C.I.: Complete rework",
      "Telesto: Harbinger's Pulse perk overhaul",
    ],
  },
  {
    year: "2024",
    expansion: "Episode Revenant",
    entries: [
      {
        date: "2024-09-26",
        title: "This Week in Destiny - 09/26/2024",
        url: "https://www.bungie.net/7/en/News/article/twid_09_26_2024",
        notes: "Episode Revenant preview - Crucible update plans",
      },
      {
        date: "2024-11-14",
        title: "This Week in Destiny - 11/14/2024",
        url: "https://www.bungie.net/7/en/News/Article/twid-11-14-24",
        notes: "Mid-season tuning",
      },
    ],
    highlights: [
      "Primary Weapons: +5-7% crit damage, reduced body damage",
      "Sniper Rifles PvE: +60% vs Minors, +75% vs Majors",
      "Heavy Burst Pulse Rifles: -18% damage (10% DPS drop)",
    ],
  },
  {
    year: "2024",
    expansion: "The Final Shape",
    entries: [
      {
        date: "2024-06-04",
        title: "The Final Shape Launch",
        url: "https://www.bungie.net/7/en/news/article/d2_intothelight_tfs_recap",
        notes: "Major expansion sandbox overhaul",
      },
      {
        date: "2024-05-30",
        title: "This Week in Destiny - 05/30/2024",
        url: "https://www.bungie.net/7/en/News/article/twid-05-30-24",
        notes: "Pre-TFS sandbox preview",
      },
    ],
    highlights: [
      "Pulse Rifles: Two consecutive buffs for PvE",
      "Chain Reaction: -15% radius, -20% damage on Special, +30% on Heavy",
    ],
  },
  {
    year: "2024",
    expansion: "Into the Light",
    entries: [
      {
        date: "2024-04-09",
        title: "Into the Light Update",
        url: "https://www.bungie.net/7/en/News/article/twid-04-11-2024",
        notes: "Free update before The Final Shape",
      },
    ],
    highlights: [
      "Rapid Fire Pulse Rifles: +3.5% body, +1% crit",
      "Lightweight Pulse Rifles: +6% body damage",
    ],
  },
  {
    year: "2023",
    expansion: "Lightfall",
    entries: [
      {
        date: "2023-02-23",
        title: "This Week At Bungie - 02/23/2023",
        url: "https://www.bungie.net/7/en/News/article/twab-02-23-2023",
        notes: "Lightfall sandbox preview",
      },
      {
        date: "2023-03-16",
        title: "This Week At Bungie - 03/16/2023",
        url: "https://www.bungie.net/7/en/News/article/twab_03_16_2023",
        notes: "Primary weapon buffs",
      },
    ],
    highlights: [
      "Auto Rifles: +25% damage vs red/orange bars (PvE)",
      "Pulse Rifles, Hand Cannons, Sidearms: +20% (PvE)",
      "Scout Rifles: +10% (PvE)",
    ],
  },
  {
    year: "2022",
    expansion: "Season 17 Mega-TWAB",
    entries: [
      {
        date: "2022-04-21",
        title: "This Week at Bungie - 4/21/2022",
        url: "https://www.bungie.net/7/en/News/article/51250",
        notes: "Legendary sandbox post - Hundreds of changes",
      },
    ],
    highlights: [
      "Major shift toward primary gunplay in PvP",
      "Reduced one-hit kills across the board",
    ],
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function SandboxUpdateLog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="sandbox-log" className="relative scroll-mt-6">
      {/* Collapsible Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group cursor-pointer"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-void animate-glow-pulse" />
            <h2 className="font-display text-2xl tracking-wider uppercase">
              Sandbox Update Log
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border)] to-transparent" />

          {/* Expand/Collapse Button */}
          <div className={`flex items-center gap-2 px-4 py-2 border transition-all ${
            isOpen
              ? "border-void/60 bg-void-lighter text-void"
              : "border-arc/40 bg-void-lighter hover:border-arc hover:bg-void-light text-arc"
          }`}>
            <span className="text-sm font-display tracking-wider uppercase">
              {isOpen ? "Collapse" : "Expand Archive"}
            </span>
            <ChevronIcon isOpen={isOpen} />
          </div>
        </div>

        {/* Collapsed Preview */}
        {!isOpen && (
          <div className="text-left p-4 bg-void-light/30 border border-[var(--color-border)] border-dashed">
            <p className="text-dim text-sm mb-2">
              Historical archive of Bungie&apos;s weapon tuning posts (TWAB/TWID) from 2022-2025.
            </p>
            <p className="text-arc text-sm font-medium">
              Click to expand and view {updateSections.reduce((acc, s) => acc + s.entries.length, 0)} sandbox updates across {updateSections.length} major releases.
            </p>
          </div>
        )}
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-6 pt-2">
          {updateSections.map((section, idx) => (
            <div
              key={`${section.year}-${section.expansion}`}
              className="bg-void-light/50 border border-[var(--color-border)] p-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display text-lg text-arc tracking-wider">
                  {section.year}
                </span>
                <span className="text-dim">—</span>
                <span className="font-medium text-[var(--color-text)]">
                  {section.expansion}
                </span>
              </div>

              {/* Entries */}
              <div className="space-y-2 mb-3">
                {section.entries.map((entry) => (
                  <a
                    key={entry.url}
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-2 hover:bg-void-lighter transition-colors"
                  >
                    <span className="text-xs text-dim font-mono whitespace-nowrap mt-0.5">
                      {entry.date}
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[var(--color-text)] group-hover:text-arc transition-colors">
                        {entry.title}
                      </div>
                      <div className="text-xs text-dim">{entry.notes}</div>
                    </div>
                    <svg
                      className="w-4 h-4 text-dim group-hover:text-arc transition-colors flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Highlights */}
              {section.highlights && (
                <div className="border-t border-[var(--color-border)]/50 pt-3">
                  <span className="text-xs text-dim font-display tracking-wider uppercase mb-2 block">
                    Key Changes:
                  </span>
                  <ul className="space-y-1">
                    {section.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-dim flex items-start gap-2">
                        <span className="text-solar mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* External Resources */}
          <div className="p-4 bg-void-lighter/50 border border-dashed border-[var(--color-border)]">
            <span className="text-xs text-dim font-display tracking-wider uppercase mb-3 block">
              External Archives:
            </span>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://destiny.bungie.org/bwu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-arc hover:text-solar transition-colors"
              >
                Bungie Weekly Update Archive
              </a>
              <span className="text-dim">|</span>
              <a
                href="https://patchtracker.gg/destiny-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-arc hover:text-solar transition-colors"
              >
                Patch Tracker
              </a>
              <span className="text-dim">|</span>
              <a
                href="https://www.bungie.net/7/en/News/Destiny"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-arc hover:text-solar transition-colors"
              >
                Bungie News
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
