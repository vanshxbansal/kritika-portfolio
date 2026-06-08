"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { timelineItems } from "@/data/projects";

const STEP_DELAYS_MS = [400, 200, 600, 600, 600] as const;

const LINE_TRANSITIONS = [
  { duration: 0.3, ease: [0, 0, 1, 1] as const },
  { duration: 0.2, ease: [0, 0, 1, 1] as const },
  { duration: 0.6, ease: [0.44, 0, 0.56, 1] as const },
  { duration: 0.6, ease: [0.44, 0, 0.56, 1] as const },
  { duration: 0.6, ease: [0.44, 0, 0.4, 0.99] as const },
];

function lineWidths(count: number): string[] {
  if (count <= 1) return ["0%"];
  return Array.from({ length: count }, (_, i) => {
    if (i === 0) return "0%";
    return `${Math.round((i / (count - 1)) * 80)}%`;
  });
}

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  const widths = useMemo(() => lineWidths(timelineItems.length), []);
  const gridClass =
    timelineItems.length === 4
      ? "grid-cols-4"
      : timelineItems.length === 5
        ? "grid-cols-5"
        : "grid-cols-4";

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      const timeout = setTimeout(() => setStep(widths.length), 0);
      return () => clearTimeout(timeout);
    }

    let cancelled = false;
    let currentStep = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const advance = () => {
      if (cancelled || currentStep >= widths.length) return;

      const delay = STEP_DELAYS_MS[currentStep] ?? 600;
      const timeout = setTimeout(() => {
        if (cancelled) return;
        currentStep += 1;
        setStep(currentStep);
        advance();
      }, delay);
      timeouts.push(timeout);
    };

    advance();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [isInView, prefersReducedMotion, widths.length]);

  const lineIndex = Math.max(0, step - 1);
  const lineTransition =
    step > 0 ? LINE_TRANSITIONS[lineIndex] : LINE_TRANSITIONS[0];

  return (
    <div
      id="timeline"
      ref={ref}
      className="w-full overflow-x-auto rounded-[30px] border border-[#6536eb]/15 bg-white/85 p-5 shadow-[0_24px_80px_rgba(20,20,40,0.07)] backdrop-blur md:p-7"
    >
      <div className="relative min-w-[720px] rounded-[24px] bg-gradient-to-br from-[#6536eb]/[0.07] via-white to-white p-7">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#6536eb]">
              Journey
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] text-[#1e1e2f]">
              Education to product delivery
            </h3>
          </div>
          <span className="rounded-full border border-[#6536eb]/15 bg-white/75 px-4 py-2 font-display text-sm font-semibold text-[#1e1e2f]/55">
            {timelineItems.length} milestones
          </span>
        </div>
        <div className="relative mb-8 h-[18px]">
          <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#6536eb]/10" />
          <motion.div
            className="absolute left-0 top-1/2 h-[3px] origin-left -translate-y-1/2 rounded-full bg-[#6536eb]"
            animate={{
              width: widths[Math.min(lineIndex, widths.length - 1)],
            }}
            initial={{ width: "0%" }}
            transition={lineTransition}
          />

          <div className={`absolute inset-x-0 top-0 grid ${gridClass} gap-5`}>
            {timelineItems.map((item, index) => {
              const visible = step > index;
              const fadeTransition =
                visible && index > 0
                  ? LINE_TRANSITIONS[index - 1]
                  : { duration: 0.3, ease: [0, 0, 1, 1] as const };

              return (
                <div key={item.role} className="flex justify-start pt-[6px]">
                  <motion.div
                    className="h-2.5 w-2.5 rounded-full border-2 border-white bg-[#6536eb] shadow-[0_0_0_6px_rgba(101,54,235,0.12)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visible ? 1 : 0 }}
                    transition={fadeTransition}
                    aria-hidden
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={`grid ${gridClass} gap-5`}>
          {timelineItems.map((item, index) => {
            const visible = step > index;
            const fadeTransition =
              visible && index > 0
                ? LINE_TRANSITIONS[index - 1]
                : { duration: 0.3, ease: [0, 0, 1, 1] as const };

            return (
              <motion.div
                key={item.role}
                className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_12px_28px_rgba(20,20,40,0.05)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
                transition={fadeTransition}
              >
                <p className="font-display text-lg font-semibold leading-[1.25] text-[#1e1e2f]">
                  {item.role}
                </p>
                {item.org ? (
                  <p className="mt-2 font-display text-base font-medium text-[#1e1e2f]/50">
                    {item.org}
                  </p>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
