"use client";

import { memo, useState } from "react";
import { Tweet } from "react-tweet";
import type { TestimonialType } from "@/features/home/types/TestimonialType";

// Type guard for Shoutout
function isTweetShoutout(
  item: TestimonialType,
): item is TestimonialType & { type: "tweet"; id: string } {
  return item.type === "tweet" && typeof item.id === "string";
}

type TestimonialItemProps = {
  item: TestimonialType;
  index: number;
};

export default memo(function TestimonialItem({
  item,
  index,
}: TestimonialItemProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-foreground">Content unavailable</p>
      </div>
    );
  }

  return (
    <div key={`${item.type}-${index}`} className="rounded-xl">
      {isTweetShoutout(item) ? (
        <Tweet id={item.id} onError={() => setHasError(true)} />
      ) : (
        <iframe
          suppressHydrationWarning
          key={`${item.url}-${index}`}
          src={item.url}
          className="aspect-video w-full rounded-xl"
          allowFullScreen
          title="YouTube video"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
});
