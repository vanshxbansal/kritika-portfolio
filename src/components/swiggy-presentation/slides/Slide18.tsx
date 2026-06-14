"use client";

import { useTheme } from "../ThemeContext";
import { SlideShell, SlideTag, Divider } from "../SlideShell";
import { ExternalLink } from "lucide-react";
const designImg = "/swiggy-delivery-partner/solution/earnings-screen.png";

const PROTO_URL = "https://www.figma.com/proto/9pSDooxtyrNiyjt352rMiY/Swiggy-Rider-App-Redesign?node-id=33-700&t=xrzFa0YVOoXpum3P-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=33%3A944";

export function Slide18() {
  const { tokens: t } = useTheme();
  return (
    <SlideShell className="px-14 py-10">
      <div className="mb-6 shrink-0">
        <SlideTag>Design</SlideTag>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: t.textPrimary }}>Earnings Screen</h2>
        <Divider />
        <div className="mt-3 flex items-center gap-4">
          <p className="text-sm" style={{ color: t.textMuted }}>
            Unified earnings dashboard consolidating today's total, weekly trends, settlement, floating cash, and order-level history into one transparent view.
          </p>
          <a href={PROTO_URL} target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{ background: "transparent", color: t.orange, border: `1px solid ${t.orange}50`, whiteSpace: "nowrap" }}>
            <ExternalLink size={13} /> View in Figma
          </a>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <div className="w-full h-full rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${t.cardBorder}`, boxShadow: t.isDark ? "0 8px 48px rgba(0,0,0,0.5)" : "0 8px 32px rgba(0,0,0,0.1)" }}>
          <img src={designImg} alt="Earnings screen redesign" className="w-full h-full block object-contain"
            style={{ filter: t.isDark ? "brightness(0.93)" : "none" }} />
        </div>
      </div>
    </SlideShell>
  );
}
