import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus } from "lucide-react"
import { useState } from "react"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import z from "zod"
import { insertCategoryAction } from "@/app/actions/add-category-action"

type Props = {
  onAdd: (id: number, name: string, slug: string) => void
}

const categoryFormSchema = z.object({
  name: z.string().min(1, "Category Name is required"),
  slug: z.string().min(1, "Category Name is required")
})

type CategoryFormType = z.infer<typeof categoryFormSchema>

export function AddCategory({ onAdd }: Props) {


  const [open, setOpen] = useState(false)

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(categoryFormSchema)
  })

  const { execute: insertCategory, isPending } = useAction(insertCategoryAction, {
    onSuccess: ({ data }) => {
      onAdd(data.insertedId, form.getValues("name"), form.getValues("slug"))
      form.reset();
      setOpen(false);
    }
  })

  const submitHandler = (data: CategoryFormType) => {
    insertCategory({ id: 0, category_slug: data.slug, category_name: data.name })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="mt-4.5">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Add Unique categories to resources
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="category_name">Category Name</Label>
            <Input {...form.register("name")} onChange={e => form.setValue("slug", e.target.value.toLowerCase().replaceAll(" ", "-"))} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="category_slug">Category Slug</Label>
            <Input {...form.register("slug")} disabled />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
            type="button"
            disabled={isPending}
            onClick={() => {
            form.handleSubmit(submitHandler)()
          }}>{ isPending ? <Loader2 className="animate-spin" /> : "Add Category" }</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
