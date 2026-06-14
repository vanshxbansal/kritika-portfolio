"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { CheckCircle, ArrowDown } from "lucide-react";

export function Slide2() {
  const { tokens: t } = useTheme();

  const deliverables = [
    "Research-backed insights",
    "Prioritized opportunities",
    "High-level user flows",
    "Proposed redesign",
    "Supporting UI designs",
  ];

  const objectives = [
    "Understand Existing Experience",
    "Identify Usability Challenges",
    "Prioritize High-Impact Problems",
    "Design a Simpler Workflow",
    "Improve Driver Experience",
  ];

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-8">
        <SlideTag>Challenge</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          The Challenge
        </h2>
        <Divider />
      </div>

      {/* Body: 3 columns */}
      <div className="flex-1 grid grid-cols-3 gap-6">

        {/* Col 1 — Context + Assignment stacked */}
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl p-6 flex flex-col gap-3"
            style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>Context</div>
            <p className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>
              Delivery partners rely on the application throughout every stage of a delivery—from accepting an order to completing it. Since every interaction directly influences speed and decision-making, the experience should be intuitive, efficient, and easy to navigate.
            </p>
          </div>

          <div className="rounded-2xl p-6 flex flex-col gap-3"
            style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>Assignment</div>
            <p className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>
              Redesign the driver application to make it easier to understand and use while demonstrating structured product thinking and design decision-making.
            </p>
          </div>
        </div>

        {/* Col 2 — Design Objective flow */}
        <div className="flex flex-col rounded-2xl p-6"
          style={{ background: t.isDark ? "rgba(252,128,25,0.05)" : "rgba(232,113,10,0.04)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.15)" : "rgba(232,113,10,0.2)"}` }}>
          <div className="text-xs uppercase tracking-widest mb-6" style={{ color: t.orange }}>Design Objective</div>
          <div className="flex-1 flex flex-col justify-center">
            {objectives.map((obj, i) => (
              <div key={obj} className="flex flex-col items-center">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: t.orange }}>
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium" style={{ color: t.textPrimary }}>{obj}</span>
                </div>
                {i < objectives.length - 1 && (
                  <div className="ml-3.5 my-1">
                    <ArrowDown size={14} style={{ color: `${t.orange}60` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Deliverables */}
        <div className="flex flex-col rounded-2xl p-6"
          style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
          <div className="text-xs uppercase tracking-widest mb-6" style={{ color: t.orange }}>Deliverables</div>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: t.isDark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}>
                <CheckCircle size={16} className="text-green-500 shrink-0" />
                <span className="text-sm" style={{ color: t.textSecondary }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
