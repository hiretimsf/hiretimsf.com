import ProjectsGrid from "@/features/about/components/ProjectGrid";

export default function ProjectsToday() {
  const slugs = ["sign-language-kotlin", "runmusic-kotlin"];
  return <ProjectsGrid slugs={slugs} />;
}
