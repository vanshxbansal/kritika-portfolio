"use client";

import { SlideShell, SlideTag, Divider, ScrollHint } from "../SlideShell";
import { useTheme } from "../ThemeContext";

export function Slide8() {
  const { tokens: t } = useTheme();

  const findings = [
    { heuristic: "Visibility of System Status", observation: "Critical operational information competes with promotional and secondary content, reducing information hierarchy and scannability.", severity: "High" },
    { heuristic: "Match Between System & Real World", observation: "Earnings, bonuses, payouts, and floating cash are distributed across multiple screens, requiring users to construct their own mental model.", severity: "High" },
    { heuristic: "Consistency & Standards", observation: "Similar concepts such as Offers, Maxx Bonus, Live Offers, and Incentives use inconsistent terminology and presentation patterns.", severity: "High" },
    { heuristic: "Recognition Rather Than Recall", observation: "Incentive rules, eligibility criteria, and operational conditions are spread across multiple screens, increasing reliance on memory.", severity: "High" },
    { heuristic: "Aesthetic & Minimalist Design", observation: "High information density on the Home screen makes it difficult to distinguish mission-critical actions from secondary content.", severity: "High" },
    { heuristic: "Help & Documentation", observation: "Support resources are comprehensive, but limited visibility into ticket status and recovery reduces user confidence.", severity: "Medium" },
  ];

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-6 shrink-0">
        <SlideTag>Research · Phase 04</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Heuristic Evaluation
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          The Delivery Partner application was evaluated using Nielsen's 10 Usability Heuristics to systematically identify usability issues across critical delivery workflows including Home, Earnings, Shifts, Support, and Onboarding.
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4">

        {/* Heuristic table — fixed height so at least 4 rows are visible */}
        <div className="rounded-2xl overflow-auto" style={{ border: `1px solid ${t.cardBorder}`, minHeight: "260px", maxHeight: "320px" }}>
          {/* Table header */}
          <div className="grid grid-cols-10 px-5 py-3"
            style={{ background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", borderBottom: `1px solid ${t.cardBorder}` }}>
            <div className="col-span-3 text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Heuristic Violated</div>
            <div className="col-span-6 text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Key Observation</div>
            <div className="col-span-1 text-xs uppercase tracking-wider font-semibold text-right" style={{ color: t.textMuted }}>Severity</div>
          </div>

          {/* Rows */}
          {findings.map((f, i) => (
            <div key={i} className="grid grid-cols-10 px-5 py-3 items-start"
              style={{
                borderBottom: i < findings.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)") : "transparent",
              }}>
              <div className="col-span-3 text-xs font-semibold pr-4" style={{ color: t.textPrimary }}>{f.heuristic}</div>
              <div className="col-span-6 text-xs leading-relaxed pr-4" style={{ color: t.textSecondary }}>{f.observation}</div>
              <div className="col-span-1 flex justify-end">
                <span className="text-xs px-2 py-1 rounded" style={{
                  background: f.severity === "High" ? "rgba(239,68,68,0.12)" : "rgba(249,115,22,0.12)",
                  color: f.severity === "High" ? "#EF4444" : "#F97316",
                  border: `1px solid ${f.severity === "High" ? "rgba(239,68,68,0.3)" : "rgba(249,115,22,0.3)"}`,
                  whiteSpace: "nowrap",
                }}>
                  {f.severity === "High" ? "🔴" : "🟠"} {f.severity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <ScrollHint label="Scroll table to see all heuristics" />

        {/* Bottom two cards */}
        <div className="grid grid-cols-2 gap-5 shrink-0">

          {/* Severity Formula */}
          <div className="rounded-2xl p-5"
            style={{ background: t.isDark ? "rgba(252,128,25,0.05)" : "rgba(232,113,10,0.04)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.15)" : "rgba(232,113,10,0.2)"}` }}>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.orange }}>Severity Formula</div>
            <div className="font-mono text-sm font-semibold mb-4 px-4 py-2.5 rounded-lg" style={{ background: t.inlineCode, color: t.textPrimary }}>
              Severity ≈ Frequency × Impact × Recoverability
            </div>
            <div className="flex flex-col gap-2">
              {[
                { dot: "#EF4444", label: "High", desc: "Frequent issue with significant impact on primary tasks and difficult recovery" },
                { dot: "#F97316", label: "Medium", desc: "Moderate impact or recoverable with additional effort" },
                { dot: "#22C55E", label: "Low", desc: "Minor usability issue with limited operational impact" },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: s.dot }} />
                  <span className="text-xs" style={{ color: t.textSecondary }}>
                    <span className="font-semibold" style={{ color: t.textPrimary }}>{s.label} —</span> {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Finding */}
          <div className="rounded-2xl p-5"
            style={{ background: t.isDark ? "rgba(239,68,68,0.05)" : "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.18)" }}>
            <div className="text-xs uppercase tracking-widest mb-3 text-red-400">Overall Finding</div>
            <p className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>
              The application is operationally capable but{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>information-heavy</span>, resulting in increased{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>cognitive load</span>,{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>fragmented information architecture</span>, and reduced{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>task efficiency</span> during active deliveries. These observations will be synthesized with competitive analysis and user feedback in the next phase to identify core problem areas.
            </p>
          </div>

        </div>
      </div>
    </SlideShell>
  );
}
