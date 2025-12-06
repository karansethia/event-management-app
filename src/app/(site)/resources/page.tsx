import BlogCardLarge from '@/components/blog-card-large'
import BlogCardSmall from '@/components/blog-card-small'
import FomoSection from '@/components/fomo-section'
import Footer from '@/components/footer'
import Header from '@/components/header'
import TitleSection from '@/components/title-section'
import { getBlogs, getBlogsByCategory, getCategories } from '@/lib/queries/getBlogs'
import React from 'react'
import Categories from './Categories'

export default async function ResourcesPage({
  searchParams
}: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

  const { category } = await searchParams;

  const featuredBlogsData = await getBlogsByCategory("featured")

  const categoryBlogs = await getBlogsByCategory(category ?? "")

  const blogsData = await getBlogs()

  const categories = await getCategories()

  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <TitleSection title="Updates and Insights" />
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-20 max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-3 w-full'>
          <div className='w-full lg:w-3/4 px-4 py-2 flex flex-col gap-5'>
            {category
              ? (<>
                <h3 className='font-header text-2xl tracking-wide capitalize font-semibold'>search : {category}</h3>
                {categoryBlogs.map(blog => (
                  <BlogCardLarge key={blog.id} blog={blog} />
                ))}
              </>) :
              (<>
                {blogsData.map(blog => (
                  <BlogCardLarge key={blog.id} blog={blog} />
                ))}
              </>)}
          </div>
          <div className='w-full lg:w-1/4 flex flex-col gap-3 px-2 py-2'>
            <h3 className='font-header font-medium text-xl pt-3 tracking-wider'>Featured</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2'>
              {featuredBlogsData.map(blog => (
                <BlogCardSmall key={blog.id} blog={blog} categories={blog.categories} isFeatured />
              ))}
            </div>
            <Categories categories={categories} />
          </div>
        </div>
      </section>
      <FomoSection />
      <Footer />
    </main>
  )
}

