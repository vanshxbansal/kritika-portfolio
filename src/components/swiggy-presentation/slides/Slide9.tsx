"use client";

import { SlideShell, SlideTag, Divider, ScrollHint } from "../SlideShell";
import { useTheme } from "../ThemeContext";

export function Slide9() {
  const { tokens: t } = useTheme();

  const journey = [
    { stage: "Download & Register", goal: "Join the platform", pain: null, source: null },
    { stage: "Complete Profile", goal: "Provide personal details", pain: null, source: null },
    { stage: "Upload Documents", goal: "Complete verification", pain: "Verification/account activation issues reported by some users", source: "reviews" },
    { stage: "Configure Work Settings", goal: "Select vehicle and work preferences", pain: "Vehicle selection appears restrictive (locked for 30 days)", source: "screenshots" },
    { stage: "Receive Delivery Kit", goal: "Become ready for work", pain: null, source: null },
    { stage: "Complete Onboarding", goal: "Become eligible to deliver", pain: "Confusion around onboarding deductions/policies reported by users", source: "reviews" },
    { stage: "Go Online", goal: "Become available for orders", pain: "Home screen contains multiple competing banners, alerts and incentives, reducing focus on the primary task", source: "both" },
    { stage: "Wait for Orders", goal: "Receive delivery opportunities", pain: "Limited visibility into expected earning opportunity while waiting", source: "screenshots" },
    { stage: "Receive Order Request", goal: "Understand the delivery opportunity", pain: "Information required for decision-making is fragmented rather than consolidated", source: "both" },
    { stage: "Evaluate Order", goal: "Decide whether to accept", pain: "Drivers must mentally combine payout, incentives and distance before deciding", source: "heuristic" },
    { stage: "Accept Order", goal: "Start delivery", pain: null, source: null },
    { stage: "Navigate to Store", goal: "Reach pickup location", pain: null, source: null },
    { stage: "Wait at Store", goal: "Receive prepared order", pain: "Restaurant waiting time frequently reported with limited visibility or compensation", source: "reviews" },
    { stage: "Pickup Order", goal: "Collect order", pain: null, source: null },
    { stage: "Navigate to Customer", goal: "Reach customer efficiently", pain: null, source: null },
    { stage: "Complete Delivery", goal: "Successfully deliver order", pain: "Exception scenarios (wrong action/photo issues) may require additional support intervention", source: "reviews" },
    { stage: "Confirm Delivery", goal: "Close the delivery task", pain: "Photo capture/upload issues reported by users", source: "reviews" },
    { stage: "View Trip Earnings", goal: "Verify earnings for the completed order", pain: "Users perceive earnings calculation to be insufficiently transparent", source: "reviews" },
    { stage: "Track Daily/Weekly Earnings", goal: "Understand overall income", pain: "Earnings, bonuses, payouts and floating cash are distributed across multiple sections", source: "both" },
    { stage: "Track Incentives", goal: "Monitor bonus progress", pain: "Incentive rules and calculations are difficult to understand and among the most common complaints", source: "heuristic-reviews" },
    { stage: "Manage Floating Cash", goal: "Manage collected cash", pain: "Additional financial workflow competes with the primary delivery task", source: "screenshots" },
    { stage: "Manage Future Shifts", goal: "Plan future work", pain: "Shift planning and incentive information are disconnected", source: "both" },
    { stage: "Access Help & Support", goal: "Resolve operational issues", pain: "Ticket visibility and resolution progress are frequently criticized by users", source: "reviews" },
    { stage: "Resolve Technical Issues", goal: "Recover from app problems", pain: "App freezes, selfie upload failures and crashes are among the most common complaints", source: "reviews" },
    { stage: "End Duty", goal: "Finish the workday", pain: null, source: null },
  ];

  const srcBadge = (s: string | null) => {
    if (!s) return null;
    if (s === "reviews") return [{ text: "🗣 User Reviews", color: "#3B82F6" }];
    if (s === "screenshots") return [{ text: "📸 Screenshots", color: "#8B5CF6" }];
    if (s === "heuristic") return [{ text: "⭐ Heuristic Eval", color: "#F59E0B" }, { text: "🗣 User Reviews", color: "#3B82F6" }];
    if (s === "heuristic-reviews") return [{ text: "🗣 User Reviews", color: "#3B82F6" }, { text: "⭐ Heuristic Eval", color: "#F59E0B" }];
    // both = screenshots + heuristic
    return [{ text: "📸 Screenshots", color: "#8B5CF6" }, { text: "⭐ Heuristic Eval", color: "#F59E0B" }];
  };

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-5 shrink-0">
        <SlideTag>Research · Phase 05</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Current Operational Journey & Pain Points
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          Mapping the end-to-end workflow of a Delivery Partner and identifying evidence-backed friction points through product exploration, heuristic evaluation, and user feedback.
        </p>
      </div>

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto rounded-2xl" style={{ border: `1px solid ${t.cardBorder}` }}>
        {/* Table header */}
        <div className="grid grid-cols-12 px-5 py-3 sticky top-0 z-10"
          style={{ background: t.isDark ? "rgba(20,22,35,0.98)" : "rgba(240,242,250,0.98)", borderBottom: `1px solid ${t.cardBorder}` }}>
          <div className="col-span-3 text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Journey Stage</div>
          <div className="col-span-2 text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>User Goal</div>
          <div className="col-span-5 text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Pain Point</div>
          <div className="col-span-2 text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Evidence</div>
        </div>

        {/* Rows */}
        {journey.map((row, i) => {
          const badges = srcBadge(row.source);
          const hasPain = !!row.pain;
          return (
            <div key={i} className="grid grid-cols-12 px-5 py-3 items-start"
              style={{
                borderBottom: i < journey.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                background: hasPain
                  ? (t.isDark ? "rgba(239,68,68,0.03)" : "rgba(239,68,68,0.02)")
                  : (i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent"),
              }}>
              {/* Stage */}
              <div className="col-span-3 flex items-center gap-2 pr-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5"
                  style={{ background: hasPain ? "#EF4444" : t.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }} />
                <span className="text-xs font-medium" style={{ color: t.textPrimary }}>{row.stage}</span>
              </div>
              {/* Goal */}
              <div className="col-span-2 text-xs pr-4" style={{ color: t.textMuted }}>{row.goal}</div>
              {/* Pain */}
              <div className="col-span-5 text-xs leading-relaxed pr-4"
                style={{ color: hasPain ? t.textSecondary : t.textDark }}>
                {row.pain ?? "No major pain point identified"}
              </div>
              {/* Evidence */}
              <div className="col-span-2 flex flex-wrap gap-1">
                {badges ? badges.map((b) => (
                  <span key={b.text} className="text-xs px-1.5 py-0.5 rounded"
                    style={{ background: `${b.color}15`, color: b.color, border: `1px solid ${b.color}30`, whiteSpace: "nowrap", fontSize: "10px" }}>
                    {b.text}
                  </span>
                )) : <span style={{ color: t.textDark, fontSize: "11px" }}>—</span>}
              </div>
            </div>
          );
        })}
      </div>
      <ScrollHint label="Scroll to see all 25 journey stages" />

      {/* Key Observation */}
      <div className="mt-4 rounded-xl px-5 py-3 shrink-0 flex gap-3 items-start"
        style={{ background: t.isDark ? "rgba(252,128,25,0.07)" : "rgba(232,113,10,0.05)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.18)" : "rgba(232,113,10,0.22)"}` }}>
        <div className="w-1 rounded-full self-stretch shrink-0" style={{ background: t.orange }} />
        <p className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>
          <span className="font-semibold" style={{ color: t.orange }}>Key Observation — </span>
          The delivery workflow itself is relatively straightforward. Most friction originates from{" "}
          <span className="font-semibold" style={{ color: t.textPrimary }}>financial transparency</span>,{" "}
          <span className="font-semibold" style={{ color: t.textPrimary }}>incentive understanding</span>,{" "}
          <span className="font-semibold" style={{ color: t.textPrimary }}>operational exceptions</span>, and{" "}
          <span className="font-semibold" style={{ color: t.textPrimary }}>support resolution</span>,{" "}
          rather than from the core delivery process.
        </p>
      </div>
    </SlideShell>
  );
}
