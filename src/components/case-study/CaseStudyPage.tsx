"use client";

import type { CaseStudyData } from "@/data/caseStudyTypes";
import type { CaseStudyTheme } from "@/data/caseStudyTypes";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyLearnings } from "./CaseStudyLearnings";
import { CaseStudyMoreProjects } from "./CaseStudyMoreProjects";
import { CaseStudyProcessFlow } from "./CaseStudyProcessFlow";
import { CaseStudyReveal, caseStudySectionClass } from "./CaseStudyReveal";
import {
  CaseStudyChallenges,
  CaseStudyContentSection,
  CaseStudyFinalDesigns,
  CaseStudyHighlightBox,
  CaseStudyListSection,
  CaseStudySplitSection,
} from "./CaseStudySections";
import { CaseStudyThemeProvider } from "./CaseStudyThemeContext";

type CaseStudyPageProps = {
  data: CaseStudyData;
  theme: CaseStudyTheme;
};

export function CaseStudyPage({ data, theme }: CaseStudyPageProps) {
  const {
    hero,
    overview,
    problem,
    role,
    approach,
    challenges,
    finalDesigns,
    uat,
    impact,
    moreProjects,
  } = data;

  return (
    <CaseStudyThemeProvider theme={theme}>
      <Navbar />
      <main className="flex flex-col items-center gap-16 bg-white pb-16 pt-0 md:gap-20">
        <CaseStudyHero
          id={hero.id}
          lines={hero.lines}
          subtitle={hero.subtitle}
          meta={hero.meta}
        />

        <CaseStudySplitSection
          title={overview.title}
          paragraphs={overview.paragraphs}
          imageAlt={overview.imageAlt}
          imageCaption={overview.imageCaption}
        />

        <CaseStudyContentSection title={problem.title} paragraphs={problem.paragraphs}>
          <CaseStudyListSection title="Objectives" items={problem.objectives} />
          <CaseStudyHighlightBox title="Outcome Goal" body={problem.highlight} />
        </CaseStudyContentSection>

        <CaseStudyContentSection title={role.title} paragraphs={role.paragraphs}>
          <CaseStudyListSection title="Key contributions" items={role.contributions} />
        </CaseStudyContentSection>

        <CaseStudyProcessFlow
          title={approach.title}
          steps={approach.steps}
          body={approach.body}
        />

        {challenges ? (
          <CaseStudyChallenges title={challenges.title} items={challenges.items} />
        ) : null}

        <CaseStudyFinalDesigns
          title={finalDesigns.title}
          description={finalDesigns.description}
          placeholders={finalDesigns.placeholders}
        />

        <CaseStudyContentSection title={uat.title} paragraphs={uat.paragraphs}>
          <CaseStudyListSection title="Deliverables" items={uat.deliverables} />
        </CaseStudyContentSection>

        <CaseStudyLearnings title={impact.title} items={impact.learnings} />

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
