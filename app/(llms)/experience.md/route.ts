import { getExperienceItems } from "@/features/experience/data/get-experience-items";

const experiences = getExperienceItems();

const content = `# Experience

${experiences
  .map((item) =>
    item.positions
      .map((position) => {
        const skills =
          position.skills?.map((skill) => skill).join(", ") || "N/A";
        return `## ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod}\n\nSkills: ${skills}\n\n${position.description?.trim()}`;
      })
      .join("\n\n"),
  )
  .join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
