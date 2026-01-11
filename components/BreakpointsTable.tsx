"use client";

import { useState, useMemo } from "react";
import { breakpoints, type Breakpoint } from "@/data/breakpoints";
import { calcDamagePercent, formatDamagePercent } from "@/lib/calculator";

type SortColumn = "weapon" | "frame" | "weaponsStat" | "baseTTK" | "baseSTK" | "perksNeeded" | "reference";
type SortDirection = "asc" | "desc";

function parseNumeric(val: string): number {
  const num = parseFloat(val);
  return isNaN(num) ? Infinity : num;
}

function SortableHeader({
  column,
  label,
  currentSort,
  direction,
  onSort,
  className = "",
  children,
}: {
  column: SortColumn;
  label: string;
  currentSort: SortColumn | null;
  direction: SortDirection;
  onSort: (column: SortColumn) => void;
  className?: string;
  children?: React.ReactNode;
}) {
  const isActive = currentSort === column;
  return (
    <th
      onClick={() => onSort(column)}
      className={`py-3 px-4 font-display text-xs tracking-widest uppercase cursor-pointer select-none transition-colors hover:text-[var(--color-text)] ${
        isActive ? "text-arc" : "text-dim"
      } ${className}`}
    >
      <span className="inline-flex items-center gap-1">
        {children || label}
        {isActive && (
          <span className="text-arc">{direction === "asc" ? "▲" : "▼"}</span>
        )}
      </span>
    </th>
  );
}

function TTKChange({ baseTTK, newTTK, statNote }: { baseTTK: string; newTTK: string; statNote?: string }) {
  if (baseTTK === "-" || newTTK === "-") {
    return <span className="text-dim">-</span>;
  }

  const baseNum = parseFloat(baseTTK);
  const newNum = parseFloat(newTTK);
  const diff = baseNum - newNum;
  const percentageNum = (diff / baseNum) * 100;
  const isValidPercentage = !isNaN(percentageNum) && isFinite(percentageNum);

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-dim text-sm">{baseTTK}</span>
        <svg
          className="w-4 h-4 text-arc opacity-60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <span className="text-arc font-semibold">{newTTK}</span>
        {isValidPercentage && (
          <span className="text-xs text-solar opacity-80">-{percentageNum.toFixed(0)}%</span>
        )}
      </div>
      {statNote && (
        <div className="text-xs text-dim mt-0.5">{statNote}</div>
      )}
    </div>
  );
}

function STKChange({ baseSTK, newSTK }: { baseSTK: string; newSTK: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-dim">{baseSTK}</span>
      <svg
        className="w-3 h-3 text-arc opacity-40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span className="text-arc">{newSTK}</span>
    </div>
  );
}

function WeaponBadge({ weapon }: { weapon: string }) {
  // Use CSS variables that change with theme for proper light/dark mode support
  const styleMap: Record<string, React.CSSProperties> = {
    "Hand Cannon": {
      backgroundColor: "var(--color-weapon-hc-bg)",
      color: "var(--color-weapon-hc)",
      borderColor: "var(--color-weapon-hc-border)",
    },
    "Pulse Rifle": {
      backgroundColor: "var(--color-weapon-pulse-bg)",
      color: "var(--color-weapon-pulse)",
      borderColor: "var(--color-weapon-pulse-border)",
    },
    Pulse: {
      backgroundColor: "var(--color-weapon-pulse-bg)",
      color: "var(--color-weapon-pulse)",
      borderColor: "var(--color-weapon-pulse-border)",
    },
    Sidearm: {
      backgroundColor: "var(--color-weapon-sidearm-bg)",
      color: "var(--color-weapon-sidearm)",
      borderColor: "var(--color-weapon-sidearm-border)",
    },
    SMG: {
      backgroundColor: "var(--color-weapon-smg-bg)",
      color: "var(--color-weapon-smg)",
      borderColor: "var(--color-weapon-smg-border)",
    },
    "Glaive Melee": {
      backgroundColor: "var(--color-weapon-glaive-bg)",
      color: "var(--color-weapon-glaive)",
      borderColor: "var(--color-weapon-glaive-border)",
    },
    "Scout Rifle": {
      backgroundColor: "var(--color-weapon-scout-bg)",
      color: "var(--color-weapon-scout)",
      borderColor: "var(--color-weapon-scout-border)",
    },
    Scout: {
      backgroundColor: "var(--color-weapon-scout-bg)",
      color: "var(--color-weapon-scout)",
      borderColor: "var(--color-weapon-scout-border)",
    },
  };

  const style = styleMap[weapon] || {
    backgroundColor: "var(--color-void-lighter)",
    color: "var(--color-text-dim)",
    borderColor: "var(--color-border)",
  };

  return (
    <span
      className="inline-block px-2.5 py-1 text-sm font-bold tracking-wide uppercase border"
      style={style}
    >
      {weapon}
    </span>
  );
}

