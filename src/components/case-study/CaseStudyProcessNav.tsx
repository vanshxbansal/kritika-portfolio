"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcessNavData } from "@/data/caseStudyTypes";
import {
  CASE_STUDY_PROCESS_STICKY_TOP,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { PROCESS_EASE, ProcessPhaseIcon } from "./processPhases";
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
      className={`sticky z-30 w-full self-stretch ${caseStudySectionClass}`}
      style={{ top: CASE_STUDY_PROCESS_STICKY_TOP }}
    >
      <div className="rounded-xl border border-[#e8edf3] bg-white/95 px-3 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.05)] backdrop-blur-md md:px-5 md:py-2.5">
        <div className="overflow-x-auto overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative mx-auto min-w-[640px] max-w-[960px]">
            <div className="absolute left-[8%] right-[8%] top-5 h-px" aria-hidden>
              <div className="absolute inset-0 bg-[#dbe4ee]" />
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ backgroundColor: theme.primary }}
                animate={{ width: lineProgress }}
                transition={{ duration: 0.5, ease: PROCESS_EASE }}
              />
            </div>

            <div className="grid grid-cols-6 gap-1 md:gap-2">
              {phases.map((phase, index) => {
                const visible = step > index;
                const active = step === index + 1;
                const completed = step > index + 1;

                return (
                  <button
                    key={phase.title}
                    type="button"
                    onClick={() => scrollToPhase(index)}
                    className="group flex flex-col items-center gap-1 border-0 bg-transparent p-0 text-center"
                    aria-current={active ? "step" : undefined}
                  >
                    <span className="relative z-[1] flex h-10 w-full items-center justify-center">
                      <motion.span
                        className="flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-shadow md:h-9 md:w-9"
                        style={{
                          borderColor: visible ? phase.color : `${phase.color}33`,
                          boxShadow: active
                            ? `0 0 0 3px ${phase.color}18`
                            : completed
                              ? `0 4px 10px ${phase.color}16`
                              : undefined,
                        }}
                        animate={{
                          scale: active ? 1.06 : 1,
                          opacity: visible ? 1 : 0.45,
                        }}
                        transition={{ duration: 0.35, ease: PROCESS_EASE }}
                      >
                        <ProcessPhaseIcon index={index} color={phase.color} />
                      </motion.span>
                    </span>

                    <span
                      className={`max-w-[88px] font-display text-[9px] font-medium leading-snug transition-colors md:max-w-[96px] md:text-[10px] ${
                        active
                          ? "text-[#1e1e2f]"
                          : visible
                            ? "text-[#64748b] group-hover:text-[#1e1e2f]/80"
                            : "text-[#94a3b8] group-hover:text-[#64748b]"
                      }`}
                    >
                      {phase.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
