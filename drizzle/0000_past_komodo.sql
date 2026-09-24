CREATE TABLE `reservations` (
	`group_key` text PRIMARY KEY NOT NULL,
	`item_id` text NOT NULL,
	`owner_hash` text NOT NULL,
	`cancel_hash` text NOT NULL,
	`created_at` text NOT NULL
);
