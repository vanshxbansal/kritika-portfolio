"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";

const criteria = [
  { icon: "👤", label: "User Value", desc: "Improves delivery partner experience" },
  { icon: "💼", label: "Business Value", desc: "Supports retention, efficiency or earnings transparency" },
  { icon: "⚙️", label: "Implementation Complexity", desc: "Estimated design & engineering effort" },
  { icon: "🎯", label: "Decision", desc: "Selected / Deferred / Rejected" },
];

const groups = [
  {
    label: "Financial Experience",
    color: "#FC8019",
    rows: [
      { dir: "Unified Earnings Dashboard", user: 5, biz: 4, complex: 3, decision: "selected" },
      { dir: "Wallet-style Summary",        user: 3, biz: 3, complex: 2, decision: "deferred" },
      { dir: "Timeline-based Earnings",     user: 3, biz: 2, complex: 2, decision: "deferred" },
      { dir: "Bonus Progress Tracker",      user: 4, biz: 4, complex: 2, decision: "selected" },
      { dir: "Floating Cash Widget",        user: 4, biz: 4, complex: 2, decision: "selected" },
    ],
  },
  {
    label: "Order Decision Experience",
    color: "#10B981",
    rows: [
      { dir: "Smart Order Card",              user: 5, biz: 4, complex: 2, decision: "selected" },
      { dir: "Distance + Earnings Summary",   user: 5, biz: 4, complex: 2, decision: "selected" },
      { dir: "Estimated Time & Effort Card",  user: 4, biz: 3, complex: 2, decision: "selected" },
      { dir: "Profitability Score",           user: 3, biz: 3, complex: 3, decision: "deferred" },
      { dir: "AI Recommendation Engine",      user: 4, biz: 3, complex: 5, decision: "rejected" },
    ],
  },
  {
    label: "Information Architecture",
    color: "#3B82F6",
    rows: [
      { dir: "Progressive Disclosure",    user: 5, biz: 4, complex: 2, decision: "selected" },
      { dir: "Priority-based Dashboard",  user: 5, biz: 4, complex: 2, decision: "selected" },
      { dir: "Sticky Operational Card",   user: 4, biz: 4, complex: 2, decision: "selected" },
      { dir: "Adaptive Homepage",         user: 3, biz: 3, complex: 4, decision: "deferred" },
      { dir: "Personalized Dashboard",    user: 3, biz: 2, complex: 4, decision: "rejected" },
    ],
  },
];

type Decision = "selected" | "deferred" | "rejected";

const decisionStyle: Record<Decision, { bg: string; color: string; label: string }> = {
  selected: { bg: "rgba(16,185,129,0.12)", color: "#10B981",  label: "✅ Selected" },
  deferred: { bg: "rgba(107,114,128,0.12)", color: "#9CA3AF", label: "❌ Deferred" },
  rejected: { bg: "rgba(239,68,68,0.10)",  color: "#EF4444",  label: "❌ Rejected" },
};

function Stars({ n, color }: { n: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-2.5 h-2.5 rounded-sm"
          style={{ background: i < n ? color : "rgba(128,128,128,0.18)" }} />
      ))}
    </div>
  );
}

export function Slide15() {
  const { tokens: t } = useTheme();

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-5 shrink-0">
        <SlideTag>Design · Phase 11</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Solution Evaluation & Final Direction
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          Each solution direction was evaluated based on expected user value, business value, implementation complexity, and alignment with the MVP scope.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-10 gap-5">

        {/* Left: Evaluation Criteria */}
        <div className="col-span-3 flex flex-col gap-3">
          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: t.orange }}>Evaluation Criteria</div>
          {criteria.map((c) => (
            <div key={c.label} className="rounded-xl p-4 flex gap-3 items-start"
              style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
              <span className="text-lg leading-none shrink-0">{c.icon}</span>
              <div>
                <div className="text-xs font-semibold mb-1" style={{ color: t.textPrimary }}>{c.label}</div>
                <div className="text-xs leading-relaxed" style={{ color: t.textMuted }}>{c.desc}</div>
              </div>
            </div>
          ))}

          {/* Bottom insight */}
          <div className="mt-auto rounded-xl p-4"
            style={{ background: t.isDark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <div className="text-xs font-semibold mb-2" style={{ color: "#10B981" }}>Final Solution Strategy</div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: t.textMuted }}>
              After evaluating 15 solution directions, the redesign focuses on:
            </p>
            {["Unified Financial Experience", "Smarter Order Decision Support", "Simplified & Contextual Information Architecture"].map((s) => (
              <div key={s} className="flex items-start gap-2 mb-1.5">
                <span className="text-green-500 text-xs shrink-0">✅</span>
                <span className="text-xs" style={{ color: t.textSecondary }}>{s}</span>
              </div>
            ))}
            <p className="text-xs mt-3 leading-relaxed" style={{ color: t.textDark }}>
              Only solutions that delivered high user value with reasonable implementation effort were carried forward.
            </p>
          </div>
        </div>

        {/* Right: Three tables */}
        <div className="col-span-7 flex flex-col gap-4 overflow-auto">
          {groups.map((g) => (
            <div key={g.label} className="rounded-2xl overflow-hidden shrink-0"
              style={{ border: `1px solid ${g.color}25` }}>
              {/* Group header */}
              <div className="px-5 py-2.5 flex items-center gap-2"
                style={{ background: `${g.color}12`, borderBottom: `1px solid ${g.color}20` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: g.color }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: g.color }}>{g.label}</span>
              </div>

              {/* Column headers */}
              <div className="grid px-5 py-2"
                style={{
                  gridTemplateColumns: "1fr 90px 90px 90px 100px",
                  gap: "8px",
                  background: t.isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                  borderBottom: `1px solid ${t.cardBorder}`,
                }}>
                <div className="text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>Solution Direction</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>User</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>Business</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>Complexity</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>Decision</div>
              </div>

              {/* Rows */}
              {g.rows.map((r, i) => {
                const ds = decisionStyle[r.decision as Decision];
                return (
                  <div key={r.dir} className="grid px-5 py-2.5 items-center"
                    style={{
                      gridTemplateColumns: "1fr 90px 90px 90px 100px",
                      gap: "8px",
                      borderBottom: i < g.rows.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                      background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent",
                    }}>
                    <div className="text-sm" style={{ color: t.textPrimary }}>{r.dir}</div>
                    <Stars n={r.user} color={g.color} />
                    <Stars n={r.biz} color={g.color} />
                    <Stars n={r.complex} color="#6B7280" />
                    <span className="text-xs px-2 py-1 rounded w-fit"
                      style={{ background: ds.bg, color: ds.color }}>{ds.label}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </SlideShell>
  );
}
