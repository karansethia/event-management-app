import { categories } from "@/db/schema";
import { createSelectSchema, createInsertSchema } from "drizzle-zod"
import { z } from "zod/v4";

export const InsertCategorySchema = createInsertSchema(categories, {
  id: z.number(),
  category_name: (schema) => schema.min(4, "Category is required"),
  category_slug: (schema) => schema.min(4, "Category is required"),
})

const SelectCategorySchema = createSelectSchema(categories);

export type InsertCategorySchemaType = z.infer<typeof InsertCategorySchema>;

export type SelectCategorySchemaType = z.infer<typeof SelectCategorySchema>;
