import { blogs } from "@/db/schema";
import { createSelectSchema, createInsertSchema } from "drizzle-zod"
import { z } from "zod";

export const InsertBlogSchema = createInsertSchema(blogs, {
  id: z.number(),
  blog_title: (schema) => schema.min(10, "A Proper title is required ( good for SEO )"),
  blog_slug: (schema) => schema.min(10, "A Proper slug is required ( good for SEO )"),
  blog_content: (schema) => schema.min(50, "Content should be minimum 50 words"),
  author: (schema) => schema.min(1, "Author name is required"),
  blog_excerpt: (schema) => schema.min(15, "Blog excerpt is required"),
  hero_image: (schema) => schema.min(1, "A Featured image is required"),
})

export const SelectBlogSchema = createSelectSchema(blogs)

export type InsertBlogSchemaType = z.infer<typeof InsertBlogSchema>

export type SelectBlogSchemaType = z.infer<typeof SelectBlogSchema>
