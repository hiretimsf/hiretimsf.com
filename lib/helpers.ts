import { format } from "date-fns";
/**
 * Gets base URL for the app
 */
export function getBaseUrl(slug?: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hiretimsf.com");

  if (!slug) return baseUrl;

  // Ensure slug starts with forward slash
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return `${baseUrl}${normalizedSlug}`;
}

// Slugify
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize(`NFD`)
    .trim()
    .replace(/\./g, ``)
    .replace(/\s+/g, `-`)
    .replace(/[^\w-]+/g, ``)
    .replace(/--+/g, `-`);
}
export function formatDate(date: string, formatStr: string = "MMM d, yyyy") {
  return format(new Date(date), formatStr);
}

export function parseDate(dateStr?: string): number {
  if (!dateStr) return 0;
  // Split by hyphen, en dash, or em dash with surrounding spaces
  const parts = dateStr.split(/\s+[–—-]\s+/);
  const endDate = parts[parts.length - 1].trim();

  if (endDate.toLowerCase().includes("present")) {
    return new Date().getTime();
  }
  const timestamp = new Date(endDate).getTime();
  return isNaN(timestamp) ? 0 : timestamp;
}

/**
 * Gets the most recent date (usually end date) from a list of positions.
 * This determines the sorting order of the experience.
 */
export function getMostRecentDate(
  positions: Array<{ employmentPeriod: string }>,
): Date {
  const timestamps = positions
    .map((pos) => parseDate(pos.employmentPeriod))
    .filter((timestamp) => timestamp !== 0);

  if (timestamps.length === 0) return new Date(0); // Fallback for no dates

  // Sort descending to get the latest date first
  timestamps.sort((a, b) => b - a);
  return new Date(timestamps[0]);
}
