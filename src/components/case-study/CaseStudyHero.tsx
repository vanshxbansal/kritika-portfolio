"use client";

import { useState } from "react";
import type { CaseStudyMeta, CaseStudyMetaIcon } from "@/data/caseStudyTypes";
import { CaseStudyReveal, caseStudySectionClass } from "./CaseStudyReveal";
import { CaseStudyHeroVisual } from "./CaseStudyHeroVisual";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";
import { TypewriterHeroLines } from "./TypewriterHeroLines";

type CaseStudyHeroProps = {
  id: string;
  lines: { text: string; color: "default" | "accent" }[];
  subtitle: string;
  meta: CaseStudyMeta[];
  layout?: "centered" | "split";
  eyebrow?: string;
  imageAlt?: string;
  imageSrc?: string;
};

function MetaIcon({ type, color }: { type: CaseStudyMetaIcon; color: string }) {
  const className = "h-5 w-5";

  switch (type) {
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 19c0-3 2.7-5 6-5" strokeLinecap="round" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15 19c.3-2 1.8-3.5 4-3.5" strokeLinecap="round" />
        </svg>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
        </svg>
      );
  }
}

function MetaCard({
  item,
  index,
}: {
  item: CaseStudyMeta;
  index: number;
}) {
  const theme = useCaseStudyTheme();
  const icon = item.icon ?? "monitor";
  const isWide = item.label === "Team";

  return (
    <CaseStudyReveal delay={0.06 + index * 0.04} y={20}>
      <div
        className={`flex min-w-0 items-center gap-3 rounded-xl border bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] ${isWide ? "sm:col-span-2" : ""}`}
        style={{ borderColor: theme.primaryBorder }}
      >
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: theme.primaryLight }}
        >
          <MetaIcon type={icon} color={theme.primary} />
        </span>
        <div className="min-w-0">
          <p className="font-display text-xs text-[#64748b]">{item.label}</p>
          <p className="font-display text-[15px] font-semibold leading-snug text-[#1e1e2f]">
            {item.value}
          </p>
        </div>
      </div>
    </CaseStudyReveal>
  );
}

function SplitHero({
  id,
  lines,
  subtitle,
  meta,
  eyebrow,
  imageAlt,
  imageSrc,
}: CaseStudyHeroProps) {
  const theme = useCaseStudyTheme();
  const [titleComplete, setTitleComplete] = useState(false);

  return (
    <section
      id={id}
      data-cursor-label="You"
      className={`scroll-mt-[180px] w-full self-stretch bg-gradient-to-br from-[#f8fafc] via-white to-[#eef6fd] pb-14 pt-[72px] md:pb-16 md:pt-20 ${caseStudySectionClass}`}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.25fr)] lg:gap-8 xl:grid-cols-[minmax(420px,0.9fr)_minmax(0,1.35fr)] xl:gap-12">
        <div className="flex flex-col gap-6 md:gap-7">
          <CaseStudyReveal y={16}>
            <p
              className="font-display text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: theme.primary }}
            >
              {eyebrow ?? "Case Study"}
            </p>
          </CaseStudyReveal>

          <TypewriterHeroLines
            lines={lines}
            accentColor={theme.primary}
            defaultColor={theme.text}
            align="left"
            onComplete={() => setTitleComplete(true)}
          />

          {titleComplete ? (
            <CaseStudyReveal y={16} delay={0}>
              <p className="max-w-[560px] font-display text-base leading-[1.65] tracking-[-0.01em] text-[#64748b] md:text-[17px]">
                {subtitle}
              </p>
            </CaseStudyReveal>
          ) : (
            <p className="max-w-[560px] font-display text-base leading-[1.65] tracking-[-0.01em] text-[#64748b] opacity-0 md:text-[17px]">
              {subtitle}
            </p>
          )}

          {titleComplete ? (
            <div className="grid max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2">
              {meta.map((item, index) => (
                <MetaCard key={item.label} item={item} index={index} />
              ))}
            </div>
          ) : null}
        </div>

        <CaseStudyHeroVisual
          imageAlt={imageAlt ?? "Project preview"}
          imageSrc={imageSrc}
        />
      </div>
    </section>
  );
}

function CenteredHero({ id, lines, subtitle, meta }: CaseStudyHeroProps) {
  const theme = useCaseStudyTheme();
  const [titleComplete, setTitleComplete] = useState(false);

  return (
    <section
      id={id}
      data-cursor-label="You"
      className={`scroll-mt-[180px] bg-white pb-14 pt-[72px] md:pt-20 ${caseStudySectionClass}`}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center gap-2">
          <TypewriterHeroLines
            lines={lines}
            accentColor={theme.primary}
            defaultColor={theme.text}
            onComplete={() => setTitleComplete(true)}
          />

          {titleComplete ? (
            <CaseStudyReveal className="max-w-[720px]" y={16} delay={0}>
              <p className="text-center font-display text-lg leading-[1.45] tracking-[0.01em] text-[#333]">
                {subtitle}
              </p>
            </CaseStudyReveal>
          ) : (
            <p className="max-w-[720px] text-center font-display text-lg leading-[1.45] tracking-[0.01em] text-[#333] opacity-0">
              {subtitle}
            </p>
          )}
        </div>

        {titleComplete ? (
          <CaseStudyReveal delay={0.08} y={32}>
            <div
              className="flex flex-wrap items-center justify-center gap-6 rounded-xl px-6 py-4 md:gap-10"
              style={{ backgroundColor: theme.primaryLight }}
            >
              {meta.map((item, index) => (
                <div key={item.label} className="flex items-center gap-6 md:gap-10">
                  {index > 0 ? (
                    <div
                      className="hidden h-8 w-px md:block"
                      style={{ backgroundColor: theme.primaryDivider }}
                      aria-hidden
                    />
                  ) : null}
                  <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
                    <p className="font-display text-sm text-black/40">{item.label}</p>
                    <p className="font-display text-sm font-medium text-black/65">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudyReveal>
        ) : null}
      </div>
    </section>
  );
}

export function CaseStudyHero(props: CaseStudyHeroProps) {
  if (props.layout === "split") {
    return <SplitHero {...props} />;
  }

  return <CenteredHero {...props} />;
}
