"use client";

import type { ProcessStep } from "@/data/caseStudyTypes";
import {
  CaseStudyBody,
  CaseStudyReveal,
  CaseStudySectionTitle,
} from "./CaseStudyReveal";
import { SteppedTimeline } from "./SteppedTimeline";

type CaseStudyProcessFlowProps = {
  title: string;
  steps: ProcessStep[];
  body?: string;
};

export function CaseStudyProcessFlow({
  title,
  steps,
  body,
}: CaseStudyProcessFlowProps) {
  const timelineItems = steps.map((step) => ({
    id: step.title,
    title: step.title,
    subtitle: step.subtitle,
    icon: step.icon,
  }));

  return (
    <section className="flex w-[85%] max-w-[960px] flex-col items-start gap-8">
      <CaseStudyReveal>
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
      </CaseStudyReveal>

      <SteppedTimeline items={timelineItems} columns={steps.length} />

      {body ? (
        <CaseStudyReveal delay={0.1} className="w-full max-w-[780px]">
          <CaseStudyBody>{body}</CaseStudyBody>
        </CaseStudyReveal>
      ) : null}
    </section>
  );
}
