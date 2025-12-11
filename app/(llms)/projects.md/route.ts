import { getProjects } from "@/features/projects/data/projectSource";

const projects = getProjects();

const content = `# Projects

${projects
  .map((item) => {
    const skills = item.techStacks?.length
      ? `\n\nSkills: ${item.techStacks.join(", ")}`
      : "";
    const description = item.description
      ? `\n\n${item.description.trim()}`
      : "";
    const projectUrl = item.websiteUrl || item.githubUrl;
    const link = projectUrl ? `\n\nProject URL: ${projectUrl}` : "";

    return `## ${item.title}${link}${skills}${description}`;
  })
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
