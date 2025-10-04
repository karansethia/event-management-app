import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full animate-slide relative flex items-center justify-between px-4 ps-5 py-1 h-16 z-20'>
      <Image src="/logod.png" width="100" height="100" alt="Sprout Society" className='w-36 h-fit' />
      <nav className='flex items-center gap-5 pe-5 font-content tracking-wide'>
        <Link href="#">Home</Link>
        <Link href="#">Partner</Link>
        <Link href="#">Members</Link>
        <Link href="#">Events</Link>
        <Link href="#">Resources</Link>
        <Link href="#">About</Link>
      </nav>
    </header>
  )
}

