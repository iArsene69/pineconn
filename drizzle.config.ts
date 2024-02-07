import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

export default defineConfig({
  schema: "./server/turso/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN || "",
  },
  out: "./drizzle",
});
