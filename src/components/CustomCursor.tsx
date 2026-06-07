"use client";

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

type CursorBadge =
  | "purple"
  | "green"
  | "light"
  | "blue"
  | "orange"
  | "pink"
  | "dark";

type CursorState = {
  label: string;
  badge: CursorBadge;
  interactive: boolean;
};

const DEFAULT_CURSOR: CursorState = {
  label: "You",
  badge: "purple",
  interactive: false,
};

const BADGE_STYLES: Record<
  CursorBadge,
  { bg: string; text: string; border: string }
> = {
  purple: { bg: "#6f0fff", text: "#fff", border: "#fff" },
  green: { bg: "#00a326", text: "#fff", border: "#fff" },
  light: { bg: "#fff", text: "#1c1c1c", border: "#2b2b2b" },
  blue: { bg: "#006fff", text: "#fff", border: "#fff" },
  orange: { bg: "#ffae00", text: "#fff", border: "#fff" },
  pink: { bg: "#ff0084", text: "#fff", border: "#fff" },
  dark: { bg: "#1e1e2f", text: "#fff", border: "#fff" },
};

const LABEL_BADGE: Record<string, CursorBadge> = {
  Click: "green",
  Soon: "orange",
  "Yay!": "light",
  "UX Research": "green",
  "Product Design": "purple",
  "Gamification + UX": "blue",
  "System Design": "pink",
  "SaaS Platform": "orange",
  "Tackling Wait Times": "pink",
  "Master Cocktails": "dark",
  "Play & Learn": "dark",
  "Textures & Lighting": "dark",
  "Global Health": "blue",
  "EdTech Platform": "purple",
};

function badgeForLabel(label: string, explicit?: string | null): CursorBadge {
  if (explicit && explicit in BADGE_STYLES) {
    return explicit as CursorBadge;
  }
  return LABEL_BADGE[label] ?? "purple";
}

function resolveCursor(target: Element | null): CursorState {
  if (!target) return DEFAULT_CURSOR;

  const interactive = target.closest(
    "a, button, [role='button'], input, select, textarea, label",
  );
  const labeled = target.closest("[data-cursor-label]");

  const attrSource = interactive?.hasAttribute("data-cursor-label")
    ? interactive
    : labeled;

  if (interactive) {
    const label = attrSource?.getAttribute("data-cursor-label") ?? "Click";
    const explicitBadge = attrSource?.getAttribute("data-cursor-badge");
    return {
      label,
      badge: badgeForLabel(label, explicitBadge),
      interactive: true,
    };
  }

  if (attrSource) {
    const label = attrSource.getAttribute("data-cursor-label") ?? "You";
    const explicitBadge = attrSource.getAttribute("data-cursor-badge");
    return {
      label,
      badge: badgeForLabel(label, explicitBadge),
      interactive: false,
    };
  }

  return DEFAULT_CURSOR;
}

function DefaultArrow() {
  return (
    <svg viewBox="0 0 26 29" width={26} height={29} className="block" aria-hidden>
      <g transform="translate(0.5 1)">
        <path d="M0 0 L4 27 L10.5 15 L24.5 13.5 Z" fill="#000" />
        <path
          d="M0 0 L4 27 L10.5 15 L24.5 13.5 Z"
          fill="transparent"
          stroke="#fff"
          strokeMiterlimit={10}
        />
      </g>
    </svg>
  );
}

function HandPointer() {
  return (
    <svg
      width={36}
      height={38}
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
      aria-hidden
    >
      <path
        d="M20.428 18.068a5.897 5.897 0 0 1-1.92 4.189 5.98 5.98 0 0 1-2.023 1.215 6.123 6.123 0 0 1-2.353.348l-2.764-.131a3.343 3.343 0 0 1-2.553-1.387l-5.063-6.646 1.683-1.463 3.536 3.043.398-13.08 2.091.1-.246 8.07 1.286.05.11-3.56 1.837.101-.11 3.559 1.194.05.083-2.748 1.933.1-.084 2.748 1.098.046.06-1.89 2.027.103-.06 1.89-.161 5.294.001-.001Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.11 18.118a7.58 7.58 0 0 1-2.467 5.381 7.662 7.662 0 0 1-2.592 1.558 7.805 7.805 0 0 1-3 .444l-2.763-.131a5.03 5.03 0 0 1-3.825-2.064L1.457 15.42l3.972-3.453 1.967 1.692.343-11.268 5.454.262-.137 4.502 3.124.17-.024.795 3.123.162-.026.847 3.13.157-.112 3.539-.16 5.292Zm-1.683-.049.001-.001v.002a5.924 5.924 0 0 1-1.05 3.192 5.905 5.905 0 0 1-.87.995 5.98 5.98 0 0 1-2.023 1.215 6.123 6.123 0 0 1-2.353.348l-2.764-.131a3.343 3.343 0 0 1-2.553-1.387l-5.063-6.646 1.683-1.463 3.536 3.043.398-13.08 2.091.1-.246 8.07 1.286.05.11-3.56 1.837.101-.11 3.559 1.194.05.083-2.748 1.933.1-.084 2.748 1.098.046.06-1.89 2.027.103-.06 1.89-.161 5.294Z"
        fill="#000"
      />
    </svg>
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState<CursorState>(DEFAULT_CURSOR);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isEnabled = finePointer && !reducedMotion;
    setEnabled(isEnabled);
    document.documentElement.classList.toggle("has-custom-cursor", isEnabled);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = document.elementFromPoint(event.clientX, event.clientY);
      setCursor(resolveCursor(target));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const badgeStyle = BADGE_STYLES[cursor.badge];
  const badgeOffset = cursor.interactive
    ? { left: 26, top: 24 }
    : { left: 22, top: 20 };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y, opacity: visible ? 1 : 0 }}
      aria-hidden
    >
      <div className="relative h-[62px] w-[62px]">
        <AnimatePresence mode="wait" initial={false}>
          {cursor.interactive ? (
            <motion.div
              key="hand"
              className="absolute left-0 top-0"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <HandPointer />
            </motion.div>
          ) : (
            <motion.div
              key="arrow"
              className="absolute left-0 top-0"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <DefaultArrow />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute flex h-7 min-w-[48px] items-center justify-center rounded-[4px] border px-3"
          style={{
            ...badgeOffset,
            borderWidth: 1,
            borderColor: badgeStyle.border,
            backgroundColor: badgeStyle.bg,
          }}
          animate={{ scale: cursor.interactive ? 0.96 : 1 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[14px] font-bold italic leading-none tracking-[-0.01em]"
            style={{ color: badgeStyle.text }}
          >
            {cursor.label}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
