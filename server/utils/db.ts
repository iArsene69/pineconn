import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

export const useDB = () => {
  const config = useRuntimeConfig();

  if (!config.tursoDbUrl || !config.tursoAuthToken) throw new Error("TURSO_DB_URL is not set");
  const client = createClient({
    url: config.tursoDbUrl,
    authToken: config.tursoAuthToken,
  });

  const db = drizzle(client);

  return db;
};
