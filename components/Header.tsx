"use client";

import ThemeToggle from "./ThemeToggle";
import { BREAKPOINTS_VERSION } from "@/data/breakpoints";

export default function Header() {
  return (
    <header className="relative pt-6 pb-8 mb-6 overflow-hidden">
      {/* Top right controls */}
      <div className="absolute top-6 right-4 flex flex-col items-end gap-2">
        <ThemeToggle />
        <div className="text-xs text-dim text-right">
          <span className="opacity-60">Current as of:</span>
          <br />
          <span className="font-medium">January 2026 (Renegades)</span>
        </div>
        <div className="text-xs text-dim opacity-60">
          Data v{BREAKPOINTS_VERSION}
        </div>
      </div>

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-arc) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-arc) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <line
            x1="0"
            y1="400"
            x2="400"
            y2="0"
            stroke="var(--color-arc)"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="400"
            x2="400"
            y2="50"
            stroke="var(--color-arc)"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="400"
            x2="400"
            y2="100"
            stroke="var(--color-arc)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-3 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
          <div className="w-8 h-px bg-arc" />
          <span className="text-sm font-display tracking-[0.3em] text-dim uppercase font-medium">
            Destiny 2 PVP
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-display text-5xl md:text-7xl tracking-wider uppercase mb-2 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: "forwards" }}>
          <span className="text-arc glow-text">TTK</span>{" "}
          <span className="text-[var(--color-text)]">Cheatsheet</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-[var(--color-text-dim)] font-medium tracking-wide opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
          Weapons Stat Breakpoints & Calculator
        </p>

        {/* Quick navigation */}
        <div className="mt-4 flex items-center gap-4 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
          <span className="text-xs text-dim font-display tracking-wider">JUMP TO:</span>
          <a
            href="#breakpoints"
            className="text-sm text-arc hover:text-solar transition-colors font-medium"
          >
            Breakpoints
          </a>
          <span className="text-dim">|</span>
          <a
            href="#ease-of-use"
            className="text-sm text-arc hover:text-solar transition-colors font-medium"
          >
            Ease of Use
          </a>
          <span className="text-dim">|</span>
          <a
            href="#calculator"
            className="text-sm text-arc hover:text-solar transition-colors font-medium"
          >
            Calculator
          </a>
          <span className="text-dim">|</span>
          <a
            href="#resources"
            className="text-sm text-arc hover:text-solar transition-colors font-medium"
          >
            Resources
          </a>
          <span className="text-dim">|</span>
          <a
            href="#sandbox-log"
            className="text-sm text-arc hover:text-solar transition-colors font-medium"
          >
            Sandbox Log
          </a>
        </div>

        {/* Decorative elements */}
        <div className="mt-4 flex items-center gap-6 opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
          {/* Stats indicator boxes */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-2 h-8 bg-arc"
                style={{
                  opacity: 1 - (i - 1) * 0.15,
                }}
              />
            ))}
          </div>

          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-arc to-transparent" />
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
    </header>
  );
}
