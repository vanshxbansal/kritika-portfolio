"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { swiggyCaseStudy } from "@/data/swiggyCaseStudy";
import { swiggyTheme } from "@/data/swiggyTheme";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyImpactResults } from "./CaseStudyImpactResults";
import { CaseStudyMoreProjects } from "./CaseStudyMoreProjects";
import { CaseStudyProcessNav } from "./CaseStudyProcessNav";
import {
  CaseStudyReveal,
  CASE_STUDY_SCROLL_OFFSET,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { CaseStudyValidationRollout } from "./CaseStudyValidationRollout";
import { CaseStudyContentSection, CaseStudyListSection } from "./CaseStudySections";
import { CaseStudyThemeProvider } from "./CaseStudyThemeContext";
import { CaseStudyDeepDive } from "./CaseStudyDeepDive";
import { HpcOwnershipSection } from "./HpcOwnershipSection";
import { SwiggyExperienceTransformSection } from "./SwiggyExperienceTransformSection";
import { SwiggySolutionWalkthroughSection } from "./SwiggySolutionWalkthroughSection";
import { CaseStudyDesigningBeyondSpreadsheets } from "./CaseStudyContextPanels";
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

function SwiggyDesignApproachSection() {
  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <CaseStudySurface>
          <CaseStudySectionHeading title="Design Approach" className="mb-4" />
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#64748b]">
            A research-driven and iterative process focused on solving the right problems before
            designing solutions — inspired by Design Thinking, Double Diamond, and Lean UX.
          </p>
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl border border-[#e8edf3] bg-white">
            <Image
              src="/swiggy-delivery-partner/design-approach.png"
              alt="Design approach: Understand, Research, Define, Ideate, Design, Measure"
              fill
              className="object-contain object-center p-4"
              sizes="(max-width: 1024px) 100vw, 960px"
              unoptimized
            />
          </div>
        </CaseStudySurface>
      </CaseStudyReveal>
    </section>
  );
}

export function SwiggyCaseStudyPage() {
  const {
    hero,
    executiveSummary,
    role,
    ownership,
    processNav,
    designingBeyondSpreadsheets,
    deepDive,
    solutionWalkthrough,
    validationRollout,
    impact,
    moreProjects,
  } = swiggyCaseStudy;

  return (
    <CaseStudyThemeProvider theme={swiggyTheme}>
      <Navbar wide />
      <main className="flex flex-col items-center gap-16 bg-white pb-16 pt-0 md:gap-20">
        <CaseStudyHero
          id={hero.id}
          lines={hero.lines}
          subtitle={hero.subtitle}
          meta={hero.meta}
          layout={hero.layout}
          eyebrow={hero.eyebrow}
          imageAlt={hero.imageAlt}
          imageSrc={hero.imageSrc}
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

          <div className="mt-16 md:mt-20">
            <SwiggyDesignApproachSection />
          </div>

          {ownership ? (
            <div className="mt-16 md:mt-20">
              <HpcOwnershipSection {...ownership} />
            </div>
          ) : null}
        </ProcessAnchor>

        <ProcessAnchor id="process-build">
          <CaseStudyDeepDive
            id={deepDive.id}
            title={deepDive.title}
            subtitle={deepDive.subtitle}
            chapters={deepDive.chapters}
          />

          <div className="mt-16 md:mt-20">
            <SwiggyExperienceTransformSection />
          </div>

          {solutionWalkthrough ? (
            <div className="mt-16 md:mt-20">
              <SwiggySolutionWalkthroughSection {...solutionWalkthrough} />
            </div>
          ) : null}
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
