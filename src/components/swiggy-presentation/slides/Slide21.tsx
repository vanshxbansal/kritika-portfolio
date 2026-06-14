"use client";

import { useTheme } from "../ThemeContext";
import { SlideShell, SlideTag, Divider } from "../SlideShell";

export function Slide21() {
  const { tokens: t } = useTheme();

  const metrics = [
    {
      area: "Simplified Information Architecture",
      behavior: "Drivers find operational information faster",
      metric: ["⬇️ Time to locate critical information"],
      color: "#3B82F6",
    },
    {
      area: "Unified Financial Experience",
      behavior: "Drivers understand earnings without navigating multiple screens",
      metric: ["⬇️ Average screens visited per financial task"],
      color: "#FC8019",
    },
    {
      area: "Bonus Progress Tracker",
      behavior: "Drivers actively complete incentive milestones",
      metric: ["⬆️ Incentive milestone completion rate"],
      color: "#F59E0B",
    },
    {
      area: "Smart Order Decision Support",
      behavior: "Drivers evaluate and accept orders faster",
      metric: ["⬆️ Order acceptance rate", "⬇️ Decision time per order"],
      color: "#10B981",
    },
    {
      area: "Floating Cash Visibility",
      behavior: "Drivers deposit before reaching the limit",
      metric: ["⬆️ Timely deposit completion rate"],
      color: "#EC4899",
    },
    {
      area: "Progressive Disclosure",
      behavior: "Drivers access details only when required",
      metric: ["⬇️ Cognitive load", "⬆️ Task completion efficiency"],
      color: "#8B5CF6",
    },
  ];

  const northStar = [
    "⬇️ Time to understand earnings",
    "⬇️ Time to evaluate an order",
    "⬆️ Incentive completion",
    "⬆️ Operational task completion",
  ];

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-6 shrink-0">
        <SlideTag>Outcomes</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Success Metrics
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          The success of the redesign will be evaluated by measuring whether the proposed solutions change the intended user behavior and improve operational efficiency.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-3 gap-5">

        {/* Left + Center: Metrics table (2 cols) */}
        <div className="col-span-2 flex flex-col">
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.orange }}>Success Metrics Framework</div>

          <div className="flex-1 rounded-2xl overflow-hidden" style={{ border: `1px solid ${t.cardBorder}` }}>
            {/* Header */}
            <div className="grid px-5 py-3"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                borderBottom: `1px solid ${t.cardBorder}`,
              }}>
              {["Solution Area", "Desired Behavior", "Success Metric"].map((h) => (
                <div key={h} className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>{h}</div>
              ))}
            </div>

            {/* Rows */}
            {metrics.map((m, i) => (
              <div key={m.area} className="grid px-5 py-3 items-start"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "16px",
                  borderBottom: i < metrics.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                  background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent",
                }}>
                {/* Area */}
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ background: m.color }} />
                  <span className="text-xs font-semibold" style={{ color: t.textPrimary }}>{m.area}</span>
                </div>
                {/* Behavior */}
                <div className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>{m.behavior}</div>
                {/* Metric */}
                <div className="flex flex-col gap-1">
                  {m.metric.map((mx) => (
                    <span key={mx} className="text-xs px-2 py-1 rounded-lg w-fit"
                      style={{ background: `${m.color}12`, color: m.color, border: `1px solid ${m.color}25` }}>
                      {mx}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: North Star + Bottom Insight */}
        <div className="flex flex-col gap-5">
          {/* North Star */}
          <div className="flex-1 rounded-2xl p-6 flex flex-col"
            style={{ background: t.isDark ? "rgba(252,128,25,0.06)" : "rgba(232,113,10,0.05)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.2)" : "rgba(232,113,10,0.25)"}` }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">⭐</span>
              <div className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>North Star Metric</div>
            </div>
            <div className="text-base font-bold mb-4" style={{ color: t.textPrimary }}>
              Delivery Partner Task Efficiency
            </div>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.textMuted }}>Measured through</div>
            <div className="flex flex-col gap-2 flex-1 justify-evenly">
              {northStar.map((n) => (
                <div key={n} className="flex items-center gap-3 rounded-xl px-4 py-2.5"
                  style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
                  <span className="text-sm">{n.slice(0, 2)}</span>
                  <span className="text-xs" style={{ color: t.textSecondary }}>{n.slice(3)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Insight */}
          <div className="rounded-2xl p-5 shrink-0"
            style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: t.orange }} />
            <p className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>
              Every metric is derived from the intended{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>behavioral change</span>{" "}
              created by the redesign, ensuring that success is measured by{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>improved user outcomes</span>{" "}
              rather than feature adoption alone.
            </p>
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
