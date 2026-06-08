"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SpotlightProject } from "@/data/projects";
import { hpcTheme } from "@/data/hpcTheme";
import { nisCostTheme } from "@/data/nisCostTheme";
import { Reveal } from "./Reveal";

type SpotlightCardProps = {
  project: SpotlightProject;
  index: number;
};

export function SpotlightCard({ project, index }: SpotlightCardProps) {
  const accentColor =
    project.id === "hpc"
      ? hpcTheme.primary
      : project.id === "nis-cost"
        ? nisCostTheme.primary
        : project.id === "parakh-portal"
          ? "#6536eb"
          : project.id === "dfa"
            ? "#0074e0"
            : "#6536eb";
  const titleColor =
    project.id === "hpc" || project.id === "nis-cost" || project.id === "parakh-portal"
      ? "text-[#212121]"
      : project.id === "dfa"
        ? "text-[#0074e0]"
        : "text-[#212121]";

  const content = (
    <motion.article
      data-cursor-label={project.cursorLabel}
      data-cursor-badge={project.cursorBadge}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex w-full flex-col overflow-hidden rounded-[32px] border bg-white/90 shadow-[0_24px_80px_rgba(20,20,40,0.09)] backdrop-blur md:min-h-[420px] md:flex-row md:items-stretch"
      style={{
        borderColor: project.borderColor,
        background: `linear-gradient(135deg, ${project.metaBg} 0%, rgba(255,255,255,0.96) 42%, rgba(255,255,255,0.98) 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <div className="relative m-4 aspect-[1.58/1] overflow-hidden rounded-[24px] md:m-5 md:w-[46%] md:max-w-[600px]">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(circle at 24% 20%, ${project.metaBg} 0%, rgba(255,255,255,0.92) 52%, ${project.metaBg} 100%)`,
          }}
        />
        <div className="absolute inset-x-5 bottom-5 top-5 rounded-[22px] border border-white/70 bg-white/55 shadow-inner" />
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.04, rotate: -0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-7 drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] md:p-9"
          />
        </motion.div>
      </div>

      <div className="relative flex flex-1 flex-col justify-between gap-9 px-6 pb-7 pt-2 md:px-7 md:py-9 md:pl-2 md:pr-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className={`font-display text-[34px] font-semibold leading-[1.08] ${titleColor}`}>
                {project.title}
                {project.titleHighlight && (
                  <span
                    className={
                      project.id === "hpc" ||
                      project.id === "nis-cost" ||
                      project.id === "parakh-portal"
                        ? undefined
                        : "text-[#008e06]"
                    }
                    style={
                      project.id === "hpc" ||
                      project.id === "nis-cost" ||
                      project.id === "parakh-portal"
                        ? { color: accentColor }
                        : undefined
                    }
                  >
                    {" "}
                    {project.titleHighlight}
                  </span>
                )}
              </h3>
              <span
                className="inline-flex shrink-0 items-center gap-2 rounded-full border bg-white/75 px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.12em] shadow-sm backdrop-blur"
                style={{ borderColor: project.borderColor, color: accentColor }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {project.badge ?? (project.comingSoon ? "Soon" : "Case Study")}
              </span>
            </div>
            <p className="max-w-[620px] font-display text-xl leading-[1.45] tracking-[0.01em] text-[#333]/85 md:text-[22px]">
              {project.subtitle}
            </p>
          </div>

          <div
            className="grid gap-3 sm:grid-cols-2"
          >
            {project.meta.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-[0_10px_24px_rgba(20,20,40,0.04)] backdrop-blur"
              >
                <p className="font-display text-xs font-medium uppercase tracking-[0.12em] text-black/35">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-black/65">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {project.comingSoon ? (
            <span className="inline-flex rounded-full border border-[#ededed] bg-white/70 px-6 py-3 font-display text-base font-semibold text-[#9a9a9a] shadow-sm">
              Coming Soon!
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-base font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition group-hover:gap-3"
              style={{ backgroundColor: accentColor }}
            >
              {project.cta}
              <span aria-hidden="true">-&gt;</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );

  const card = project.comingSoon ? (
    content
  ) : (
    <Link
      href={project.href}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </Link>
  );

  return (
    <div
      className="sticky"
      style={{ top: `calc(5rem + ${index * 18}px)`, zIndex: index + 1 }}
    >
      <Reveal y={48} scale={0.94} delay={index * 0.08}>
        {card}
      </Reveal>
    </div>
  );
}
