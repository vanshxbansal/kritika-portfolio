"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

/** Matches kartikgoel.com/google-internship appear animation */
const CASE_STUDY_EASE = [0.44, 0, 0.56, 1] as const;

/** Shared full-width layout for case study sections */
export const caseStudySectionClass =
  "w-full self-stretch px-5 md:px-10 lg:px-14 xl:px-16";

/** Sticky stack: navbar (h-16) + compact process nav */
export const CASE_STUDY_NAVBAR_H = 64;
export const CASE_STUDY_PROCESS_STICKY_TOP = CASE_STUDY_NAVBAR_H;
export const CASE_STUDY_PROCESS_NAV_H = 76;
/** scroll-margin / sticky offset below navbar + process bar */
export const CASE_STUDY_SCROLL_OFFSET =
  CASE_STUDY_NAVBAR_H + CASE_STUDY_PROCESS_NAV_H + 12;
export const CASE_STUDY_CHAPTER_NAV_STICKY_TOP =
  CASE_STUDY_NAVBAR_H + CASE_STUDY_PROCESS_NAV_H + 8;

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
  const shouldReduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);
  const hiddenState = { opacity: 0, y };
  const visibleState = { opacity: 1, y: 0 };

  useEffect(() => {
    const timer = window.setTimeout(() => setHasMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!hasMounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={shouldReduceMotion || inView ? visibleState : hiddenState}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : delay,
        ease: CASE_STUDY_EASE,
      }}
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

export function CaseStudyAccentRule({ className = "" }: { className?: string }) {
  const theme = useCaseStudyTheme();

  return (
    <span
      className={`block h-1 w-10 rounded-full ${className}`}
      style={{ backgroundColor: theme.primary }}
      aria-hidden
    />
  );
}

export function CaseStudySectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <CaseStudySectionTitle>{title}</CaseStudySectionTitle>
      <CaseStudyAccentRule />
      {subtitle ? (
        <p className="max-w-2xl font-display text-sm leading-relaxed text-[#64748b]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function CaseStudySurface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#e8edf3] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.055)] md:p-8 lg:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function CaseStudyCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-[#e8edf3] bg-[#fbfcfd] ${className}`}>
      {children}
    </div>
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
