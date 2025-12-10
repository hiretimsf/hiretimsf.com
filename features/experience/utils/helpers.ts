import type { ExperienceType } from "../types/ExperienceType";
import { getMostRecentDate } from "@/lib/helpers";

/**
 * Sorts experiences by date (most recent first).
 * Prioritizes current employers.
 */
export function sortExperiences(a: ExperienceType, b: ExperienceType): number {
  const dateA = getMostRecentDate(a.positions);
  const dateB = getMostRecentDate(b.positions);

  // If dates are equal (or both invalid/same month), prioritize current employer
  if (dateA.getTime() === dateB.getTime()) {
    if (a.isCurrentEmployer && !b.isCurrentEmployer) return -1;
    if (!a.isCurrentEmployer && b.isCurrentEmployer) return 1;
    return 0;
  }

  // Sort by most recent date descending
  return dateB.getTime() - dateA.getTime();
}
