"use client";

import { createContext, useContext, useState } from "react";

export const darkTokens = {
  bg: "#0D0F1A",
  bgAlt: "#0A0C14",
  card: "rgba(255,255,255,0.03)",
  cardBorder: "rgba(255,255,255,0.07)",
  cardBorderAlt: "rgba(255,255,255,0.06)",
  cardBorderDash: "rgba(255,255,255,0.1)",
  topBar: "rgba(255,255,255,0.06)",
  textPrimary: "#F0F2F8",
  textSecondary: "#C5C9D8",
  textMuted: "#8B90A4",
  textDimmer: "#9CA3AF",
  textDark: "#4B5563",
  tableHeaderBg: "rgba(255,255,255,0.08)",
  tableRowBorder: "rgba(255,255,255,0.04)",
  tableRowAlt: "rgba(255,255,255,0.01)",
  inlineCode: "rgba(0,0,0,0.3)",
  progressBg: "rgba(255,255,255,0.08)",
  navBtnHover: "rgba(255,255,255,0.08)",
  navBtnDim: "rgba(255,255,255,0.03)",
  navActiveBg: "rgba(252,128,25,0.12)",
  navActiveBorder: "rgba(252,128,25,0.3)",
  tagBg: "rgba(252,128,25,0.15)",
  tagBorder: "rgba(252,128,25,0.3)",
  orange: "#FC8019",
  isDark: true,
};

export const lightTokens = {
  bg: "#F4F5FA",
  bgAlt: "#EBEDF5",
  card: "#FFFFFF",
  cardBorder: "rgba(0,0,0,0.07)",
  cardBorderAlt: "rgba(0,0,0,0.06)",
  cardBorderDash: "rgba(0,0,0,0.12)",
  topBar: "rgba(0,0,0,0.07)",
  textPrimary: "#111827",
  textSecondary: "#374151",
  textMuted: "#6B7280",
  textDimmer: "#9CA3AF",
  textDark: "#9CA3AF",
  tableHeaderBg: "rgba(0,0,0,0.04)",
  tableRowBorder: "rgba(0,0,0,0.05)",
  tableRowAlt: "rgba(0,0,0,0.015)",
  inlineCode: "rgba(0,0,0,0.06)",
  progressBg: "rgba(0,0,0,0.08)",
  navBtnHover: "rgba(0,0,0,0.06)",
  navBtnDim: "rgba(0,0,0,0.03)",
  navActiveBg: "rgba(252,128,25,0.10)",
  navActiveBorder: "rgba(252,128,25,0.35)",
  tagBg: "rgba(252,128,25,0.10)",
  tagBorder: "rgba(252,128,25,0.3)",
  orange: "#E8710A",
  isDark: false,
};

export type ThemeTokens = typeof darkTokens;

const ThemeContext = createContext<{ tokens: ThemeTokens; toggle: () => void }>({
  tokens: darkTokens,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ tokens: dark ? darkTokens : lightTokens, toggle: () => setDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
