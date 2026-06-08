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

type HpcSolutionWalkthroughSectionProps = SolutionWalkthroughData;

type WalkthroughPreview = {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  imageSrc: string;
};

const walkthroughPreviews: WalkthroughPreview[] = [
  {
    title: "Platform Dashboard",
    eyebrow: "Overview",
    description: "Role-based progress, pending assessments, and school-level status.",
    accent: "#E15A11",
    imageSrc: "/hpc/solution/status-dashboard.png",
  },
  {
    title: "Assessment Forms",
    eyebrow: "Parts A-C",
    description: "Structured competency entries across academic and life skill domains.",
    accent: "#F97316",
    imageSrc: "/hpc/solution/general-information.png",
  },
  {
    title: "Student Progress",
    eyebrow: "Learner View",
    description: "Stage-wise profile, reflections, and holistic growth indicators.",
    accent: "#EA580C",
    imageSrc: "/hpc/solution/part-a2-profile.png",
  },
  {
    title: "Report Generation",
    eyebrow: "Outputs",
    description: "Consistent Holistic Progress Card exports across schools.",
    accent: "#C2410C",
    imageSrc: "/hpc/solution/part-c-summary.png",
  },
  {
    title: "Admin Oversight",
    eyebrow: "Monitoring",
    description: "National and regional visibility into completion and adoption.",
    accent: "#9A3412",
    imageSrc: "/hpc/solution/admin-dashboard.png",
  },
  {
    title: "Learning Standards",
    eyebrow: "Competencies",
    description: "Learning standards, curricular goals, and competencies grouped in structured inputs.",
    accent: "#E15A11",
    imageSrc: "/hpc/solution/learning-standards.png",
  },
  {
    title: "Assessment Rubric",
    eyebrow: "Evaluation",
    description: "Rubric-based evaluation with beginner, proficient, and advanced descriptors.",
    accent: "#F97316",
    imageSrc: "/hpc/solution/assessment-rubric.png",
  },
  {
    title: "Self Assessment",
    eyebrow: "Student Input",
    description: "Student-friendly self assessment using visual response options.",
    accent: "#EA580C",
    imageSrc: "/hpc/solution/self-assessment.png",
  },
  {
    title: "Part A(3) Reflection",
    eyebrow: "Student Reflection",
    description: "Student, peer, and parent reflection inputs using visual response patterns.",
    accent: "#C2410C",
    imageSrc: "/hpc/solution/part-a3-reflection.png",
  },
  {
    title: "Activity Questions",
    eyebrow: "Activities",
    description: "Activity instructions and assessment questions captured in one flow.",
    accent: "#9A3412",
    imageSrc: "/hpc/solution/activity-assessment-questions.png",
  },
  {
    title: "HPC Credit",
    eyebrow: "Credits",
    description: "Credit summary and subject-wise performance levels for academic reporting.",
    accent: "#9A3412",
    imageSrc: "/hpc/solution/hpc-credit.png",
  },
  {
    title: "Student Home",
    eyebrow: "Student Portal",
    description: "Student-facing entry point for filling HPC and viewing reports.",
    accent: "#E15A11",
    imageSrc: "/hpc/solution/student-home.png",
  },
  {
    title: "Regional Admin",
    eyebrow: "User Management",
    description: "Role-based administration for regional users and permissions.",
    accent: "#F97316",
    imageSrc: "/hpc/solution/regional-admin-management.png",
  },
  {
    title: "Teacher Management",
    eyebrow: "Admin",
    description: "Teacher records, filters, and school-level management controls.",
    accent: "#EA580C",
    imageSrc: "/hpc/solution/teacher-management.png",
  },
  {
    title: "Activity Bank",
    eyebrow: "Content Setup",
    description: "Admin workflows for creating activities and mapping them to stages and grades.",
    accent: "#C2410C",
    imageSrc: "/hpc/solution/activity-details-admin.png",
  },
  {
    title: "Domain Mapping",
    eyebrow: "Competency Setup",
    description: "Curricular goals and competencies configured for the global activity bank.",
    accent: "#9A3412",
    imageSrc: "/hpc/solution/domain-competencies-admin.png",
  },
  {
    title: "Email Templates",
    eyebrow: "Administration",
    description: "Reusable templates and settings for platform communication.",
    accent: "#E15A11",
    imageSrc: "/hpc/solution/email-templates.png",
  },
];

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
  return (
    <div className="overflow-hidden rounded-lg border border-[#f2d1bd] bg-white shadow-[0_10px_25px_rgba(225,90,17,0.08)]">
      <div className="flex items-center gap-1.5 border-b border-[#f7dfd1] bg-[#fff8f3] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E15A11]/45" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#E15A11]/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#E15A11]/20" />
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
    <div className={`relative overflow-hidden rounded-lg border border-[#f7dfd1] bg-white ${compact ? "aspect-[16/10] min-h-[128px]" : "aspect-[16/10] min-h-[340px]"}`}>
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
      className="group block w-full cursor-zoom-in rounded-lg text-left outline-none transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#E15A11]/60"
      onClick={() => onOpen(index)}
      aria-label={`Open ${preview.title} fullscreen`}
    >
      <PreviewChrome compact={!featured}>
        <PlaceholderArtwork preview={preview} compact={!featured} />
      </PreviewChrome>
    </button>
  );
}

