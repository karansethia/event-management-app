import FomoSection from '@/components/fomo-section'
import Footer from '@/components/footer'
import Header from '@/components/header'
import TitleSection from '@/components/title-section'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <TitleSection title="About" />
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-20 max-w-7xl mx-auto'>
        <h2 className='text-xl lg:text-4xl tracking-wide font-header text-green-400 font-semibold w-full text-center'>How it started</h2>
        <div className='w-full px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-start gap-4 lg:gap-10'>
          <div className='space-y-7 flex-1'>
            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>
              It all began when a young visionary named Mereoleona watched her father return to her roots — starting a small farm after retiring from a long corporate career. Having grown up among fields and early morning harvests, Mereoleona’s father carried the same passion he once had as a girl playing in the soil after school. But this time, Mereoleona saw the other side — the challenges of sustaining a farm, from unpredictable markets to the constant struggle of reaching consumers.
            </p>
            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>
              Witnessing these obstacles firsthand, Mereoleona realized how fortunate her father was to have connections that opened the right doors. Many farmers weren’t as lucky. Determined to change that, Mereoleona set out to build Sprout Society — a platform designed to empower farmers and agricultural businesses alike.
            </p>
          </div>
          <div className='space-y-7 flex-1'>

            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>
              her mission: to create an ecosystem where farmers could focus on what they do best — growing — while Sprout Society helps them thrive, connect, and bring their produce to the world.
            </p>
            <Image src="https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztIrPgk6H0ICKMeZzOGJcNDSPL3tWpR9dv6nsg"
              width={500} height={500} className='w-full aspect-video rounded-lg' alt='girl playing on a farm' />
          </div>
        </div>
      </section>
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-20 max-w-7xl mx-auto'>
        <h2 className='text-xl lg:text-4xl tracking-wide font-header text-green-400 font-semibold w-full text-center'>Vision and Mission</h2>
        <div className='w-full px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-start gap-4 lg:gap-10'>
          <div className='space-y-7 flex-1'>
            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>
              Our mission is to bridge the gap between farmers, investors, and agri-based enterprises by providing expert consultation, smart investment opportunities, and access to cutting-edge research. Through advocacy and innovation, Sprout Society strives to create an environment where farmers can focus on nurturing their land — while we help cultivate the networks and resources they need to flourish.
            </p>
          </div>
          <div className='flex-1'>

            <p className='text-gray-200 font-content tracking-wide text-justify text-lg'>To build a unified agricultural ecosystem where farmers, innovators, and businesses thrive together — empowered by knowledge, connection, and opportunity. Sprout Society envisions a future where agriculture isn’t just sustainable, but deeply collaborative, driven by innovation and supported by policies that value every contributor to the food chain.
            </p>
            <span className='flex items-end justify-end'>
              <Image src="/leaf.webp"
                width={500} height={500} className='w-1/4 rounded-lg' alt='girl playing on a farm' />
            </span>
          </div>
        </div>
        <p className='font-header text-green-400 font-semibold tracking-wider w-full text-center text-2xl px-10'>“Farmers are the only ones who truly know the meaning of patience and hope — they plant seeds of faith every single season.”</p>
      </section>
      <FomoSection />
      <section className='w-full relative snap-center snap-mandatory space-y-10 py-20 max-w-7xl mx-auto'>
        <h2 className='text-xl lg:text-4xl tracking-wide font-header text-green-400 font-semibold w-full text-center'>From the CEO</h2>
        <div className='w-full px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-4 lg:gap-10'>
          <Card className='relative w-2/3 py-16'>
            <span className='absolute bottom-4 right-4'>
            <Image src="/leaf.webp"
              width={500} height={500} className='w-16 h-auto' alt='girl playing on a farm' />
            </span>
            <span className='absolute top-4 left-4'>
              <Quote className='text-green-400' size={40} />
            </span>
            <CardContent className='font-header font-semibold text-xl leading-relaxed tracking-wider'>
              I saw it first hand how my father and many of his farmer friends had to fight toe and nail to get their produce to the market before it went bad. That&apos;s why I want to create a coherant system that can give farmer and agro-businesses to interact and create a coherant ecosystem
            </CardContent>
          </Card>
          <div className='flex-1 relative'>
            <div className='z-10 absolute -top-5 -left-5 bg-green-700 w-20 h-40 rounded-lg' />
            <div className='z-40 absolute -bottom-5 -right-5 bg-green-400 w-20 h-32 rounded-lg' />
              <Image src="/ceo.jpg"
                width={500} height={500} className='w-full relative z-30 ps-4 rounded-lg' alt='girl playing on a farm' />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

