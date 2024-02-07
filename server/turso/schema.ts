import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username"),
  email: text("email"),
  creted_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
