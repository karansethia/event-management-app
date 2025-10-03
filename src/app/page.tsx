import Header from '@/components/header'
import HeroCarousel from '@/components/hero-carousel'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full relative'>
      <Header />
      <HeroCarousel />
    </main>
  )
}

