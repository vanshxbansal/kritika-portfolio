"use client";

import type {
  ExecutiveSummaryCard,
  ExecutiveSummaryCardIcon,
  ExecutiveSummaryData,
} from "@/data/caseStudyTypes";
import {
  CaseStudyCard,
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";

type CaseStudyExecutiveSummaryProps = ExecutiveSummaryData;

function CardIcon({ type, color }: { type: ExecutiveSummaryCardIcon; color: string }) {
  const className = "h-5 w-5";

  switch (type) {
    case "problem":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" strokeLinecap="round" />
        </svg>
      );
    case "solution":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M12 2l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 7.2l5-.7L12 2z" />
        </svg>
      );
    case "outcome":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
          <path d="M12 21s-6.5-4.2-6.5-9.5A4.5 4.5 0 0112 7.5a4.5 4.5 0 016.5 4c0 5.3-6.5 9.5-6.5 9.5z" />
        </svg>
      );
  }
}

function SummaryCard({ card, index }: { card: ExecutiveSummaryCard; index: number }) {
  return (
    <CaseStudyReveal delay={index * 0.06} y={28}>
      <CaseStudyCard className="flex h-full flex-col p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(15,23,42,0.07)] md:p-6">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${card.color}18` }}
          >
            <CardIcon type={card.icon} color={card.color} />
          </span>
          <h3
            className="font-display text-lg font-semibold"
            style={{ color: card.color }}
          >
            {card.title}
          </h3>
        </div>

        {card.intro ? (
          <p className="mb-3 text-sm font-medium text-[#1e1e2f]/80">{card.intro}</p>
        ) : null}

        <ul className="flex flex-col gap-2.5">
          {card.items.map((item, itemIndex) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-[1.55] text-[#64748b]"
            >
              {card.icon === "outcome" && itemIndex === 0 ? (
                <span className="mt-0.5 shrink-0" style={{ color: card.color }} aria-hidden>
                  ↗
                </span>
              ) : (
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: card.color }}
                />
              )}
              {item}
            </li>
          ))}
        </ul>
      </CaseStudyCard>
    </CaseStudyReveal>
  );
}

export function CaseStudyExecutiveSummary({
  title,
  cards,
}: CaseStudyExecutiveSummaryProps) {
  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <CaseStudySurface>
          <CaseStudySectionHeading title={title} className="mb-8 md:mb-10" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {cards.map((card, index) => (
              <SummaryCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </CaseStudySurface>
      </CaseStudyReveal>
    </section>
  );
}
