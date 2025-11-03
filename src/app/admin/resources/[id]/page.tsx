import { getBlogById, getCategories } from '@/lib/queries/getBlogs';
import React from 'react'
import ResourceForm from '../ResourceForm';

export default async function EditResourcePage({ params }: { params: Promise<{ id: string }> }) {

  const categories = await getCategories()

  const { id } = await params;

  console.log(id)

  const resource = await getBlogById(parseInt(id))

  return (
    <main className='w-full space-y-5'>
      <ResourceForm categories={categories} resource={resource} />
    </main>
  )
}

