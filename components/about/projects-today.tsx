import ProjectsGrid from "@/components/about/projects-grid";

export default function ProjectsToday() {
  const slugs = ["sign-language-kotlin", "runmusic-kotlin"];
  return <ProjectsGrid slugs={slugs} />;
}
