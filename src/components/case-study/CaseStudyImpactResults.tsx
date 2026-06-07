"use client";

import type { ReactNode } from "react";
import type {
  CaseStudyImpactData,
  ImpactLearningIcon,
  ImpactMetricIcon,
} from "@/data/caseStudyTypes";
import { CaseStudyReveal, caseStudySectionClass } from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type CaseStudyImpactResultsProps = CaseStudyImpactData;

function SectionHeading({ children }: { children: ReactNode }) {
  const theme = useCaseStudyTheme();

  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="font-display text-[26px] font-semibold leading-tight text-[#1e1e2f]">
        {children}
      </h2>
      <div
        className="h-1 w-10 rounded-full"
        style={{ backgroundColor: theme.primary }}
        aria-hidden
      />
    </div>
  );
}

function MetricIcon({ type, color }: { type: ImpactMetricIcon; color: string }) {
  const className = "h-4 w-4";

  switch (type) {
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M12 3l8 3v6c0 5-3.5 9-8 9s-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M4 19V5M4 19h16" strokeLinecap="round" />
          <path d="M8 15V9M12 15V7M16 15v-4" strokeLinecap="round" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M12 3l1.2 4.2L17 8.5l-3.8 1.3L12 14l-1.2-4.2L7 8.5l3.8-1.3L12 3z" />
          <path d="M18 14l.8 2.7L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z" />
        </svg>
      );
  }
}

function LearningIcon({ type, color }: { type: ImpactLearningIcon; color: string }) {
  const className = "h-5 w-5";

  switch (type) {
    case "lightbulb":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M9 18h6M10 22h4M12 2a6 6 0 00-3 11.2V16h6v-2.8A6 6 0 0012 2z" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" strokeLinecap="round" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15 19c.3-2 1.8-3.5 4-3.5" strokeLinecap="round" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function CaseStudyImpactResults({
  resultsTitle,
  metrics,
  learningsTitle,
  learnings,
}: CaseStudyImpactResultsProps) {
  const theme = useCaseStudyTheme();

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <div
          className="flex flex-col gap-10 rounded-2xl border bg-white p-6 md:gap-12 md:p-8 lg:p-10"
          style={{ borderColor: theme.primaryBorder }}
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <SectionHeading>{resultsTitle}</SectionHeading>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
              {metrics.map((metric, index) => (
                <CaseStudyReveal key={metric.label} delay={index * 0.05} y={24}>
                  <div className="flex h-full flex-col items-center rounded-xl border border-[#e8edf3] bg-[#fafbfc] px-3 py-5 text-center sm:px-4 sm:py-6">
                    <div className="mb-3 flex items-center gap-2 sm:mb-4">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${metric.color}18` }}
                      >
                        <MetricIcon type={metric.icon} color={metric.color} />
                      </span>
                      <span
                        className="font-display text-xl font-bold leading-none sm:text-2xl"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </span>
                    </div>
                    <p className="whitespace-pre-line text-xs leading-snug text-[#64748b] sm:text-sm">
                      {metric.label}
                    </p>
                  </div>
                </CaseStudyReveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <SectionHeading>{learningsTitle}</SectionHeading>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {learnings.map((item, index) => (
                <CaseStudyReveal key={item.body.slice(0, 40)} delay={index * 0.06} y={24}>
                  <div className="flex h-full gap-4 rounded-xl border border-[#e8edf3] bg-[#fafbfc] p-5 md:p-6">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${item.color}18` }}
                    >
                      <LearningIcon type={item.icon} color={item.color} />
                    </span>
                    <p className="text-sm leading-[1.6] tracking-[-0.01em] text-[#64748b] md:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </CaseStudyReveal>
              ))}
            </div>
          </div>
        </div>
      </CaseStudyReveal>
    </section>
  );
}
