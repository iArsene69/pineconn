CREATE TABLE `media` (
	`id` integer PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`public_id` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` text DEFAULT '2024-02-07T13:05:09.560Z' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `refresh_token` (
	`id` integer PRIMARY KEY NOT NULL,
	`token` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` text DEFAULT '2024-02-07T13:05:09.560Z' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `threads` (
	`id` integer PRIMARY KEY NOT NULL,
	`thread` text NOT NULL,
	`user_id` integer NOT NULL,
	`media_id` integer,
	`reply_to` integer,
	`like_count` integer DEFAULT 0,
	`created_at` text DEFAULT '2024-02-07T13:05:09.560Z' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`media_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
/*
 SQLite does not support "Set not null to column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
/*
 SQLite does not support "Set default to column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
ALTER TABLE users ADD `name` text;--> statement-breakpoint
ALTER TABLE users ADD `profile_img` text;--> statement-breakpoint
ALTER TABLE users ADD `password` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `refresh_token_token_unique` ON `refresh_token` (`token`);