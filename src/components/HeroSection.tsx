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
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24 md:py-44"
    >
      <Image
        src="https://framerusercontent.com/images/bEeJ5DTht1bwAr0WfUoXT10Lpw.png?width=1920&height=759"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center gap-9 px-6 text-center">
        <Reveal y={24} delay={0.05}>
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[26px] leading-[1.5] text-[#888]">
              I&apos;m {siteProfile.firstName}, {siteProfile.title}
            </h2>
            <h1 className="font-display text-4xl font-medium tracking-[0.3px] text-[#333] md:text-5xl">
              {siteProfile.tagline}
            </h1>
          </div>
        </Reveal>

        <Reveal y={20} delay={0.18}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-[15px]">
            <Link
              href="/#aboutme"
              data-cursor-label="Click"
              className="rounded-xl border-2 border-[#ccc] bg-white px-[50px] py-3 font-display text-2xl font-medium text-[#333] transition hover:border-[#999] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              About Me
            </Link>
            <Link
              href="/#spotlight"
              data-cursor-label="Click"
              className="rounded-xl bg-[#6536eb] px-[50px] py-3 font-display text-[22px] font-semibold text-white transition hover:bg-[#5428d4] hover:shadow-[0_10px_28px_rgba(101,54,235,0.35)]"
            >
              Projects
            </Link>
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
