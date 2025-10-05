import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full justify-around max-w-7xl mx-auto py-20 gap-4 px-5 md:px-10'>
      <Image className='w-32 2xl:w-48 h-auto absolute bottom-0 right-0 xl:-right-12 2xl:-right-64 rotate-x-180 rotate-y-180' src="/corner.png" width="200" height="200" alt="leaves" />
      <div className='flex-1 space-y-4 col-span-2 sm:col-span-3 lg:col-span-1'>
        <Image src="/logod.png" alt="Sprout Society" width="500" height="500" className='w-40 h-auto hidden dark:block' />
        <Image src="/logol.png" alt="Sprout Society" width="500" height="500" className='w-40 h-auto block dark:hidden' />
        <p className='text-sm font-content tracking-wider text-gray-200 leading-5 text-justify'>Empowering farmers and businesses to collaborate, grow sustainably, and shape the future of a resilient global food ecosystem.</p>
      </div>
      <div className='flex-1 flex flex-col sm:items-center justify-center gap-3'>
        <div className='flex flex-col gap-5 mt-5'>
          <Link href="#">Home</Link>
          <Link href="#">Partners</Link>
          <Link href="#">Members</Link>
        </div>
      </div>
      <div className='flex-1 flex flex-col sm:items-center justify-center gap-3'>
        <div className='flex flex-col gap-5 mt-5'>
          <Link href="#">Events</Link>
          <Link href="#">Resources</Link>
          <Link href="#">About</Link>
        </div>
      </div>

      <div className='flex-1 flex flex-col sm:items-center sm:justify-center gap-3 col-span-2 sm:col-span-1'>
        <div className='flex flex-col gap-3 mt-5'>
          <a href="https://mail.google.com/mail/?view=cm&to=reach@sproutsociety.com" className='text-content font-semibold tracking-wide' >reach@sproutsociety.com</a>
          <a href="tel:12345678" className='text-content font-semibold tracking-wide' >123-456-6789</a>
          <p className='font-content font-semibold tracking-wider leading-6'>
            10880, Malibu Point <br/>
            Southern California<br />
            90265
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
