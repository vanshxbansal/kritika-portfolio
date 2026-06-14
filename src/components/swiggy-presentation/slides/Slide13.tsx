"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";

export function Slide13() {
  const { tokens: t } = useTheme();
  const table = [
    { problem: "Financial Experience", impact: "Very High", effort: "Medium", decision: "MVP", dc: "#10B981" },
    { problem: "Order Decision Experience", impact: "Very High", effort: "Low", decision: "MVP", dc: "#10B981" },
    { problem: "Information Architecture", impact: "High", effort: "Low", decision: "MVP", dc: "#10B981" },
    { problem: "Incentive Experience", impact: "High", effort: "Medium", decision: "Phase 2", dc: "#F59E0B" },
    { problem: "Shift Planning", impact: "Medium", effort: "Low", decision: "Phase 2", dc: "#F59E0B" },
    { problem: "Communication & Workflow", impact: "High", effort: "High", decision: "Phase 2", dc: "#F59E0B" },
    { problem: "Support Experience", impact: "High", effort: "High", decision: "Phase 2", dc: "#F59E0B" },
    { problem: "Technical Reliability", impact: "Very High", effort: "Very High", decision: "Long-term", dc: "#3B82F6" },
    { problem: "Pickup Experience", impact: "Medium", effort: "Medium", decision: "Future", dc: "#6B7280" },
    { problem: "Delivery Experience", impact: "Medium", effort: "Medium", decision: "Future", dc: "#6B7280" },
    { problem: "Navigation & Task Efficiency", impact: "Low", effort: "Low", decision: "Future", dc: "#6B7280" },
    { problem: "Onboarding Experience", impact: "Low", effort: "Medium", decision: "Future", dc: "#6B7280" },
  ];
  const ic = (v: string) => v === "Very High" ? "#EF4444" : v === "High" ? "#F97316" : v === "Medium" ? "#EAB308" : "#6B7280";
  const ec = (v: string) => v === "Very High" ? "#EF4444" : v === "High" ? "#F97316" : v === "Medium" ? "#EAB308" : "#10B981";
  const mvp = [
    { title: "Financial Transparency", items: ["Unified earnings", "Bonus visibility", "Floating cash clarity"] },
    { title: "Order Decision Experience", items: ["Better pre-acceptance info", "Reduce mental calculations", "Faster decision making"] },
    { title: "Information Architecture", items: ["Prioritize operational tasks", "Reduce dashboard clutter", "Improve visual hierarchy"] },
  ];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6">
        <SlideTag>Prioritization · Phase 09</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>Prioritization & MVP Scope</h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>Problem statements evaluated using an Impact vs. Effort framework to determine the redesign scope.</p>
      </div>

      <div className="flex-1 grid grid-cols-5 gap-6">
        <div className="col-span-3 overflow-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: `1px solid ${t.cardBorder}` }}>
                {["Problem Statement", "Impact", "Effort", "Decision"].map((h) => (
                  <th key={h} className="text-left py-2 px-3 text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((r, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${t.tableRowBorder}` }}>
                  <td className="py-2.5 px-3 text-xs align-top" style={{ color: t.textPrimary }}>{r.problem}</td>
                  <td className="py-2.5 px-3 align-top"><span className="text-xs px-2 py-0.5 rounded" style={{ background: `${ic(r.impact)}15`, color: ic(r.impact) }}>{r.impact}</span></td>
                  <td className="py-2.5 px-3 align-top"><span className="text-xs px-2 py-0.5 rounded" style={{ background: `${ec(r.effort)}15`, color: ec(r.effort) }}>{r.effort}</span></td>
                  <td className="py-2.5 px-3 align-top"><span className="text-xs font-medium" style={{ color: r.dc }}>{r.decision === "MVP" ? "✅" : r.decision === "Phase 2" ? "🟡" : r.decision === "Long-term" ? "🔵" : "⬜"} {r.decision}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest mb-1 text-green-600">🎯 MVP Scope</div>
          {mvp.map((s) => (
            <div key={s.title} className="rounded-xl p-4" style={{ background: t.isDark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="text-sm font-medium mb-2" style={{ color: t.textPrimary }}>{s.title}</div>
              {s.items.map((item) => (
                <div key={item} className="flex items-center gap-2 mb-1">
                  <div className="w-1 h-1 rounded-full" style={{ background: "#10B981" }} />
                  <span className="text-xs" style={{ color: t.textSecondary }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
          <div className="rounded-xl p-4 mt-auto" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <p className="text-xs leading-relaxed" style={{ color: t.textMuted }}>The redesign intentionally focuses on a limited set of high-impact problems to maximize value while keeping scope feasible for an MVP.</p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
