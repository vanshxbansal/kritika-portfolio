"use client";

import Link from "next/link";
import { siteProfile } from "@/data/siteProfile";
import { Reveal } from "./Reveal";
import { LottieWave } from "./LottieWave";
import { TimelineSection } from "./TimelineSection";

export function AboutSection() {
  return (
    <section
      id="aboutme"
      data-cursor-label="You"
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 py-20"
    >
      <Reveal y={8}>
        <div className="flex items-center gap-1">
          <LottieWave />
          <p className="font-display text-xl font-medium tracking-[0.04em] text-[#6b6b6b]">
            HELLO
          </p>
        </div>
      </Reveal>

      <div className="flex w-[82%] flex-col items-center gap-12 md:flex-row md:gap-12">
        <Reveal y={0} scale={0.92}>
          <div className="flex h-[224px] w-[224px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-black/5 bg-gradient-to-br from-[#6536eb]/20 to-[#642eff]/10">
            <span className="font-display text-5xl font-semibold text-[#642eff]">
              KS
            </span>
          </div>
        </Reveal>

        <Reveal x={-70} delay={0.1}>
          <div className="flex max-w-[542px] flex-col gap-9">
            <p className="text-xl leading-[1.4] tracking-[-0.01em] text-[#1e1e2f]/50">
              <span className="font-bold text-[#642eff]">
                I&apos;m {siteProfile.firstName}
              </span>
              , a {siteProfile.degree} graduate from{" "}
              <span className="font-semibold text-[#1e1e2f]/70">
                {siteProfile.education}
              </span>{" "}
              currently working as a{" "}
              <span className="font-semibold text-[#1e1e2f]/70">
                Product Designer & Business Analyst @ {siteProfile.companyShort}
              </span>
              . I thrive at the intersection of{" "}
              <span className="font-semibold text-[#1e1e2f]/70">
                requirements, UX, and delivery
              </span>{" "}
              — from FRDs and user stories to wireframes, UAT, and stakeholder
              enablement across government and SaaS products.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                href={siteProfile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Yay!"
                data-cursor-badge="light"
                className="inline-flex items-center gap-2 rounded-[5px] bg-[#262626] px-4 py-3 font-display text-lg font-medium text-white transition hover:bg-black"
              >
                Download Resume
              </Link>
              <div className="flex gap-6">
                {siteProfile.socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="Click"
                    className="rounded-[5px] border border-black/15 bg-white px-3 py-2.5 font-display text-sm font-medium text-[#050505] transition hover:-translate-y-0.5 hover:border-black/30 hover:shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <TimelineSection />
    </section>
  );
}
