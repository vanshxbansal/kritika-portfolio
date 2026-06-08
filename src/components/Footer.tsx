"use client";

import Image from "next/image";
import Link from "next/link";
import { siteProfile } from "@/data/siteProfile";
import { Reveal } from "./Reveal";

export function Footer({
  backHref = "/#herosection",
  backLabel = "Back to the top",
}: {
  backHref?: string;
  backLabel?: string;
} = {}) {
  return (
    <Reveal>
      <footer
        data-cursor-label="You"
        className="relative overflow-hidden border-t border-[#6536eb]/10 bg-gradient-to-br from-white via-[#fbfaff] to-white px-6 py-10"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-44 w-[70%] -translate-x-1/2 rounded-full bg-[#6536eb]/[0.06] blur-3xl" />
        <div className="relative mx-auto flex w-[85%] max-w-6xl flex-col items-center justify-between gap-8 rounded-[28px] border border-[#6536eb]/10 bg-white/75 p-5 shadow-[0_20px_70px_rgba(20,20,40,0.06)] backdrop-blur md:flex-row md:p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#6536eb]/15 bg-white shadow-sm">
              <div className="relative h-[25px] w-[25px]">
                <Image
                  src="https://framerusercontent.com/assets/4RsewE7kMjBI2Ia2UWt8PvFZ0yY.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="font-display text-base font-medium text-[#1e1e2f]/55">
              {siteProfile.copyright}
            </p>
          </div>

          <Link
            href={backHref}
            data-cursor-label="Click"
            className="group font-display text-base font-semibold text-[#1e1e2f]"
          >
            <span className="relative inline-flex items-center gap-2 rounded-full border border-[#6536eb]/15 bg-white px-4 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:text-[#6536eb]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#6536eb]/10 transition group-hover:bg-[#6536eb]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#6536eb] transition group-hover:fill-white">
                  <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-8v4h2v-4h3l-4-4-4 4h3z" />
                </svg>
              </span>
              {backLabel}
            </span>
          </Link>

          <div className="flex gap-3">
            {siteProfile.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Click"
                className="rounded-full border border-[#6536eb]/15 bg-white px-4 py-2.5 font-display text-sm font-semibold text-[#1e1e2f]/65 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6536eb]/35 hover:text-[#6536eb]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
