import React from 'react'
import { Input } from './ui/input'
import { Send } from 'lucide-react'
import { Button } from './ui/button'

export default function FomoSection() {
  return (
    <section className='w-full px-5 md:px-10 lg:px-20 flex flex-col max-md:gap-10 md:flex-row items-center min-h-[30vh] py-10 lg:py-10'>
      <div className='md:w-1/2 grid place-items-center'>
        <h3 className='lg:w-4/5 font-header tracking-wider font-semibold text-lg'>Unlock exclusive access to vetted farmers and sustainable partnerships — join Sprout Society today and stay ahead in the evolving agricultural landscape</h3>
      </div>
      <div className='w-full md:w-1/2 grid place-items-center'>
        <span className='flex p-1 items-center border border-green-500 dark:border-gray-100 rounded-full w-full sm:w-3/4 lg:w-1/2'>
          <Input placeholder='Get in Touch' className='outline-none ring-none focus:shadow-none focus:ring-0 focus-visible:border-0 border-0 focus-visible:ring-0' />
          <Button size="icon" className="rounded-full bg-green-400">
            <Send />
          </Button>
        </span>
      </div>
    </section>
  )
}