function PerkBadge({ perk }: { perk: string }) {
  if (perk === "None" || perk === "-") {
    return <span className="text-dim">No perk required</span>;
  }

  return (
    <span className="inline-block px-2.5 py-1 text-sm bg-void-lighter border border-[var(--color-border)] text-[var(--color-text)] tracking-wide font-medium">
      {perk}
    </span>
  );
}

function SourceIcon({ reference, url }: { reference: string; url?: string }) {
  const isReddit = reference.toLowerCase().includes("reddit") || url?.includes("reddit.com");
  const isGoogleSheet = url?.includes("docs.google.com");

  if (!url) {
    return <span className="text-dim">-</span>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-void-lighter transition-colors group"
      title={reference}
    >
      {isReddit ? (
        <svg
          className="w-5 h-5 text-[#FF4500] group-hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ) : isGoogleSheet ? (
        <svg
          className="w-5 h-5 text-[#0F9D58] group-hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 11V9h-6V3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8zm-6 8H8v-2h5v2zm3-4H8v-2h8v2zm0-4H8V9h8v2zm-1-4V3.5L18.5 9H15z" />
        </svg>
      ) : (
        <svg
          className="w-4 h-4 text-dim group-hover:text-arc group-hover:scale-110 transition-all"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      )}
    </a>
  );
}

function TableRow({ data, index }: { data: Breakpoint; index: number }) {
  return (
    <tr
      className="table-row-hover border-b border-[var(--color-border)]/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${150 + index * 50}ms`, animationFillMode: "forwards" }}
    >
      <td className="py-4 px-4">
        <WeaponBadge weapon={data.weapon} />
      </td>
      <td className="py-4 px-4 font-semibold text-base">{data.frame}</td>
      <td className="py-4 px-4">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg text-arc font-bold tracking-wider">
            {data.weaponsStat}
          </span>
          {(() => {
            // Skip melee stats - different formula, needs research
            if (data.weaponsStat.toLowerCase().includes("melee")) {
              return null;
            }
            const statNum = parseInt(data.weaponsStat.replace(/[^0-9]/g, ""));
            if (!isNaN(statNum) && statNum >= 100) {
              const dmgPercent = calcDamagePercent(statNum);
              return (
                <span className="text-sm text-solar">
                  (+{formatDamagePercent(dmgPercent)})
                </span>
              );
            }
            return null;
          })()}
        </div>
      </td>
      <td className="py-4 px-4">
        <TTKChange baseTTK={data.baseTTK} newTTK={data.newTTK} statNote={data.statNote} />
      </td>
      <td className="py-4 px-4">
        <STKChange baseSTK={data.baseSTK} newSTK={data.newSTK} />
      </td>
      <td className="py-4 px-4">
        <PerkBadge perk={data.perksNeeded} />
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-1">
          <SourceIcon reference={data.reference} url={data.referenceUrl} />
          {data.additionalRefs?.map((ref, i) => (
            <SourceIcon key={i} reference={ref.name} url={ref.url} />
          ))}
        </div>
      </td>
    </tr>
  );
}

