"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcessNavData } from "@/data/caseStudyTypes";
import { caseStudySectionClass } from "./CaseStudyReveal";
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
    <div className={`sticky top-[68px] z-30 w-full self-stretch ${caseStudySectionClass}`}>
      <div className="rounded-2xl border border-[#e8edf3] bg-white/95 px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md md:px-6 md:py-5">
        <div className="overflow-x-auto overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative mx-auto min-w-[640px] max-w-[960px] px-0 py-1">
            <div className="absolute left-[8%] right-[8%] top-8 h-px" aria-hidden>
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
                    className="group flex flex-col items-center gap-2 border-0 bg-transparent p-0 text-center md:gap-2.5"
                    aria-current={active ? "step" : undefined}
                  >
                    <span className="relative z-[1] flex h-14 w-full items-center justify-center">
                      <motion.span
                        className="flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-shadow md:h-11 md:w-11"
                        style={{
                          borderColor: visible ? phase.color : `${phase.color}33`,
                          boxShadow: active
                            ? `0 0 0 4px ${phase.color}18`
                            : completed
                              ? `0 4px 12px ${phase.color}18`
                              : undefined,
                        }}
                        animate={{
                          scale: active ? 1.08 : 1,
                          opacity: visible ? 1 : 0.45,
                        }}
                        transition={{ duration: 0.35, ease: PROCESS_EASE }}
                      >
                        <ProcessPhaseIcon index={index} color={phase.color} />
                      </motion.span>
                    </span>

                    <span
                      className={`max-w-[92px] font-display text-[10px] font-medium leading-snug transition-colors md:max-w-[100px] md:text-xs ${
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
