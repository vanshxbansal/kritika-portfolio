"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const WELCOME_KEY = "welcomeSeen";
const GIF_SRC =
  "https://framerusercontent.com/images/8vkAJ1zAUFpVut8t1DZAeD1Jw.gif?width=720&height=536";

type Phase = "start" | "expand" | "exit" | "fade";

function shouldShowWelcome() {
  if (typeof window === "undefined") return false;
  try {
    return !sessionStorage.getItem(WELCOME_KEY);
  } catch {
    return false;
  }
}

function markWelcomeSeen() {
  try {
    sessionStorage.setItem(WELCOME_KEY, "true");
  } catch {
    // ignore storage errors
  }
}

export function WelcomeOverlay() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("start");

  useLayoutEffect(() => {
    if (pathname !== "/" || prefersReducedMotion) return;

    if (shouldShowWelcome()) {
      markWelcomeSeen();
      setActive(true);
      document.documentElement.style.overflow = "hidden";
    }
  }, [pathname, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    const expandTimer = window.setTimeout(() => setPhase("expand"), 1000);
    const exitTimer = window.setTimeout(() => setPhase("exit"), 3200);
    const fadeTimer = window.setTimeout(() => setPhase("fade"), 4500);
    const hideTimer = window.setTimeout(() => {
      setActive(false);
      document.documentElement.style.overflow = "";
    }, 5100);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(exitTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [active, prefersReducedMotion]);

  if (pathname !== "/" || prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key="welcome-overlay"
          className="fixed inset-0 z-[9999] overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "fade" ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-hidden={phase === "fade"}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            animate={
              phase === "exit" || phase === "fade"
                ? { height: "1vh", top: -20 }
                : { height: "100vh", top: 0 }
            }
            transition={{
              duration: 0.8,
              ease: [0.47, 0.01, 0, 1.11],
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative flex items-center justify-start gap-9 overflow-hidden"
              initial={{ width: 132 }}
              animate={{
                width: phase === "start" ? 132 : "auto",
                y: phase === "exit" || phase === "fade" ? -208 : 0,
                opacity: phase === "exit" || phase === "fade" ? 0 : 1,
              }}
              transition={{
                width:
                  phase === "expand"
                    ? { duration: 1.4, ease: [0.47, 0.01, 0.24, 1.12] }
                    : { duration: 0 },
                y: { duration: 0.8, ease: [0.47, 0.01, 0, 1.11] },
                opacity: { duration: 0.8, ease: [0.47, 0.01, 0, 1.11] },
              }}
            >
              <motion.div
                className="relative h-[98px] w-[130px] shrink-0"
                initial={{ opacity: 0.001, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.46, -0.05, 0.03, 0.98],
                }}
              >
                <Image
                  src={GIF_SRC}
                  alt=""
                  fill
                  unoptimized
                  priority
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="shrink-0 select-none whitespace-pre text-left"
                initial={{ opacity: 0, y: -66 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.46, -0.05, 0.03, 0.98],
                }}
              >
                <p className="font-display text-[40px] font-medium leading-[1.1] tracking-[0.01em] text-[#050505]">
                  Welcome to my
                </p>
                <p className="font-display text-[50px] font-semibold leading-[1.1] tracking-[0.01em] text-[#9d38f1]">
                  portfolio!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
