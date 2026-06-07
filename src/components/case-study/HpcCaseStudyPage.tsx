"use client";

import { hpcCaseStudy } from "@/data/hpcCaseStudy";
import { hpcTheme } from "@/data/hpcTheme";
import { CaseStudyPage } from "./CaseStudyPage";

export function HpcCaseStudyPage() {
  return <CaseStudyPage data={hpcCaseStudy} theme={hpcTheme} />;
}
