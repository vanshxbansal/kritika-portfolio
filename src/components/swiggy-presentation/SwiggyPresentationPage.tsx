"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { swiggySlides } from "./slides";

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

function ScrollSlide({
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
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          onActive(index);
        }
      },
      { threshold: [0.45, 0.6, 0.75] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [index, onActive]);

  return (
    <section
      ref={sectionRef}
      id={`slide-${index + 1}`}
      aria-label={title}
      className="relative min-h-[calc(100dvh-4rem)] snap-start snap-always scroll-mt-16"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 56 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: SLIDE_EASE }}
        className="h-full min-h-[calc(100dvh-4rem)]"
      >
        {children}
      </motion.div>
    </section>
  );
}

function PresentationChrome({ activeIndex }: { activeIndex: number }) {
  const { tokens, toggle } = useTheme();
  const progress = ((activeIndex + 1) / swiggySlides.length) * 100;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 top-16 z-40 h-0.5"
        style={{ background: tokens.progressBg }}
        aria-hidden
      >
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%`, background: tokens.orange }}
        />
      </div>

      <div className="fixed right-4 top-24 z-40 hidden flex-col items-end gap-2 md:flex">
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
        <div
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
        </div>
        <p
          className="max-w-[140px] text-right text-[11px] leading-snug"
          style={{ color: tokens.textMuted }}
        >
          {swiggySlides[activeIndex]?.title}
        </p>
      </div>
    </>
  );
}

function PresentationBody() {
  const { tokens } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: tokens.bg, fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}
    >
      <Navbar wide />

      <div className="border-b px-5 py-3 md:px-10" style={{ borderColor: tokens.topBar }}>
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
                Scroll to explore each slide
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

      <PresentationChrome activeIndex={activeIndex} />

      <main className="snap-y snap-proximity">
        {swiggySlides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <ScrollSlide
              key={slide.title}
              index={index}
              title={slide.title}
              onActive={setActiveIndex}
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
