import { memberSchema } from "@/db/schema";
import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";  

export const InsertMemberSchema = createInsertSchema(memberSchema, {
  name: (schema) => schema.min(1, "Name is a required field"),
  business_name: (schema) => schema.min(1, "Business Name is a required field"),
  business_type: (schema) => schema.min(1, "Business Type is a required field"),
  business_email: z.email().min(5, "Email is a required field"),
  member_type: (schema) => schema,
  business_description: z.string().optional()
})

export const SelectMemberSchema = createSelectSchema(memberSchema)

export type InsertMemberSchemaType = z.infer<typeof InsertMemberSchema>

export type SelectMemberSchemaType = z.infer<typeof SelectMemberSchema>
