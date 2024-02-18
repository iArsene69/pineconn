CREATE TABLE `likes` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`threadId` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`threadId`) REFERENCES `threads`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
ALTER TABLE `threads` RENAME COLUMN `reply_to` TO `reply_to_id`;--> statement-breakpoint
ALTER TABLE `threads` DROP COLUMN `like_count`;