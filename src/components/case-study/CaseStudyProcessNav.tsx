"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcessNavData } from "@/data/caseStudyTypes";
import {
  CASE_STUDY_PROCESS_STICKY_TOP,
} from "./CaseStudyReveal";
import { PROCESS_EASE } from "./processPhases";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type CaseStudyProcessNavProps = ProcessNavData;

export function CaseStudyProcessNav({ phases, anchors }: CaseStudyProcessNavProps) {
  const theme = useCaseStudyTheme();
  const [activePhase, setActivePhase] = useState(-1);
  const isScrollingRef = useRef(false);

  const stepCount = phases.length;
  const step = activePhase + 1;

  const lineProgress =
    stepCount <= 1 || step <= 0
      ? "0%"
      : step <= 1
        ? "0%"
        : `${((step - 1) / (stepCount - 1)) * 100}%`;

  useEffect(() => {
    const visiblePhases = new Set<number>();

    const syncActivePhase = () => {
      if (isScrollingRef.current) return;
      if (visiblePhases.size === 0) {
        setActivePhase(-1);
        return;
      }
      setActivePhase(Math.max(...visiblePhases));
    };

    const observers: IntersectionObserver[] = [];

    anchors.forEach((anchor) => {
      const el = document.getElementById(anchor.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visiblePhases.add(anchor.phase);
          } else {
            visiblePhases.delete(anchor.phase);
          }
          syncActivePhase();
        },
        { rootMargin: "-22% 0px -58% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [anchors]);

  const scrollToPhase = useCallback(
    (phase: number) => {
      const target = anchors.find((anchor) => anchor.phase === phase);
      const el = target ? document.getElementById(target.id) : null;
      if (!el) return;

      isScrollingRef.current = true;
      setActivePhase(phase);

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    },
    [anchors],
  );

  return (
    <div
      className="sticky z-30 -mt-16 w-full self-stretch md:-mt-20"
      style={{ top: CASE_STUDY_PROCESS_STICKY_TOP }}
    >
      <div className="w-full border-y border-[#f1d7c8] bg-white/90 px-2 py-1.5 shadow-[0_10px_35px_rgba(225,90,17,0.08)] backdrop-blur-xl md:px-3">
        <div className="overflow-x-auto overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative w-full min-w-[720px] lg:min-w-0">
            <div className="absolute left-[7%] right-[7%] top-1/2 h-px -translate-y-1/2" aria-hidden>
              <div className="absolute inset-0 bg-[#f1d7c8]" />
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ backgroundColor: theme.primary }}
                animate={{ width: lineProgress }}
                transition={{ duration: 0.5, ease: PROCESS_EASE }}
              />
            </div>

            <div
              className="relative grid w-full gap-2"
              style={{ gridTemplateColumns: `repeat(${stepCount}, minmax(0, 1fr))` }}
            >
              {phases.map((phase, index) => {
                const visible = step > index;
                const active = step === index + 1;
                const completed = step > index + 1;
                const displayTitle = phase.shortTitle ?? phase.title;
                const expandedLabel = [
                  `${String(index + 1).padStart(2, "0")} ${displayTitle}`,
                  phase.summary,
                  ...(phase.details ?? []),
                ]
                  .filter(Boolean)
                  .join(" • ");

                return (
                  <div key={phase.title} className="group relative">
                    <button
                      type="button"
                      onClick={() => scrollToPhase(index)}
                      className={`relative z-[1] flex h-12 w-full items-center justify-center gap-2 rounded-xl border px-3 text-center transition-all ${
                        active
                          ? "text-white shadow-[0_10px_24px_rgba(225,90,17,0.28)]"
                          : visible
                            ? "bg-white text-[#1e1e2f] shadow-sm hover:-translate-y-0.5"
                            : "bg-white/90 text-[#94a3b8] hover:text-[#64748b]"
                      }`}
                      style={{
                        backgroundColor: active ? theme.primary : undefined,
                        borderColor: active
                          ? theme.primary
                          : completed
                            ? `${phase.color}55`
                            : "#e8edf3",
                      }}
                      title={expandedLabel}
                      aria-label={expandedLabel}
                      aria-current={active ? "step" : undefined}
                    >
                      <motion.span
                        className="font-display text-[11px] font-bold tracking-[0.08em]"
                        style={{ color: active ? "#fff" : phase.color }}
                        animate={{ opacity: visible ? 1 : 0.55 }}
                        transition={{ duration: 0.3, ease: PROCESS_EASE }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                      <span className="font-display text-sm font-semibold leading-none">
                        {displayTitle}
                      </span>
                    </button>

                    {phase.summary ? (
                      <div className="pointer-events-none absolute left-1/2 top-full z-40 mt-3 hidden w-64 -translate-x-1/2 rounded-xl border border-[#e8edf3] bg-white p-4 text-left shadow-[0_18px_45px_rgba(15,23,42,0.12)] group-hover:block group-focus-within:block">
                        <p className="font-display text-sm font-semibold text-[#1e1e2f]">
                          {phase.summary}
                        </p>
                        {phase.details ? (
                          <ul className="mt-3 flex flex-col gap-1.5">
                            {phase.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex gap-2 text-xs leading-snug text-[#64748b]"
                              >
                                <span
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                  style={{ backgroundColor: phase.color }}
                                />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
