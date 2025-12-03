import Link from "next/link";
import Image from "next/image";
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
import BrowserWrapper from "@/features/home/components/BrowserWrapper";

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

export default function ProjectGrid({ slugs }: { slugs: string[] }) {
  const projects = slugs.map((slug) => {
    const page = projectsSource.getPage([slug]) as
      | { data?: ProjectData }
      | undefined;
    return { slug, data: (page?.data ?? {}) as ProjectData };
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map(({ slug, data }, index) => {
        const hasActions = Boolean(data.github || data.liveDemo);

        // Case 1: has embed video -> render video card
        if (data.embedUrl) {
          return (
            <Card
              key={slug}
              className="h-full gap-0 rounded-md border-x border-b border-border-edge py-0 shadow-lg transition-all duration-300"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              <BrowserWrapper>
                <div className="relative aspect-video w-full overflow-hidden">
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
              </BrowserWrapper>
              <div className="flex w-full items-center justify-between">
                <div className="flex h-full w-6 flex-none flex-col border-r border-dashed border-border-edge" />
                <div className="flex flex-1 flex-col">
                  <CardHeader>
                    <CardTitle
                      id={`project-title-${index}`}
                      className="border-b border-dashed border-border-edge px-2 py-2 text-left text-lg/6 text-foreground"
                    >
                      {data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {data.description && (
                      <CardDescription className="border-b border-dashed border-border-edge px-2 py-2">
                        <span className="line-clamp-3 text-balance text-left text-sm/6 text-foreground">
                          {data.description}
                        </span>
                      </CardDescription>
                    )}
                  </CardContent>
                  {hasActions && (
                    <CardFooter className="flex w-full flex-col items-stretch p-0">
                      {data.liveDemo && data.liveDemo !== "#" && (
                        <div
                          className={`flex w-full px-2 py-2 ${data.github ? "border-b border-dashed border-border-edge" : ""}`}
                        >
                          <Button asChild className="w-full" variant="outline">
                            <Link
                              href={data.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline"
                            >
                              Live Demo
                            </Link>
                          </Button>
                        </div>
                      )}
                      {data.github && (
                        <div className="flex w-full px-2 py-2">
                          <Button asChild className="w-full" variant="outline">
                            <Link
                              href={data.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  )}
                </div>
                <div className="flex h-full w-6 flex-none border-l border-dashed border-border-edge" />
              </div>
            </Card>
          );
        }

        // Case 2: imageUrl and no embedUrl -> render the image card
        if (data.imageUrl) {
          return (
            <Card
              key={slug}
              className="h-full gap-0 rounded-md border-x border-b border-border-edge py-0 shadow-lg transition-all duration-300"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              <BrowserWrapper>
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    alt={data.imageAlt || data.title || "Project image"}
                    src={data.imageUrl}
                    width={1000}
                    height={500}
                    className="h-full w-full rounded-none object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
              </BrowserWrapper>
              <div className="flex w-full items-center justify-between">
                <div className="flex h-full w-6 flex-none flex-col border-r border-dashed border-border-edge" />
                <div className="flex flex-1 flex-col">
                  <CardHeader>
                    <CardTitle
                      id={`project-title-${index}`}
                      className="border-b border-dashed border-border-edge px-2 py-2 text-left text-lg/6 text-foreground"
                    >
                      {data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {data.description && (
                      <CardDescription className="border-b border-dashed border-border-edge px-2 py-2">
                        <span className="line-clamp-3 text-balance text-left text-sm/6 text-foreground">
                          {data.description}
                        </span>
                      </CardDescription>
                    )}
                  </CardContent>
                  {hasActions && (
                    <CardFooter className="flex w-full flex-col items-stretch p-0">
                      {data.liveDemo && data.liveDemo !== "#" && (
                        <div
                          className={`flex w-full px-2 py-2 ${data.github ? "border-b border-dashed border-border-edge" : ""}`}
                        >
                          <Button asChild className="w-full" variant="outline">
                            <Link
                              href={data.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline"
                            >
                              Live Demo
                            </Link>
                          </Button>
                        </div>
                      )}
                      {data.github && (
                        <div className="flex w-full px-2 py-2">
                          <Button asChild className="w-full" variant="outline">
                            <Link
                              href={data.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  )}
                </div>
                <div className="flex h-full w-6 flex-none border-l border-dashed border-border-edge" />
              </div>
            </Card>
          );
        }

        // Case 3: no media -> fallback
        return (
          <Card
            key={slug}
            className="h-full gap-0 rounded-md border-x border-b border-border-edge py-0 shadow-lg transition-all duration-300"
            role="article"
            aria-labelledby={`project-title-${index}`}
          >
            <BrowserWrapper>
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-muted">
                <p className="text-sm text-muted-foreground">
                  No media available
                </p>
              </div>
            </BrowserWrapper>
            <div className="flex w-full items-center justify-between">
              <div className="flex h-full w-6 flex-none flex-col border-r border-dashed border-border-edge" />
              <div className="flex flex-1 flex-col">
                <CardHeader>
                  <CardTitle
                    id={`project-title-${index}`}
                    className="border-b border-dashed border-border-edge px-2 py-2 text-left text-lg/6 text-foreground"
                  >
                    {data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {data.description && (
                    <CardDescription className="border-b border-dashed border-border-edge px-2 py-2">
                      <span className="line-clamp-3 text-balance text-left text-sm/6 text-foreground">
                        {data.description}
                      </span>
                    </CardDescription>
                  )}
                </CardContent>
                {hasActions && (
                  <CardFooter className="flex w-full flex-col items-stretch p-0">
                    {data.liveDemo && data.liveDemo !== "#" && (
                      <div
                        className={`flex w-full px-2 py-2 ${data.github ? "border-b border-dashed border-border-edge" : ""}`}
                      >
                        <Button asChild className="w-full" variant="outline">
                          <Link
                            href={data.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    )}
                    {data.github && (
                      <div className="flex w-full px-2 py-2">
                        <Button asChild className="w-full" variant="outline">
                          <Link
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline text-foreground! hover:text-foreground/80! transition-colors duration-200"
                          >
                            GitHub
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardFooter>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
