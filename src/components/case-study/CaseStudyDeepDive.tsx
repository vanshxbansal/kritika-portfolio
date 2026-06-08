"use client";

import Image from "next/image";
import type { DeepDiveChapter } from "@/data/caseStudyTypes";
import {
  CASE_STUDY_SCROLL_OFFSET,
  CaseStudyBody,
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type CaseStudyDeepDiveProps = {
  id: string;
  title: string;
  subtitle?: string;
  chapters: DeepDiveChapter[];
};

function VisualPlaceholder({
  label,
  caption,
  imageSrc,
}: {
  label: string;
  caption?: string;
  imageSrc?: string;
}) {
  const theme = useCaseStudyTheme();

  return (
    <div
      className="overflow-hidden rounded-xl border-2 bg-[#fafafa]"
      style={{ borderColor: theme.primaryBorder }}
    >
      {imageSrc ? (
        <div className="relative aspect-[16/10] bg-white">
          <Image
            src={imageSrc}
            alt={caption ?? label}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 720px"
            quality={100}
            unoptimized
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center p-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm"
            style={{ color: theme.primary }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 opacity-70"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <p className="font-display text-sm font-medium text-[#1e1e2f]/50">
            {caption ?? label}
          </p>
          <p className="max-w-[200px] text-xs text-[#1e1e2f]/35">
            Replace with project screenshots
          </p>
        </div>
        </div>
      )}
    </div>
  );
}

function ChapterVisuals({ visuals }: { visuals: DeepDiveChapter["visuals"] }) {
  if (visuals.length === 1) {
    return (
      <VisualPlaceholder
        label={visuals[0].label}
        caption={visuals[0].caption}
        imageSrc={visuals[0].imageSrc}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {visuals.map((visual) => (
        <VisualPlaceholder
          key={visual.label}
          label={visual.label}
          caption={visual.caption}
          imageSrc={visual.imageSrc}
        />
      ))}
    </div>
  );
}

function ProblemSolutionBlock({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-[#1e1e2f]/50">
          Problem
        </p>
        <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
          {problem}
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-[#1e1e2f]/50">
          Solution
        </p>
        <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
          {solution}
        </p>
      </div>
    </div>
  );
}

function ChallengeDecisionField({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  const theme = useCaseStudyTheme();
  const tone =
    label === "Challenge"
      ? "#dc2626"
      : label === "Why it mattered"
        ? "#9333ea"
        : label === "Outcome"
          ? "#16a34a"
          : theme.primary;

  return (
    <div className="border-l-2 pl-3" style={{ borderColor: `${tone}66` }}>
      <p
        className="mb-1.5 inline-flex rounded-full px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.08em]"
        style={{ backgroundColor: `${tone}12`, color: tone }}
      >
        {label}
      </p>
      <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
        {children}
      </p>
    </div>
  );
}

function ChallengeDecisionBlock({ chapter }: { chapter: DeepDiveChapter }) {
  const theme = useCaseStudyTheme();

  if (
    !chapter.challenge &&
    !chapter.whyItMattered &&
    !chapter.decisionIntro &&
    !chapter.decisionItems &&
    !chapter.outcome
  ) {
    return null;
  }

  return (
    <div className="pl-12">
      <div className="flex flex-col gap-3 rounded-2xl border border-[#e8edf3] bg-[#fafbfc] p-5 md:p-6">
        {chapter.challenge ? (
          <ChallengeDecisionField label="Challenge">
            {chapter.challenge}
          </ChallengeDecisionField>
        ) : null}

        {chapter.whyItMattered ? (
          <ChallengeDecisionField label="Why it mattered">
            {chapter.whyItMattered}
          </ChallengeDecisionField>
        ) : null}

        {chapter.decisionIntro || chapter.decisionItems ? (
          <div className="border-l-2 pl-3" style={{ borderColor: `${theme.primary}66` }}>
            <p
              className="mb-1.5 inline-flex rounded-full px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ backgroundColor: `${theme.primary}12`, color: theme.primary }}
            >
              Decision
            </p>
            {chapter.decisionIntro ? (
              <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
                {chapter.decisionIntro}
              </p>
            ) : null}
            {chapter.decisionItems ? (
              <ul className="mt-1 flex flex-col gap-2">
                {chapter.decisionItems.map((item) => (
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
            ) : null}
          </div>
        ) : null}

        {chapter.outcome ? (
          <ChallengeDecisionField label="Outcome">
            {chapter.outcome}
          </ChallengeDecisionField>
        ) : null}
      </div>
    </div>
  );
}

function ChapterContent({
  chapter,
  index,
}: {
  chapter: DeepDiveChapter;
  index: number;
}) {
  const theme = useCaseStudyTheme();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-4">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="pt-0.5 font-display text-xl font-semibold leading-snug text-[#1e1e2f] md:text-[22px]">
          {chapter.title}
        </h3>
      </div>

      {chapter.subtitle ? (
        <p className="pl-12 font-display text-sm font-semibold text-[#1e1e2f]/45">
          {chapter.subtitle}
        </p>
      ) : null}

      {chapter.intro ? (
        <CaseStudyBody className="pl-12">{chapter.intro}</CaseStudyBody>
      ) : null}

      <ChallengeDecisionBlock chapter={chapter} />

      {chapter.problem && chapter.solution ? (
        <div className="pl-12">
          <ProblemSolutionBlock
            problem={chapter.problem}
            solution={chapter.solution}
          />
        </div>
      ) : null}

      {chapter.decisions?.map((decision) => (
        <div
          key={decision.title}
          className="ml-12 flex flex-col gap-3 rounded-xl border-l-2 pl-5"
          style={{ borderColor: `${theme.primary}4D` }}
        >
          <p className="font-display text-base font-semibold text-[#1e1e2f]">
            {decision.title}
          </p>
          <ProblemSolutionBlock
            problem={decision.problem}
            solution={decision.solution}
          />
        </div>
      ))}

      {chapter.bullets ? (
        <ul className="flex flex-col gap-1.5 pl-12">
          {chapter.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/60"
            >
              — {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {chapter.features ? (
        <ul className="flex flex-col gap-2 pl-12">
          {chapter.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2.5 text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: theme.primary }}
              />
              {feature}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function CaseStudyDeepDive({
  id,
  title,
  subtitle,
  chapters,
}: CaseStudyDeepDiveProps) {
  return (
    <section
      id={id}
      className={caseStudySectionClass}
      style={{ scrollMarginTop: CASE_STUDY_SCROLL_OFFSET }}
    >
      <CaseStudyReveal className="mb-8 md:mb-10">
        <CaseStudySectionHeading title={title} subtitle={subtitle} />
      </CaseStudyReveal>

      <div className="flex flex-col gap-10 md:gap-12">
        {chapters.map((chapter, index) => {
          const reverse = index % 2 === 1;

          return (
            <div
              key={chapter.id}
              className="sticky"
              style={{
                top: `calc(${CASE_STUDY_SCROLL_OFFSET}px + ${index * 18}px)`,
                zIndex: index + 1,
              }}
            >
              <CaseStudyReveal delay={index * 0.04} y={40}>
                <article
                  id={chapter.id}
                  style={{ scrollMarginTop: CASE_STUDY_SCROLL_OFFSET }}
                >
                  <CaseStudySurface className="border-[#f1d7c8] bg-white/95 shadow-[0_24px_80px_rgba(20,20,40,0.08)] backdrop-blur">
                    <div
                      className={`flex flex-col gap-8 lg:gap-12 ${
                        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                      } lg:items-start`}
                    >
                      <div className="min-w-0 flex-[1.08]">
                        <ChapterContent chapter={chapter} index={index} />
                      </div>
                      <div className="min-w-0 flex-[1.18] lg:pt-[92px]">
                        <ChapterVisuals visuals={chapter.visuals} />
                      </div>
                    </div>
                  </CaseStudySurface>
                </article>
              </CaseStudyReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
