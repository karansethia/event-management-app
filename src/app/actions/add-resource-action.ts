"use server"

import { actionClient } from "@/lib/safe-action";
import { db } from "@/db";
import { flattenValidationErrors } from "next-safe-action";
import { revalidatePath } from "next/cache";
import { blogCatagoryJunction, blogs, categories } from "@/db/schema";
import { ResourceWithCategoryFormSchema, ResourceWithCategoryFormSchemaType } from "@/zod-schemas/add-resource-schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { checkIdIfExists } from "@/lib/helpers";

export const mutateResourceAction = actionClient
  .metadata({ actionName: "saveCategoryAction" })
  .inputSchema(ResourceWithCategoryFormSchema, {
    handleValidationErrorsShape: async (e) => flattenValidationErrors(e).fieldErrors
  })
  .action(async ({ parsedInput: blogData }: { parsedInput: ResourceWithCategoryFormSchemaType }) => {

    const session = await auth.api.getSession({
      headers: await headers()
    })
    if (!session) redirect('/login')

    const { resourceData, categoryData } = blogData

    if (resourceData.id === 0) {

      const results = await db.insert(blogs)
        .values({
          author: resourceData.author,
          blog_slug: resourceData.blog_slug,
          blog_title: resourceData.blog_title,
          hero_image: resourceData.hero_image,
          created_at: new Date(),
          blog_content: resourceData.blog_content,
          blog_excerpt: resourceData.blog_excerpt
        }).returning({ insertedId: blogs.id })

      const junctionArr = categoryData.map(cat => {
        return { blog_id: results[0].insertedId, category_id: cat.id }
      })

      await db.insert(blogCatagoryJunction)
        .values(junctionArr)
        .returning({ blogId: blogCatagoryJunction.blog_id })
    } else {

      await db.update(blogs).set({
        author: resourceData.author,
        blog_slug: resourceData.blog_slug,
        blog_title: resourceData.blog_title,
        hero_image: resourceData.hero_image,
        created_at: new Date(),
        blog_content: resourceData.blog_content,
        blog_excerpt: resourceData.blog_excerpt
      }).where(eq(blogs.id, resourceData.id!))
        .returning({ updatedId: blogs.id })

      const existingIds = await db.select({
        id: blogCatagoryJunction.category_id
      }).from(blogCatagoryJunction)
        .where(eq(blogCatagoryJunction.blog_id, resourceData.id))

      const junctionIds = checkIdIfExists(categoryData.map(cat => cat.id), existingIds.map(ob => ob.id))

      if (junctionIds.length > 0) {
        const junctionArr = junctionIds.map(cat => {
          return { blog_id: resourceData.id, category_id: cat }
        })

        await db.insert(blogCatagoryJunction)
          .values(junctionArr)
          .returning({ blogId: blogCatagoryJunction.blog_id })

      }

    }


    revalidatePath('/resources')

    return { message: "Resource Added" }
  })
