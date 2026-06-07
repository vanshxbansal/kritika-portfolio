"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

export type SteppedTimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
};

const LINE_WIDTHS = ["0%", "20%", "40%", "60%", "80%"] as const;
const STEP_DELAYS_MS = [400, 200, 600, 600, 600] as const;
const LINE_TRANSITIONS = [
  { duration: 0.3, ease: [0, 0, 1, 1] as const },
  { duration: 0.2, ease: [0, 0, 1, 1] as const },
  { duration: 0.6, ease: [0.44, 0, 0.56, 1] as const },
  { duration: 0.6, ease: [0.44, 0, 0.56, 1] as const },
  { duration: 0.6, ease: [0.44, 0, 0.4, 0.99] as const },
];

type SteppedTimelineProps = {
  items: SteppedTimelineItem[];
  columns?: number;
};

export function SteppedTimeline({ items, columns = items.length }: SteppedTimelineProps) {
  const theme = useCaseStudyTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  const stepCount = Math.min(items.length, LINE_WIDTHS.length);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setStep(stepCount);
      return;
    }

    let cancelled = false;
    let currentStep = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const advance = () => {
      if (cancelled || currentStep >= stepCount) return;

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
  }, [isInView, prefersReducedMotion, stepCount]);

  const lineIndex = Math.max(0, step - 1);
  const lineTransition =
    step > 0 ? LINE_TRANSITIONS[lineIndex] : LINE_TRANSITIONS[0];

  const gridClass =
    columns === 5
      ? "grid-cols-5"
      : columns === 4
        ? "grid-cols-4"
        : "grid-cols-5";

  return (
    <div ref={ref} className="w-full overflow-x-auto py-4">
      <div className="relative min-w-[720px]">
        <div className="relative mb-5 h-[14px]">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#dbdbdb]" />
          <motion.div
            className="absolute left-0 top-1/2 h-[2px] origin-left -translate-y-1/2"
            style={{ backgroundColor: theme.primary }}
            animate={{
              width: LINE_WIDTHS[Math.min(lineIndex, LINE_WIDTHS.length - 1)],
            }}
            initial={{ width: "0%" }}
            transition={lineTransition}
          />

          <div className={`absolute inset-x-0 top-0 grid ${gridClass} gap-4`}>
            {items.map((item, index) => {
              const visible = step > index;
              const fadeTransition =
                visible && index > 0
                  ? LINE_TRANSITIONS[index - 1]
                  : { duration: 0.3, ease: [0, 0, 1, 1] as const };

              return (
                <div key={item.id} className="flex justify-start pt-[5px]">
                  <motion.div
                    className="h-[6px] w-[6px] rounded-full"
                    style={{ backgroundColor: theme.primary }}
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

        <div className={`grid ${gridClass} gap-4`}>
          {items.map((item, index) => {
            const visible = step > index;
            const fadeTransition =
              visible && index > 0
                ? LINE_TRANSITIONS[index - 1]
                : { duration: 0.3, ease: [0, 0, 1, 1] as const };

            return (
              <motion.div
                key={item.id}
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={fadeTransition}
              >
                {item.icon ? (
                  <div className="relative h-14 w-14 shrink-0">
                    <Image src={item.icon} alt="" fill className="object-contain" />
                  </div>
                ) : null}
                <div className="flex flex-col gap-1">
                  <p className="font-[family-name:var(--font-inter)] text-sm font-bold tracking-[-0.02em] text-[#2a2a54]">
                    {item.title}
                  </p>
                  {item.subtitle ? (
                    <p className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[-0.02em] text-[#8f8fa6]">
                      {item.subtitle}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
