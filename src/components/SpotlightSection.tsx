import { spotlightProjects } from "@/data/projects";
import { SpotlightCard } from "./SpotlightCard";

export function SpotlightSection() {
  return (
    <section
      id="spotlight"
      data-cursor-label="You"
      className="mx-auto flex w-[85%] max-w-6xl flex-col items-center pb-[120px]"
    >
      <div className="flex w-full flex-col gap-[42px]">
        {spotlightProjects.map((project, index) => (
          <SpotlightCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
