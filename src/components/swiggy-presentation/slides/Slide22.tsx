"use client";

import { useTheme } from "../ThemeContext";
import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { ArrowDown, CheckCircle } from "lucide-react";

export function Slide22() {
  const { tokens: t } = useTheme();

  const table = [
    { objective: "Improve Delivery Partner Retention", contribution: "Better earnings visibility and goal clarity increase motivation", impact: "⬆️ Higher retention", color: "#10B981" },
    { objective: "Increase Order Acceptance", contribution: "Drivers can quickly evaluate earnings, distance, and incentive eligibility", impact: "⬆️ Higher acceptance rate", color: "#3B82F6" },
    { objective: "Increase Incentive Completion", contribution: "Progress tracking and milestone visibility encourage continued deliveries", impact: "⬆️ More incentive completion", color: "#F59E0B" },
    { objective: "Improve Operational Efficiency", contribution: "Task-first information architecture reduces unnecessary navigation", impact: "⬇️ Faster task completion time", color: "#FC8019" },
    { objective: "Reduce Support Dependency", contribution: "Transparent earnings and floating cash information reduce confusion", impact: "⬇️ Fewer support queries", color: "#EC4899" },
    { objective: "Increase Platform Engagement", contribution: "Unified financial experience encourages regular earnings and incentive checks", impact: "⬆️ Higher engagement", color: "#8B5CF6" },
  ];

  const userImpact = [
    "Better understanding of earnings",
    "Clear incentive progress",
    "Faster decision making",
    "Reduced mental calculations",
    "Greater confidence while working",
  ];

  const flow = [
    "Better Information Architecture",
    "Lower Cognitive Load",
    "Faster & Better Decisions",
    "Higher Order Acceptance",
    "More Completed Deliveries",
    "Improved Delivery Partner Satisfaction",
    "Higher Retention & Platform Efficiency",
  ];

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-6 shrink-0">
        <SlideTag>Outcomes</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Expected Business Impact
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          By improving financial transparency and reducing cognitive load, the redesign aims to create value for both delivery partners and the platform.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-10 gap-5">

        {/* Left: Impact table (6 cols) */}
        <div className="col-span-6 flex flex-col">
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ border: `1px solid ${t.cardBorder}` }}>
            {/* Header */}
            <div className="grid px-5 py-3"
              style={{
                gridTemplateColumns: "1.2fr 1.4fr 1fr",
                gap: "16px",
                background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                borderBottom: `1px solid ${t.cardBorder}`,
              }}>
              {["Business Objective", "How the Redesign Contributes", "Expected Impact"].map((h) => (
                <div key={h} className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>{h}</div>
              ))}
            </div>
            {table.map((r, i) => (
              <div key={r.objective} className="grid px-5 py-3 items-start"
                style={{
                  gridTemplateColumns: "1.1fr 1.3fr 1.1fr",
                  gap: "16px",
                  borderBottom: i < table.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                  background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent",
                }}>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ background: r.color }} />
                  <span className="text-xs font-semibold" style={{ color: t.textPrimary }}>{r.objective}</span>
                </div>
                <div className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>{r.contribution}</div>
                <div className="flex items-start pt-0.5">
                  <span className="text-xs px-2 py-1 rounded-lg leading-snug"
                    style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25`, display: "inline-block", wordBreak: "keep-all" }}>
                    {r.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Insight */}
          <div className="mt-4 rounded-xl px-5 py-4 shrink-0"
            style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: t.orange }} />
            <p className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>
              The redesign does not add new functionality — it improves how{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>existing information is surfaced</span>.
              By making critical information easier to understand and act upon, the platform can drive better delivery partner experience while improving{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>operational efficiency</span> and{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>long-term retention</span>.
            </p>
          </div>
        </div>

        {/* Right: User Impact + Business Flow (4 cols) */}
        <div className="col-span-4 flex flex-col gap-5">

          {/* User Impact */}
          <div className="rounded-2xl p-5"
            style={{ background: t.isDark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <div className="text-xs uppercase tracking-widest mb-4 text-green-500">User Impact</div>
            <div className="flex flex-col gap-2">
              {userImpact.map((u) => (
                <div key={u} className="flex items-center gap-2 rounded-lg px-3 py-2"
                  style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
                  <CheckCircle size={13} className="text-green-500 shrink-0" />
                  <span className="text-xs" style={{ color: t.textSecondary }}>{u}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact Flow */}
          <div className="flex-1 rounded-2xl p-5"
            style={{ background: t.isDark ? "rgba(252,128,25,0.05)" : "rgba(232,113,10,0.04)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.18)" : "rgba(232,113,10,0.22)"}` }}>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: t.orange }}>Business Impact Flow</div>
            <div className="flex flex-col items-center">
              {flow.map((f, i) => (
                <div key={f} className="flex flex-col items-center w-full">
                  <div className="w-full text-center rounded-xl px-3 py-2 text-xs font-medium"
                    style={{
                      background: i === flow.length - 1
                        ? t.orange
                        : t.card,
                      color: i === flow.length - 1 ? "#fff" : t.textPrimary,
                      border: i === flow.length - 1 ? "none" : `1px solid ${t.cardBorder}`,
                    }}>
                    {f}
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowDown size={12} className="my-1" style={{ color: `${t.orange}70` }} />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SlideShell>
  );
}
