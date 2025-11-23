import Header from '@/components/header'
import React from 'react'
import AddMemberForm from './AddMemberForm'

export default function MemberRegistrationPage() {
  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <section className='w-full relative snap-center snap-mandatory flex flex-col lg:flex-row items-start space-y-10 py-5 max-w-7xl mx-auto max-xl:px-10'>
        <div className='w-full lg:w-3/5 flex flex-col items-center lg:items-start gap-3'>
          <h2 className='font-header text-3xl md:text-8xl leading-20 text-center lg:text-start'>Become a member</h2>
          <h3 className='font-content tracking-wide text-2xl text-green-500'>And claim membership benefits</h3>
        </div>
        <div className='w-full max-w-2xl mx-auto lg:w-2/5 bg-white/10 p-4 backdrop-blur-[2px] h-auto rounded-xl border border-gray-500'>
          <AddMemberForm />
        </div>
      </section>
    </main>
  )
}

