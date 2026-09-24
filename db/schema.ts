import { sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
export const reservations=sqliteTable("reservations",{
 groupKey:text("group_key").primaryKey(),
 itemId:text("item_id").notNull(),
 ownerHash:text("owner_hash").notNull(),
 cancelHash:text("cancel_hash").notNull(),
 createdAt:text("created_at").notNull(),
}, table => [uniqueIndex("reservations_item_id_unique").on(table.itemId)]);
