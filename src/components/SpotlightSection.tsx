import { spotlightProjects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

export function SpotlightSection() {
  return (
    <section
      id="spotlight"
      data-cursor-label="You"
      className="mx-auto flex w-[85%] max-w-6xl flex-col items-center gap-10 pb-[120px]"
    >
      <Reveal y={12}>
        <SectionHeading label="SPOTLIGHT" icon="star" />
      </Reveal>
      <div className="flex w-full flex-col gap-[42px]">
        {spotlightProjects.map((project, index) => (
          <SpotlightCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
