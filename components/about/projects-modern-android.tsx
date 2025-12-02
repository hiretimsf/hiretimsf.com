import ProjectsGrid from "@/components/about/projects-grid";

export default function ProjectsModernAndroid() {
  const slugs = ["portfolio-app-kotlin", "portfolio-app-java"];
  return (
    <section id="modern-android">
      <ProjectsGrid slugs={slugs} />
    </section>
  );
}
