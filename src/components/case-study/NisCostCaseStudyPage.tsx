"use client";

import { nisCostCaseStudy } from "@/data/nisCostCaseStudy";
import { nisCostTheme } from "@/data/nisCostTheme";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyLearnings } from "./CaseStudyLearnings";
import { CaseStudyMoreProjects } from "./CaseStudyMoreProjects";
import { CaseStudyReveal } from "./CaseStudyReveal";
import {
  CaseStudyChallenges,
  CaseStudyContentSection,
  CaseStudyHighlightBox,
  CaseStudyListSection,
  CaseStudySplitSection,
} from "./CaseStudySections";
import { CaseStudyThemeProvider } from "./CaseStudyThemeContext";
import { CaseStudyWalkthrough } from "./CaseStudyWalkthrough";

export function NisCostCaseStudyPage() {
  const {
    hero,
    overview,
    role,
    problem,
    roleBasedDesign,
    iterativeDevelopment,
    challenges,
    walkthrough,
    uat,
    adoption,
    impact,
    moreProjects,
  } = nisCostCaseStudy;

  return (
    <CaseStudyThemeProvider theme={nisCostTheme}>
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

        <CaseStudyContentSection title={role.title} paragraphs={role.paragraphs}>
          <CaseStudyListSection title="Key responsibilities" items={role.contributions} />
        </CaseStudyContentSection>

        <CaseStudyContentSection title={problem.title} paragraphs={problem.paragraphs}>
          <CaseStudyListSection title="The system needed to support" items={problem.objectives} />
          <CaseStudyHighlightBox title="Core challenge" body={problem.highlight} />
        </CaseStudyContentSection>

        <CaseStudyContentSection
          title={roleBasedDesign.title}
          paragraphs={[roleBasedDesign.intro]}
        >
          <CaseStudyListSection title="Platform roles" items={roleBasedDesign.roles} />
        </CaseStudyContentSection>

        <CaseStudyContentSection
          title={iterativeDevelopment.title}
          paragraphs={iterativeDevelopment.paragraphs}
        >
          <CaseStudyListSection
            title="Key characteristics"
            items={iterativeDevelopment.characteristics}
          />
          <CaseStudyListSection title="Approach" items={iterativeDevelopment.approach} />
        </CaseStudyContentSection>

        <CaseStudyChallenges title={challenges.title} items={challenges.items} />

        <CaseStudyWalkthrough title={walkthrough.title} steps={walkthrough.steps} />

        <CaseStudyContentSection title={uat.title} paragraphs={uat.paragraphs}>
          <CaseStudyListSection title="My contribution" items={uat.deliverables} />
        </CaseStudyContentSection>

        <CaseStudyContentSection title={adoption.title}>
          <CaseStudyListSection title="Rollout support" items={adoption.items} />
        </CaseStudyContentSection>

        <CaseStudyLearnings title={impact.title} items={impact.learnings} />

        <CaseStudyReveal className="pb-2">
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
