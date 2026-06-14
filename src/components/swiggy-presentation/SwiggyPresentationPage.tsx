"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { swiggySlides } from "./slides";

const STICKY_TOP_PX = 120;
const STICKY_TOP = `${STICKY_TOP_PX}px`;
const SLIDE_VIEWPORT = `calc(100dvh - ${STICKY_TOP_PX}px)`;

function ScrollSlide({
  index,
  title,
  children,
  onActive,
  isLast,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
  onActive: (index: number) => void;
  isLast: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const runwayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end start"],
  });

  const inputRange = isLast
    ? [0, 0.14, 0.35, 1]
    : [0, 0.14, 0.32, 0.78, 1];

  const opacityOutput = isLast
    ? [0, 1, 1, 1]
    : reduceMotion
      ? [1, 1, 1, 1, 1]
      : [0, 1, 1, 1, 0.12];

  const scaleOutput = isLast
    ? [0.84, 1, 1, 1]
    : reduceMotion
      ? [1, 1, 1, 1, 1]
      : [0.84, 1, 1, 1, 0.93];

  const yOutput = isLast
    ? [80, 0, 0, 0]
    : reduceMotion
      ? [0, 0, 0, 0, 0]
      : [80, 0, 0, 0, -56];

  const blurOutput = isLast
    ? [0, 0, 0, 0]
    : reduceMotion
      ? [0, 0, 0, 0, 0]
      : [6, 0, 0, 0, 10];

  const opacity = useTransform(scrollYProgress, inputRange, opacityOutput);
  const scale = useTransform(scrollYProgress, inputRange, scaleOutput);
  const y = useTransform(scrollYProgress, inputRange, yOutput);
  const blur = useTransform(scrollYProgress, inputRange, blurOutput);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const activeUntil = isLast ? 1 : 0.8;
    if (value >= 0.1 && value <= activeUntil) {
      onActive(index);
    }
  });

  return (
    <div
      ref={runwayRef}
      id={`slide-${index + 1}`}
      aria-label={title}
      className="relative"
      style={{ height: isLast ? "108vh" : "135vh" }}
    >
      <div
        className="sticky flex items-center justify-center overflow-hidden px-3 md:px-6"
        style={{
          top: STICKY_TOP,
          height: SLIDE_VIEWPORT,
          zIndex: index + 2,
        }}
      >
        <motion.div
          style={{
            opacity: reduceMotion ? 1 : opacity,
            scale: reduceMotion ? 1 : scale,
            y: reduceMotion ? 0 : y,
            filter: reduceMotion ? "none" : filter,
            width: "100%",
            height: "100%",
            maxWidth: "1400px",
          }}
          className="origin-center will-change-transform"
        >
          <motion.div
            className="h-full w-full overflow-hidden rounded-[20px] md:rounded-[28px]"
            style={{
              boxShadow: "0 32px 80px rgba(15, 23, 42, 0.14)",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function PresentationChrome({
  activeIndex,
  deckProgress,
}: {
  activeIndex: number;
  deckProgress: MotionValue<number>;
}) {
  const { tokens, toggle } = useTheme();
  const progressWidth = useTransform(deckProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 z-40 h-1"
        style={{ top: STICKY_TOP, background: tokens.progressBg }}
        aria-hidden
      >
        <motion.div
          className="h-full origin-left"
          style={{ width: progressWidth, background: tokens.orange }}
        />
      </div>

      <div className="fixed right-4 z-40 hidden flex-col items-end gap-2 md:flex" style={{ top: `calc(${STICKY_TOP} + 1rem)` }}>
        <button
          type="button"
          onClick={toggle}
          className="flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors"
          style={{
            background: tokens.card,
            borderColor: tokens.cardBorder,
            color: tokens.textMuted,
          }}
          aria-label="Toggle presentation theme"
        >
          {tokens.isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full px-3 py-1.5 text-xs font-medium shadow-sm"
          style={{
            background: tokens.card,
            border: `1px solid ${tokens.cardBorder}`,
            color: tokens.textMuted,
          }}
        >
          <span style={{ color: tokens.orange }}>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="mx-1">/</span>
          <span>{String(swiggySlides.length).padStart(2, "0")}</span>
        </motion.div>
        <motion.p
          key={`${activeIndex}-title`}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[140px] text-right text-[11px] leading-snug"
          style={{ color: tokens.textMuted }}
        >
          {swiggySlides[activeIndex]?.title}
        </motion.p>
      </div>
    </>
  );
}

function PresentationBody() {
  const { tokens } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: deckProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: tokens.bg, fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}
    >
      <Navbar wide />

      <div
        className="sticky z-40 border-b px-5 py-3 md:px-10"
        style={{ top: "4rem", borderColor: tokens.topBar, background: tokens.bg }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{ background: tokens.orange }}
            >
              <span className="text-xs font-black text-white">S</span>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: tokens.textPrimary }}>
                Swiggy Delivery Partner — Case Study
              </p>
              <p className="text-xs" style={{ color: tokens.textMuted }}>
                Scroll — each slide animates in and out
              </p>
            </div>
          </div>
          <Link
            href="/#spotlight"
            className="text-xs font-medium transition-opacity hover:opacity-70"
            style={{ color: tokens.orange }}
          >
            Back to projects
          </Link>
        </div>
      </div>

      <PresentationChrome activeIndex={activeIndex} deckProgress={deckProgress} />

      <main ref={deckRef}>
        {swiggySlides.map((slide, index) => {
          const SlideComponent = slide.component;
          const isLast = index === swiggySlides.length - 1;

          return (
            <ScrollSlide
              key={slide.title}
              index={index}
              title={slide.title}
              onActive={setActiveIndex}
              isLast={isLast}
            >
              <SlideComponent />
            </ScrollSlide>
          );
        })}
      </main>

      <Footer backHref="/#spotlight" backLabel="Back to projects" />
    </div>
  );
}

export function SwiggyPresentationPage() {
  return (
    <ThemeProvider>
      <PresentationBody />
    </ThemeProvider>
  );
}
