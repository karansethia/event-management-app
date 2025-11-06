import { getCategories } from "@/lib/queries/getBlogs";
import ResourceForm from "../_components/ResourceForm";

export default async function MutateResource() {

  const categories = await getCategories()

  return (
    <main className='w-full space-y-5'>
      <ResourceForm categories={categories} />
    </main>
  )
}

