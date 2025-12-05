import { DE, US } from "country-flag-icons/react/3x2";
import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import GraduateIcon from "@/icons/graduate-icon";
import { educationSource } from "@/lib/source";
import type { ExperienceItemType } from "@/types";
import ExperienceItem from "@/features/experience/components/ExperienceItem";

// Component for displaying education history with TOC navigation
interface EducationSectionProps {
  className?: string;
}

type EducationData = {
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  companyLocation?: string;
  country?: string;
  isCurrentEmployer?: boolean;
  positions: Array<{
    id: string;
    title: string;
    employmentPeriod: string;
    employmentDuration?: string;
    employmentType?: string;
    description?: string;
    skills?: string[];
    icon?: string;
  }>;
  projectSlugs?: string[];
};

// Map icon names to icon components
const iconMap: Record<string, React.ComponentType | React.ReactNode> = {
  GraduateIcon,
};

// Map country codes to country components
const countryMap: Record<string, React.ComponentType> = {
  US,
  DE,
};

// Helper function to parse date from employmentPeriod string
function parseDateFromPeriod(period: string): Date | null {
  const parts = period.split(" — ");
  if (parts.length < 1) return null;

  const startDateStr = parts[0].trim();
  const date = new Date(startDateStr);

  // Check if date is valid
  if (Number.isNaN(date.getTime())) return null;

  return date;
}

// Helper function to get the most recent date from all positions in an experience
function getMostRecentDate(
  positions: Array<{ employmentPeriod: string }>,
): Date {
  const dates = positions
    .map((pos) => parseDateFromPeriod(pos.employmentPeriod))
    .filter((date): date is Date => date !== null);

  if (dates.length === 0) return new Date(0); // Return epoch if no valid dates

  // Sort descending and return the most recent
  dates.sort((a, b) => b.getTime() - a.getTime());
  return dates[0];
}

// Load education from MDX files
const EDUCATION: ExperienceItemType[] = educationSource
  .getPages()
  .map(({ data, slugs }) => {
    const d = (data ?? {}) as EducationData;
    const slug = Array.isArray(slugs) ? slugs[slugs.length - 1] : "";

    // Map country code to country component
    const country = d.country ? countryMap[d.country] : undefined;

    return {
      id: slug,
      companyName: d.companyName,
      companyWebsite: d.companyWebsite,
      companyLogo: d.companyLogo,
      companyLogoAlt: d.companyLogoAlt,
      companyLocation: d.companyLocation,
      country,
      isCurrentEmployer: d.isCurrentEmployer,
      positions: d.positions.map((position) => ({
        ...position,
        icon: position.icon
          ? (iconMap[position.icon] as React.ReactNode)
          : GraduateIcon,
      })),
      // Education doesn't typically have projects linked in this app context
      projects: undefined,
    } satisfies ExperienceItemType;
  })
  // Sort experiences by date (most recent first)
  .sort((a, b) => {
    const dateA = getMostRecentDate(a.positions);
    const dateB = getMostRecentDate(b.positions);

    // If dates are equal, keep current employer at top
    if (dateA.getTime() === dateB.getTime()) {
      if (a.isCurrentEmployer && !b.isCurrentEmployer) return -1;
      if (!a.isCurrentEmployer && b.isCurrentEmployer) return 1;
      return 0;
    }

    // Sort by date descending (most recent first)
    return dateB.getTime() - dateA.getTime();
  });

export default function EducationSection({ className }: EducationSectionProps) {
  return (
    <section className={className} aria-label="Education">
      <DocsLayout
        tree={educationSource.pageTree}
        containerProps={{ className: "relative bg-transparent" }}
      >
        <DocsPage
          toc={EDUCATION.map((education) => ({
            title: education.companyName,
            url: `#${education.id}`,
            depth: 2,
          }))}
          prose={false}
        >
          <DocsBody prose={false}>
            {EDUCATION && EDUCATION.length > 0 ? (
              EDUCATION.map((education, index) => (
                <ExperienceItem
                  key={education.id}
                  experience={education}
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
