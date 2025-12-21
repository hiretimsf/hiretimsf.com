"use client";

import { useEffect } from "react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      try {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
          ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
          person_profiles: "identified_only",
          session_idle_timeout_seconds: 1800,
          cookieless_mode: "on_reject",
          autocapture: false,
          disable_session_recording: true,
          advanced_disable_decide: true,
        });

        posthog.has_opted_out_capturing();
      } catch (error) {
        console.warn("PostHog initialization failed:", error);
      }
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
