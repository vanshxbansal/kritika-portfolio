"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { ArrowRight } from "lucide-react";

export function Slide16() {
  const { tokens: t } = useTheme();
  const ia = {
    principles: ["Task-first navigation", "Frequently used actions surfaced first", "Financial information grouped together", "Operational information prioritized over promotions"],
    structure: [
      { label: "Home", items: ["Active Order Card", "Earnings Summary", "Incentive Progress"], primary: true },
      { label: "Earnings", items: ["Unified Dashboard", "Bonus Tracker", "Floating Cash"], primary: false },
      { label: "Shifts", items: ["Work Schedule", "Earnings Forecast", "Incentive Link"], primary: false },
      { label: "More", items: ["Support", "Profile", "Settings"], primary: false },
    ],
  };
  const flow = [
    { step: "Go Online", detail: "Task-first home screen, no clutter" },
    { step: "View Earnings", detail: "Consolidated at a glance" },
    { step: "Receive Order", detail: "Smart decision card with all info" },
    { step: "Accept / Skip", detail: "One-tap with full context" },
    { step: "Complete Delivery", detail: "Streamlined exception handling" },
    { step: "Track Progress", detail: "Incentives & bonuses unified" },
  ];
  const principles = [
    { num: "01", title: "Increase Financial Transparency", desc: "Consolidating earnings, incentives, and floating cash information into unified views." },
    { num: "02", title: "Reduce Cognitive Load", desc: "Simplifying information hierarchy and surfacing only task-relevant information at the right moment." },
    { num: "03", title: "Enable Faster Decisions", desc: "Streamlined order evaluation and delivery workflow through progressive disclosure." },
  ];

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6">
        <SlideTag>Design · Phase 12</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>Solution Blueprint</h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>Translating prioritized problems into a simplified product structure and optimized delivery workflow.</p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest" style={{ color: t.orange }}>Redesigned Information Architecture</div>
          <div className="rounded-xl p-4" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.textMuted }}>IA Principles</div>
            {ia.principles.map((p) => (
              <div key={p} className="flex items-start gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: t.orange }} />
                <span className="text-xs" style={{ color: t.textSecondary }}>{p}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            {ia.structure.map((s) => (
              <div key={s.label} className="rounded-xl p-3"
                style={{ background: s.primary ? `${t.orange}10` : t.card, border: s.primary ? `1px solid ${t.orange}30` : `1px solid ${t.cardBorder}` }}>
                <div className="text-xs font-semibold mb-2" style={{ color: s.primary ? t.orange : t.textPrimary }}>{s.label}</div>
                {s.items.map((item) => <div key={item} className="text-xs mb-1" style={{ color: t.textMuted }}>· {item}</div>)}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest text-green-600">Optimized Task Flow</div>
          <div className="flex flex-col gap-2">
            {flow.map((f, i) => (
              <div key={f.step}>
                <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white" style={{ background: "#10B981" }}>{i + 1}</div>
                  <div>
                    <div className="text-xs font-medium" style={{ color: t.textPrimary }}>{f.step}</div>
                    <div className="text-xs" style={{ color: t.textMuted }}>{f.detail}</div>
                  </div>
                </div>
                {i < flow.length - 1 && <div className="ml-4 w-0.5 h-2 my-0.5" style={{ background: "rgba(16,185,129,0.3)" }} />}
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3 mt-auto" style={{ background: t.isDark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}>
            {["Fewer decision points", "Better visibility of earnings", "Reduced cognitive load"].map((i) => (
              <div key={i} className="flex items-center gap-2 text-xs mb-1 text-green-600"><span>✅</span><span>{i}</span></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest text-blue-500">Solution Strategy</div>
          {principles.map((p) => (
            <div key={p.num} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: t.isDark ? "rgba(59,130,246,0.05)" : "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.15)" }}>
              <div className="flex items-center gap-3">
                <div className="text-lg font-black text-blue-500">{p.num}</div>
                <div className="text-sm font-semibold leading-snug" style={{ color: t.textPrimary }}>{p.title}</div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: t.textMuted }}>{p.desc}</p>
            </div>
          ))}
          <div className="mt-auto rounded-xl p-4" style={{ background: t.isDark ? `${t.orange}0A` : `${t.orange}08`, border: `1px solid ${t.orange}30` }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ background: t.orange }} />
              <span className="text-xs font-medium" style={{ color: t.textPrimary }}>Next Steps</span>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: t.textSecondary }}>
              <span>High-fidelity UI designs</span>
              <ArrowRight size={10} style={{ color: t.orange }} />
              <span>Prototype & test</span>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
