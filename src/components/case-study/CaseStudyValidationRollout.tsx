"use client";

import type { EnablementIcon, ValidationRolloutData } from "@/data/caseStudyTypes";
import { CaseStudyReveal, caseStudySectionClass } from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

function CheckItem({ children }: { children: string }) {
  const theme = useCaseStudyTheme();

  return (
    <li className="flex gap-3 text-sm leading-[1.55] text-[#64748b]">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: theme.primaryLight }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3"
          fill="none"
          stroke={theme.primary}
          strokeWidth={2.5}
        >
          <path d="M6 12l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function EnablementIconGlyph({ type, color }: { type: EnablementIcon; color: string }) {
  const className = "h-5 w-5";

  switch (type) {
    case "walkthrough":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <rect x="4" y="5" width="16" height="12" rx="2" />
          <path d="M8 9h8M8 13h5" strokeLinecap="round" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3v-4z" strokeLinejoin="round" />
        </svg>
      );
    case "guidance":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6 20c0-3.5 3.5-6 6-6s6 2.5 6 6" strokeLinecap="round" />
          <path d="M12 11v3" strokeLinecap="round" />
        </svg>
      );
  }
}

function SubHeading({ children }: { children: string }) {
  const theme = useCaseStudyTheme();

  return (
    <h3
      className="font-display text-base font-semibold"
      style={{ color: theme.primary }}
    >
      {children}
    </h3>
  );
}

export function CaseStudyValidationRollout({
  sectionNumber,
  title,
  validationTitle,
  validationItems,
  enablementTitle,
  enablementItems,
  challengesTitle,
  challengeItems,
}: ValidationRolloutData) {
  const theme = useCaseStudyTheme();

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <div className="rounded-2xl border border-[#e8edf3] bg-[#fafbfc] p-6 md:p-8 lg:p-10">
          <h2 className="font-display text-[26px] font-semibold leading-tight text-[#1e1e2f]">
            {sectionNumber ? `${sectionNumber}. ${title}` : title}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 border-b border-[#e8edf3] pb-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-4">
              <SubHeading>{validationTitle}</SubHeading>
              <ul className="flex flex-col gap-3">
                {validationItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <SubHeading>{enablementTitle}</SubHeading>
              <ul className="flex flex-col gap-3">
                {enablementItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-3 text-sm leading-[1.55] text-[#64748b]"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"
                      style={{ color: theme.primary }}
                    >
                      <EnablementIconGlyph type={item.icon} color={theme.primary} />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-8 rounded-xl border bg-white p-5 md:p-6"
            style={{ borderColor: theme.primaryBorder }}
          >
            <SubHeading>{challengesTitle}</SubHeading>
            <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {challengeItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </CaseStudyReveal>
    </section>
  );
}
