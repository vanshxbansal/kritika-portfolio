"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { ArrowDown } from "lucide-react";

export function Slide11() {
  const { tokens: t } = useTheme();

  const areas = [
    { area: "Financial Experience", opps: "O15, O16, O17, O18, O19", color: "#FC8019", count: 5 },
    { area: "Information Architecture", opps: "O4, O5, O6, O7", color: "#3B82F6", count: 4 },
    { area: "Order Decision Experience", opps: "O8, O9, O10, O11, O12", color: "#10B981", count: 5 },
    { area: "Incentive Experience", opps: "O27, O28, O29, O30", color: "#F59E0B", count: 4 },
    { area: "Operational Workflow", opps: "O13, O14, O31, O32", color: "#8B5CF6", count: 4 },
    { area: "Support Experience", opps: "O34, O35, O36", color: "#EC4899", count: 3 },
    { area: "Exception Handling", opps: "O15, O17, O18, O20", color: "#06B6D4", count: 4 },
    { area: "Technical Reliability", opps: "O37, O38, O39, O40", color: "#EF4444", count: 4 },
    { area: "Communication & Workflow", opps: "O41, O42", color: "#84CC16", count: 2 },
    { area: "Workflow Integration", opps: "O43, O44", color: "#F97316", count: 2 },
    { area: "Onboarding Experience", opps: "O1, O2, O3", color: "#A78BFA", count: 3 },
    { area: "Benefits & Growth", opps: "O45", color: "#34D399", count: 1 },
  ];

  const exLeft = ["Improve earnings visibility", "Improve payout transparency", "Improve bonus visibility", "Improve floating cash understanding"];
  const exRight = ["Reduce dashboard clutter", "Improve visual hierarchy", "Prioritize alerts", "Improve CTA hierarchy"];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-5 shrink-0">
        <SlideTag>Synthesis · Phase 07</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Opportunity Areas
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          <span className="font-medium" style={{ color: t.textPrimary }}>Method Used: Affinity Mapping</span> — Instead of prioritizing opportunities, similar opportunities were clustered based on the underlying user need and business objective.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-10 gap-6">

        {/* Left: Examples */}
        <div className="col-span-3 flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: t.orange }}>Clustering Example</div>

          {/* Example 1 */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-full rounded-xl p-4 flex flex-col gap-2"
              style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
              {exLeft.map((e) => (
                <div key={e} className="text-xs py-1.5 px-3 rounded-lg" style={{ background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", color: t.textSecondary }}>{e}</div>
              ))}
            </div>
            <ArrowDown size={16} style={{ color: "#FC8019" }} />
            <div className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "#FC8019" }}>
              Financial Experience
            </div>
          </div>

          {/* Example 2 */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <div className="w-full rounded-xl p-4 flex flex-col gap-2"
              style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
              {exRight.map((e) => (
                <div key={e} className="text-xs py-1.5 px-3 rounded-lg" style={{ background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", color: t.textSecondary }}>{e}</div>
              ))}
            </div>
            <ArrowDown size={16} style={{ color: "#3B82F6" }} />
            <div className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "#3B82F6" }}>
              Information Architecture
            </div>
          </div>

          <p className="text-xs mt-auto pt-2" style={{ color: t.textDark, fontStyle: "italic" }}>
            * This is not prioritization — all areas are treated equally at this stage.
          </p>
        </div>

        {/* Right: Table */}
        <div className="col-span-7 flex flex-col">
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.orange }}>Expected Output — 12 Opportunity Areas</div>

          <div className="flex-1 rounded-2xl overflow-hidden" style={{ border: `1px solid ${t.cardBorder}` }}>
            {/* Header */}
            <div className="grid grid-cols-12 px-5 py-3"
              style={{ gridTemplateColumns: "1fr 2fr 2rem", background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", borderBottom: `1px solid ${t.cardBorder}` }}>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Opportunity Area</div>
              <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Opportunities Covered</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-right" style={{ color: t.textMuted }}>#</div>
            </div>

            {/* Rows */}
            {areas.map((a, i) => (
              <div key={a.area} className="grid px-5 py-2.5 items-center"
                style={{
                  gridTemplateColumns: "1fr 2fr 2rem",
                  borderBottom: i < areas.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                  background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent",
                }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: a.color }} />
                  <span className="text-sm font-medium" style={{ color: t.textPrimary }}>{a.area}</span>
                </div>
                <div className="text-xs font-mono" style={{ color: t.textMuted }}>{a.opps}</div>
                <div className="text-xs font-bold text-right" style={{ color: a.color }}>{a.count}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
