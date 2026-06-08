"use client";

import type { EnablementIcon, ValidationRolloutData } from "@/data/caseStudyTypes";
import {
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

function CheckItem({ children }: { children: string }) {
  const theme = useCaseStudyTheme();

  return (
    <li className="flex gap-3 text-sm leading-[1.55] text-[#64748b]">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: theme.primaryLight }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3"
          fill="none"
          stroke={theme.primary}
          strokeWidth={2.5}
        >
          <path d="M6 12l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function EnablementIconGlyph({ type, color }: { type: EnablementIcon; color: string }) {
  const className = "h-5 w-5";

  switch (type) {
    case "walkthrough":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <rect x="4" y="5" width="16" height="12" rx="2" />
          <path d="M8 9h8M8 13h5" strokeLinecap="round" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3v-4z" strokeLinejoin="round" />
        </svg>
      );
    case "guidance":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6 20c0-3.5 3.5-6 6-6s6 2.5 6 6" strokeLinecap="round" />
          <path d="M12 11v3" strokeLinecap="round" />
        </svg>
      );
  }
}

function GlobeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke={color} strokeWidth={2}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.6 2.4 14.4 0 17M12 3.5c-2.4 2.6-2.4 14.4 0 17" />
    </svg>
  );
}

function RolloutIcon({ index, color }: { index: number; color: string }) {
  const className = "h-5 w-5";

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
        <path d="M5 5h7M5 9h5M16 4v4M14 6h4M4 20l5-9 5 9M7 15h4" strokeLinecap="round" />
        <path d="M15 13c.8 2.8 2.5 4.8 5 6M20 13c-.8 2.8-2.5 4.8-5 6M14 13h7" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
        <path d="M12 3l7 3v5c0 4.8-3 8.5-7 10-4-1.5-7-5.2-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" strokeLinecap="round" />
      <circle cx="17" cy="10" r="2.3" />
      <path d="M15.5 18.5c.5-1.6 1.7-2.6 3.5-2.6" strokeLinecap="round" />
    </svg>
  );
}

