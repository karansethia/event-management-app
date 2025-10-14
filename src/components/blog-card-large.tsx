import { SelectBlogSchemaType } from "@/zod-schemas/blog"
import { Card, CardContent } from "./ui/card"
import { format } from "date-fns"
import Link from "next/link"

type Props = {
  blog: SelectBlogSchemaType
}

export default function BlogCardLarge({ blog }: Props) {
  return (
    <Link href={`/resources/${blog.blog_slug}`}>
      <Card className="relative aspect-[5/2] group cursor-pointer">
        <div className="absolute inset-0 bg-center z-0 rounded-xl cursor-pointer bg-[length:100%] group-hover:bg-[length:120%] transition-all ease-in-out duration-500"
          style={{
            backgroundImage: `url(${blog.hero_image})`
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <CardContent className="size-full flex flex-col gap-2 justify-end relative z-20">
          <h3 className="font-header font-semibold tracking-wide text-xl sm:text-2xl lg:text-4xl text-white">{blog.blog_title}</h3>
          <p className="font-content font-medium text-base sm:text-lg tracking-wide line-clamp-2">{blog.blog_excerpt}</p>
          <span className="w-full flex gap-2 sm:gap-5 items-center max-sm:text-sm">
            <p>{format(blog.created_at, "PP")}</p>
            <p>|</p>
            <p>By - {blog.author}</p>
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

