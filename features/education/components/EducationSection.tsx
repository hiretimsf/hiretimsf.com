import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import { educationSource } from "../data/educationSource";
import ExperienceItem from "@/features/experience/components/ExperienceItem";
import { getEducationItems } from "../data/get-education-items";

interface EducationSectionProps {
  className?: string;
}

export default function EducationSection({ className }: EducationSectionProps) {
  const educationItems = getEducationItems();

  return (
    <section className={className} aria-label="Education">
      <DocsLayout
        tree={educationSource.pageTree}
        containerProps={{ className: "relative bg-transparent" }}
      >
        <DocsPage
          toc={educationItems.map((item) => ({
            title: item.companyName,
            url: `#${item.id}`,
            depth: 2,
          }))}
          prose={false}
        >
          <DocsBody prose={false}>
            {educationItems.length > 0 ? (
              educationItems.map((item, index) => (
                <ExperienceItem
                  key={item.id}
                  experience={item}
                  className={index % 2 === 0 ? undefined : "bg-panda-prune/40"}
                />
              ))
            ) : (
              <p className="text-muted-foreground px-4 py-8 text-center text-sm">
                No education to display.
              </p>
            )}
          </DocsBody>
        </DocsPage>
      </DocsLayout>
    </section>
  );
}
