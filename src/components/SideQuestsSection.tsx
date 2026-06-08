"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { sideQuests } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function SideQuestsSection() {
  return (
    <section
      id="sidequests"
      data-cursor-label="You"
      className="relative mx-auto flex w-[85%] max-w-6xl flex-col items-center gap-9 py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-[#6536eb]/[0.06] blur-3xl" />
      <Reveal y={8}>
        <SectionHeading label="CERTIFICATIONS" icon="leaf" />
      </Reveal>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {sideQuests.map((quest, index) => (
          <Reveal key={quest.id} y={20} scale={0.92} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={quest.href}
                target={quest.external ? "_blank" : undefined}
                rel={quest.external ? "noopener noreferrer" : undefined}
                data-cursor-label={quest.cursorLabel}
                className="group relative block h-[420px] overflow-hidden rounded-[30px] border border-[#6536eb]/15 bg-white/85 p-4 shadow-[0_24px_70px_rgba(20,20,40,0.08)] backdrop-blur"
              >
                <div className="absolute -right-16 -top-14 h-44 w-44 rounded-full bg-[#6536eb]/10 blur-3xl transition duration-500 group-hover:bg-[#6536eb]/20" />
                <div className="relative h-full overflow-hidden rounded-[24px] border border-white/70 bg-gradient-to-br from-[#6536eb]/[0.08] via-white to-white">
                  <Image
                    src={quest.image}
                    alt={quest.title}
                    fill
                    className="object-contain p-8 drop-shadow-[0_18px_30px_rgba(0,0,0,0.10)] transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 bg-gradient-to-t from-white via-white/95 to-transparent px-6 pb-6 pt-20 transition-all duration-500 group-hover:pb-8">
                    <span className="w-fit rounded-full border border-[#6536eb]/15 bg-white/80 px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.12em] text-[#6536eb]">
                      Certificate
                    </span>
                    <h3 className="font-display text-[26px] font-semibold leading-[1.05] text-[#1e1e2f]">
                      {quest.title}
                    </h3>
                    <p className="pr-10 text-lg leading-snug tracking-[-0.01em] text-[#1e1e2f]/60">
                      {quest.description}
                    </p>
                    <div className="absolute bottom-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-[#6536eb] text-white opacity-0 shadow-[0_14px_24px_rgba(101,54,235,0.28)] transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
