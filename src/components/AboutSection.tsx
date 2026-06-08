"use client";

import Link from "next/link";
import { siteProfile } from "@/data/siteProfile";
import { Reveal } from "./Reveal";
import { LottieWave } from "./LottieWave";
import { TimelineSection } from "./TimelineSection";

const strengths = ["FRDs", "Wireframes", "UAT", "Stakeholder alignment"];

export function AboutSection() {
  return (
    <section
      id="aboutme"
      data-cursor-label="You"
      className="relative mx-auto flex w-[85%] max-w-6xl flex-col items-center gap-12 py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-[420px] max-w-5xl rounded-full bg-[#6536eb]/[0.05] blur-3xl" />
      <Reveal y={8}>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#6536eb]/15 bg-white/80 px-4 py-2 shadow-[0_14px_34px_rgba(101,54,235,0.08)] backdrop-blur">
          <LottieWave />
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#6536eb]">
            HELLO
          </p>
        </div>
      </Reveal>

      <div className="w-full overflow-hidden rounded-[34px] border border-[#6536eb]/15 bg-white/85 p-5 shadow-[0_26px_90px_rgba(20,20,40,0.08)] backdrop-blur md:p-8">
        <div className="flex flex-col items-center gap-10 rounded-[28px] bg-gradient-to-br from-[#6536eb]/[0.08] via-white to-white p-6 md:flex-row md:items-stretch md:gap-8 md:p-8 lg:gap-10 lg:p-10">
          <Reveal y={0} scale={0.92}>
            <div className="relative flex h-full min-h-[260px] w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/80 bg-white/65 shadow-inner md:w-[300px] lg:w-[320px]">
              <div className="absolute h-56 w-56 rounded-full bg-[#6536eb]/15 blur-2xl" />
              <div className="relative flex h-[184px] w-[184px] items-center justify-center rounded-full border border-[#6536eb]/15 bg-white shadow-[0_20px_50px_rgba(101,54,235,0.16)]">
                <span className="font-display text-5xl font-semibold text-[#642eff]">
                  KS
                </span>
              </div>
              <div className="absolute bottom-6 left-6 rounded-full border border-[#6536eb]/15 bg-white/80 px-4 py-2 font-display text-sm font-semibold text-[#6536eb] shadow-sm backdrop-blur">
                Product Designer + BA
              </div>
            </div>
          </Reveal>

          <Reveal x={-70} delay={0.1}>
            <div className="flex flex-1 flex-col justify-center gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#6536eb]">
                  About Me
                </p>
                <p className="text-xl leading-[1.45] tracking-[-0.01em] text-[#1e1e2f]/60">
                  <span className="font-bold text-[#642eff]">
                    I&apos;m {siteProfile.firstName}
                  </span>
                  , a {siteProfile.degree} graduate from{" "}
                  <span className="font-semibold text-[#1e1e2f]/75">
                    {siteProfile.education}
                  </span>{" "}
                  currently working as a{" "}
                  <span className="font-semibold text-[#1e1e2f]/75">
                    Product Designer & Business Analyst @ {siteProfile.companyShort}
                  </span>
                  . I thrive at the intersection of{" "}
                  <span className="font-semibold text-[#1e1e2f]/75">
                    requirements, UX, and delivery
                  </span>{" "}
                  — from FRDs and user stories to wireframes, UAT, and stakeholder
                  enablement across government and SaaS products.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {strengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-[#6536eb]/15 bg-white/75 px-4 py-2 font-display text-sm font-semibold text-[#1e1e2f]/65 shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={siteProfile.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="Yay!"
                  data-cursor-badge="light"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6536eb] px-6 py-3 font-display text-base font-semibold text-white shadow-[0_14px_30px_rgba(101,54,235,0.28)] transition hover:-translate-y-0.5 hover:bg-[#5428d4]"
                >
                  Download Resume
                </Link>
                <div className="flex gap-3">
                  {siteProfile.socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Click"
                      className="rounded-full border border-[#6536eb]/15 bg-white/75 px-4 py-3 font-display text-sm font-semibold text-[#1e1e2f]/70 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6536eb]/35 hover:text-[#6536eb]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <TimelineSection />
    </section>
  );
}
