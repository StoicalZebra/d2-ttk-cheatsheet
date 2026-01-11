"use client";

import { BREAKPOINTS_VERSION } from "@/data/breakpoints";

export default function Footer() {
  return (
    <footer className="mt-20 pt-12 border-t border-[var(--color-border)]">
      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        <div className="text-xs text-dim">
          Data compiled from community spreadsheets. Not affiliated with Bungie.
        </div>

        <div className="flex items-center gap-4 text-xs text-dim">
          <span className="font-display tracking-wider">D2 TTK CHEATSHEET</span>
          <span>•</span>
          <span>v{BREAKPOINTS_VERSION}</span>
          <span>•</span>
          <span>2025</span>
        </div>
      </div>
    </footer>
  );
}
