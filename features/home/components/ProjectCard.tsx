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
import type { ProjectItemType } from "@/features/home/types/ProjectItem";
import Link from "next/link";
import BrowserWrapper from "@/features/home/components/BrowserWrapper";

interface ProjectCardProps {
  project: ProjectItemType;
  index?: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className="h-full gap-0 rounded-md border-x border-b border-border-edge py-0 shadow-lg transition-all duration-300"
      role="article"
      aria-labelledby={`project-title-${index}`}
    >
      <BrowserWrapper>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            alt={project.imageAlt || project.title || "Project image"}
            src={project.imageUrl || "/images/app-placeholder.jpg"}
            width={1000}
            height={500}
            className="h-full w-full rounded-none object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index !== undefined && index < 3}
          />
        </div>
      </BrowserWrapper>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col flex-none w-6 border-r border-border-edge border-dashed h-full" />
        <div className="flex flex-col flex-1">
          <CardHeader>
            <CardTitle
              id={`project-title-${index}`}
              className="text-foreground py-2 text-lg/6 text-left border-b border-dashed border-border-edge px-2"
            >
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm/6 text-left border-b border-dashed border-border-edge pb-2 px-2">
              {project.date ?? null}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="px-2 py-2 border-b border-dashed border-border-edge">
              <span className="text-balance text-foreground line-clamp-3 text-sm/6 text-left">
                {project.description}
              </span>
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col w-full p-0 items-stretch">
            {project.liveDemo && project.liveDemo !== "#" && (
              <div className="flex w-full border-b border-dashed border-border-edge py-2 px-2">
                <Button asChild className="w-full" variant="outline">
                  <Link href={project.liveDemo}>Live Demo</Link>
                </Button>
              </div>
            )}
            {project.github && (
              <div className="flex w-full py-2 px-2">
                <Button asChild className="w-full">
                  <Link href={project.github}>GitHub</Link>
                </Button>
              </div>
            )}
          </CardFooter>
        </div>
        <div className="flex flex-none w-6 border-l border-border-edge border-dashed h-full" />
      </div>
    </Card>
  );
}
