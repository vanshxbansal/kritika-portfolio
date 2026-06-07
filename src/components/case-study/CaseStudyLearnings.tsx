"use client";

import type { LearningItem } from "@/data/caseStudyTypes";
import {
  CaseStudyReveal,
  CaseStudySectionTitle,
  caseStudySectionClass,
} from "./CaseStudyReveal";

type CaseStudyLearningsProps = {
  title: string;
  items: LearningItem[];
};

export function CaseStudyLearnings({ title, items }: CaseStudyLearningsProps) {
  return (
    <section className={`${caseStudySectionClass} flex flex-col gap-7`}>
      <CaseStudyReveal>
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
      </CaseStudyReveal>

      <ul className="flex flex-col gap-6">
        {items.map((item, index) => (
          <li key={item.lead}>
            <CaseStudyReveal delay={index * 0.06}>
              <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
                <span className="font-semibold text-[#1e1e2f]">{item.lead}</span>{" "}
                {item.body}
              </p>
            </CaseStudyReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
