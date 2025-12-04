import Tag from "../Tag";

type PositionSkillsProps = {
  skills?: string[];
};

export default function PositionSkills({ skills }: PositionSkillsProps) {
  return <Tag skills={skills} />;
}
