"use client";

import Image from "next/image";
import Link from "next/link";
import type { MoreProject } from "@/data/caseStudyTypes";
import { CaseStudyReveal, CaseStudySectionTitle, caseStudySectionClass } from "./CaseStudyReveal";

type CaseStudyMoreProjectsProps = {
  projects: MoreProject[];
};

export function CaseStudyMoreProjects({ projects }: CaseStudyMoreProjectsProps) {
  return (
    <section className={`${caseStudySectionClass} flex flex-col items-center gap-10 pb-6 pt-2`}>
      <CaseStudyReveal>
        <CaseStudySectionTitle className="text-center">MORE PROJECTS</CaseStudySectionTitle>
      </CaseStudyReveal>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <CaseStudyReveal key={project.title} delay={index * 0.08}>
            <Link
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              data-cursor-label={project.cursorLabel ?? "Product Design"}
              className="group block overflow-hidden rounded-xl border-2 border-[#f2f2f2] bg-white transition hover:border-[#e0e0e0]"
            >
              <div className="relative aspect-[1.58/1] w-full bg-[#fafafa]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-end justify-between gap-3 px-5 py-4">
                <h3 className="font-display text-xl font-semibold text-[#1e1e2f]">
                  {project.title}
                  <span className="text-[#666]"> – {project.subtitle}</span>
                </h3>
                <span className="shrink-0 rounded-[5px] bg-[#262626] px-3 py-1.5 font-display text-sm font-medium text-white transition group-hover:bg-black">
                  View Project
                </span>
              </div>
              <p className="px-5 pb-4 font-display text-sm font-medium text-[#6666ff]">
                {project.tag}
              </p>
            </Link>
          </CaseStudyReveal>
        ))}
      </div>
    </section>
  );
}
