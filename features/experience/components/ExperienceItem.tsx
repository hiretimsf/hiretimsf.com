import { cn } from "@/lib/utils";
import type { ProjectType } from "@/features/projects/types/ProjectType";
import type { ExperienceType } from "../types/ExperienceType";
import CompanyMain from "./company/CompanyMain";
import PositionMain from "./position/PositionMain";
import { ProjectMain } from "./project/ProjectMain";

type ExperienceItemProps = {
  experience: ExperienceType & { id: string; projects?: ProjectType[] };
  className?: string;
};

export default function ExperienceItem({
  experience,
  className,
}: ExperienceItemProps) {
  const {
    id,
    companyLogo,
    companyLogoAlt,
    companyName,
    companyLocation,
    companyWebsite,
    country,
    positions,
    projects,
  } = experience;

  const hasPositions = Array.isArray(positions) && positions.length > 0;
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <article
      id={id}
      className={cn(
        "border-r border-b border-border-edge border-dashed sm:mr-6",
        className,
      )}
    >
      <CompanyMain
        companyLogo={companyLogo}
        companyLogoAlt={companyLogoAlt}
        companyName={companyName}
        companyLocation={companyLocation}
        companyWebsite={companyWebsite}
        country={country}
      />

      {hasPositions && (
        <div className="space-y-0">
          {positions.map((position) => (
            <PositionMain
              key={position.id}
              position={position}
              hasProjects={hasProjects}
            />
          ))}
        </div>
      )}

      {hasProjects &&
        projects!.map((project, index) => (
          <ProjectMain
            key={project.title}
            project={project}
            hasBorderTop={index !== 0}
            isLast={index === projects!.length - 1}
          />
        ))}
    </article>
  );
}
