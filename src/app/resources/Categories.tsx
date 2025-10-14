"use client"

import { useSearchParams, useRouter } from "next/navigation"

import { Badge } from "@/components/ui/badge"

type Props = {
  categories: { id: number, category_name: string, category_slug: string }[]
}

export default function Categories({ categories }: Props) {

  const searchParams = useSearchParams()

  const router = useRouter()

  const handleSearchParams = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", slug)

    router.push(`?${params.toString()}`)
  }

  return (
    <>
      <h3 className='font-header font-medium text-xl pt-3 tracking-wider'>Categories</h3>
      <div className='w-full flex items-center gap-2 flex-wrap'>
        {categories.filter(it => it.category_slug !== "featured").map(cat => (
          <Badge key={cat.id} onClick={() => handleSearchParams(cat.category_slug)} variant="secondary" className="rounded-full cursor-pointer">{cat.category_name}</Badge>
        ))
        }
      </div>
    </>
  )
}

