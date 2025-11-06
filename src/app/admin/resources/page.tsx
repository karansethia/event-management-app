import { getResourceList } from "@/lib/queries/getBlogs"
import { ResourcesTable } from "./_components/ResourcesTable"
import { columns } from "./_components/columns"

export default async function ResourceList() {

  const resources = await getResourceList()

  return (
    <main className='w-full min-h-screen space-y-5'>
      <h1 className="font-header text-2xl font-semibold tracking-wide">Resources</h1>
      <ResourcesTable columns={columns} data={resources} />
    </main>
  )
}

