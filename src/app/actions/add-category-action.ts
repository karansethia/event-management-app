"use server"

import { actionClient } from "@/lib/safe-action";
import { db } from "@/db";
import { InsertCategorySchema, InsertCategorySchemaType } from "@/zod-schemas/category";
import { flattenValidationErrors } from "next-safe-action";
import { categories } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const insertCategoryAction = actionClient
  .metadata({ actionName: "saveCategoryAction" })
  .inputSchema(InsertCategorySchema, {
    handleValidationErrorsShape: async (e) => flattenValidationErrors(e).fieldErrors
  })
  .action(async ({ parsedInput: categoryData }: { parsedInput: InsertCategorySchemaType }) => {

  const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session) redirect('/login')

    const results = await db.insert(categories)
      .values({
        category_name: categoryData.category_name,
        category_slug: categoryData.category_slug
      }).returning({ insertedId: categories.id })

    revalidatePath('/admin/resources')

    return { message: "Category Added", insertedId: results[0].insertedId }
  })
