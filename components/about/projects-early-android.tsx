import ProjectsGrid from "@/components/about/projects-grid";

export default function ProjectsEarlyAndroid() {
  const slugs = ["local-market-place-app", "tshirt-design-app"];
  return (
    <section id="early-android">
      <ProjectsGrid slugs={slugs} />
    </section>
  );
}
