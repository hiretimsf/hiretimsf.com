import { cn } from "@/lib/utils";

type ProjectSkillsProps = {
  skills?: string[];
};

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  if (!Array.isArray(skills) || skills.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-1.5 border-x border-gray-200 px-4 py-4",
      )}
    >
      {skills.map((skill) => (
        <li key={skill} className="flex">
          <Tag title={skill} />
        </li>
      ))}
    </ul>
  );
}

interface TagProps {
  title: string;
}

function Tag({ title }: TagProps) {
  return (
    <span className="bg-muted/50 text-foreground/80 inline-flex items-center rounded-lg border border-gray-200 px-1.5 py-0.5 font-mono text-sm">
      {title}
    </span>
  );
}
