import ProjectsGrid from "@/components/about/projects-grid";

export default function ProjectsWebDevelopment() {
  const slugs = [
    "full-stack-blog-app",
    "portfolio-website-v3",
    "portfolio-website-v2",
    "portfolio-website-v1",
  ];
  return (
    <section id="web-development">
      <ProjectsGrid slugs={slugs} />
    </section>
  );
}
