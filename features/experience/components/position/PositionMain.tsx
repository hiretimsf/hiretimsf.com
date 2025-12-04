import type { ExperiencePositionItemType } from "@/types";
import PositionDescription from "./PositionDescription";
import PositionMeta from "./PositionMeta";
import PositionPosition from "./PositionPosition";
import PositionSkills from "./PositionSkills";

type PositionMainProps = {
  position: ExperiencePositionItemType;
  hasProjects?: boolean;
};

export default function PositionMain({ position }: PositionMainProps) {
  return (
    <div className="flex flex-col px-6 md:px-8">
      <PositionPosition icon={position.icon} title={position.title} />
      <PositionMeta
        employmentType={position.employmentType ?? ""}
        employmentPeriod={position.employmentPeriod}
        employmentDuration={position.employmentDuration ?? ""}
      />
      <PositionDescription description={position.description} />
      <PositionSkills skills={position.skills} />
    </div>
  );
}
