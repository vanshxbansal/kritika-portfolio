"use client";

import { useTheme } from "../ThemeContext";

const riderImg = "/swiggy-delivery-partner/hero.png";

export function Slide1() {
  const { tokens: t } = useTheme();

  return (
    <div className="w-full h-full flex overflow-hidden transition-colors duration-300" style={{ background: t.bg }}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(${t.isDark ? "rgba(252,128,25,0.5)" : "rgba(232,113,10,0.3)"} 1px, transparent 1px), linear-gradient(90deg, ${t.isDark ? "rgba(252,128,25,0.5)" : "rgba(232,113,10,0.3)"} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-14 py-12 relative z-10">
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border w-fit"
          style={{ borderColor: t.tagBorder, background: t.tagBg }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: t.orange }} />
          <span className="text-sm tracking-widest uppercase" style={{ color: t.orange }}>Product Design Case Study</span>
        </div>

        <h1 className="mb-4 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.15, color: t.textPrimary }}>
          Redesigning the<br />
          <span style={{ color: t.orange }}>Swiggy Delivery</span><br />
          <span style={{ color: t.orange }}>Partner</span> Experience
        </h1>

        <p className="mb-10 max-w-md" style={{ color: t.textMuted, fontSize: "clamp(0.85rem, 1.3vw, 1rem)" }}>
          Simplifying the delivery experience through research, prioritization, and thoughtful product design.
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-lg">
          {[
            { label: "Reference Product", value: "Swiggy Delivery Partner App" },
            { label: "Duration", value: "3 Days" },
            { label: "Role", value: "Product Designer" },
            { label: "Focus", value: "UX Research • Product Thinking • Interaction Design" },
          ].map((item) => (
            <div key={item.label} className="px-4 py-3 rounded-xl"
              style={{ background: t.card, border: `1px solid ${t.cardBorder}` }}>
              <div className="text-xs mb-1 uppercase tracking-widest" style={{ color: t.textMuted }}>{item.label}</div>
              <div className="text-sm" style={{ color: t.textPrimary }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: rider image */}
      <div className="relative w-72 xl:w-96 shrink-0 overflow-hidden">
        {/* Orange gradient overlay on left edge to blend with bg */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${t.bg}, transparent)` }} />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${t.bg}, transparent)` }} />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${t.bg}, transparent)` }} />

        <img
          src={riderImg}
          alt="Swiggy delivery partner riding scooter"
          className="w-full h-full object-cover object-center"
          style={{ filter: t.isDark ? "brightness(0.85) saturate(1.1)" : "brightness(0.95) saturate(1.05)" }}
        />

        {/* Orange accent glow behind rider */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 60% 50%, ${t.orange}18 0%, transparent 65%)` }} />
      </div>
    </div>
  );
}
