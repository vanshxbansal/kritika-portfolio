"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { swiggySlides } from "./slides";

function PresentationSlide({
  index,
  title,
  children,
  onActive,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
  onActive: (index: number) => void;
}) {
  const slideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = slideRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          onActive(index);
        }
      },
      { threshold: [0.4, 0.6] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [index, onActive]);

  return (
    <section
      ref={slideRef}
      id={`slide-${index + 1}`}
      aria-label={title}
      className="w-full scroll-mt-28"
    >
      <Reveal y={32} scale={0.98} delay={0}>
        <div className="mx-auto w-full max-w-[1400px]">{children}</div>
      </Reveal>
    </section>
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
        className="pointer-events-none fixed left-0 right-0 top-16 z-40 h-0.5"
        style={{ background: tokens.progressBg }}
        aria-hidden
      >
        <motion.div
          className="h-full origin-left"
          style={{ width: progressWidth, background: tokens.orange }}
        />
      </div>

      <div className="fixed right-4 top-28 z-40 hidden flex-col items-end gap-2 md:flex">
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
                Scroll through the full presentation
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

      <main ref={deckRef} className="mx-auto flex w-full max-w-[1500px] flex-col gap-0 px-3 pb-16 md:px-6">
        {swiggySlides.map((slide, index) => {
          const SlideComponent = slide.component;

          return (
            <div key={slide.title}>
              <PresentationSlide index={index} title={slide.title} onActive={setActiveIndex}>
                <SlideComponent />
              </PresentationSlide>
              {index < swiggySlides.length - 1 ? (
                <div
                  className="mx-auto my-2 h-px w-full max-w-[1400px]"
                  style={{ background: tokens.topBar }}
                  aria-hidden
                />
              ) : null}
            </div>
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
