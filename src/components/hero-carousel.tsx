"use client"
import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import Link from "next/link"

interface HeroSection {
  id: string
  title: string
  subtitle?: string
  backgroundImage: string
}

const heroSections: HeroSection[] = [
  {
    id: "section-1",
    title: "Empowering the Future of Plant-Based Food",
    subtitle: "Building sustainable communities through events, innovation, and advocacy",
    backgroundImage: "https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzt1SVy2VNKK6yzdFwE9CsQP8LWamhGv4AX3HRp", // replace with your actual image URL
  },
  {
    id: "section-2",
    title: "Join the Plant-Based Business Revolution",
    subtitle: "Exclusive memberships for startups and entrepreneurs in the plant-based industry",
    backgroundImage: "https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztfLqqi1gDdZGW42AQTP9iekqsc76tjbHwEBz0",
  },
  {
    id: "section-3",
    title: "Cultivating Connections and Business Growth",
    subtitle: "Networking opportunities and support for the plant-based food and agriculture sector",
    backgroundImage: "https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztQquX1PrgyqztT2hKj45XUNvJlskBbYxCFmOP",
  },
  {
    id: "section-4",
    title: "Inspiring Public Awareness Through Community Events",
    subtitle: "Hosting impactful events to promote plant-based living and conscious choices",
    backgroundImage: "https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztNsLAVbB6IARMSmYUx0EXOL3BJo1jHC4WgzqQ",
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToSection = (index: number) => {
    if (index < 0) {
      setActiveIndex(heroSections.length - 1)
    } else if (index >= heroSections.length) {
      setActiveIndex(0)
    } else {
      setActiveIndex(index)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    // If dragged more than 100px, change slide
    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        goToSection(activeIndex - 1)
      } else {
        goToSection(activeIndex + 1)
      }
    }

    setTranslateX(0)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToSection(activeIndex - 1)
      } else if (e.key === "ArrowRight") {
        goToSection(activeIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex])

  return (
    <div className="relative h-screen w-full overflow-hidden z-10 snap-center -mt-16">
      <div
        ref={carouselRef}
        className={cn(
          "flex h-full w-full transition-transform duration-500 ease-in-out",
          isDragging ? "transition-none" : "",
        )}
        style={{
          transform: `translateX(calc(-${activeIndex * 100}% + ${translateX}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {heroSections.map((section) => (
          <div
            key={section.id}
            className="relative flex px-5 h-full w-full shrink-0 justify-center items-end text-white"
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="container relative z-10 mx-auto px-4 md:px-6 py-24">
              <h1 className="font-header mb-4 max-w-4xl text-3xl font-bold font-stretch-200% sm:text-3xl md:text-5xl">
                {section.title}
              </h1>
              {section.subtitle && (
                <h2 className="font-content max-w-4xl text-2xl font-medium sm:text-xl tracking-wide md:text-xl">
                  {section.subtitle}
                </h2>
              )}
            </div>
            <div className="w-1/2 h-full z-20 flex items-end justify-end pe-16 py-20">
              <Button variant="outline" className="text-green-400 text-xl tracking-wide p-3 size-fit font-header px-10 rounded-full transition-all ease-in-out duration-500 backdrop-blur-md">Check Events</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        size="icon"
        className="absolute left-4 bottom-5 md:top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        onClick={() => goToSection(activeIndex - 1)}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        size="icon"
        className="absolute right-4 bottom-5 md:top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        onClick={() => goToSection(activeIndex + 1)}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {heroSections.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              activeIndex === index ? "w-8 bg-white" : "bg-white/50",
            )}
            onClick={() => goToSection(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
