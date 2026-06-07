"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Matches kartikgoel.com/google-internship appear animation */
const CASE_STUDY_EASE = [0.44, 0, 0.56, 1] as const;

type CaseStudyRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function CaseStudyReveal({
  children,
  className,
  delay = 0,
  y = 32,
}: CaseStudyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px", amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.4, delay, ease: CASE_STUDY_EASE }}
    >
      {children}
    </motion.div>
  );
}

export function CaseStudySectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[26px] font-semibold leading-tight text-[#1e1e2f] ${className}`}
    >
      {children}
    </h2>
  );
}

export function CaseStudyBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-base leading-[1.55] tracking-[-0.02em] text-[#1e1e2f]/70 ${className}`}
    >
      {children}
    </p>
  );
}
