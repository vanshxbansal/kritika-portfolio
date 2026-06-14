"use client";

import { SlideShell, SlideTag, Divider, ScrollHint } from "../SlideShell";
import { useTheme } from "../ThemeContext";

export function Slide5() {
  const { tokens: t } = useTheme();
  const headers = ["Feature Dimension", "Swiggy", "Zomato", "Uber Driver", "Porter", "Amazon Flex", "DoorDash"];
  const rows = [
    ["Navigation Structure", "Bottom nav", "Bottom nav", "Map + tabs", "Simple nav", "Offers + toggle", "Map + nav"],
    ["Home Dashboard", "Order + map + earnings", "Order card + map", "Live map + earnings", "Request + tracker", "Block offers + toggle", "Map + orders"],
    ["Order Management", "3-state flow", "Similar + alerts", "Trip card overlay", "Request + distance", "Step-by-step", "Single-order focus"],
    ["Earnings Visibility", "Daily + last order", "Similar", "Real-time daily/weekly", "Real-time + wallet", "Pre-block estimate", "Per-order + daily"],
    ["Incentive Communication", "Banner + push", "Similar", "Integrated in earnings", "Weekly + referral", "Quest progress", "Quest tracking"],
    ["Shift Management", "Login/logout toggle", "Similar", "Go online/offline", "No forced shifts", "Block scheduling", "Flexible toggle"],
    ["Help & Support", "Chat + call + 24/7", "Similar", "In-app + phone", "24/7 chat/call", "On-road support", "Chat + help center"],
    ["Pre-acceptance Info", "Limited info", "Limited", "Full trip details", "Distance only", "Full block estimate", "Per-order estimate"],
  ];
  const colColors = ["#FC8019", "#EC4899", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6">
        <SlideTag>Research · Phase 02</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: t.textPrimary }}>Competitive Analysis</h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>Benchmarking leading delivery partner platforms to understand industry patterns and evaluate the current experience.</p>
      </div>

      {/* Competitor Landscape */}
      <div className="mb-5 grid grid-cols-2 gap-4 shrink-0">
        <div className="rounded-xl p-4" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.orange }}>Direct Competitors</div>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Swiggy Delivery Partner", note: "Baseline", color: "#FC8019" },
              { name: "Uber Driver", color: "#000000" },
              { name: "Zomato Delivery Partner", color: "#E23744" },
              { name: "Porter Partner", color: "#3B82F6" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                style={{ background: `${c.color}12`, border: `1px solid ${c.color}30`, color: t.textPrimary }}>
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
                {c.name}
                {c.note && <span className="ml-1 opacity-50">({c.note})</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-4" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.textMuted }}>Adjacent Competitors</div>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Amazon Flex", color: "#F59E0B" },
              { name: "DoorDash", color: "#EF4444" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                style={{ background: `${c.color}12`, border: `1px solid ${c.color}30`, color: t.textPrimary }}>
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={h} className="text-left py-3 px-4 text-xs uppercase tracking-wider"
                  style={{
                    borderBottom: `1px solid ${t.cardBorder}`,
                    color: i === 0 ? t.textMuted : colColors[i - 1],
                    background: i === 0 ? "transparent" : `${colColors[i - 1]}10`,
                  }}>
                  {h}{i === 1 && <span className="ml-1 text-xs opacity-50">(Baseline)</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: `1px solid ${t.tableRowBorder}` }}>
                {row.map((cell, ci) => (
                  <td key={ci} className="py-2.5 px-4 text-xs leading-relaxed"
                    style={{
                      color: ci === 0 ? t.textMuted : ci === 1 ? t.textPrimary : t.textDimmer,
                      fontWeight: ci === 1 ? 500 : 400,
                      background: ri % 2 === 0 && ci > 0 ? t.tableRowAlt : undefined,
                    }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollHint label="Scroll table to see all feature comparisons" />
    </SlideShell>
  );
}
