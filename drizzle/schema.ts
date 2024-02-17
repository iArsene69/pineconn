import {
  sqliteTable,
  integer,
  text,
  uniqueIndex,
  foreignKey,
  type AnySQLiteColumn,
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().notNull(),
  name: text("name"),
  username: text("username"),
  profileImg: text("profile_img"),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const refreshToken = sqliteTable(
  "refresh_token",
  {
    id: integer("id").primaryKey().notNull(),
    token: text("token").notNull(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => {
    return {
      tokenUnique: uniqueIndex("refresh_token_token_unique").on(table.token),
    };
  }
);

export const threads = sqliteTable("threads", {
  id: integer("id").primaryKey().notNull(),
  thread: text("thread").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  replyTo: integer("reply_to"),
  likeCount: integer("like_count").default(0),
});

export const media = sqliteTable("media", {
  id: integer("id").primaryKey().notNull(),
  url: text("url").notNull(),
  publicId: text("public_id").notNull(),
  threadId: integer("thread_id").references(() => threads.id, {
    onDelete: "cascade",
  }),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

//Relations

export const threadRelations = relations(threads, ({ one, many }) => ({
  replyTo: one(threads, {
    fields: [threads.replyTo],
    references: [threads.id],
	relationName: "replies"
  }),

  replies: many(threads, {
	relationName: "replies"
  }),

  media: many(media),
}));


export const mediaRelations = relations(media, ({ one }) => ({
  threads: one(threads, {
    fields: [media.threadId],
    references: [threads.id],
  }),
}));

export const userToken = relations(refreshToken, ({ one }) => ({
  user: one(users, {
    fields: [refreshToken.userId],
    references: [users.id],
  }),
}));
