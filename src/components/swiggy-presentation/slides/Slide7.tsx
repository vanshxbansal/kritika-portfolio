"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { MessageSquare } from "lucide-react";

export function Slide7() {
  const { tokens: t } = useTheme();

  const themes = [
    { icon: "💰", label: "Incentive & payout issues", level: "Very High", color: "#EF4444" },
    { icon: "🛠", label: "Support & ticket resolution", level: "Very High", color: "#EF4444" },
    { icon: "📱", label: "App crashes & technical bugs", level: "Very High", color: "#EF4444" },
    { icon: "🚚", label: "Operational workflow issues", level: "High", color: "#F97316" },
    { icon: "📍", label: "Distance & earnings transparency", level: "High", color: "#F97316" },
    { icon: "🗺️", label: "Maps & navigation issues", level: "Medium", color: "#EAB308" },
    { icon: "📸", label: "Photo/selfie upload issues", level: "Medium", color: "#EAB308" },
  ];

  const positives = ["Flexible working hours", "Easy onboarding", "Weekly payouts", "Insurance benefits", "Wide delivery network"];

  const quotes = [
    '"They show incentives, but after completing the target, we don\'t receive them."',
    '"The app freezes during selfie upload and I have to restart it."',
    '"Support keeps disconnecting calls and tickets never get resolved."',
  ];

  const sources = ["Google Play Store", "Reddit", "Public Forums", "Chrome Stats"];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6 shrink-0">
        <SlideTag>Research · Phase 03</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Driver Reviews & Feedback Analysis
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          Analyzing 100+ public delivery partner reviews to identify recurring themes and validate research assumptions.
        </p>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-10 gap-5">

        {/* Left col — Sources + Positive Feedback (3 cols) */}
        <div className="col-span-3 flex flex-col gap-4 h-full">
          {/* Sources */}
          <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>Sources Reviewed</div>
            <div className="flex flex-col gap-2">
              {sources.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.orange }} />
                  <span className="text-sm" style={{ color: t.textSecondary }}>{s}</span>
                </div>
              ))}
            </div>
            <div className="mt-1 px-4 py-3 rounded-xl text-center" style={{ background: `${t.orange}15`, border: `1px solid ${t.orange}25` }}>
              <div className="text-2xl font-bold" style={{ color: t.textPrimary }}>100+</div>
              <div className="text-xs mt-0.5" style={{ color: t.orange }}>Reviews Analyzed</div>
            </div>
          </div>

          {/* Positive feedback — flex-1 so it stretches to fill remaining height */}
          <div className="rounded-2xl p-5 flex flex-col gap-3 flex-1" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest text-green-500">Positive Feedback</div>
            <div className="flex flex-col gap-2 flex-1 justify-evenly">
              {positives.map((p) => (
                <div key={p} className="flex items-center gap-2 rounded-lg px-3 py-2"
                  style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
                  <span className="text-green-500 text-xs">✓</span>
                  <span className="text-sm" style={{ color: t.textSecondary }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center col — Recurring Themes (4 cols) */}
        <div className="col-span-4 flex flex-col gap-4 h-full">
          <div className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>Recurring Themes</div>

          {/* Theme table header */}
          <div className="grid grid-cols-5 px-4 py-2 rounded-lg shrink-0"
            style={{ background: t.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border: `1px solid ${t.cardBorder}` }}>
            <div className="col-span-4 text-xs uppercase tracking-wider" style={{ color: t.textMuted }}>Theme</div>
            <div className="text-xs uppercase tracking-wider text-right" style={{ color: t.textMuted }}>Frequency</div>
          </div>

          {/* Theme rows — flex-1 + justify-evenly so rows spread to full height */}
          <div className="flex flex-col flex-1 gap-2 justify-evenly">
            {themes.map((th) => (
              <div key={th.label} className="grid grid-cols-5 items-center rounded-xl px-4 py-3 flex-1"
                style={{ background: t.card, border: `1px solid ${t.cardBorderAlt}`, maxHeight: "52px" }}>
                <div className="col-span-4 flex items-center gap-3">
                  <span className="text-base leading-none">{th.icon}</span>
                  <span className="text-sm" style={{ color: t.textPrimary }}>{th.label}</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${th.color}18`, color: th.color, border: `1px solid ${th.color}35` }}>
                    {th.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col — Voice of User + Key Observation (3 cols) */}
        <div className="col-span-3 flex flex-col gap-4 h-full">
          {/* Quotes — flex-1 so it fills remaining height */}
          <div className="rounded-2xl p-5 flex flex-col gap-3 flex-1"
            style={{ background: t.isDark ? "rgba(252,128,25,0.05)" : "rgba(232,113,10,0.04)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.15)" : "rgba(232,113,10,0.2)"}` }}>
            <div className="flex items-center gap-2">
              <MessageSquare size={14} style={{ color: t.orange }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>Voice of the User</span>
            </div>
            <div className="flex flex-col gap-2 flex-1 justify-evenly">
              {quotes.map((q, i) => (
                <div key={i} className="rounded-xl px-4 py-3 flex-1 flex items-center" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
                  <p className="text-xs italic leading-relaxed" style={{ color: t.textSecondary }}>{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Observation */}
          <div className="rounded-2xl p-5 shrink-0" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: t.orange }}>Key Observation</div>
            <p className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>
              The majority of complaints are not about missing features but about{" "}
              <span className="font-semibold" style={{ color: t.textPrimary }}>trust, reliability, transparency,</span>{" "}
              and <span className="font-semibold" style={{ color: t.textPrimary }}>operational efficiency.</span>
            </p>
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
