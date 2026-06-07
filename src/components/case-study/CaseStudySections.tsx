"use client";

import type { ReactNode } from "react";
import {
  CaseStudyBody,
  CaseStudyReveal,
  CaseStudySectionTitle,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type CaseStudySplitSectionProps = {
  title: string;
  paragraphs: string[];
  imageAlt: string;
  imageCaption?: string;
  reverse?: boolean;
};

export function CaseStudySplitSection({
  title,
  paragraphs,
  imageAlt,
  imageCaption,
  reverse = false,
}: CaseStudySplitSectionProps) {
  const theme = useCaseStudyTheme();

  return (
    <section className="w-[85%] max-w-[960px]">
      <div
        className={`flex flex-col items-start gap-8 md:gap-10 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <CaseStudyReveal className="flex flex-1 flex-col gap-5">
          <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <CaseStudyBody key={paragraph.slice(0, 40)}>{paragraph}</CaseStudyBody>
            ))}
          </div>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.08} className="w-full flex-1" y={40}>
          <div
            className="overflow-hidden rounded-xl border-2 bg-[#fafafa]"
            style={{ borderColor: theme.primaryBorder }}
          >
            <div className="flex aspect-[4/3] items-center justify-center p-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
                  style={{ color: theme.primary }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 opacity-70"
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
                  {imageCaption ?? imageAlt}
                </p>
                <p className="max-w-[220px] text-xs text-[#1e1e2f]/35">
                  Replace with project screenshots
                </p>
              </div>
            </div>
          </div>
        </CaseStudyReveal>
      </div>
    </section>
  );
}

type CaseStudyContentSectionProps = {
  title: string;
  paragraphs?: string[];
  children?: ReactNode;
};

export function CaseStudyContentSection({
  title,
  paragraphs,
  children,
}: CaseStudyContentSectionProps) {
  return (
    <section className="flex w-[85%] max-w-[780px] flex-col gap-5">
      <CaseStudyReveal>
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
      </CaseStudyReveal>
      {paragraphs?.map((paragraph, index) => (
        <CaseStudyReveal key={paragraph.slice(0, 40)} delay={index * 0.05}>
          <CaseStudyBody>{paragraph}</CaseStudyBody>
        </CaseStudyReveal>
      ))}
      {children}
    </section>
  );
}

type CaseStudyHighlightBoxProps = {
  title: string;
  body: string;
};

export function CaseStudyHighlightBox({ title, body }: CaseStudyHighlightBoxProps) {
  const theme = useCaseStudyTheme();

  return (
    <CaseStudyReveal delay={0.1}>
      <div
        className="mt-3 flex flex-col gap-3 rounded-xl border-2 p-5 md:p-6"
        style={{
          borderColor: theme.primaryBorder,
          backgroundColor: theme.primaryLight,
        }}
      >
        <h3 className="font-display text-xl font-semibold text-[#1e1e2f]">
          {title}
        </h3>
        <p className="text-base leading-[1.6] tracking-[-0.02em] text-[#1e1e2f]/70">
          {body}
        </p>
      </div>
    </CaseStudyReveal>
  );
}

type CaseStudyListSectionProps = {
  title: string;
  items: string[];
};

export function CaseStudyListSection({ title, items }: CaseStudyListSectionProps) {
  const theme = useCaseStudyTheme();

  return (
    <CaseStudyReveal delay={0.08}>
      <div className="flex flex-col gap-3">
        <p className="font-display text-base font-semibold text-[#1e1e2f]">{title}</p>
        <ul className="flex flex-col gap-2.5">
          {items.map((item) => (
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
  );
}

type CaseStudyChallengesProps = {
  title: string;
  items: {
    title: string;
    body?: string;
    problem?: string;
    solution?: string;
    bullets?: string[];
  }[];
};

export function CaseStudyChallenges({ title, items }: CaseStudyChallengesProps) {
  const theme = useCaseStudyTheme();

  return (
    <section className="flex w-[85%] max-w-[780px] flex-col gap-7">
      <CaseStudyReveal>
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
      </CaseStudyReveal>

      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <CaseStudyReveal key={item.title} delay={index * 0.06}>
            <div
              className="flex flex-col gap-2 border-l-2 pl-5"
              style={{ borderColor: `${theme.primary}4D` }}
            >
              <h3 className="font-display text-lg font-semibold text-[#1e1e2f]">
                {item.title}
              </h3>
              {item.body ? (
                <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
                  {item.body}
                </p>
              ) : null}
              {item.problem ? (
                <div className="flex flex-col gap-1.5">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-[#1e1e2f]/50">
                    Problem
                  </p>
                  <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
                    {item.problem}
                  </p>
                </div>
              ) : null}
              {item.solution ? (
                <div className="flex flex-col gap-1.5">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-[#1e1e2f]/50">
                    Solution
                  </p>
                  <p className="text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70">
                    {item.solution}
                  </p>
                </div>
              ) : null}
              {item.bullets ? (
                <ul className="mt-1 flex flex-col gap-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/60"
                    >
                      — {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </CaseStudyReveal>
        ))}
      </div>
    </section>
  );
}

type CaseStudyFinalDesignsProps = {
  title: string;
  description: string;
  placeholders: { label: string; aspect: string }[];
};

export function CaseStudyFinalDesigns({
  title,
  description,
  placeholders,
}: CaseStudyFinalDesignsProps) {
  const theme = useCaseStudyTheme();

  return (
    <section className="flex w-[85%] max-w-[960px] flex-col gap-7">
      <CaseStudyReveal className="flex max-w-[780px] flex-col gap-4">
        <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
        <CaseStudyBody>{description}</CaseStudyBody>
      </CaseStudyReveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {placeholders.map((item, index) => (
          <CaseStudyReveal key={item.label} delay={index * 0.06}>
            <div
              className="overflow-hidden rounded-xl border-2 bg-[#fafafa]"
              style={{ borderColor: theme.primaryBorder }}
            >
              <div className="flex aspect-[16/10] items-center justify-center p-6">
                <p className="text-center font-display text-sm font-medium text-[#1e1e2f]/45">
                  {item.label}
                </p>
              </div>
            </div>
          </CaseStudyReveal>
        ))}
      </div>
    </section>
  );
}
