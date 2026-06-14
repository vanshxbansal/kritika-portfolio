"use client";

import { useTheme } from "../ThemeContext";
import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { FlowDiagram } from "../FlowDiagram";
import { ArrowDown } from "lucide-react";

export function SlideXT1() {
  const { tokens: t } = useTheme();

  const current = [
    { label: "Open App", type: "start" as const },
    { label: "Order Assignment", type: "action" as const },
    { label: "Promotional Banner", type: "pain" as const },
    { label: "Cash Deposit Alert", type: "pain" as const },
    { label: "Bonus Card", type: "pain" as const },
    { label: "Offers & Shortcuts", type: "pain" as const },
    { label: "Important Messages", type: "pain" as const },
    { label: "Scroll Further", type: "pain" as const },
    { label: "Find Today's Progress", type: "end" as const },
  ];

  const redesigned = [
    { label: "Open App", type: "start" as const },
    { label: "Today's Progress", type: "action" as const },
    { label: "Today's Earnings", type: "action" as const },
    { label: "Trips Completed", type: "action" as const },
    { label: "Incentive Status", type: "action" as const },
    { label: "Active Order", type: "action" as const },
    { label: "Secondary Content", type: "action" as const },
  ];

  const impact = ["Critical information available without scrolling", "Reduced visual search effort", "Better information hierarchy"];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-5 shrink-0">
        <SlideTag>Experience Transformation</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          🏠 Homepage Experience
        </h2>
        <Divider />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm" style={{ color: t.textMuted }}>
            Reimagining key driver journeys by addressing friction identified through product analysis and user feedback.
          </p>
          <span className="shrink-0 ml-4 text-xs px-3 py-1 rounded-full"
            style={{ background: "rgba(139,92,246,0.1)", color: "#8B5CF6", border: "1px solid rgba(139,92,246,0.25)" }}>
            Insight Source: Existing Application Analysis
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4">

        {/* Problem */}
        <div className="rounded-xl px-5 py-3 shrink-0" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <span className="text-xs font-semibold text-red-500 mr-2">Problem —</span>
          <span className="text-xs" style={{ color: t.textSecondary }}>
            Critical information such as <span className="font-semibold" style={{ color: t.textPrimary }}>Today's Progress, Earnings, and Trips</span> was buried below promotional content, requiring unnecessary scrolling.
          </span>
        </div>

        {/* Current flow */}
        <div className="shrink-0">
          <FlowDiagram nodes={current} color="#EF4444" label="Current Experience" />
        </div>

        {/* Transformation arrow */}
        <div className="flex items-center gap-3 shrink-0 px-2">
          <ArrowDown size={16} style={{ color: t.orange }} />
          <span className="text-xs font-semibold" style={{ color: t.orange }}>Redesigned</span>
          <div className="flex-1 h-px" style={{ background: `${t.orange}30` }} />
        </div>

        {/* Redesigned flow */}
        <div className="shrink-0">
          <FlowDiagram nodes={redesigned} color="#10B981" label="Redesigned Experience" />
        </div>

        {/* Impact */}
        <div className="flex gap-3 flex-wrap mt-auto shrink-0">
          {impact.map((imp) => (
            <div key={imp} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
              style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)", color: t.textSecondary }}>
              <span className="text-green-500">✓</span> {imp}
            </div>
          ))}
        </div>

      </div>
    </SlideShell>
  );
}
