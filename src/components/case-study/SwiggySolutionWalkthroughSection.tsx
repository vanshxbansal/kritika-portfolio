"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import type { SolutionWalkthroughData } from "@/data/caseStudyTypes";
import {
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type SwiggySolutionWalkthroughSectionProps = SolutionWalkthroughData;

type WalkthroughPreview = {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  imageSrc: string;
};

const walkthroughPreviews: WalkthroughPreview[] = [
  {
    title: "Home Screen",
    eyebrow: "Task-first IA",
    description: "Today's progress, earnings snapshot, incentive status, and active order at a glance.",
    accent: "#FC8019",
    imageSrc: "/swiggy-delivery-partner/solution/home-screen.png",
  },
  {
    title: "Earnings Screen",
    eyebrow: "Financial",
    description: "Unified dashboard with today's earnings, weekly trends, settlement, and floating cash.",
    accent: "#F97316",
    imageSrc: "/swiggy-delivery-partner/solution/earnings-screen.png",
  },
  {
    title: "Incentive Screen",
    eyebrow: "Progress",
    description: "Active incentive card, trip tracker, eligibility rules, and previous incentives.",
    accent: "#EA580C",
    imageSrc: "/swiggy-delivery-partner/solution/incentive-screen.png",
  },
  {
    title: "Smart Order Card",
    eyebrow: "Decision",
    description: "Earnings, distance, time, and bonus consolidated before Accept/Skip.",
    accent: "#C2410C",
    imageSrc: "/swiggy-delivery-partner/solution/order-card.png",
  },
];

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/9pSDooxtyrNiyjt352rMiY/Swiggy-Rider-App-Redesign?starting-point-node-id=33%3A944";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke={color}
      strokeWidth={2.4}
      aria-hidden
    >
      <path d="M5 12.5l4.2 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PreviewChrome({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  const theme = useCaseStudyTheme();

  return (
    <div
      className="overflow-hidden rounded-lg border bg-white shadow-sm"
      style={{ borderColor: theme.primaryBorder }}
    >
      <div
        className="flex items-center gap-1.5 border-b px-3 py-2"
        style={{ borderColor: theme.primaryBorder, backgroundColor: theme.primaryLight }}
      >
        <span className="h-1.5 w-1.5 rounded-full opacity-45" style={{ backgroundColor: theme.primary }} />
        <span className="h-1.5 w-1.5 rounded-full opacity-30" style={{ backgroundColor: theme.primary }} />
        <span className="h-1.5 w-1.5 rounded-full opacity-20" style={{ backgroundColor: theme.primary }} />
      </div>
      <div className={compact ? "p-3" : "p-4"}>{children}</div>
    </div>
  );
}

