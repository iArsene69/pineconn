import {
  sqliteTable,
  foreignKey,
  integer,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

const date = new Date().toISOString();

export const media = sqliteTable("media", {
  id: integer("id").primaryKey().notNull(),
  url: text("url").notNull(),
  publicId: text("public_id").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  createdAt: text("created_at").default(date).notNull(),
});

export const refreshToken = sqliteTable(
  "refresh_token",
  {
    id: integer("id").primaryKey().notNull(),
    token: text("token").notNull(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    createdAt: text("created_at").default(date).notNull(),
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
    .references(() => users.id),
  mediaId: integer("media_id").references(() => media.id),
  replyTo: integer("reply_to"),
  likeCount: integer("like_count").default(0),
  createdAt: text("created_at").default(date).notNull(),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().notNull(),
  name: text("name"),
  username: text("username"),
  profileImg: text("profile_img"),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: text("created_at").default(date).notNull(),
});

export const threadRelations = relations(threads, ({ one }) => ({
  parent: one(threads, {
    fields: [threads.replyTo],
    references: [threads.id],
  }),
}));

export const threadMedia = relations(threads, ({ many }) => ({
  media: many(media),
}));

export const userToken = relations(refreshToken, ({ one }) => ({
  user: one(users, {
    fields: [refreshToken.userId],
    references: [users.id],
  }),
}));
