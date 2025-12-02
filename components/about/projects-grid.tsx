import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsSource } from "@/lib/source";

type ProjectData = {
  title?: string;
  description?: string;
  embedUrl?: string;
  embedAlt?: string;
  github?: string;
  liveDemo?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default function ProjectsGrid({ slugs }: { slugs: string[] }) {
  const projects = slugs.map((slug) => {
    const page = projectsSource.getPage([slug]) as
      | { data?: ProjectData }
      | undefined;
    return { slug, data: (page?.data ?? {}) as ProjectData };
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map(({ slug, data }) => {
        const hasActions = Boolean(data.github || data.liveDemo);

        // Case 1: has embed video -> render video card
        if (data.embedUrl) {
          return (
            <Card
              key={slug}
              className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-panda-text text-lg">
                  {data.title}
                </CardTitle>
                {data.description && (
                  <CardDescription className="text-panda-text line-clamp-3 text-base">
                    {data.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    src={data.embedUrl}
                    title={data.embedAlt || data.title || "Project demo"}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                </div>
              </CardContent>
              {hasActions && (
                <CardFooter className="flex-col gap-2">
                  {data.github && (
                    <Button
                      type="submit"
                      className="w-full text-sm font-semibold text-white no-underline"
                      asChild
                    >
                      <Link
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Link>
                    </Button>
                  )}
                  {data.liveDemo && (
                    <Button
                      type="submit"
                      className="bg-panda-green hover:bg-panda-dark-green w-full text-sm font-semibold text-white no-underline"
                      asChild
                    >
                      <Link
                        href={data.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          );
        }

        // Case 2: imageUrl and no embedUrl -> render the image-first card (fixed 120-182)
        if (data.imageUrl) {
          return (
            <Card
              key={slug}
              className="bg-panda-prune w-full gap-4 rounded-lg py-0 pb-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div
                className="relative h-40 w-full overflow-hidden rounded-t-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${data.imageUrl})` }}
                role="img"
                aria-label={data.imageAlt || data.title || "Project image"}
              />

              <CardContent>
                <CardTitle className="text-panda-text text-lg">
                  {data.title}
                </CardTitle>
                {data.description && (
                  <CardDescription className="text-panda-text line-clamp-3 text-base">
                    {data.description}
                  </CardDescription>
                )}
              </CardContent>
              {hasActions && (
                <CardFooter className="flex-col gap-2">
                  {data.github && (
                    <Button
                      type="submit"
                      className="w-full text-sm font-semibold text-white no-underline"
                      asChild
                    >
                      <Link
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Link>
                    </Button>
                  )}
                  {data.liveDemo && (
                    <Button
                      type="submit"
                      className="bg-panda-green hover:bg-panda-dark-green w-full text-sm font-semibold text-white no-underline"
                      asChild
                    >
                      <Link
                        href={data.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          );
        }

        // Case 3: no media -> fallback
        return (
          <Card
            key={slug}
            className="bg-panda-prune w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <CardHeader>
              <CardTitle className="text-panda-text text-lg">
                {data.title}
              </CardTitle>
              {data.description && (
                <CardDescription className="text-panda-text line-clamp-3 text-base">
                  {data.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="bg-panda-bg/10 relative flex aspect-video w-full items-center justify-center rounded-lg">
                <p className="text-panda-text/60 text-sm">No media available</p>
              </div>
            </CardContent>
            {hasActions && (
              <CardFooter className="flex-col gap-2">
                {data.github && (
                  <Button
                    type="submit"
                    className="w-full text-sm font-semibold text-white no-underline"
                    asChild
                  >
                    <Link
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </Link>
                  </Button>
                )}
                {data.liveDemo && (
                  <Button
                    type="submit"
                    className="bg-panda-green hover:bg-panda-dark-green w-full text-sm font-semibold text-white no-underline"
                    asChild
                  >
                    <Link
                      href={data.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            )}
          </Card>
        );
      })}
    </div>
  );
}
