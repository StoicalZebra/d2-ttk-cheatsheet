"use client";

import { useState } from "react";
import {
  calcDamagePercent,
  calcRequiredStat,
  formatDamagePercent,
  formatWeaponsStat,
  referenceTable,
} from "@/lib/calculator";

type CalculatorMode = "statToDamage" | "damageToStat";

function ModeToggle({
  mode,
  setMode,
}: {
  mode: CalculatorMode;
  setMode: (mode: CalculatorMode) => void;
}) {
  return (
    <div className="flex bg-void-lighter border border-[var(--color-border)] p-1 gap-1">
      <button
        onClick={() => setMode("statToDamage")}
        className={`flex-1 px-4 py-2 text-sm font-display tracking-wide transition-all ${
          mode === "statToDamage"
            ? "bg-arc/20 text-arc border border-arc/30"
            : "text-dim hover:text-[var(--color-text)] border border-transparent"
        }`}
      >
        STAT → DMG%
      </button>
      <button
        onClick={() => setMode("damageToStat")}
        className={`flex-1 px-4 py-2 text-sm font-display tracking-wide transition-all ${
          mode === "damageToStat"
            ? "bg-arc/20 text-arc border border-arc/30"
            : "text-dim hover:text-[var(--color-text)] border border-transparent"
        }`}
      >
        DMG% → STAT
      </button>
    </div>
  );
}

function StatToDamageCalculator() {
  const [weaponsStat, setWeaponsStat] = useState(100);
  const damagePercent = calcDamagePercent(weaponsStat);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-display tracking-widest text-dim uppercase mb-2">
          Weapons Stat
        </label>
        <div className="relative">
          <input
            type="number"
            min={100}
            max={200}
            value={weaponsStat}
            onChange={(e) => setWeaponsStat(Number(e.target.value))}
            className="w-full bg-void-lighter border border-[var(--color-border)] px-4 py-3 text-2xl font-display text-arc tracking-wider focus:border-arc transition-colors"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-dim text-sm">
            / 200
          </div>
        </div>
        {/* Slider */}
        <input
          type="range"
          min={100}
          max={200}
          value={weaponsStat}
          onChange={(e) => setWeaponsStat(Number(e.target.value))}
          className="w-full mt-3 accent-[var(--color-arc)] cursor-pointer"
        />
        <div className="flex justify-between text-xs text-dim mt-1">
          <span>100</span>
          <span>150</span>
          <span>200</span>
        </div>
      </div>

      {/* Result */}
      <div className="relative bg-void border border-[var(--color-border)] p-6 clip-angle-br">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-arc to-arc/0" />
        <div className="text-xs font-display tracking-widest text-dim uppercase mb-2">
          Damage Increase
        </div>
        <div className="font-display text-5xl text-arc glow-text tracking-wider">
          {formatDamagePercent(damagePercent)}
        </div>
        <div className="mt-2 text-sm text-dim">
          Base damage multiplied by{" "}
          <span className="text-[var(--color-text)]">
            {(1 + damagePercent).toFixed(4)}×
          </span>
        </div>
      </div>
    </div>
  );
}

function DamageToStatCalculator() {
  const [targetDamage, setTargetDamage] = useState(5);
  const requiredStat = calcRequiredStat(targetDamage / 100);
  const isAchievable = requiredStat <= 200;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-display tracking-widest text-dim uppercase mb-2">
          Target Damage %
        </label>
        <div className="relative">
          <input
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={targetDamage}
            onChange={(e) => setTargetDamage(Number(e.target.value))}
            className="w-full bg-void-lighter border border-[var(--color-border)] px-4 py-3 text-2xl font-display text-solar tracking-wider focus:border-solar transition-colors"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-dim text-sm">
            %
          </div>
        </div>
        {/* Slider */}
        <input
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={targetDamage}
          onChange={(e) => setTargetDamage(Number(e.target.value))}
          className="w-full mt-3 accent-[var(--color-solar)] cursor-pointer"
        />
        <div className="flex justify-between text-xs text-dim mt-1">
          <span>0%</span>
          <span>5%</span>
          <span>10%</span>
        </div>
      </div>

      {/* Result */}
      <div
        className={`relative bg-void border p-6 clip-angle-br ${isAchievable ? "border-[var(--color-border)]" : "border-red-500/50"}`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${isAchievable ? "from-solar to-solar/0" : "from-red-500 to-red-500/0"}`}
        />
        <div className="text-xs font-display tracking-widest text-dim uppercase mb-2">
          Required Weapons Stat
        </div>
        <div
          className={`font-display text-5xl tracking-wider ${isAchievable ? "text-solar glow-text" : "text-red-400"}`}
        >
          {isAchievable ? formatWeaponsStat(requiredStat) : ">200"}
        </div>
        {!isAchievable && (
          <div className="mt-2 text-sm text-red-400">
            Exceeds maximum achievable weapons stat (200)
          </div>
        )}
        {isAchievable && (
          <div className="mt-2 text-sm text-dim">
            Rounded to nearest integer:{" "}
            <span className="text-[var(--color-text)]">
              {Math.ceil(requiredStat)}
            </span>{" "}
            minimum
          </div>
        )}
      </div>
    </div>
  );
}

function ReferenceTable() {
  return (
    <div className="mt-8">
      <div className="text-xs font-display tracking-widest text-dim uppercase mb-3">
        Quick Reference
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-center text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="py-2 px-3 text-dim font-normal">Stat</th>
              {referenceTable.map((row) => (
                <th
                  key={row.stat}
                  className="py-2 px-3 font-display text-arc font-normal"
                >
                  {row.stat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 text-dim">Dmg%</td>
              {referenceTable.map((row) => (
                <td key={row.stat} className="py-2 px-3 text-solar">
                  {(row.damagePercent * 100).toFixed(1)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function WeaponsStatCalculator() {
  const [mode, setMode] = useState<CalculatorMode>("statToDamage");

  return (
    <section id="calculator" className="relative scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-solar animate-glow-pulse" />
          <h2 className="font-display text-2xl tracking-wider uppercase">
            Weapon Stat Calculator
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border)] to-transparent" />
      </div>

      {/* Formula explanation */}
      <div className="flex items-center gap-3 text-dim text-sm mb-6">
        <span>
          Formula: <span className="text-arc font-mono">D = (W - 100) × 0.06%</span> where D = damage increase, W = weapons stat
        </span>
        <a
          href="https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=948935720#gid=948935720"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#0F9D58] hover:text-[#34d399] transition-colors group"
          title="View source spreadsheet"
        >
          <svg
            className="w-4 h-4 group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 11V9h-6V3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8zm-6 8H8v-2h5v2zm3-4H8v-2h8v2zm0-4H8V9h8v2zm-1-4V3.5L18.5 9H15z" />
          </svg>
          <span className="text-xs font-medium">Source</span>
        </a>
      </div>

      {/* Calculator Panel */}
      <div className="corner-accents bg-void-light/50 border border-[var(--color-border)] p-6 clip-angle-both animate-border-glow">
        <ModeToggle mode={mode} setMode={setMode} />

        <div className="mt-6">
          {mode === "statToDamage" ? (
            <StatToDamageCalculator />
          ) : (
            <DamageToStatCalculator />
          )}
        </div>

        <ReferenceTable />
      </div>
    </section>
  );
}
