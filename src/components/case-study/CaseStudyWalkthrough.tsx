"use client";

import {
  CaseStudyBody,
  CaseStudyReveal,
  CaseStudySectionTitle,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type WalkthroughStep = {
  title: string;
  intro?: string;
  items: string[];
};

type CaseStudyWalkthroughProps = {
  title: string;
  steps: WalkthroughStep[];
};

export function CaseStudyWalkthrough({ title, steps }: CaseStudyWalkthroughProps) {
  const theme = useCaseStudyTheme();

  return (
    <section className={`${caseStudySectionClass} flex flex-col gap-7`}>
      <CaseStudyReveal>
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
      </CaseStudyReveal>

      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <CaseStudyReveal key={step.title} delay={index * 0.06}>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  {index + 1}
                </span>
                <h3 className="pt-0.5 font-display text-lg font-semibold text-[#1e1e2f]">
                  {step.title}
                </h3>
              </div>
              {step.intro ? (
                <CaseStudyBody className="pl-12">{step.intro}</CaseStudyBody>
              ) : null}
              <ul className="flex flex-col gap-2 pl-12">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CaseStudyReveal>
        ))}
      </div>
    </section>
  );
}
