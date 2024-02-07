import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	id: integer("id").primaryKey().notNull(),
	username: text("username"),
	email: text("email"),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
});