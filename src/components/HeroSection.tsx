"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteProfile } from "@/data/siteProfile";
import { Reveal } from "./Reveal";

export function HeroSection() {
  return (
    <section
      id="herosection"
      data-cursor-label="You"
      className="relative flex min-h-[620px] items-center justify-center overflow-hidden py-20 md:py-28"
    >
      <Image
        src="https://framerusercontent.com/images/bEeJ5DTht1bwAr0WfUoXT10Lpw.png?width=1920&height=759"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <motion.div
        className="pointer-events-none absolute left-[9%] top-[18%] h-48 w-48 rounded-full bg-[#6536eb]/15 blur-3xl"
        animate={{ x: [0, 26, -10, 0], y: [0, -18, 14, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[30%] h-64 w-64 rounded-full bg-[#6536eb]/10 blur-3xl"
        animate={{ x: [0, -24, 18, 0], y: [0, 20, -12, 0], scale: [1, 0.94, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-[92%] max-w-[1060px] flex-col items-center gap-9 px-0 text-center md:w-[85%]">
        <Reveal y={24} delay={0.05}>
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-[#6536eb]/15 bg-white/75 px-4 py-2 font-display text-sm font-semibold text-[#6536eb] shadow-[0_10px_30px_rgba(101,54,235,0.08)] backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2 w-2 rounded-full bg-[#6536eb]" />
              Product Strategy + UX
            </motion.div>
            <h2 className="font-display text-[22px] leading-[1.5] text-[#888] md:text-[26px]">
              I&apos;m {siteProfile.firstName}, {siteProfile.title}
            </h2>
            <h1 className="relative max-w-[900px] font-display text-4xl font-medium tracking-[0.3px] text-[#333] md:text-5xl">
              <span className="absolute inset-x-8 bottom-1 -z-10 h-5 rounded-full bg-[#6536eb]/12 blur-md md:bottom-2" />
              {siteProfile.tagline}
            </h1>
          </div>
        </Reveal>

        <Reveal y={20} delay={0.18}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-[15px]">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/#aboutme"
                data-cursor-label="Click"
                className="inline-flex rounded-xl border-2 border-[#ccc] bg-white/90 px-[50px] py-3 font-display text-2xl font-medium text-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur transition hover:border-[#6536eb]/40 hover:text-[#6536eb] hover:shadow-[0_12px_30px_rgba(101,54,235,0.12)]"
              >
                About Me
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/#spotlight"
                data-cursor-label="Click"
                className="inline-flex rounded-xl bg-[#6536eb] px-[50px] py-3 font-display text-[22px] font-semibold text-white shadow-[0_12px_32px_rgba(101,54,235,0.28)] transition hover:bg-[#5428d4] hover:shadow-[0_16px_38px_rgba(101,54,235,0.38)]"
              >
                Projects
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden
      />
    </section>
  );
}
