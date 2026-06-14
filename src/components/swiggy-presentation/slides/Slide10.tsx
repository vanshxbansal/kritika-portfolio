"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { ExternalLink } from "lucide-react";

const opportunities = [
  { id: "O01", module: "Onboarding", journey: "Complete Onboarding", observation: "Onboarding deductions and policies are unclear", opportunity: "Improve onboarding transparency", whyItMatters: "Reduces confusion before first delivery", evidence: "User Reviews", area: "Onboarding" },
  { id: "O02", module: "Onboarding", journey: "Upload Documents", observation: "Verification and activation issues reported", opportunity: "Simplify document verification flow", whyItMatters: "Reduces drop-off before activation", evidence: "User Reviews", area: "Onboarding" },
  { id: "O03", module: "Onboarding", journey: "Configure Work Settings", observation: "Vehicle selection locked for 30 days", opportunity: "Increase work setting flexibility", whyItMatters: "Support partners with changing needs", evidence: "Screenshots", area: "Onboarding" },
  { id: "O04", module: "Home", journey: "Go Online", observation: "Multiple banners compete for attention on Home screen", opportunity: "Reduce dashboard clutter", whyItMatters: "Improves focus on primary delivery task", evidence: "Screenshots", area: "Information Architecture" },
  { id: "O05", module: "Home", journey: "Go Online", observation: "Operational tasks not prioritised over promotions", opportunity: "Prioritize task-critical content", whyItMatters: "Faster scan of what needs attention", evidence: "Heuristic Evaluation", area: "Information Architecture" },
  { id: "O06", module: "Home", journey: "Go Online", observation: "Weak visual hierarchy makes key actions hard to find", opportunity: "Improve visual hierarchy and layout", whyItMatters: "Reduces cognitive load during active work", evidence: "Screenshots", area: "Information Architecture" },
  { id: "O07", module: "Home", journey: "Go Online", observation: "Critical alerts buried among secondary content", opportunity: "Differentiate alert types by priority", whyItMatters: "Prevents missed urgent actions", evidence: "Screenshots", area: "Information Architecture" },
  { id: "O08", module: "Orders", journey: "Wait for Orders", observation: "Limited earning visibility while waiting", opportunity: "Show earning opportunity during wait", whyItMatters: "Better expectation setting for partners", evidence: "Screenshots", area: "Order Decision" },
  { id: "O09", module: "Orders", journey: "Receive Order Request", observation: "Info fragmented across order request screen", opportunity: "Consolidate order decision information", whyItMatters: "Faster and more confident order decisions", evidence: "Screenshots", area: "Order Decision" },
  { id: "O10", module: "Orders", journey: "Evaluate Order", observation: "Earnings shown separately from incentives and distance", opportunity: "Show pre-acceptance earnings summary", whyItMatters: "Reduces mental effort to evaluate order", evidence: "Reviews + Screenshots", area: "Order Decision" },
];

const areaColors: Record<string, string> = {
  "Onboarding": "#A78BFA",
  "Information Architecture": "#3B82F6",
  "Order Decision": "#10B981",
};

export function Slide10() {
  const { tokens: t } = useTheme();

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-5 shrink-0">
        <SlideTag>Synthesis · Phase 06</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Opportunity Identification
        </h2>
        <Divider />
      </div>

      {/* Method */}
      <div className="mb-5 shrink-0 rounded-xl px-5 py-4 flex gap-4 items-start"
        style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
        <div className="shrink-0">
          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: t.orange }}>Method Used</div>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>
          Individual observations from <span className="font-medium" style={{ color: t.textPrimary }}>product exploration</span>,{" "}
          <span className="font-medium" style={{ color: t.textPrimary }}>user reviews</span>,{" "}
          <span className="font-medium" style={{ color: t.textPrimary }}>heuristic evaluation</span>,{" "}
          <span className="font-medium" style={{ color: t.textPrimary }}>competitive analysis</span> and{" "}
          <span className="font-medium" style={{ color: t.textPrimary }}>journey mapping</span> were extracted as independent improvement opportunities. No prioritization was performed at this stage.
        </p>
      </div>

      {/* Table */}
      <div className="flex-1 min-h-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${t.cardBorder}` }}>
        {/* Header */}
        <div className="grid px-5 py-3 shrink-0"
          style={{
            gridTemplateColumns: "3rem 6rem 1fr 1fr 1fr 5rem 7rem",
            gap: "12px",
            background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
            borderBottom: `1px solid ${t.cardBorder}`,
          }}>
          {["#", "Module", "Observation", "Opportunity", "Why it Matters", "Evidence", "Area"].map((h) => (
            <div key={h} className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>{h}</div>
          ))}
        </div>

        {/* Rows */}
        <div className="overflow-auto">
          {opportunities.map((o, i) => {
            const color = areaColors[o.area] ?? "#8B90A4";
            return (
              <div key={o.id} className="grid px-5 py-3 items-start"
                style={{
                  gridTemplateColumns: "3rem 6rem 1fr 1fr 1fr 5rem 7rem",
                  gap: "12px",
                  borderBottom: i < opportunities.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                  background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent",
                }}>
                <div className="text-xs font-mono font-bold" style={{ color: t.orange }}>{o.id}</div>
                <div className="text-xs px-2 py-1 rounded-full w-fit" style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>{o.module}</div>
                <div className="text-xs leading-relaxed" style={{ color: t.textMuted }}>{o.observation}</div>
                <div className="text-xs leading-relaxed font-medium" style={{ color: t.textPrimary }}>{o.opportunity}</div>
                <div className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>{o.whyItMatters}</div>
                <div className="text-xs" style={{ color: t.textMuted }}>{o.evidence}</div>
                <div className="text-xs px-2 py-1 rounded-full w-fit" style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>{o.area}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* +35 more */}
      <div className="mt-3 shrink-0">
        <a
          href="https://docs.google.com/spreadsheets/d/1yuYbzvRD4F2yh_pQGKtV6cPGMaaTgNRoFYboe3GjlnY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: "transparent",
            color: t.orange,
            border: `1px solid ${t.isDark ? "rgba(252,128,25,0.25)" : "rgba(232,113,10,0.3)"}`,
            textDecoration: "none",
          }}>
          <ExternalLink size={13} />
          + 41 more opportunity statements
        </a>
      </div>

    </SlideShell>
  );
}