function PlaceholderArtwork({
  preview,
  compact = false,
}: {
  preview: WalkthroughPreview;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[#f7dfd1] bg-white ${compact ? "aspect-[16/10] min-h-[128px]" : "aspect-[16/10] min-h-[340px]"}`}
    >
      <Image
        src={preview.imageSrc}
        alt={preview.title}
        fill
        className="object-contain object-top transition duration-300 group-hover:scale-[1.01]"
        sizes={compact ? "(max-width: 1024px) 50vw, 380px" : "(max-width: 1024px) 100vw, 760px"}
        quality={100}
        unoptimized
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-3 pb-3 pt-12 text-white">
        <p className="font-display text-xs font-semibold">{preview.title}</p>
        {!compact ? <p className="mt-1 text-[11px] text-white/78">{preview.eyebrow}</p> : null}
      </div>
    </div>
  );
}

function PreviewButton({
  preview,
  index,
  onOpen,
  featured = false,
}: {
  preview: WalkthroughPreview;
  index: number;
  onOpen: (index: number) => void;
  featured?: boolean;
}) {
  return (
    <button
      type="button"
      className="group block w-full cursor-zoom-in rounded-lg text-left outline-none transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#FC8019]/60"
      onClick={() => onOpen(index)}
      aria-label={`Open ${preview.title} fullscreen`}
    >
      <PreviewChrome compact={!featured}>
        <PlaceholderArtwork preview={preview} compact={!featured} />
      </PreviewChrome>
    </button>
  );
}

function WalkthroughLightbox({
  activeIndex,
  onClose,
  onChange,
}: {
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const theme = useCaseStudyTheme();

  if (activeIndex === null) return null;

  const preview = walkthroughPreviews[activeIndex];
  const previousIndex =
    activeIndex === 0 ? walkthroughPreviews.length - 1 : activeIndex - 1;
  const nextIndex =
    activeIndex === walkthroughPreviews.length - 1 ? 0 : activeIndex + 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#1b0f0a]/92 px-4 py-5 backdrop-blur-sm md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${preview.title} fullscreen preview`}
    >
      <div className="mb-4 flex items-center justify-between gap-4 text-white">
        <div>
          <p className="font-display text-xl font-semibold">{preview.title}</p>
          <p className="mt-1 text-sm text-white/60">
            {activeIndex + 1} / {walkthroughPreviews.length}
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <button
          type="button"
          className="absolute left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl shadow-xl md:flex"
          style={{ color: theme.primary }}
          onClick={() => onChange(previousIndex)}
          aria-label="Previous screen"
        >
          ‹
        </button>
        <div
          className="w-full max-w-6xl overflow-hidden rounded-2xl border bg-white shadow-2xl"
          style={{ borderColor: theme.primaryBorder }}
        >
          <div
            className="flex items-center gap-2 border-b px-5 py-4"
            style={{ borderColor: theme.primaryBorder, backgroundColor: theme.primaryLight }}
          >
            <p className="ml-3 text-xs font-semibold uppercase tracking-[0.12em] opacity-60" style={{ color: theme.primary }}>
              {preview.eyebrow}
            </p>
          </div>
          <div className="bg-[#fffaf6] p-3 md:p-5">
            <div className="relative h-[min(76vh,820px)] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={preview.imageSrc}
                alt={preview.title}
                fill
                className="object-contain object-center"
                sizes="100vw"
                quality={100}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="absolute right-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl shadow-xl md:flex"
          style={{ color: theme.primary }}
          onClick={() => onChange(nextIndex)}
          aria-label="Next screen"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {walkthroughPreviews.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
              index === activeIndex
                ? "border-white bg-white text-[#FC8019]"
                : "border-white/20 text-white/65 hover:bg-white/10"
            }`}
            onClick={() => onChange(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SwiggySolutionWalkthroughSection({
  eyebrow,
  title,
  description,
  bullets,
}: SwiggySolutionWalkthroughSectionProps) {
  const theme = useCaseStudyTheme();
  const [activePreviewIndex, setActivePreviewIndex] = useState<number | null>(null);

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <CaseStudySurface className="overflow-hidden">
          <CaseStudySectionHeading title={eyebrow} className="mb-6" />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.55fr] lg:items-center">
            <div className="flex max-w-[430px] flex-col items-start">
              <h3 className="font-display text-xl font-semibold leading-tight text-[#1e1e2f] md:text-[22px]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-[1.55] tracking-[-0.01em] text-[#1e1e2f]/62">
                {description}
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-snug text-[#1e1e2f]/72">
                    <span className="mt-0.5 shrink-0">
                      <CheckIcon color={theme.primary} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href={FIGMA_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: theme.primary }}
              >
                Open Figma Prototype
                <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {walkthroughPreviews.map((preview, index) => (
                <PreviewButton
                  key={preview.title}
                  preview={preview}
                  index={index}
                  onOpen={setActivePreviewIndex}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </CaseStudySurface>
      </CaseStudyReveal>

      <WalkthroughLightbox
        activeIndex={activePreviewIndex}
        onClose={() => setActivePreviewIndex(null)}
        onChange={setActivePreviewIndex}
      />
    </section>
  );
}
