import ProjectsGrid from "@/features/about/components/ProjectGrid";

export default function PartOne() {
  const slugs = ["local-market-place-app", "tshirt-design-app"];
  return (
    <section id="how-i-got-started">
      <ProjectsGrid slugs={slugs} />
    </section>
  );
}
