import PositionDescription from "./PositionDescription";
import PositionMeta from "./PositionMeta";
import PositionPosition from "./PositionPosition";
import PositionSkills from "./PositionSkills";

interface PositionMainProps {
  employmentType: string;
  employmentPeriod: string;
  employmentDuration: string;
  description: string;
  skills: string[];
  icon: string;
  title: string;
}

export default function PositionMain({
  employmentType,
  employmentPeriod,
  employmentDuration,
  description,
  skills,
  icon,
  title,
}: PositionMainProps) {
  return (
    <div className="flex flex-col px-6 md:px-8">
      <PositionPosition icon={icon} title={title} />
      <PositionMeta
        employmentType={employmentType}
        employmentPeriod={employmentPeriod}
        employmentDuration={employmentDuration}
      />
      <PositionDescription description={description} />
      <PositionSkills skills={skills} />
    </div>
  );
}
