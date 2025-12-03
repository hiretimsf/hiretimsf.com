"use client";

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import * as React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

/**
 * Custom hook for media queries with proper SSR handling
 * Prevents hydration mismatches by returning undefined initially
 */
const useMediaQuery = (query: string): boolean | undefined => {
  const [matches, setMatches] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Create handler function
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Use modern addEventListener with event object
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
};

interface Photo {
  src: string;
  alt: string;
  className?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

/**
 * Unified photo gallery component with responsive behavior
 */
const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = React.useState(false);

  // Handle client-side mounting to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing or a placeholder during SSR to prevent layout shift
  if (!mounted || isMobile === undefined) {
    return (
      <section
        className="relative mx-auto my-6 flex max-w-2xl px-6 text-center align-middle sm:my-12"
        aria-label="Personal photos gallery"
      >
        <div className="mx-auto w-full max-w-xs p-2 md:w-full md:max-w-2xl">
          <div className="flex gap-2">
            {photos.slice(0, 3).map((_photo, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: index is stable for placeholders
                key={`placeholder-${index}`}
                className="aspect-2/3 flex-1 animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const itemClassName = isMobile ? "" : "pl-1 md:basis-1/2 lg:basis-1/3";

  return (
    <section
      className="relative flex max-w-2xl text-left"
      aria-label="Personal photos gallery"
    >
      <PhotoProvider>
        <Carousel>
          <CarouselContent className={isMobile ? "" : "-ml-1"}>
            {photos.map((photo, index) => (
              <CarouselItem
                key={`${photo.src}-${index}`}
                className={itemClassName}
              >
                <div className="p-1">
                  <div
                    className={cn(
                      "animate-fade-in-up aspect-2/3 rounded-xl",
                      photo.className,
                    )}
                  >
                    <PhotoView src={photo.src}>
                      {/* biome-ignore lint/performance/noImgElement: Required for react-photo-view */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full cursor-pointer rounded-xl object-cover"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </PhotoView>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {photos.length > 3 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
          {isMobile && <CarouselIndicator totalSlides={photos.length} />}
        </Carousel>
      </PhotoProvider>
    </section>
  );
};

export default PhotoGallery;
