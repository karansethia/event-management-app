import { pgTable, serial, varchar, boolean, timestamp, text, integer } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  blog_title: text("blog_title").notNull(),
  blog_content: text("blog_content").notNull(),
  blog_slug: text("slug").notNull(),
  blog_excerpt: text("blog_excerpt").notNull(),
  author: varchar("author").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  hero_image: varchar("hero_image", { length: 400 }).notNull()
})

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  category_name: varchar("category_name").notNull(),
  category_slug: varchar("category_slug").notNull().unique()
})

export const blogCatagoryJunction = pgTable("blog_category_junction", {
  blog_id: integer("blog_id").notNull().references(() => blogs.id),
  category_id: integer("category_id").notNull().references(() => categories.id),
})
