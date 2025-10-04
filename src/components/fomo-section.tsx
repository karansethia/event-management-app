import React from 'react'
import { Input } from './ui/input'
import { Send } from 'lucide-react'
import { Button } from './ui/button'

export default function FomoSection() {
  return (
    <section className='w-full px-10 lg:px-20 flex items-center min-h-[25vh]'>
      <div className='w-1/2 grid place-items-center'>
        <h3 className='w-4/5 font-header tracking-wider font-semibold text-lg'>Unlock exclusive access to vetted farmers and sustainable partnerships — join Sprout Society today and stay ahead in the evolving agricultural landscape</h3>
      </div>
      <div className='w-1/2 grid place-items-center'>
        <span className='flex p-1 items-center border border-green-500 dark:border-gray-100 rounded-full w-1/2'>
          <Input placeholder='Get in Touch' className='outline-none ring-none focus:shadow-none focus:ring-0 focus-visible:border-0 focus-visible:ring-0' />
          <Button size="icon" className="rounded-full bg-green-400">
            <Send />
          </Button>
        </span>
      </div>
    </section>
  )
}

