"use client"

import { InsertBlogSchema } from "@/zod-schemas/blog"
import { InsertCategorySchema, SelectCategorySchemaType } from "@/zod-schemas/category"
import { useFieldArray, useForm, useWatch } from "react-hook-form"
import { z } from "zod/v4"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import InputWithLabel from "@/components/input/InputWithLabel"
import RichTextEditorInput from "@/components/input/TextEditorInput"
import { useEffect } from "react"
import TextareaWithLabel from "@/components/input/TextareaWithLabel"
import { Check, ChevronsUpDown, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"


const ResourceWithCategoryFormSchema = z.object({
  resourceData: InsertBlogSchema,
  categoryData: z.array(InsertCategorySchema).min(1, "Choose atleast 1 category").max(4, "Blog with >4 elements in this economy?")
})

type ResourceWithCategoryFormSchemaType = z.infer<typeof ResourceWithCategoryFormSchema>;

type Props = {
  categories: SelectCategorySchemaType[]
}

export default function ResourceForm({ categories }: Props) {

  const defaultValues: ResourceWithCategoryFormSchemaType = {
    resourceData: {
      id: 0,
      blog_title: "",
      author: "",
      blog_slug: "",
      hero_image: "",
      created_at: new Date(),
      blog_content: "",
      blog_excerpt: ""
    },
    categoryData: []
  }

  const form = useForm<ResourceWithCategoryFormSchemaType>({
    mode: "onTouched",
    resolver: zodResolver(ResourceWithCategoryFormSchema),
    defaultValues
  })

  const { fields: selectedCategory, append: addCat, remove: deleteCat } = useFieldArray({
    control: form.control,
    name: "categoryData"
  })

  const title = useWatch({ control: form.control, name: "resourceData.blog_title" })

  useEffect(() => {
    if (title.length > 0) {
      form.setValue("resourceData.blog_slug", title.replaceAll(" ", "-").toLowerCase())
    }
  }, [title])

  const submitHandler = (data: ResourceWithCategoryFormSchemaType) => {
    console.log(data)
  }

  const watchedFile = useWatch({
    control: form.control,
    name: "resourceData.hero_image"
  })


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    // upload image to cloud
    if (selectedFile) {
      form.setValue("resourceData.hero_image", "<url from cloud>", {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-5">
        <InputWithLabel<ResourceWithCategoryFormSchemaType>
          nameInSchema="resourceData.blog_title"
          fieldTitle="Title"
          placeholder="Enter Resource Title"
          labelClassName="text-2xl lg:text-4xl tracking-wide font-medium"
        />
        <div className="flex flex-col lg:flex-row w-full gap-4">

          <RichTextEditorInput<ResourceWithCategoryFormSchemaType>
            nameInSchema="resourceData.blog_content"
            fieldTitle="Blog Content"
            labelClassName="text-xl"
            containerClass="w-2/3" />
          <div className="flex flex-col gap-3 w-1/3">
            <InputWithLabel<ResourceWithCategoryFormSchemaType>
              nameInSchema="resourceData.blog_slug"
              fieldTitle="Slug"
              disabled
            />
            <FormField
              control={form.control}
              name="resourceData.hero_image"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div
                        className={`relative flex flex-col items-center justify-center rounded-lg border bg-transparent ${form.formState.errors.resourceData?.hero_image ? "border-red-500 bg-red-50" : "border-dashed border-gray-700 bg-gray-200"} p-6 text-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 transition-all ease-in-out duration-500`}
                      >
                        <Upload
                          className={`size-7 mb-2 ${form.formState.errors.resourceData?.hero_image ? "text-red-500" : "text-gray-800 dark:text-gray-200"}`}
                        />
                        <div className="text-lg font-medium dark:text-white">Featured Image</div>
                        <p className="text-xs text-gray-700 dark:text-gray-200 mt-1">PNG, JPG or WEBP up to 5MB</p>
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/png,image/jpeg,image/webp"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {watchedFile && (
              <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50 dark:bg-transparent">
                <div>
                  <p className="text-sm font-medium">
                    {watchedFile.length > 20 ? `${watchedFile.slice(0, 20)}...` : watchedFile}
                  </p>
                </div>
                <Button variant="outline" type="button" size="sm" onClick={() => form.resetField("resourceData.hero_image")}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            <InputWithLabel<ResourceWithCategoryFormSchemaType>
              nameInSchema="resourceData.author"
              fieldTitle="Author"
              placeholder="Author Name" />
            <TextareaWithLabel<ResourceWithCategoryFormSchemaType>
              nameInSchema="resourceData.blog_excerpt"
              fieldTitle="Excerpt"
              placeholder="Excerpt" />
            <div className="w-full flex items-center gap-2 flex-wrap">
              {selectedCategory.map(cat => (
                <Badge key={cat.id}>{cat.category_name}</Badge>
              ))}
            </div>
            <FormField
              control={form.control}
              name={`categoryData`}
              render={() => (
                <FormItem>
                  <FormLabel>Select Categories</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        Select Category
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {categories.map((cat) => (
                              <CommandItem
                                key={cat.id}
                                value={cat.category_name}
                                onSelect={() => {
                                  const existingIndex = selectedCategory.findIndex(ct => ct.category_slug === cat.category_slug)
                                  if (existingIndex === -1) {
                                    addCat({ id: cat.id, category_name: cat.category_name, category_slug: cat.category_slug })
                                  }
                                  console.log(selectedCategory)
                                }}
                              >
                                {cat.category_name}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    selectedCategory.findIndex(ct => ct.id === cat.id) !== -1 ? "opacity-100" : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

