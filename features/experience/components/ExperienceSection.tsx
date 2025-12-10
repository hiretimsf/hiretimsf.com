import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import { experienceSource } from "../data/experienceSource";
import { getExperienceItems } from "../data/get-experience-items";
import ExperienceItem from "./ExperienceItem";

interface WorkExperienceSectionProps {
  className?: string;
}

export default function WorkExperienceSection({
  className,
}: WorkExperienceSectionProps) {
  const experiences = getExperienceItems();

  return (
    <section className={className} aria-label="Work Experience">
      <DocsLayout
        tree={experienceSource.pageTree}
        containerProps={{ className: "relative bg-transparent" }}
      >
        <DocsPage
          toc={experiences.map((experience) => ({
            title: experience.companyName,
            url: `#${experience.id}`,
            depth: 2,
          }))}
          prose={false}
        >
          <DocsBody prose={false}>
            {experiences && experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <ExperienceItem
                  key={experience.id}
                  experience={experience}
                  className={
                    index % 2 === 0 ? undefined : "bg-muted/50 dark:bg-muted/20"
                  }
                />
              ))
            ) : (
              <p className="text-muted-foreground px-4 py-8 text-center text-sm">
                No work experience to display.
              </p>
            )}
          </DocsBody>
        </DocsPage>
      </DocsLayout>
    </section>
  );
}
