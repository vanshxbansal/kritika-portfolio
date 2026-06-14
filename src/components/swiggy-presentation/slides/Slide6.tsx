"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { TrendingUp, AlertTriangle } from "lucide-react";

export function Slide6() {
  const { tokens: t } = useTheme();

  const platforms = [
    { name: "Swiggy", color: "#FC8019", strengths: "Reliable operations, offline support", weaknesses: "Limited earnings visibility, fragmented incentives" },
    { name: "Uber Driver", color: "#1a1a1a", strengths: "Excellent earnings transparency, strong visual hierarchy", weaknesses: "Car-centric workflow" },
    { name: "Porter Partner", color: "#3B82F6", strengths: "Transparent operations, flexible workflow", weaknesses: "Limited trip visibility" },
    { name: "Amazon Flex", color: "#F59E0B", strengths: "Guided task execution, structured delivery flow", weaknesses: "Less flexible scheduling" },
  ];

  const findings = [
    { num: "01", text: "Leading platforms prioritize task execution over secondary information." },
    { num: "02", text: "The strongest experiences provide greater earnings transparency and clear visual hierarchy." },
    { num: "03", text: "Operational information is surfaced contextually, reducing cognitive load." },
    { num: "04", text: "Successful delivery products are optimized for on-the-move interactions, where speed and glanceability are critical." },
  ];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6 shrink-0">
        <SlideTag>Research · Phase 02</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Key Observations
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          Summarizing the major findings from the competitive benchmarking exercise.
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-5 min-h-0">

        {/* Observations Table */}
        <div className="rounded-2xl overflow-hidden shrink-0" style={{ border: `1px solid ${t.cardBorder}` }}>
          {/* Table header */}
          <div className="grid grid-cols-3 px-5 py-3" style={{ background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", borderBottom: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: t.textMuted }}>Platform</div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-green-500">
              <TrendingUp size={12} /> Strengths
            </div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-red-400">
              <AlertTriangle size={12} /> Weaknesses
            </div>
          </div>

          {/* Table rows */}
          {platforms.map((p, i) => (
            <div key={p.name}
              className="grid grid-cols-3 px-5 py-4 items-center"
              style={{ borderBottom: i < platforms.length - 1 ? `1px solid ${t.cardBorder}` : "none", background: i % 2 === 0 ? "transparent" : t.isDark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)" }}>
              {/* Platform */}
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color }} />
                <span className="text-sm font-semibold" style={{ color: t.textPrimary }}>{p.name}</span>
              </div>
              {/* Strengths */}
              <div className="pr-6">
                <span className="text-sm" style={{ color: t.textSecondary }}>{p.strengths}</span>
              </div>
              {/* Weaknesses */}
              <div>
                <span className="text-sm" style={{ color: t.textSecondary }}>{p.weaknesses}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <div>
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.orange }}>Key Findings</div>
          <div className="grid grid-cols-2 gap-3">
            {findings.map((f) => (
              <div key={f.num} className="rounded-xl px-5 py-4 flex gap-4 items-start"
                style={{ background: t.isDark ? "rgba(252,128,25,0.05)" : "rgba(232,113,10,0.04)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.12)" : "rgba(232,113,10,0.18)"}` }}>
                <span className="text-sm font-black shrink-0" style={{ color: t.orange }}>{f.num}</span>
                <p className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
