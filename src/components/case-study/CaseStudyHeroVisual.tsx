"use client";

import Image from "next/image";
import { CaseStudyReveal } from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type CaseStudyHeroVisualProps = {
  imageAlt: string;
  imageSrc?: string;
};

export function CaseStudyHeroVisual({ imageAlt, imageSrc }: CaseStudyHeroVisualProps) {
  const theme = useCaseStudyTheme();

  return (
    <CaseStudyReveal delay={0.12} y={40} className="relative w-full">
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-3xl md:-right-4 lg:h-[480px] lg:w-[480px]"
        style={{ backgroundColor: `${theme.primary}22` }}
        aria-hidden
      />

      {imageSrc ? (
        <div className="relative mx-auto flex w-full max-w-[760px] items-center justify-center lg:max-w-none lg:justify-end">
          <div className="w-full max-w-[760px] scale-110 drop-shadow-[0_28px_55px_rgba(15,23,42,0.18)] lg:translate-x-8 lg:origin-right xl:scale-125 xl:translate-x-12">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={597}
              height={340}
              priority
              unoptimized
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="relative mx-auto flex max-w-[560px] items-end justify-center lg:max-w-none lg:justify-end">
          {/* Laptop */}
          <div className="relative z-[1] w-[88%] max-w-[480px]">
            <div className="overflow-hidden rounded-t-xl border border-[#d8dee8] bg-[#eef1f5] shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex items-center gap-1.5 border-b border-[#d8dee8] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
              </div>
              <div
                className="flex aspect-[16/10] items-center justify-center bg-[#fafafa] p-6"
                style={{ borderColor: theme.primaryBorder }}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
                    style={{ color: theme.primary }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 opacity-70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <p className="font-display text-sm font-medium text-[#1e1e2f]/50">
                    {imageAlt}
                  </p>
                  <p className="max-w-[220px] text-xs text-[#1e1e2f]/35">
                    Replace with project screenshots
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto h-3 w-[92%] rounded-b-lg bg-[#d8dee8]" aria-hidden />
          </div>

          {/* Phone */}
          <div className="absolute -left-2 bottom-0 z-[2] w-[26%] min-w-[96px] max-w-[130px] sm:-left-4 md:-left-6">
            <div className="overflow-hidden rounded-[1.4rem] border-[3px] border-[#1e1e2f] bg-[#1e1e2f] shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-[#3a3a4a]" aria-hidden />
              <div className="m-1.5 overflow-hidden rounded-[1rem] bg-[#fafafa]">
                <div className="flex aspect-[9/16] items-center justify-center p-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm"
                    style={{ color: theme.primary }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 opacity-70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </CaseStudyReveal>
  );
}
