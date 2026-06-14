"use client";

import { useTheme } from "../ThemeContext";
import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { FlowDiagram } from "../FlowDiagram";
import { ArrowDown } from "lucide-react";

export function SlideXT4() {
  const { tokens: t } = useTheme();

  const current = [
    { label: "Open Incentives", type: "start" as const },
    { label: "Read Multiple Conditions", type: "pain" as const },
    { label: "Calculate Trips Remaining", type: "pain" as const },
    { label: "Calculate Reward", type: "pain" as const },
    { label: "Understand Progress", type: "end" as const },
  ];

  const redesigned = [
    { label: "Open Incentives", type: "start" as const },
    { label: "Current Progress", type: "action" as const },
    { label: "Trips Remaining", type: "action" as const },
    { label: "Next Milestone", type: "action" as const },
    { label: "Potential Reward", type: "action" as const },
    { label: "Continue Deliveries", type: "end" as const },
  ];

  const impact = ["Eliminates mental calculations", "Makes progress instantly understandable", "Encourages continued engagement"];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-5 shrink-0">
        <SlideTag>Experience Transformation</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          🎯 Incentive Experience
        </h2>
        <Divider />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm" style={{ color: t.textMuted }}>
            Reimagining key driver journeys by addressing friction identified through product analysis and user feedback.
          </p>
          <span className="shrink-0 ml-4 text-xs px-3 py-1 rounded-full"
            style={{ background: "rgba(252,128,25,0.1)", color: "#FC8019", border: "1px solid rgba(252,128,25,0.25)" }}>
            Insight Source: Google Play Reviews
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4">

        <div className="rounded-xl px-5 py-3 shrink-0" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <span className="text-xs font-semibold text-red-500 mr-2">Problem —</span>
          <span className="text-xs" style={{ color: t.textSecondary }}>
            Drivers had to <span className="font-semibold" style={{ color: t.textPrimary }}>mentally calculate</span> remaining trips and potential rewards, making incentive tracking confusing and discouraging.
          </span>
        </div>

        <div className="shrink-0">
          <FlowDiagram nodes={current} color="#EF4444" label="Current Experience" />
        </div>

        <div className="flex items-center gap-3 shrink-0 px-2">
          <ArrowDown size={16} style={{ color: t.orange }} />
          <span className="text-xs font-semibold" style={{ color: t.orange }}>Redesigned</span>
          <div className="flex-1 h-px" style={{ background: `${t.orange}30` }} />
        </div>

        <div className="shrink-0">
          <FlowDiagram nodes={redesigned} color="#10B981" label="Redesigned Experience" />
        </div>

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
