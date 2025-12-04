import Tag from "../Tag";

type ProjectSkillsProps = {
  skills: string[];
};

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  return <Tag skills={skills} />;
}
