import { educationSource } from "./educationSource";
import type { EducationType } from "../types/EducationType";
import type { ExperienceType } from "@/features/experience/types/ExperienceType";
import { getMostRecentDate } from "@/lib/helpers";

export function getEducationItems(): (ExperienceType & { id: string })[] {
  return (
    educationSource
      .getPages()
      .map(({ data, slugs }) => {
        const d = (data ?? {}) as EducationType;
        const slug = Array.isArray(slugs) ? slugs[slugs.length - 1] : "";

        return {
          ...d,
          id: slug,
        } satisfies ExperienceType & { id: string };
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
      })
  );
}
