"use client";

import { useState } from "react";
import type { CaseStudyMeta } from "@/data/caseStudyTypes";
import { CaseStudyReveal } from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";
import { TypewriterHeroLines } from "./TypewriterHeroLines";

type CaseStudyHeroProps = {
  id: string;
  lines: { text: string; color: "default" | "accent" }[];
  subtitle: string;
  meta: CaseStudyMeta[];
};

export function CaseStudyHero({ id, lines, subtitle, meta }: CaseStudyHeroProps) {
  const theme = useCaseStudyTheme();
  const [titleComplete, setTitleComplete] = useState(false);

  return (
    <section
      id={id}
      data-cursor-label="You"
      className="scroll-mt-[180px] bg-white px-5 pb-14 pt-[72px] md:px-16 md:pt-20"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center gap-2">
          <TypewriterHeroLines
            lines={lines}
            accentColor={theme.primary}
            defaultColor={theme.text}
            onComplete={() => setTitleComplete(true)}
          />

          {titleComplete ? (
            <CaseStudyReveal className="max-w-[600px]" y={16} delay={0}>
              <p className="text-center font-display text-lg leading-[1.45] tracking-[0.01em] text-[#333]">
                {subtitle}
              </p>
            </CaseStudyReveal>
          ) : (
            <p className="max-w-[600px] text-center font-display text-lg leading-[1.45] tracking-[0.01em] text-[#333] opacity-0">
              {subtitle}
            </p>
          )}
        </div>

        {titleComplete ? (
          <CaseStudyReveal delay={0.08} y={32}>
            <div
              className="flex flex-wrap items-center justify-center gap-6 rounded-xl px-6 py-4 md:gap-10"
              style={{ backgroundColor: theme.primaryLight }}
            >
              {meta.map((item, index) => (
                <div key={item.label} className="flex items-center gap-6 md:gap-10">
                  {index > 0 ? (
                    <div
                      className="hidden h-8 w-px md:block"
                      style={{ backgroundColor: theme.primaryDivider }}
                      aria-hidden
                    />
                  ) : null}
                  <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
                    <p className="font-display text-sm text-black/40">{item.label}</p>
                    <p className="font-display text-sm font-medium text-black/65">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudyReveal>
        ) : null}
      </div>
    </section>
  );
}
