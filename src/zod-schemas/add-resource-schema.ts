import z from "zod";
import { InsertBlogSchema } from "./blog";
import { InsertCategorySchema } from "./category";

export const ResourceWithCategoryFormSchema = z.object({
  resourceData: InsertBlogSchema,
  categoryData: z.array(InsertCategorySchema).min(1, "Choose atleast 1 category").max(4, "Blog with >4 elements in this economy?")
})

export type ResourceWithCategoryFormSchemaType = z.infer<typeof ResourceWithCategoryFormSchema>;