function MoreScreensButton({ onOpen, count }: { onOpen: () => void; count: number }) {
  return (
    <button
      type="button"
      className="flex min-h-[110px] w-full cursor-zoom-in flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#8b350c] via-[#6b2607] to-[#2b170f] p-3 text-center text-white shadow-[0_12px_24px_rgba(43,23,15,0.22)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E15A11]/60"
      onClick={onOpen}
      aria-label="Open more walkthrough screens"
    >
      <p className="font-display text-xl font-semibold">+{count}</p>
      <p className="mt-1 text-xs text-white/75">More Screens</p>
      <p className="mt-1.5 text-[9px] uppercase tracking-[0.12em] text-white/45">Click to preview</p>
    </button>
  );
}

function VisualPlaceholders({ onOpen }: { onOpen: (index: number) => void }) {
  const remainingCount = Math.max(walkthroughPreviews.length - 4, 0);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
      <PreviewButton
        preview={walkthroughPreviews[0]}
        index={0}
        onOpen={onOpen}
        featured
      />
      <div className="grid grid-cols-2 gap-4">
        {walkthroughPreviews.slice(1, 4).map((preview, index) => (
          <PreviewButton
            key={preview.title}
            preview={preview}
            index={index + 1}
            onOpen={onOpen}
          />
        ))}
        <MoreScreensButton onOpen={() => onOpen(4)} count={remainingCount} />
      </div>
    </div>
  );
}

function LightboxPlaceholder({ preview }: { preview: WalkthroughPreview }) {
  return (
    <div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-[#f2d1bd] bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-[#f7dfd1] bg-[#fff8f3] px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E15A11]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E15A11]/32" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E15A11]/20" />
        <p className="ml-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#E15A11]/60">
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
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <button
          type="button"
          className="absolute left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl text-[#E15A11] shadow-xl transition hover:bg-white md:flex"
          onClick={() => onChange(previousIndex)}
          aria-label="Previous walkthrough screen"
        >
          ‹
        </button>
        <LightboxPlaceholder preview={preview} />
        <button
          type="button"
          className="absolute right-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl text-[#E15A11] shadow-xl transition hover:bg-white md:flex"
          onClick={() => onChange(nextIndex)}
          aria-label="Next walkthrough screen"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
        <button
          type="button"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#E15A11]"
          onClick={() => onChange(previousIndex)}
        >
          Previous
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#E15A11]"
          onClick={() => onChange(nextIndex)}
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {walkthroughPreviews.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
              index === activeIndex
                ? "border-white bg-white text-[#E15A11]"
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

export function HpcSolutionWalkthroughSection({
  eyebrow,
  title,
  description,
  bullets,
}: HpcSolutionWalkthroughSectionProps) {
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
            </div>

            <VisualPlaceholders onOpen={setActivePreviewIndex} />
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
