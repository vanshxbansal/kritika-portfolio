"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const CHAR_DELAY_MS = 52;
const LINE_PAUSE_MS = 320;
const DONE_PAUSE_MS = 400;

export type TypewriterLine = {
  text: string;
  color: "default" | "accent";
};

type TypewriterHeroLinesProps = {
  lines: TypewriterLine[];
  accentColor: string;
  defaultColor: string;
  onComplete?: () => void;
  align?: "center" | "left";
};

export function TypewriterHeroLines({
  lines,
  accentColor,
  defaultColor,
  onComplete,
  align = "center",
}: TypewriterHeroLinesProps) {
  const prefersReducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setComplete(true);
      onComplete?.();
      return;
    }

    const current = lines[lineIndex];
    if (!current) return;

    if (charIndex < current.text.length) {
      const timer = window.setTimeout(
        () => setCharIndex((count) => count + 1),
        CHAR_DELAY_MS,
      );
      return () => window.clearTimeout(timer);
    }

    if (lineIndex < lines.length - 1) {
      const timer = window.setTimeout(() => {
        setLineIndex((index) => index + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setComplete(true);
      onComplete?.();
    }, DONE_PAUSE_MS);

    return () => window.clearTimeout(timer);
  }, [charIndex, lineIndex, lines, onComplete, prefersReducedMotion]);

  const headingClass =
    "font-display text-[clamp(32px,5.5vw,56px)] font-semibold leading-[1.08] tracking-[-0.02em]";

  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  if (prefersReducedMotion) {
    return (
      <div className={`flex flex-col ${alignClass}`}>
        {lines.map((line) => (
          <h1
            key={line.text}
            className={headingClass}
            style={{ color: line.color === "accent" ? accentColor : defaultColor }}
          >
            {line.text}
          </h1>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {lines.map((line, index) => {
        if (index > lineIndex) return null;

        const isCurrent = index === lineIndex && !complete;
        const text =
          index < lineIndex || complete
            ? line.text
            : line.text.slice(0, charIndex);

        return (
          <h1
            key={line.text}
            className={headingClass}
            style={{ color: line.color === "accent" ? accentColor : defaultColor }}
          >
            {text}
            {isCurrent ? (
              <span
                className="ml-0.5 inline-block w-[3px] animate-pulse opacity-80"
                style={{
                  color: line.color === "accent" ? accentColor : defaultColor,
                }}
                aria-hidden
              >
                |
              </span>
            ) : null}
          </h1>
        );
      })}
    </div>
  );
}
