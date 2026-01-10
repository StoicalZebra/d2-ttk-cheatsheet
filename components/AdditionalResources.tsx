"use client";

const resources = [
  {
    title: "Era's Weapon Stat Calculator",
    url: "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=615915333#gid=615915333",
    notes: "More comprehensive TTK shift + ease-of-use list",
    type: "googleSheet" as const,
  },
  {
    title: "Destiny 2 PVP Weapons Stat TTK Breakpoints v1.2",
    url: "https://docs.google.com/spreadsheets/d/1cofx24Yjy_gou82e6qmSVJ7VgCnqPPgj79E4peC3XvM/edit?gid=0#gid=0",
    notes: "Original TTK breakpoints spreadsheet",
    type: "googleSheet" as const,
  },
  {
    title: "Destiny WeaponStat Chart v1.15",
    url: "https://docs.google.com/spreadsheets/d/1FWMC-Vd_bGEoRkkrn3drWIORCFYyWQVMNlMasa4OE6I/edit?gid=1692216024#gid=1692216024",
    notes: "Comprehensive weapon stat data",
    type: "googleSheet" as const,
  },
  {
    title: "r/CrucibleGuidebook - Weapon Stats Breaking Points",
    url: "https://www.reddit.com/r/CrucibleGuidebook/comments/1ptr0fj/are_there_any_popular_weapon_stats_breaking/",
    notes: "Community discussion on popular breakpoints",
    type: "reddit" as const,
  },
  {
    title: "r/CrucibleGuidebook - TTK Breakpoints Cheatsheet",
    url: "https://www.reddit.com/r/CrucibleGuidebook/comments/1q8vze1/ttk_breakpoints_cheatsheet_weapons_stat/",
    notes: "Glaive melee breakpoints discussion",
    type: "reddit" as const,
  },
  {
    title: "Destiny 2 Glaive Compendium",
    url: "https://docs.google.com/spreadsheets/d/1FT-BL6UA6ntNEN7_btqwlfJaPYTAeIFvlhpkvWHTajc/edit?gid=303507057#gid=303507057",
    notes: "Base damage values for weapons and melees",
    type: "googleSheet" as const,
  },
];

function ResourceIcon({ type }: { type: "googleSheet" | "reddit" | "link" }) {
  if (type === "googleSheet") {
    return (
      <svg
        className="w-5 h-5 text-[#0F9D58] group-hover:scale-110 transition-transform flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 11V9h-6V3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8zm-6 8H8v-2h5v2zm3-4H8v-2h8v2zm0-4H8V9h8v2zm-1-4V3.5L18.5 9H15z" />
      </svg>
    );
  }
  if (type === "reddit") {
    return (
      <svg
        className="w-5 h-5 text-[#FF4500] group-hover:scale-110 transition-transform flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    );
  }
  return null;
}

export default function AdditionalResources() {
  return (
    <section id="resources" className="relative scroll-mt-6">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-stasis animate-glow-pulse" />
          <h2 className="font-display text-2xl tracking-wider uppercase">
            Resources
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border)] to-transparent" />
      </div>

      {/* Resources List */}
      <div className="space-y-3">
        {resources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-4 bg-void-light/50 border border-[var(--color-border)] hover:border-stasis/40 transition-colors"
          >
            <ResourceIcon type={resource.type} />
            <div className="flex-1 min-w-0">
              <div className="text-base font-medium text-[var(--color-text)] group-hover:text-stasis transition-colors">
                {resource.title}
              </div>
              <div className="text-sm text-dim mt-1">{resource.notes}</div>
            </div>
            <svg
              className="w-5 h-5 text-dim group-hover:text-stasis transition-colors flex-shrink-0 mt-0.5"
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
    </section>
  );
}
