"use client";

import type { ReactNode } from "react";
import type {
  DesigningBeyondSpreadsheetsData,
  PlatformRoleItem,
  SystemArchitectureData,
} from "@/data/caseStudyTypes";
import { CaseStudyReveal, caseStudySectionClass } from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

function PanelHeading({
  sectionNumber,
  title,
}: {
  sectionNumber?: string;
  title: string;
}) {
  return (
    <h2 className="font-display text-[26px] font-semibold leading-tight text-[#1e1e2f]">
      {sectionNumber ? `${sectionNumber}. ${title}` : title}
    </h2>
  );
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

export function CaseStudyDesigningBeyondSpreadsheets({
  sectionNumber,
  title,
  challenge,
  evolution,
}: DesigningBeyondSpreadsheetsData) {
  const theme = useCaseStudyTheme();

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <div className="rounded-2xl border border-[#e8edf3] bg-[#fafbfc] p-6 md:p-8 lg:p-10">
          <PanelHeading sectionNumber={sectionNumber} title={title} />

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
        </div>
      </CaseStudyReveal>
    </section>
  );
}

export function CaseStudySystemArchitecture({
  sectionNumber,
  title,
  rolesTitle,
  roles,
  workflowTitle,
  workflowSteps,
}: SystemArchitectureData) {
  const theme = useCaseStudyTheme();

  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal delay={0.04}>
        <div className="rounded-2xl border border-[#e8edf3] bg-[#fafbfc] p-6 md:p-8 lg:p-10">
          <PanelHeading sectionNumber={sectionNumber} title={title} />

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
        </div>
      </CaseStudyReveal>
    </section>
  );
}
