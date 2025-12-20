/**
 * Server-side instrumentation
 * Validates environment variables on server startup
 */

import { validateEnv } from "./lib/env";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Validate environment variables on server startup
    validateEnv();
  }
}

