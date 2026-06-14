"use client";

import { SlideShell, SlideTag, Divider, ScrollHint } from "../SlideShell";
import { useTheme } from "../ThemeContext";

export function Slide12() {
  const { tokens: t } = useTheme();

  const problems = [
    { area: "Onboarding Experience", color: "#A78BFA", statement: "Delivery partners may struggle to fully understand onboarding requirements, verification status, vehicle rules, and deductions, creating uncertainty before they start working." },
    { area: "Information Architecture", color: "#3B82F6", statement: "Delivery partners find it difficult to identify what needs immediate attention because operational tasks, promotions, incentives, shortcuts, and alerts compete for attention on key screens." },
    { area: "Order Decision Experience", color: "#10B981", statement: "Delivery partners do not get a consolidated view of earnings, distance, effort, and incentive eligibility before accepting an order, making order evaluation mentally effortful." },
    { area: "Navigation & Task Efficiency", color: "#06B6D4", statement: "Delivery partners may need to move across multiple sections to complete related tasks, increasing effort during active work." },
    { area: "Pickup Experience", color: "#F59E0B", statement: "Delivery partners face uncertainty during pickup when orders are delayed, unavailable, or require exception handling." },
    { area: "Delivery & Completion Experience", color: "#F97316", statement: "Delivery partners may face friction while completing deliveries when proof-of-delivery, wrong action, or exception flows require additional support." },
    { area: "Financial Experience", color: "#FC8019", statement: "Delivery partners struggle to understand their actual earnings because trip earnings, daily/weekly earnings, bonuses, payouts, and floating cash are spread across multiple screens." },
    { area: "Incentive Experience", color: "#EAB308", statement: "Delivery partners find it difficult to understand incentive rules, eligibility, and progress because incentive information is fragmented and inconsistently presented." },
    { area: "Shift Planning", color: "#8B5CF6", statement: "Delivery partners cannot easily connect shift planning with expected earnings and incentive opportunities, making work planning less efficient." },
    { area: "Support Experience", color: "#EC4899", statement: "Delivery partners lack confidence in issue resolution because ticket status, escalation path, and resolution progress are not clearly visible." },
    { area: "Technical Reliability", color: "#EF4444", statement: "Delivery partners experience work disruption when app freezes, selfie/photo uploads fail, maps do not load, or technical errors occur during active tasks." },
    { area: "Communication & Workflow Integration", color: "#84CC16", statement: "Delivery partners experience cognitive load because status updates, alerts, earnings, incentives, shifts, and support are not connected into one continuous operational workflow." },
  ];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-5 shrink-0">
        <SlideTag>Synthesis · Phase 08</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Problem Statements
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          Converting opportunity areas into clear, user-centered problem statements before prioritization.
        </p>
      </div>

      <div className="flex-1 min-h-0 rounded-2xl overflow-auto" style={{ border: `1px solid ${t.cardBorder}` }}>
        {/* Header */}
        <div className="grid px-5 py-3 sticky top-0 z-10"
          style={{
            gridTemplateColumns: "220px 1fr",
            gap: "24px",
            background: t.isDark ? "rgba(20,22,35,0.98)" : "rgba(240,242,250,0.98)",
            borderBottom: `1px solid ${t.cardBorder}`,
          }}>
          <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Opportunity Area</div>
          <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: t.textMuted }}>Problem Statement</div>
        </div>

        {/* Rows */}
        <div className="overflow-auto" style={{ maxHeight: "calc(100% - 44px)" }}>
          {problems.map((p, i) => (
            <div key={p.area} className="grid px-5 py-3 items-start"
              style={{
                gridTemplateColumns: "220px 1fr",
                gap: "24px",
                borderBottom: i < problems.length - 1 ? `1px solid ${t.cardBorder}` : "none",
                background: i % 2 !== 0 ? (t.isDark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.012)") : "transparent",
              }}>
              {/* Area pill */}
              <div className="flex items-center gap-2.5 pt-0.5">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color }} />
                <span className="text-xs font-semibold" style={{ color: p.color }}>{p.area}</span>
              </div>
              {/* Statement */}
              <p className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>{p.statement}</p>
            </div>
          ))}
        </div>
      </div>
      <ScrollHint label="Scroll to see all 12 problem statements" />
    </SlideShell>
  );
}
