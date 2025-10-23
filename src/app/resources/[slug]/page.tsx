import FomoSection from '@/components/fomo-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';

import { getBlogBySlug, getBlogsByCategory, getCategories } from '@/lib/queries/getBlogs';
import DOMPurify from 'isomorphic-dompurify'
import BlogCardSmall from '@/components/blog-card-small';
import Categories from '../Categories';


export default async function SingleResourcePage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;

  const resourceData = await getBlogBySlug(slug)


  const featuredBlogsData = await getBlogsByCategory("featured")

  const categories = await getCategories()

  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-10 max-w-6xl mx-auto'>
        <div className='flex flex-col gap-3 w-full'>
          <Image className='w-full aspect-[16/6] rounded-xl object-cover' width="500" height="500" alt={resourceData.blog_title} src={resourceData.hero_image} />
          <h1 className='font-header text-xl sm:text-3xl xl:text-5xl font-semibold tracking-wide pt-5 pb-16'>{resourceData.blog_title}</h1>

          <div className='flex flex-col lg:flex-row gap-3 w-full'>
            <div className='w-full lg:w-3/4 px-4 py-2 flex flex-col gap-5'>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(resourceData.blog_content),
                }}
              />
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
        </div>
      </section>
      <FomoSection />
      <Footer />
    </main>
  )
}

