import { db } from "@/db";
import { blogCatagoryJunction, blogs, categories } from "@/db/schema";
import { SelectBlogSchemaType } from "@/zod-schemas/blog";
import { asc, eq } from "drizzle-orm";


export async function getResourceList(): Promise<SelectBlogSchemaType[]> {
  const results = await db.select()
    .from(blogs)
    .orderBy(blogs.created_at)

  return results
}

export async function getBlogs() {

  const results = await db
    .select({
      blog: {
        id: blogs.id,
        blog_title: blogs.blog_title,
        blog_slug: blogs.blog_slug,
        blog_excerpt: blogs.blog_excerpt,
        created_at: blogs.created_at,
        hero_image: blogs.hero_image,
        author: blogs.author
      },
      category: categories
    })
    .from(blogCatagoryJunction)
    .innerJoin(blogs, eq(blogCatagoryJunction.blog_id, blogs.id))
    .leftJoin(categories, eq(blogCatagoryJunction.category_id, categories.id))
    .orderBy(asc(blogs.created_at))

  const assortedResults = results.reduce((acc, row) => {

    const blog = row.blog;

    const category = row.category;

    if (!acc[blog.id]) {
      acc[blog.id] = { ...blog, categories: [] };
    }

    if (category) {
      acc[blog.id].categories.push(category);
    }

    return acc;

  }, {} as Record<number, any>)

  return Object.values(assortedResults)

}

export async function getCategories() {

  const results = await db
    .select({
      id: categories.id,
      category_name: categories.category_name,
      category_slug: categories.category_slug
    })
    .from(categories)

  return results
}

export async function getBlogsByCategory(cat: string) {

  const results = await db
    .select({
      blog: blogs,
      category: categories
    })
    .from(blogCatagoryJunction)
    .innerJoin(blogs, eq(blogCatagoryJunction.blog_id, blogs.id))
    .leftJoin(categories, eq(blogCatagoryJunction.category_id, categories.id))
    .where(eq(categories.category_slug, cat))
    .orderBy(asc(blogs.created_at))

  const assortedResults = results.reduce((acc, row) => {

    const blog = row.blog;

    const category = row.category;

    if (!acc[blog.id]) {
      acc[blog.id] = { ...blog, categories: [] };
    }

    if (category) {
      acc[blog.id].categories.push(category);
    }

    return acc;

  }, {} as Record<number, any>)

  return Object.values(assortedResults)

}

export async function getBlogById(id: number) {

  const results = await db
    .select({
      blog: blogs,
      category: categories
    })
    .from(blogCatagoryJunction)
    .innerJoin(blogs, eq(blogCatagoryJunction.blog_id, blogs.id))
    .leftJoin(categories, eq(blogCatagoryJunction.category_id, categories.id))
    .where(eq(blogs.id, id))
    .orderBy(asc(blogs.created_at))

  const assortedResults = results.reduce((acc, row) => {

    const blog = row.blog;

    const category = row.category;

    if (!acc[blog.id]) {
      acc[blog.id] = { resourceData: blog, categoryData: [] };
    }

    if (category) {
      acc[blog.id].categoryData.push(category);
    }

    return acc;

  }, {} as Record<number, any>)

  return Object.values(assortedResults)[0]

}


export async function getBlogBySlug(slug: string) {

  const results = await db
    .select({
      blog: blogs,
      category: categories
    })
    .from(blogCatagoryJunction)
    .innerJoin(blogs, eq(blogCatagoryJunction.blog_id, blogs.id))
    .leftJoin(categories, eq(blogCatagoryJunction.category_id, categories.id))
    .where(eq(blogs.blog_slug, slug))
    .orderBy(asc(blogs.created_at))

  const assortedResults = results.reduce((acc, row) => {

    const blog = row.blog;

    const category = row.category;

    if (!acc[blog.id]) {
      acc[blog.id] = { ...blog, categories: [] };
    }

    if (category) {
      acc[blog.id].categories.push(category);
    }

    return acc;

  }, {} as Record<number, any>)

  return Object.values(assortedResults)[0]

}


