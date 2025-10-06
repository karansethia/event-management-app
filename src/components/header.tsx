import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, MoveUpRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function Header() {
  return (
    <header className='w-full animate-slide backdrop-blur-md relative flex items-center justify-between px-4 ps-5 py-1 h-16 z-20'>
      <Image src="/logod.png" width="100" height="100" alt="Sprout Society" className='w-36 h-fit' />
      <nav className='hidden lg:flex items-center gap-5 pe-5 font-content tracking-wide'>
        <Link href="/">Home</Link>
        <Link href="/members">Members</Link>
        <Link href="#">Events</Link>
        <Link href="#">Resources</Link>
        <Link href="/about">About</Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className='flex lg:hidden'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className='w-[60vw] px-5'>
          <SheetHeader>
            <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
          </SheetHeader>
          <nav className='w-full flex flex-col gap-2'>
            <Link href="/" className='w-full flex justify-between items-center hover:bg-white/10 py-2 px-5 rounded-md transition-all ease-in-out'>Home <MoveUpRight className='text-green-400' size={14} /></Link>
            <Link href="/members" className='w-full flex justify-between items-center hover:bg-white/10 py-2 px-5 rounded-md transition-all ease-in-out'>Members<MoveUpRight className='text-green-400' size={14} /></Link>
            <Link href="#" className='w-full flex justify-between items-center hover:bg-white/10 py-2 px-5 rounded-md transition-all ease-in-out'>Events<MoveUpRight className='text-green-400' size={14} /></Link>
            <Link href="#" className='w-full flex justify-between items-center hover:bg-white/10 py-2 px-5 rounded-md transition-all ease-in-out'>Resources<MoveUpRight className='text-green-400' size={14} /></Link>
            <Link href="/about" className='w-full flex justify-between items-center hover:bg-white/10 py-2 px-5 rounded-md transition-all ease-in-out'>About<MoveUpRight className='text-green-400' size={14} /></Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

