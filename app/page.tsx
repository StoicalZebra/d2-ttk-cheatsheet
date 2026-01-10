import Header from "@/components/Header";
import BreakpointsTable from "@/components/BreakpointsTable";
import WeaponsStatCalculator from "@/components/WeaponsStatCalculator";
import AdditionalResources from "@/components/AdditionalResources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background gradient accents */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top-left arc glow */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-arc) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-right solar glow */}
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, var(--color-solar) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-12">
        <Header />

        <div className="space-y-16">
          <BreakpointsTable />
          <WeaponsStatCalculator />
          <AdditionalResources />
        </div>

        <Footer />
      </main>

      {/* Side decorative elements */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-2 p-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-12 bg-[var(--color-border)]"
              style={{ opacity: 0.3 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
