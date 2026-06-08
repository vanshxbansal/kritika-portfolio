"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type {
  DesigningBeyondSpreadsheetsData,
  PlatformRoleItem,
  SystemArchitectureData,
} from "@/data/caseStudyTypes";
import {
  CaseStudyCard,
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

function PanelHeading({ title }: { title: string }) {
  return <CaseStudySectionHeading title={title} />;
}

function SubHeading({ children }: { children: ReactNode }) {
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

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-[1.55] text-[#64748b]">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: color }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoleRow({ role }: { role: PlatformRoleItem }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#e8edf3] bg-white px-4 py-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${role.color}14` }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke={role.color}
          strokeWidth={2}
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
        </svg>
      </span>
      <p className="font-display text-sm font-medium text-[#1e1e2f]">{role.name}</p>
    </div>
  );
}

function HpcTransformationVisual({ color }: { color: string }) {
  return (
    <div className="relative grid min-h-[310px] w-full items-center gap-5 overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 md:grid-cols-[1fr_auto_1fr] md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(225,90,17,0.10),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(225,90,17,0.08),transparent_30%)]" />

      <div className="relative z-10">
        <p className="mb-3 text-center font-display text-sm font-semibold" style={{ color }}>
          Paper-based HPC
        </p>
        <div className="relative mx-auto h-[255px] max-w-[250px]">
          <div className="absolute left-5 top-5 h-[220px] w-[178px] rotate-[-5deg] rounded-xl border border-[#f1d7c8] bg-white shadow-[0_18px_30px_rgba(15,23,42,0.08)]" />
          <div className="absolute left-11 top-8 h-[220px] w-[178px] rotate-[4deg] rounded-xl border border-[#f1d7c8] bg-[#fffaf6] shadow-[0_18px_30px_rgba(15,23,42,0.08)]" />
          <div className="absolute left-7 top-0 h-[245px] w-[198px] overflow-hidden rounded-xl border border-[#f1d7c8] bg-white p-2 shadow-[0_22px_36px_rgba(15,23,42,0.12)]">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
              <Image
                src="/hpc/problem-context/paper-part-b.png"
                alt="Original paper-based HPC Part B form"
                fill
                className="object-contain object-top"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <span
          className="grid h-14 w-14 place-items-center rounded-full border text-2xl shadow-[0_12px_24px_rgba(225,90,17,0.16)]"
          style={{ borderColor: `${color}33`, backgroundColor: `${color}12`, color }}
          aria-hidden
        >
          →
        </span>
      </div>

      <div className="relative z-10">
        <p className="mb-3 text-center font-display text-sm font-semibold" style={{ color }}>
          Digital HPC
        </p>
        <div className="relative mx-auto h-[255px] max-w-[330px]">
          <div className="absolute right-0 top-3 h-[175px] w-[286px] overflow-hidden rounded-2xl border border-[#f1d7c8] bg-white p-2 shadow-[0_22px_38px_rgba(15,23,42,0.12)]">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#fffaf6]">
              <Image
                src="/hpc/problem-context/digital-rubric.png"
                alt="Digital HPC assessment rubric screen"
                fill
                className="object-cover object-top"
                sizes="330px"
              />
            </div>
          </div>

          <div className="absolute left-0 top-[74px] h-[118px] w-[205px] overflow-hidden rounded-2xl border border-[#f1d7c8] bg-white p-2 shadow-[0_18px_30px_rgba(15,23,42,0.13)]">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#fffaf6]">
              <Image
                src="/hpc/problem-context/digital-observational-notes.png"
                alt="Digital HPC observational notes screen"
                fill
                className="object-cover object-top"
                sizes="240px"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export function CaseStudyDesigningBeyondSpreadsheets({
  title,
  context,
  challenge,
  evolution,
}: DesigningBeyondSpreadsheetsData) {
  const theme = useCaseStudyTheme();

  if (context) {
    const userSection = context.sections?.find((section) => section.title === "Who are the users");
    const overviewSections = context.sections?.filter(
      (section) => section.title !== "Who are the users",
    );

    return (
      <section className={caseStudySectionClass}>
        <CaseStudyReveal>
          <CaseStudySurface className="relative overflow-hidden !p-5 md:!p-6 lg:!p-7">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
              style={{ backgroundColor: `${theme.primary}14` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-28 left-10 h-48 w-48 rounded-full blur-3xl"
              style={{ backgroundColor: `${theme.primary}10` }}
              aria-hidden
            />

            <div className="relative z-10">
              <PanelHeading title={title} />

              <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5">
              <div className="flex flex-col gap-4">
                <CaseStudyCard className="border-[#f1d7c8] bg-gradient-to-br from-white to-[#fff8f3] p-4 shadow-[0_16px_40px_rgba(225,90,17,0.06)] md:p-5">
                  {overviewSections?.length ? (
                    <div className="flex flex-col gap-4">
                      {overviewSections.map((section) => (
                        <div key={section.title} className="flex gap-3">
                          <span
                            className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_0_5px_rgba(225,90,17,0.08)]"
                            style={{ backgroundColor: theme.primary }}
                            aria-hidden
                          />
                          <div className="flex flex-col gap-1.5">
                            <h3
                              className="font-display text-sm font-semibold"
                              style={{ color: theme.primary }}
                            >
                              {section.title}
                            </h3>
                            <p className="font-display text-sm leading-[1.6] tracking-[-0.01em] text-[#64748b] md:text-[15px]">
                              {section.body}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {context.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="font-display text-sm leading-[1.6] tracking-[-0.01em] text-[#64748b] md:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </CaseStudyCard>

                <CaseStudyCard className="border-[#f1d7c8] bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.04)] md:p-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3l9 16H3L12 3Z" />
                        <path d="M12 9v4M12 17h.01" />
                      </svg>
                    </span>
                    <h3 className="font-display text-base font-semibold text-[#1e1e2f]">
                      {context.issuesTitle}
                    </h3>
                  </div>

                  <BulletList items={context.issues} color={theme.primary} />
                </CaseStudyCard>
              </div>

              <div className="flex flex-col gap-4">
                <CaseStudyCard className="overflow-hidden border-[#f1d7c8] bg-gradient-to-br from-white via-[#fffaf6] to-[#fff3ea] p-3 shadow-[0_18px_46px_rgba(225,90,17,0.08)] md:p-4">
                  <HpcTransformationVisual color={theme.primary} />
                </CaseStudyCard>

                {userSection ? (
                  <CaseStudyCard className="border-[#f1d7c8] bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.04)] md:p-5">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                        style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                        aria-hidden
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="17" cy="9" r="2.5" />
                          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                          <path d="M14.5 15.5A5.8 5.8 0 0 1 21 20" />
                        </svg>
                      </span>
                      <h3 className="font-display text-base font-semibold text-[#1e1e2f]">
                        {userSection.title}
                      </h3>
                    </div>

                    {userSection.items?.length ? (
                      <div className="flex flex-wrap gap-2 xl:flex-nowrap">
                        {userSection.items.map((item) => (
                          <span
                            key={item}
                            className="whitespace-nowrap rounded-full border px-3 py-1.5 font-display text-xs font-semibold"
                            style={{
                              borderColor: theme.primaryBorder,
                              backgroundColor: theme.primaryLight,
                              color: theme.primary,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </CaseStudyCard>
                ) : null}
              </div>
              </div>
            </div>
          </CaseStudySurface>
        </CaseStudyReveal>
      </section>
    );
  }

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <CaseStudySurface>
          <PanelHeading title={title} />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-3">
              <SubHeading>{challenge.title}</SubHeading>
              <p className="text-sm text-[#64748b]">{challenge.intro}</p>
              <BulletList items={challenge.items} color={theme.primary} />
            </div>
            <div className="flex flex-col gap-3">
              <SubHeading>{evolution.title}</SubHeading>
              <BulletList items={evolution.items} color={theme.primary} />
            </div>
          </div>
        </CaseStudySurface>
      </CaseStudyReveal>
    </section>
  );
}

export function CaseStudySystemArchitecture({
  title,
  approach,
  rolesTitle,
  roles,
  workflowTitle,
  workflowSteps,
}: SystemArchitectureData) {
  const theme = useCaseStudyTheme();

  if (approach) {
    return (
      <section className={caseStudySectionClass}>
        <CaseStudyReveal delay={0.04}>
          <CaseStudySurface className="!p-5 md:!p-6 lg:!p-7">
            <PanelHeading title={title} />

            <CaseStudyCard className="mt-5 bg-white p-4 md:p-5">
              <p className="font-display text-sm leading-[1.6] tracking-[-0.01em] text-[#64748b] md:text-[15px]">
                {approach.intro}
              </p>

              <div className="mt-3 md:mt-4">
                <BulletList items={approach.items} color={theme.primary} />
              </div>
            </CaseStudyCard>
          </CaseStudySurface>
        </CaseStudyReveal>
      </section>
    );
  }

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal delay={0.04}>
        <CaseStudySurface>
          <PanelHeading title={title} />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-4">
              <SubHeading>{rolesTitle}</SubHeading>
              <div className="flex flex-col gap-2.5">
                {roles.map((role) => (
                  <RoleRow key={role.name} role={role} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <SubHeading>{workflowTitle}</SubHeading>
              <div className="flex flex-col gap-2.5">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3.5"
                    style={{ borderColor: theme.primaryBorder }}
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-white"
                      style={{ backgroundColor: theme.primary }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-display text-sm font-semibold text-[#1e1e2f]">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[#64748b]">({step.details})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CaseStudySurface>
      </CaseStudyReveal>
    </section>
  );
}
