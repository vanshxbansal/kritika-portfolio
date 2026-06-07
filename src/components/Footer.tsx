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
        className="border-t-2 border-[#e8e8e8] bg-[#fafafa] px-6 py-10"
      >
        <div className="mx-auto flex w-[80%] max-w-6xl flex-col items-center justify-between gap-9 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-[23px] w-[23px]">
              <Image
                src="https://framerusercontent.com/assets/4RsewE7kMjBI2Ia2UWt8PvFZ0yY.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-display text-lg text-[#737373]">
              {siteProfile.copyright}
            </p>
          </div>

          <Link
            href={backHref}
            data-cursor-label="Click"
            className="group font-display text-[22px] font-medium text-[#1e1e2f]"
          >
            <span className="relative inline-flex flex-col items-center">
              <span className="mb-1 block translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-9 w-9 fill-[#6363ff]/60">
                  <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-8v4h2v-4h3l-4-4-4 4h3z" />
                </svg>
              </span>
              {backLabel}
            </span>
          </Link>

          <div className="flex gap-8">
            {siteProfile.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Click"
                className="font-display text-lg font-medium text-[#1e1e2f] underline"
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
