"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { CaseStudyTheme } from "@/data/caseStudyTypes";
import { hpcTheme } from "@/data/hpcTheme";

const CaseStudyThemeContext = createContext<CaseStudyTheme>(hpcTheme);

export function CaseStudyThemeProvider({
  theme,
  children,
}: {
  theme: CaseStudyTheme;
  children: ReactNode;
}) {
  return (
    <CaseStudyThemeContext.Provider value={theme}>
      {children}
    </CaseStudyThemeContext.Provider>
  );
}

export function useCaseStudyTheme() {
  return useContext(CaseStudyThemeContext);
}
