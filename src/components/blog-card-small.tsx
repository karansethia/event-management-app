import React from 'react'
import { Card, CardContent } from './ui/card'
import { SelectBlogSchemaType } from '@/zod-schemas/blog'
import Link from 'next/link'

type Props = {
  blog: SelectBlogSchemaType,
  isFeatured: boolean,
  categories: { category_name: string }[]
}

export default function BlogCardSmall({ blog, categories, isFeatured }: Props) {
  return (
    <Link href={`/resources/${blog.blog_slug}`}>
      <Card className='py-3'>
        <CardContent className='space-y-3'>
          <h4 className='font-header font-medium text-lg tracking-wide'>{blog.blog_title}</h4>
          {isFeatured
            ? <p className='text-sm font-content tracking-wide font-semibold text-green-500'>Featured</p>
            : <span className='flex items-center gap-2'>{categories.map(cat => `${cat.category_name} | `)}</span>
          }
        </CardContent>
      </Card>
    </Link>
  )
}

