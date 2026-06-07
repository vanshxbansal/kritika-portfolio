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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group flex w-full flex-col overflow-hidden rounded-xl border-2 bg-white md:flex-row md:items-end"
      style={{ borderColor: project.borderColor }}
    >
      <div className="relative aspect-[1.58/1] w-full overflow-hidden md:w-[46%] md:max-w-[600px]">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-9 px-5 py-8 md:px-0 md:py-12">
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={`font-display text-[30px] font-semibold ${titleColor}`}>
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
                      project.id === "hpc"
                        ? { color: hpcTheme.primary }
                        : project.id === "nis-cost"
                          ? { color: nisCostTheme.primary }
                          : project.id === "parakh-portal"
                            ? { color: "#6536eb" }
                            : undefined
                    }
                  >
                    {" "}
                    {project.titleHighlight}
                  </span>
                )}
              </h3>
              {project.badge && (
                <span className="inline-flex items-center gap-2 rounded-full bg-[#e4ffd9] px-3 py-1 font-display text-sm font-semibold tracking-wide text-[#00a308]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a308]" />
                  {project.badge}
                </span>
              )}
            </div>
            <p className="font-display text-[22px] tracking-[0.02em] text-[#333]">
              {project.subtitle}
            </p>
          </div>

          <div
            className="hidden flex-wrap gap-7 rounded-[10px] px-[30px] py-2.5 md:flex"
            style={{ backgroundColor: project.metaBg }}
          >
            {project.meta.map((item, metaIndex) => (
              <div key={item.label} className="flex items-center gap-7">
                {metaIndex > 0 ? (
                  <div
                    className="h-14 w-px shrink-0"
                    style={{ backgroundColor: project.metaDivider }}
                  />
                ) : null}
                <div className="shrink-0">
                  <p className="font-display text-sm text-black/40">{item.label}</p>
                  <p className="font-display text-lg font-medium text-black/60">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {project.comingSoon ? (
            <span className="inline-flex rounded-[5px] border-2 border-[#ededed] px-[30px] py-3 font-display text-lg font-medium text-[#b3b3b3]">
              Coming Soon!
            </span>
          ) : (
            <span className="inline-flex rounded-[5px] bg-[#262626] px-[30px] py-3 font-display text-lg font-medium text-white transition group-hover:bg-black">
              {project.cta}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );

  return (
    <Reveal y={48} scale={0.94} delay={index * 0.08}>
      {project.comingSoon ? (
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
      )}
    </Reveal>
  );
}
