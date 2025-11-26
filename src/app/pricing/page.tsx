'use client'

import Header from '@/components/header'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const features = ["2 designs concepts", "Custom code", "On-time delivery", "Support", "Animations"]

export default function MemberRegistrationPage() {

  const { data: plans } = useQuery({
    queryKey: ["member-plans"],
    queryFn: async() => {
      const response = await fetch('/api/member-plans');
      return response.json()
    }
  })

  console.log(JSON.stringify(plans))

  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <section className='w-full relative snap-center snap-mandatory flex flex-col lg:flex-row items-start space-y-10 py-5 max-w-7xl mx-auto max-xl:px-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">

        </div>
      </section>
    </main>
  )
}

