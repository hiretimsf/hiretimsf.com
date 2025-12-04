"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FAMILY_PHOTOS } from "../data/family-photos";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import * as React from "react";

export default function FamilyPhotos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto w-full mb-4">
      {FAMILY_PHOTOS.map((photo, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-xl cursor-pointer",
                index !== 1 && "hidden md:block",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                className="h-auto w-full transition-transform hover:scale-105 rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-full p-0 overflow-hidden border-none bg-transparent shadow-none">
            <VisuallyHidden>
              <DialogTitle>{photo.alt}</DialogTitle>
            </VisuallyHidden>
            <div className="relative w-full h-[80vh]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
