"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";

export function Slide14() {
  const { tokens: t } = useTheme();
  const areas = [
    { problem: "Financial Experience", color: "#FC8019", directions: ["Unified Earnings Dashboard", "Wallet-style Summary", "Timeline-based Earnings", "Bonus Progress Tracker", "Floating Cash Widget"] },
    { problem: "Order Decision Experience", color: "#10B981", directions: ["Smart Order Card", "Distance + Earnings Summary", "Estimated Time & Effort Card", "Profitability Score", "One-glance Decision Card"] },
    { problem: "Information Architecture", color: "#3B82F6", directions: ["Progressive Disclosure", "Context-aware Dashboard", "Priority-based Information Hierarchy", "Sticky Operational Card", "Simplified Home Screen"] },
  ];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-8">
        <SlideTag>Design · Phase 10</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>Solution Exploration</h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>Multiple solution directions were explored for each prioritized problem before selecting the final redesign approach.</p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        {areas.map((a) => (
          <div key={a.problem} className="flex flex-col gap-4">
            <div className="rounded-xl px-4 py-3" style={{ background: `${a.color}15`, border: `1px solid ${a.color}30` }}>
              <div className="text-sm font-semibold" style={{ color: t.textPrimary }}>{a.problem}</div>
            </div>
            <div className="flex flex-col gap-2">
              {a.directions.map((d, i) => (
                <div key={d} className="rounded-xl p-4 flex items-center gap-3" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: `${a.color}20`, color: a.color }}>{i + 1}</div>
                  <span className="text-sm" style={{ color: t.textSecondary }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
        <div className="text-2xl font-bold" style={{ color: t.orange }}>15</div>
        <div>
          <div className="text-sm font-medium" style={{ color: t.textPrimary }}>Solution directions explored</div>
          <div className="text-xs" style={{ color: t.textMuted }}>Each evaluated against user value, business value, and implementation complexity</div>
        </div>
      </div>
    </SlideShell>
  );
}
