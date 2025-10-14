import FomoSection from '@/components/fomo-section'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Testimonials from '@/components/testimonials'
import TitleSection from '@/components/title-section'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <TitleSection title="Our Members" />
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-20 max-w-7xl mx-auto'>
        <div className='w-full px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-start gap-4 lg:gap-10'>
          <div className='space-y-7 flex-1'>
            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>
              Members of Sprout Society play a vital role in shaping the future of modern agriculture. From innovators at Quantum Innovations developing smart farming solutions, to sustainability advocates at Fusion Systems designing data-driven irrigation systems, each member contributes unique expertise that strengthens the agricultural ecosystem. Together, they bring diverse perspectives from technology, policy, finance, and research — creating a shared network where ideas grow into real-world impact.
            </p>
          </div>
          <div className='space-y-7 flex-1'>
            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>
              By collaborating through Sprout Society, members help farmers and agri-based businesses access advanced research, investment opportunities, and policy advocacy that drive progress. Companies like FarmForward Initiative have already partnered with local farms to streamline distribution and increase profitability through digital transformation. Every member helps close the gap between innovation and cultivation. 
            </p>
            <span className='flex justify-end py-5'>
              <Button variant="outline" className="text-green-400 text-base sm:text-lg lg:text-xl tracking-wide p-3 size-fit font-header px-6 lg:px-10 rounded-full transition-all ease-in-out duration-500 backdrop-blur-md">Become a Member</Button>
            </span>
          </div>
        </div>
      </section>
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-10 max-w-7xl mx-auto'>
          <h2 className='text-4xl font-header text-green-400 font-semibold text-center'>Our Esteemed Members</h2>
          <div className='hidden dark:flex items-center gap-10 w-full justify-evenly flex-wrap py-10'>
            <Image unoptimized src='/logos/mem1.png' alt="McDonalds" className='w-20 h-auto' width="400" height="400" />
            <Image unoptimized src='/logos/mem2.png' alt="Burger King" className='w-20 h-auto' width="400" height="400" />
            <Image unoptimized src='/logos/mem3.png' alt="Carlsberg" className='w-20 h-auto' width="400" height="400" />
            <Image unoptimized src='/logos/mem4.png' alt="Google" className='w-20 h-auto' width="400" height="400" />
            <Image unoptimized src='/logos/mem5.png' alt="Startbucks" className='w-20 h-auto' width="400" height="400" />
            <Image unoptimized src='/logos/mem6.png' alt="Startbucks" className='w-16 h-auto' width="400" height="400" />
          </div>
      </section>
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-20 max-w-7xl mx-auto'>
        <Testimonials />
      </section>
      <FomoSection />
      <Footer />
    </main>
  )
}

