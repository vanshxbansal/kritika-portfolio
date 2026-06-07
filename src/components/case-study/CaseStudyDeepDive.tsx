"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DeepDiveChapter } from "@/data/caseStudyTypes";
import {
  CaseStudyBody,
  CaseStudyReveal,
  CaseStudySectionTitle,
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
}: {
  label: string;
  caption?: string;
}) {
  const theme = useCaseStudyTheme();

  return (
    <div
      className="overflow-hidden rounded-xl border-2 bg-[#fafafa]"
      style={{ borderColor: theme.primaryBorder }}
    >
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
    </div>
  );
}

function ChapterVisuals({ visuals }: { visuals: DeepDiveChapter["visuals"] }) {
  if (visuals.length === 1) {
    return <VisualPlaceholder label={visuals[0].label} caption={visuals[0].caption} />;
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {visuals.map((visual) => (
        <VisualPlaceholder
          key={visual.label}
          label={visual.label}
          caption={visual.caption}
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

      {chapter.intro ? (
        <CaseStudyBody className="pl-12">{chapter.intro}</CaseStudyBody>
      ) : null}

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

function ChapterNavButton({
  chapter,
  index,
  isActive,
  onClick,
  compact = false,
}: {
  chapter: DeepDiveChapter;
  index: number;
  isActive: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  const theme = useCaseStudyTheme();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-start gap-3 rounded-lg text-left transition-colors ${
        compact ? "w-auto shrink-0 px-3 py-2" : "w-full px-3 py-2.5"
      } ${isActive ? "" : "hover:bg-black/[0.03]"}`}
      style={
        isActive
          ? { backgroundColor: theme.primaryLight }
          : undefined
      }
      aria-current={isActive ? "true" : undefined}
    >
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold"
        style={
          isActive
            ? { backgroundColor: theme.primary, color: "#fff" }
            : { backgroundColor: `${theme.primary}1A`, color: theme.primary }
        }
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className={`font-display leading-snug ${
          compact ? "whitespace-nowrap text-sm" : "text-sm"
        } ${isActive ? "font-semibold text-[#1e1e2f]" : "font-medium text-[#1e1e2f]/60 group-hover:text-[#1e1e2f]/80"}`}
      >
        {chapter.title}
      </span>
    </button>
  );
}

export function CaseStudyDeepDive({
  id,
  title,
  subtitle,
  chapters,
}: CaseStudyDeepDiveProps) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");
  const sectionRef = useRef<HTMLElement>(null);
  const chapterRefs = useRef<Map<string, HTMLElement>>(new Map());
  const isScrollingRef = useRef(false);

  const scrollToChapter = useCallback((chapterId: string) => {
    const el = chapterRefs.current.get(chapterId);
    if (!el) return;

    isScrollingRef.current = true;
    setActiveId(chapterId);

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    chapters.forEach((chapter) => {
      const el = chapterRefs.current.get(chapter.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (isScrollingRef.current) return;
          if (entry.isIntersecting) {
            setActiveId(chapter.id);
          }
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [chapters]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scroll-mt-[120px] ${caseStudySectionClass}`}
    >
      <CaseStudyReveal className="mb-10 flex flex-col gap-4 md:mb-12">
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
        {subtitle ? <CaseStudyBody>{subtitle}</CaseStudyBody> : null}
      </CaseStudyReveal>

      {/* Mobile chapter nav — sticky pills */}
      <div className="sticky top-[72px] z-20 -mx-1 mb-8 bg-white/90 pb-2 pt-1 backdrop-blur-md lg:hidden">
        <div className="flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {chapters.map((chapter, index) => (
            <ChapterNavButton
              key={chapter.id}
              chapter={chapter}
              index={index}
              isActive={activeId === chapter.id}
              onClick={() => scrollToChapter(chapter.id)}
              compact
            />
          ))}
        </div>
      </div>

      <div className="relative flex gap-8 lg:gap-10 xl:gap-12">
        {/* Desktop sticky sidebar */}
        <aside className="hidden w-[200px] shrink-0 xl:w-[240px] lg:block">
          <nav
            className="sticky top-[120px] flex flex-col gap-1"
            aria-label="Product deep dive chapters"
          >
            {chapters.map((chapter, index) => (
              <ChapterNavButton
                key={chapter.id}
                chapter={chapter}
                index={index}
                isActive={activeId === chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
              />
            ))}
          </nav>
        </aside>

        {/* Chapters */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-20 md:gap-28">
            {chapters.map((chapter, index) => {
              const reverse = index % 2 === 1;

              return (
                <CaseStudyReveal key={chapter.id} delay={0.04} y={40}>
                  <article
                    id={chapter.id}
                    ref={(node) => {
                      if (node) chapterRefs.current.set(chapter.id, node);
                      else chapterRefs.current.delete(chapter.id);
                    }}
                    className="scroll-mt-[140px]"
                  >
                    <div
                      className={`flex flex-col gap-8 lg:gap-12 ${
                        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                      } lg:items-start`}
                    >
                      <div className="min-w-0 flex-1">
                        <ChapterContent chapter={chapter} index={index} />
                      </div>
                      <div className="min-w-0 flex-[1.15] xl:flex-[1.25]">
                        <ChapterVisuals visuals={chapter.visuals} />
                      </div>
                    </div>
                  </article>
                </CaseStudyReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
