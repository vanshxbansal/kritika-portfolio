"use client";

import { useTheme } from "./ThemeContext";
import { ChevronsDown } from "lucide-react";

interface SlideShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideShell({ children, className = "" }: SlideShellProps) {
  const { tokens: t } = useTheme();
  return (
    <div className={`w-full h-full flex flex-col transition-colors duration-300 ${className}`}
      style={{ background: t.bg }}>
      {children}
    </div>
  );
}

export function SlideTag({ children }: { children: React.ReactNode }) {
  const { tokens: t } = useTheme();
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs tracking-widest uppercase"
      style={{ background: t.tagBg, color: t.orange, border: `1px solid ${t.tagBorder}` }}>
      {children}
    </span>
  );
}

export function Divider() {
  const { tokens: t } = useTheme();
  return <div className="w-12 h-0.5 rounded-full mt-1" style={{ background: t.orange }} />;
}

export function ScrollHint({ label = "Scroll to explore" }: { label?: string }) {
  const { tokens: t } = useTheme();
  return (
    <div className="flex items-center justify-center gap-1.5 py-2 shrink-0 select-none rounded-b-xl"
      style={{
        background: t.isDark
          ? "linear-gradient(to bottom, transparent, rgba(13,15,26,0.7))"
          : "linear-gradient(to bottom, transparent, rgba(244,245,250,0.85))",
        color: t.orange,
        border: `1px solid ${t.cardBorder}`,
        borderTop: "none",
      }}>
      <ChevronsDown size={13} className="animate-bounce" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

export function Badge({ color = "red", children }: { color?: "red" | "orange" | "green" | "blue"; children: React.ReactNode }) {
  const colors = {
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${colors[color]}`}>
      {children}
    </span>
  );
}
