"use client"

import { ColumnDef } from "@tanstack/react-table"
import { SelectBlogSchemaType } from "@/zod-schemas/blog"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { ArrowRightFromLine } from "lucide-react"
import Link from "next/link"

export const columns: ColumnDef<SelectBlogSchemaType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "blog_title",
    header: "Blog Title",
    cell: ({ row }) => {

      const value: string = row.getValue("blog_title")

      return <div className="font-medium line-clamp-1 w-60">{value}</div>
    },
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "blog_slug",
    header: "slug",
    cell: ({ row }) => {

      const value: string = row.getValue("blog_slug")

      return <div className="font-medium line-clamp-1 w-40">{value}</div>
    },
  },
  {
    accessorKey: "created_at",
    header: "Published On",
    cell: ({ row }) => {

      const value: Date = row.getValue("created_at")

      return <div className="font-medium line-clamp-1 w-60">{format(value, "PPP")}</div>
    },
  },
  {
    header: "Edit",
    cell: ({ row }) => (
      <Link href={`/admin/resources/${row.original.id}`}>
        <Button className="rounded-lg size-7 cursor-pointer bg-green-500" size="icon">
          <ArrowRightFromLine className="scale-75" />
        </Button>
      </Link>
    )
  }
]
