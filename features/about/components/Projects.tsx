"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BrowserWrapper from "@/features/home/components/BrowserWrapper";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { WebProjectType } from "../types/WebProject";

export default function Projects({ data }: { data: WebProjectType[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full space-y-4">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2">
              <div className="h-full p-1">
                <Card
                  className="h-full gap-0 rounded-md border-x border-b border-border-edge py-0 transition-all duration-300"
                  role="article"
                  aria-labelledby={`project-title-${index}`}
                >
                  <BrowserWrapper>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        alt={item.imageAlt}
                        src={item.imageUrl}
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
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {item.description && (
                          <CardDescription className="border-b border-dashed border-border-edge px-2 py-2">
                            <span className="line-clamp-3 text-balance text-left text-sm/6 text-foreground">
                              {item.description}
                            </span>
                          </CardDescription>
                        )}
                      </CardContent>
                      <CardFooter className="flex w-full flex-col items-stretch py-2 px-2">
                        <Button asChild className="w-full" variant="outline">
                          <Link
                            href={item.liveDemo ?? ""}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline"
                          >
                            Live Demo
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                    <div className="flex h-full w-6 flex-none border-l border-dashed border-border-edge" />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={(e) => {
                e.preventDefault();
                api?.scrollPrev();
              }}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <div className="flex items-center gap-2 px-4">
              {Array.from({ length: count }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className="h-2 rounded-full bg-primary"
                  initial={false}
                  animate={{
                    width: current === index + 1 ? 24 : 8,
                    opacity: current === index + 1 ? 1 : 0.3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={(e) => {
                e.preventDefault();
                api?.scrollNext();
              }}
              aria-label="Next slide"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