function VideoArtwork({ thumbnailSrc }: { thumbnailSrc?: string }) {
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden rounded-b-lg bg-[#f7f3ef]"
      style={
        thumbnailSrc
          ? {
              backgroundImage: `url(${thumbnailSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {!thumbnailSrc ? (
        <div className="grid h-full grid-cols-[76px_1fr] bg-white">
          <div className="bg-[#111827] p-3">
            <p className="rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white">
              HPC
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {[1, 2, 3, 4].map((item) => (
                <span key={item} className="h-2 rounded-full bg-white/18" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[1fr_120px] gap-4 bg-[#fafafa] p-5">
            <div className="flex flex-col gap-2">
              <span className="h-3 w-32 rounded-full bg-[#E15A11]/20" />
              <span className="h-9 rounded bg-white shadow-sm" />
              <span className="h-9 rounded bg-white shadow-sm" />
              <span className="h-9 rounded bg-white shadow-sm" />
              <span className="mt-2 h-14 rounded bg-white shadow-sm" />
            </div>
            <div className="rounded bg-white p-3 shadow-sm">
              <span className="block h-3 w-16 rounded-full bg-[#e8edf3]" />
              <div className="mt-3 flex flex-col gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <span key={item} className="h-3 rounded-full bg-[#e8edf3]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center bg-black/5">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e1e2f]/88 text-white shadow-xl">
          <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-white">
        <span className="h-0.5 flex-1 rounded-full bg-white/35">
          <span className="block h-full w-[35%] rounded-full bg-[#E15A11]" />
        </span>
        <span className="text-[10px] font-medium text-white/85">02:16 / 06:24</span>
      </div>
    </div>
  );
}

function TrainingVideoCard({
  video,
}: {
  video: NonNullable<ValidationRolloutData["trainingVideo"]>;
}) {
  const card = (
    <div className="overflow-hidden rounded-xl border border-[#e8edf3] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
      <div className="px-4 py-3">
        <p className="font-display text-sm font-semibold text-[#1e1e2f]">
          {video.title}
        </p>
      </div>
      <VideoArtwork thumbnailSrc={video.thumbnailSrc} />
    </div>
  );

  return (
    <div>
      {video.href ? (
        <a
          href={video.href}
          target="_blank"
          rel="noreferrer"
          className="block transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E15A11]/50"
          aria-label={`Open ${video.title}`}
        >
          {card}
        </a>
      ) : (
        card
      )}
      <p className="mt-3 text-center text-xs leading-relaxed text-[#64748b]">
        {video.caption}
      </p>
    </div>
  );
}

function GuidePreviewCard({
  card,
}: {
  card: NonNullable<ValidationRolloutData["trainingGuides"]>["cards"][number];
}) {
  if (card.imageSrc) {
    return (
      <div className="group overflow-hidden rounded-xl border border-[#e8edf3] bg-white shadow-[0_12px_26px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.10)]">
        <div
          className="aspect-[16/10] bg-[#fbfcfd]"
          style={{
            backgroundImage: `url(${card.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />
        <div className="flex items-center gap-2 border-t border-[#edf1f5] p-3">
          <span
            className="rounded px-2 py-1 text-[10px] font-bold text-white"
            style={{ backgroundColor: card.color }}
          >
            {card.step}
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold leading-tight text-[#1e1e2f]">
              {card.title}
            </p>
            <p className="mt-0.5 truncate text-[10px] font-medium" style={{ color: card.color }}>
              {card.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#e8edf3] bg-white shadow-[0_12px_26px_rgba(15,23,42,0.05)]">
      <div className="flex items-start gap-2 p-4">
        <span
          className="rounded px-2 py-1 text-[10px] font-bold text-white"
          style={{ backgroundColor: card.color }}
        >
          {card.step}
        </span>
        <div>
          <p className="text-xs font-semibold leading-tight text-[#1e1e2f]">
            {card.title}
          </p>
          <p className="mt-0.5 text-[10px] font-medium" style={{ color: card.color }}>
            {card.subtitle}
          </p>
        </div>
      </div>
      <div
        className="mx-4 mb-4 h-28 rounded-md border border-[#edf1f5] bg-[#fbfcfd]"
        style={
          card.imageSrc
            ? {
                backgroundImage: `url(${card.imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {!card.imageSrc ? (
          <div className="grid h-full grid-cols-[0.7fr_1fr] gap-3 p-3">
            <div className="flex flex-col gap-1.5">
              {[1, 2, 3, 4].map((item) => (
                <span key={item} className="h-2 rounded-full bg-[#dbe2ea]" />
              ))}
            </div>
            <div className="rounded border border-[#dbe2ea] bg-white shadow-sm" />
          </div>
        ) : null}
      </div>
      <div className="h-3" style={{ backgroundColor: card.color }} />
    </div>
  );
}

function SubHeading({ children }: { children: string }) {
  const theme = useCaseStudyTheme();

  return (
    <h3
      className="font-display text-base font-semibold"
      style={{ color: theme.primary }}
    >
      {children}
    </h3>
  );
}

export function CaseStudyValidationRollout({
  title,
  validationTitle,
  validationItems,
  enablementTitle,
  enablementItems,
  trainingVideo,
  trainingGuides,
  challengesTitle,
  challengeItems,
}: ValidationRolloutData) {
  const theme = useCaseStudyTheme();

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <CaseStudySurface>
          <CaseStudySectionHeading title={title} />

          <div className="mt-8 grid grid-cols-1 gap-7 border-b border-[#e8edf3] pb-8 lg:grid-cols-[1fr_1fr_1.55fr] lg:gap-8">
            <div className="flex flex-col gap-4">
              <SubHeading>{validationTitle}</SubHeading>
              <ul className="flex flex-col gap-3">
                {validationItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-[#e8edf3] lg:border-l lg:pl-8">
              <SubHeading>{enablementTitle}</SubHeading>
              <ul className="flex flex-col gap-3">
                {enablementItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-3 text-sm leading-[1.55] text-[#64748b]"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"
                      style={{ color: theme.primary }}
                    >
                      <EnablementIconGlyph type={item.icon} color={theme.primary} />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {trainingVideo ? (
              <TrainingVideoCard video={trainingVideo} />
            ) : null}
          </div>

          {trainingGuides ? (
            <div className="mt-6 rounded-xl border border-[#e8edf3] bg-[#fbfcfd] p-5 md:p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr] lg:items-center">
                <div>
                  <h3 className="font-display text-base font-semibold text-[#1e1e2f]">
                    {trainingGuides.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.55] text-[#64748b]">
                    {trainingGuides.description}
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    {trainingGuides.languages.map((language) => (
                      <span
                        key={language.label}
                        className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                        style={{
                          backgroundColor: `${language.color}12`,
                          color: language.color,
                        }}
                      >
                        <GlobeIcon color={language.color} />
                        {language.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {trainingGuides.cards.map((card) => (
                    <GuidePreviewCard key={card.step} card={card} />
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-6 rounded-xl border border-[#f1d7c8] bg-white p-5">
            <SubHeading>{challengesTitle}</SubHeading>
            <ul className="mt-4 grid grid-cols-1 gap-0 md:grid-cols-3">
              {challengeItems.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-[#e8edf3] py-3 text-sm leading-[1.45] text-[#64748b] md:border-l md:px-8 first:md:border-l-0 first:md:pl-0"
                >
                  <span className="mt-0.5 shrink-0" style={{ color: theme.primary }}>
                    <RolloutIcon index={index} color={theme.primary} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CaseStudySurface>
      </CaseStudyReveal>
    </section>
  );
}
