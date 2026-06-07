"use client";

import Image from "next/image";
import Link from "next/link";
import { sideQuests } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function SideQuestsSection() {
  return (
    <section
      id="sidequests"
      data-cursor-label="You"
      className="mx-auto flex w-[80%] max-w-6xl flex-col items-center gap-9 py-20"
    >
      <Reveal y={8}>
        <SectionHeading label="CERTIFICATIONS" icon="leaf" />
      </Reveal>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {sideQuests.map((quest, index) => (
          <Reveal key={quest.id} y={20} scale={0.92} delay={index * 0.1}>
            <Link
              href={quest.href}
              target={quest.external ? "_blank" : undefined}
              rel={quest.external ? "noopener noreferrer" : undefined}
              data-cursor-label={quest.cursorLabel}
              className="group relative block h-[400px] overflow-hidden rounded-xl border-[1.5px] border-[#1e1e2f]/20"
            >
              <Image
                src={quest.image}
                alt={quest.title}
                fill
                className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 bg-gradient-to-t from-white via-white/95 to-transparent px-6 pb-6 pt-16 transition-all duration-500 group-hover:pb-9 group-hover:pt-14">
                <h3 className="font-display text-[26px] font-semibold text-[#1e1e2f]">
                  {quest.title}
                </h3>
                <p className="text-lg leading-snug tracking-[-0.01em] text-[#1e1e2f]/60">
                  {quest.description}
                </p>
                <div className="absolute bottom-6 right-6 translate-x-[-8px] text-[#6666ff] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
