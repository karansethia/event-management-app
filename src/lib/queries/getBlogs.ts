import { db } from "@/db";
import { blogCatagoryJunction, blogs, categories } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export async function getBlogs() {

  const results = await db
    .select({
      blog: blogs,
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


export async function getBlogsBySlug(slug: string) {

  const results = await db
    .select({
      blog: blogs,
      category: categories
    })
    .from(blogCatagoryJunction)
    .innerJoin(blogs, eq(blogCatagoryJunction.blog_id, blogs.id))
    .leftJoin(categories, eq(blogCatagoryJunction.category_id, categories.id))
    .where(eq(categories.category_slug, slug))
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


