"use client";

const resources = [
  {
    title: "Era's Weapon Stat Calculator",
    url: "https://docs.google.com/spreadsheets/d/1yhuVRHML0c_753grr7E8Mhg-rkLtCh8suNB3pmlIAfU/edit?gid=615915333#gid=615915333",
    notes: "More comprehensive TTK shift + ease-of-use list",
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
            Additional Resources
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
