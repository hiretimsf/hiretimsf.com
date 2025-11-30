import { SITE_INFO } from "@/config/seo/site";

const content = `# ${SITE_INFO.name}

> A minimal, pixel-perfect dev portfolio, component registry, and blog to showcase my work as a Design Engineer.

- [About](${SITE_INFO.url}/about): A quick intro to me, my tech stack, and how to connect.
- [Projects](${SITE_INFO.url}/projects): Selected projects that show my skills and creativity.
- [Resume](${SITE_INFO.url}/resume): My professional experience and education.
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
