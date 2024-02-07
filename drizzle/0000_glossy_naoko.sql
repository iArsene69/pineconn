CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text,
	`email` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
