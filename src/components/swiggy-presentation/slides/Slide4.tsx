"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
import { MapPin, User, Smartphone, Globe } from "lucide-react";

const screenshots = Array.from({ length: 9 }, (_, index) =>
  `/swiggy-delivery-partner/research/ecosystem-${String(index + 1).padStart(2, "0")}.jpeg`,
);

export function Slide4() {
  const { tokens: t } = useTheme();

  const modules = ["Home", "Earnings", "My Shifts", "Refer & Earn", "More", "Help & Support"];
  const learnings = [
    "The application functions as a unified operational platform, combining delivery execution, financial management, scheduling, support, and partner services.",
    "Business objectives such as earnings, incentives, referrals, compliance, and support are deeply integrated into the daily delivery workflow.",
    "Delivery partners interact with multiple operational systems within a single application throughout their workday.",
    "The product experience extends beyond order completion and supports the entire partner lifecycle—from onboarding and active deliveries to earnings and long-term engagement.",
  ];
  const context = [
    { icon: Smartphone, label: "Reference Product", value: "Swiggy Delivery Partner App (Instamart)" },
    { icon: User, label: "Reference User", value: "Active Delivery Executive" },
    { icon: Globe, label: "Research Method", value: "Contextual product walkthrough" },
    { icon: MapPin, label: "Operating Context", value: "Delhi NCR" },
  ];

  return (
    <SlideShell className="px-14 py-10">
      {/* Header */}
      <div className="mb-6 shrink-0">
        <SlideTag>Research · Phase 01</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Study Current Ecosystem
        </h2>
        <Divider />
        <p className="mt-2 text-sm" style={{ color: t.textMuted }}>
          Understanding the existing Delivery Partner ecosystem, its users, product responsibilities, and operational context before evaluating the experience.
        </p>
      </div>

      {/* Body: 3 columns */}
      <div className="flex-1 min-h-0 grid grid-cols-10 gap-5">

        {/* Col 1 — Context + Modules (3 cols) */}
        <div className="col-span-3 flex flex-col gap-3 overflow-auto">
          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: t.orange }}>Research Context</div>

          {context.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="rounded-xl p-3 flex gap-3 items-start shrink-0"
                style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
                <Icon size={14} style={{ color: t.orange }} className="shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs mb-0.5" style={{ color: t.textMuted }}>{c.label}</div>
                  <div className="text-xs font-medium" style={{ color: t.textPrimary }}>{c.value}</div>
                </div>
              </div>
            );
          })}

          <div className="rounded-xl p-3 shrink-0"
            style={{ background: t.isDark ? "rgba(252,128,25,0.05)" : "rgba(232,113,10,0.04)", border: `1px solid ${t.isDark ? "rgba(252,128,25,0.15)" : "rgba(232,113,10,0.2)"}` }}>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: t.orange }}>Core Modules</div>
            <div className="flex flex-wrap gap-1.5">
              {modules.map((m) => (
                <span key={m} className="px-2 py-1 rounded text-xs"
                  style={{ background: `${t.orange}15`, border: `1px solid ${t.orange}25`, color: t.textPrimary }}>{m}</span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-3 shrink-0"
            style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: t.orange }}>Primary Goal</div>
            <p className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>
              Complete deliveries efficiently while managing orders, earnings, shifts, incentives, and support.
            </p>
          </div>
        </div>

        {/* Col 2 — Key Learnings (3 cols) */}
        <div className="col-span-3 flex flex-col gap-3 overflow-auto">
          <div className="text-xs uppercase tracking-widest mb-1" style={{ color: t.orange }}>Key Learnings</div>
          {learnings.map((l, i) => (
            <div key={i} className="rounded-xl p-4 flex gap-3 shrink-0"
              style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: `${t.orange}20`, color: t.orange }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: t.textSecondary }}>{l}</p>
            </div>
          ))}
        </div>

        {/* Col 3 — Screenshot collage (4 cols) */}
        <div className="col-span-4 flex flex-col">
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: t.orange }}>
            App Screenshots — Contextual Walkthrough
          </div>
          {/* Masonry-style 3-column grid */}
          <div className="flex-1 columns-3 gap-2 overflow-hidden" style={{ columnGap: "8px" }}>
            {screenshots.map((src, i) => (
              <div key={i} className="mb-2 break-inside-avoid rounded-xl overflow-hidden"
                style={{ border: `1px solid ${t.cardBorder}`, boxShadow: t.isDark ? "0 2px 12px rgba(0,0,0,0.4)" : "0 2px 8px rgba(0,0,0,0.08)" }}>
                <img
                  src={src}
                  alt={`Swiggy app screenshot ${i + 1}`}
                  className="w-full block object-cover"
                  style={{ filter: t.isDark ? "brightness(0.9)" : "none" }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
