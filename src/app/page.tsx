import FomoSection from '@/components/fomo-section'
import Header from '@/components/header'
import HeroCarousel from '@/components/hero-carousel'
import Testimonials from '@/components/testimonials'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <HeroCarousel />
      <section className='w-full relative h-screen snap-center snap-mandatory flex flex-col lg:flex-row items-center'>
        <Image src="/corner.png" alt="leaves" width="200" height="200" className='absolute top-0 left-0 brightness-75 size-32 lg:size-40' />
        <div className='w-full lg:w-3/5 h-full flex flex-col items-start justify-center px-4 sm:px-10 lg:px-20 gap-5'>
          <h1 className='text-2xl sm:text-4xl lg:text-5xl animate-appear font-header font-bold tracking-wide text-green-300'>Bridging Fields and Markets for a Sustainable Tomorrow</h1>
          <p className='text-sm sm:text-base lg:text-xl leading-relaxed font-content tracking-wide font-medium'>At <span className='text-green-300'>Sprout Society</span>, we connect communities, empower farmers, and help businesses grow in harmony with nature.</p>
          <span className='relative mt-4'>
            <Button variant="outline" className="text-green-400 text-base sm:text-lg lg:text-xl tracking-wide p-3 size-fit font-header px-6 lg:px-10 rounded-full transition-all ease-in-out duration-500 backdrop-blur-md">Explore Services</Button>
          </span>
        </div>
        <div className='w-full lg:w-2/5 h-1/3 lg:h-full'>
          <Image className='size-full hidden lg:block' width="500" height="500" alt="Sapling Image" src="/title-image.png" />
          <Image className='size-full lg:hidden block' width="500" height="500" alt="Sapling Image" src="/title-image-mobile.png" />
        </div>
      </section>
      <section className='w-full relative snap-center snap-mandatory min-h-[20vh]'>
        <div className='w-4/5 mx-auto py-10 space-y-10'>
          <h2 className='text-4xl font-header text-green-400 font-semibold text-center'>Our Partners</h2>
          <div className='hidden dark:flex items-center gap-10 w-full justify-evenly flex-wrap'>
            <Image unoptimized src='https://cdn.simpleicons.org/mcdonalds/white' alt="McDonalds" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/burgerking/white' alt="Burger King" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/carlsberggroup/white' alt="Carlsberg" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/google/white' alt="Google" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/starbucks/white' alt="Startbucks" className='w-16 h-auto' width="400" height="400" />
          </div>
          <div className='flex dark:hidden items-center gap-10 w-full justify-evenly flex-wrap'>
            <Image unoptimized src='https://cdn.simpleicons.org/mcdonalds' alt="McDonalds" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/burgerking' alt="Burger King" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/carlsberggroup' alt="Carlsberg" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/google' alt="Google" className='w-16 h-auto' width="400" height="400" />
            <Image unoptimized src='https://cdn.simpleicons.org/starbucks' alt="Startbucks" className='w-16 h-auto' width="400" height="400" />
          </div>
        </div>
      </section>
      <section className='w-full relative snap-center snap-mandatory min-h-[20vh]'>
        <Testimonials />
      </section>
      <FomoSection />
    </main>
  )
}

