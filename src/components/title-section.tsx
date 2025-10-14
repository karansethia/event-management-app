import { cn } from "@/lib/utils";
import Image from "next/image"

type Props = {
  title: string;
}

export default function TitleSection({ title }: Props) {
  return (
    <section className='w-full relative h-[33vh] sm:h-[50vh] px-5 snap-center -mt-16 snap-mandatory flex flex-row items-center'>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:30px_30px]",
          "[background-image:radial-gradient(#248000_1.2px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#248000_1px,transparent_1px)]",
        )}
      />
      <div className="flex items-end justify-center h-full w-3/4">
        <h1 className="text-4xl lg:text-7xl text-green-400 font-header font-semibold tracking-wider">{title}</h1>
      </div>
      <div className="flex max-lg:absolute max-lg:top-1 max-lg:right-1 items-start justify-end w-3/4 lg:w-1/2 h-full">
        <Image src="/floral.webp" alt="branches" className="w-full h-auto" width="500" height="300" />
      </div>
    </section>
  )
}