export default function BreakpointsTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn | null>("weaponsStat");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedBreakpoints = useMemo(() => {
    if (!sortColumn) return breakpoints;

    return [...breakpoints].sort((a, b) => {
      let aVal: string | number = a[sortColumn];
      let bVal: string | number = b[sortColumn];

      // Handle numeric columns
      if (sortColumn === "weaponsStat" || sortColumn === "baseTTK") {
        aVal = parseNumeric(aVal);
        bVal = parseNumeric(bVal);
      }

      let result: number;
      if (typeof aVal === "number" && typeof bVal === "number") {
        result = aVal - bVal;
      } else {
        result = String(aVal).localeCompare(String(bVal));
      }

      return sortDirection === "asc" ? result : -result;
    });
  }, [sortColumn, sortDirection]);

  return (
    <section id="breakpoints" className="relative scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6 opacity-0 animate-slide-in-left" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-arc animate-glow-pulse" />
          <h2 className="font-display text-2xl tracking-wider uppercase">
            TTK Breakpoints
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border)] to-transparent" />
        <span className="text-dim text-sm font-display tracking-widest">
          {breakpoints.length} ENTRIES
        </span>
        <a
          href="https://github.com/StoicalZebra/d2-ttk-cheatsheet/issues/new?title=New%20Breakpoint%20Submission&body=%23%23%20Breakpoint%20Details%0A%0A**Weapon%20Type%3A**%20%0A**Frame%3A**%20%0A**Weapons%20Stat%20Required%3A**%20%0A**Base%20TTK%3A**%20%0A**New%20TTK%3A**%20%0A**Shots%20to%20Kill%3A**%20%0A**Perk%20Required%3A**%20%0A%0A%23%23%20Verification%0A%0A**How%20did%20you%20verify%20this%3F**%20%0A%0A**Source%2FReference%3A**%20"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-arc/40 hover:border-arc bg-void-lighter hover:bg-void-light transition-all"
        >
          <svg className="w-4 h-4 text-arc" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-arc group-hover:text-[var(--color-text)] transition-colors">Submit New</span>
        </a>
      </div>

      {/* Subtitle */}
      <p className="text-dim mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "150ms", animationFillMode: "forwards" }}>
        Weapons stat thresholds that shift Time-to-Kill. Hit these breakpoints with non-kill-activated damage perks for faster optimal TTK.
      </p>
      <p className="text-dim text-sm mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
        <span className="text-solar">Disclaimer:</span> Just the highlights / popular breakpoints. See source data for all possible breakpoints.
      </p>

      {/* Table Container */}
      <div className="relative corner-accents bg-void-light/50 border border-[var(--color-border)] clip-angle-both overflow-hidden">
        {/* Decorative top bar */}
        <div className="h-1 bg-gradient-to-r from-arc via-arc/50 to-transparent" />

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-void-lighter/50">
                <SortableHeader column="weapon" label="Weapon" currentSort={sortColumn} direction={sortDirection} onSort={handleSort} />
                <SortableHeader column="frame" label="Frame (RPM)" currentSort={sortColumn} direction={sortDirection} onSort={handleSort} />
                <SortableHeader column="weaponsStat" label="Wpn Stat" currentSort={sortColumn} direction={sortDirection} onSort={handleSort}>
                  <span className="text-arc">Wpn Stat</span>
                </SortableHeader>
                <SortableHeader column="baseTTK" label="TTK Shift" currentSort={sortColumn} direction={sortDirection} onSort={handleSort} />
                <SortableHeader column="baseSTK" label="STK" currentSort={sortColumn} direction={sortDirection} onSort={handleSort} />
                <SortableHeader column="perksNeeded" label="Perk Required" currentSort={sortColumn} direction={sortDirection} onSort={handleSort} />
                <SortableHeader column="reference" label="Source" currentSort={sortColumn} direction={sortDirection} onSort={handleSort} />
              </tr>
            </thead>
            <tbody>
              {sortedBreakpoints.map((bp, index) => (
                <TableRow key={`${bp.weapon}-${bp.frame}-${bp.perksNeeded}`} data={bp} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Decorative bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-6 text-sm text-dim opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
        <div className="flex items-center gap-2">
          <span className="text-arc font-bold">TTK</span>
          <span>= Time to Kill</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-arc font-bold">STK</span>
          <span>= Shots to Kill</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-arc font-bold">h</span>
          <span>= headshots</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-arc font-bold">b</span>
          <span>= bodyshots</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-solar font-bold">-%</span>
          <span>= TTK reduction</span>
        </div>
      </div>
    </section>
  );
}
