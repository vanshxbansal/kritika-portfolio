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
      setStep(widths.length);
      return;
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
    <div id="timeline" ref={ref} className="w-[85%] overflow-x-auto py-[30px]">
      <div className="relative min-w-[720px]">
        <div className="relative mb-8 h-[18px]">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#dbdbdb]" />
          <motion.div
            className="absolute left-0 top-1/2 h-[2px] origin-left -translate-y-1/2 bg-black"
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
                    className="h-[6px] w-[6px] rounded-full bg-black"
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
                className="flex flex-col gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={fadeTransition}
              >
                <p className="font-display text-lg font-medium leading-[1.4] text-[#1e1e2f]">
                  {item.role}
                </p>
                {item.org ? (
                  <p className="font-display text-base font-medium text-[#1e1e2f]/50">
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
