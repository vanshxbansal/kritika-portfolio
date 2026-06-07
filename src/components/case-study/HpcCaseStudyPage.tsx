"use client";

import type { ReactNode } from "react";
import { hpcCaseStudy } from "@/data/hpcCaseStudy";
import { hpcTheme } from "@/data/hpcTheme";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyImpactResults } from "./CaseStudyImpactResults";
import { CaseStudyMoreProjects } from "./CaseStudyMoreProjects";
import { CaseStudyProcessNav } from "./CaseStudyProcessNav";
import { CaseStudyReveal, CASE_STUDY_SCROLL_OFFSET, caseStudySectionClass } from "./CaseStudyReveal";
import { CaseStudyValidationRollout } from "./CaseStudyValidationRollout";
import { CaseStudyContentSection, CaseStudyListSection } from "./CaseStudySections";
import { CaseStudyThemeProvider } from "./CaseStudyThemeContext";
import { CaseStudyDeepDive } from "./CaseStudyDeepDive";
import {
  CaseStudyDesigningBeyondSpreadsheets,
  CaseStudySystemArchitecture,
} from "./CaseStudyContextPanels";
import { CaseStudyExecutiveSummary } from "./CaseStudyExecutiveSummary";

function ProcessAnchor({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="w-full self-stretch"
      style={{ scrollMarginTop: CASE_STUDY_SCROLL_OFFSET }}
    >
      {children}
    </div>
  );
}

export function HpcCaseStudyPage() {
  const {
    hero,
    executiveSummary,
    processNav,
    role,
    designingBeyondSpreadsheets,
    systemArchitecture,
    deepDive,
    validationRollout,
    impact,
    moreProjects,
  } = hpcCaseStudy;

  return (
    <CaseStudyThemeProvider theme={hpcTheme}>
      <Navbar />
      <main className="flex flex-col items-center gap-16 bg-white pb-16 pt-0 md:gap-20">
        <CaseStudyHero
          id={hero.id}
          lines={hero.lines}
          subtitle={hero.subtitle}
          meta={hero.meta}
          layout={hero.layout}
          eyebrow={hero.eyebrow}
          imageAlt={hero.imageAlt}
        />

        <CaseStudyProcessNav {...processNav} />

        <ProcessAnchor id="process-discover">
          <CaseStudyExecutiveSummary {...executiveSummary} />

          <div className="mt-16 md:mt-20">
            <CaseStudyContentSection title={role.title} paragraphs={role.paragraphs}>
              <CaseStudyListSection title="Key contributions" items={role.contributions} />
            </CaseStudyContentSection>
          </div>
        </ProcessAnchor>

        <ProcessAnchor id="process-define">
          <CaseStudyDesigningBeyondSpreadsheets {...designingBeyondSpreadsheets} />
        </ProcessAnchor>

        <ProcessAnchor id="process-design">
          <CaseStudySystemArchitecture {...systemArchitecture} />
        </ProcessAnchor>

        <ProcessAnchor id="process-build">
          <CaseStudyDeepDive
            id={deepDive.id}
            title={deepDive.title}
            subtitle={deepDive.subtitle}
            chapters={deepDive.chapters}
          />
        </ProcessAnchor>

        <ProcessAnchor id="process-validate">
          <CaseStudyValidationRollout {...validationRollout} />
        </ProcessAnchor>

        <ProcessAnchor id="process-rollout">
          <CaseStudyImpactResults {...impact} />
        </ProcessAnchor>

        <CaseStudyReveal className={`${caseStudySectionClass} pb-2`}>
          <p className="text-center font-display text-[26px] font-semibold text-[#1e1e2f]">
            Thank you for reading!
          </p>
        </CaseStudyReveal>

        <CaseStudyMoreProjects projects={moreProjects} />
      </main>

      <Footer backHref="/#spotlight" backLabel="Back to projects" />
    </CaseStudyThemeProvider>
  );
}
