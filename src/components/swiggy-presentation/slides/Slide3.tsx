"use client";

import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { useTheme } from "../ThemeContext";
const designApproachImg = "/swiggy-delivery-partner/design-approach.png";

export function Slide3() {
  const { tokens: t } = useTheme();

  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6">
        <SlideTag>Process</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>
          Design Approach
        </h2>
        <Divider />
        <p className="mt-3 text-sm" style={{ color: t.textMuted }}>
          A research-driven and iterative process focused on solving the right problems before designing solutions.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${t.cardBorder}`, boxShadow: t.isDark ? "0 8px 40px rgba(0,0,0,0.4)" : "0 8px 40px rgba(0,0,0,0.08)" }}>
          <img
            src={designApproachImg}
            alt="Design approach: Understand, Research, Define, Ideate, Design, Measure"
            className="w-full h-full object-contain"
            style={{ filter: t.isDark ? "brightness(0.92)" : "none", display: "block" }}
          />
        </div>
      </div>
    </SlideShell>
  );
}
