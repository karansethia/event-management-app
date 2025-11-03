"use client"

import { SelectCategorySchemaType } from "@/zod-schemas/category"
import { useFieldArray, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAction } from "next-safe-action/hooks"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import InputWithLabel from "@/components/input/InputWithLabel"
import RichTextEditorInput from "@/components/input/TextEditorInput"
import { useEffect } from "react"
import TextareaWithLabel from "@/components/input/TextareaWithLabel"
import { Check, ChevronsUpDown, Loader2, Upload, X } from "lucide-react"
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
import ImageGalleryOrUploadDialog from "./ImageGalleryOrUploadDialog"
import Image from "next/image"
import { AddCategory } from "./AddCategoryDialog"
import { mutateResourceAction } from "@/app/actions/add-resource-action"
import { ResourceWithCategoryFormSchema, ResourceWithCategoryFormSchemaType } from "@/zod-schemas/add-resource-schema"


type Props = {
  categories: SelectCategorySchemaType[],
  resource?: ResourceWithCategoryFormSchemaType
}

export default function ResourceForm({ categories, resource }: Props) {

  const defaultValues: ResourceWithCategoryFormSchemaType = {
    resourceData: {
      id: resource ? resource.resourceData.id : 0,
      blog_title: resource ? resource.resourceData.blog_title : "",
      author: resource ? resource.resourceData.author : "",
      blog_slug: resource ? resource.resourceData.blog_slug : "",
      hero_image: resource ? resource.resourceData.hero_image : "",
      created_at: resource ? resource.resourceData.created_at : new Date(),
      blog_content: resource ? resource.resourceData.blog_content : "",
      blog_excerpt: resource ? resource.resourceData.blog_excerpt : ""
    },
    categoryData: resource ? resource.categoryData : []
  }

  const form = useForm<ResourceWithCategoryFormSchemaType>({
    mode: "onTouched",
    resolver: zodResolver(ResourceWithCategoryFormSchema),
    defaultValues
  })

  const { execute: mutateResource, isPending } = useAction(mutateResourceAction, {
    onSuccess: () => {
      // toast for sucess and then route to the blog
      // TODO: Navigate the user to the blog list page
    }
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
    mutateResource(data)
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
            containerClass="w-2/3 blog-content" />
          <div className="flex flex-col gap-3 w-1/3">
            <InputWithLabel<ResourceWithCategoryFormSchemaType>
              nameInSchema="resourceData.blog_slug"
              fieldTitle="Slug"
              disabled
            />
            <FormField
              control={form.control}
              name="resourceData.hero_image"
              render={({ field }) => (
                <ImageGalleryOrUploadDialog
                  key={field.value}
                  currentSelection={field.value}
                  onSelect={(url: string) => field.onChange(url)}
                  trigger={
                    <FormItem>
                      <FormLabel className="font-content text-lg">Featured Image</FormLabel>
                      <FormControl>
                        {field.value.length > 0
                          ? <span className="relative group">
                            <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 hidden group-hover:flex rounded-full size-7"
                              onClick={(e) => {
                                e.stopPropagation()
                                form.resetField("resourceData.hero_image")
                              }}>
                              <X size={14} className="text-red-500" />
                            </Button>
                            <Image src={field.value} className="w-full h-auto rounded-md" alt="Featured image" width="200" height="200" />
                          </span>
                          : <div className="w-full h-10 rounded-md border border-gray-500 dark:border-gray-700 bg-white/5 gap-2 text-sm flex items-center justify-center">
                            <Upload size={15} />
                            Add Image
                          </div>}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  }
                />

              )}
            />
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
                <Badge key={cat.id} className="cursor-pointer" onClick={() => deleteCat(cat.id)}>{cat.category_name}</Badge>
              ))}
            </div>
            <div className="flex items-start gap-2 w-full">
              <FormField
                control={form.control}
                name={`categoryData`}
                render={() => (
                  <FormItem className="w-full">
                    <FormLabel>Select Categories</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn("flex-1 justify-between border-1", form.formState.errors.categoryData ? "!border-red-500" : "")}
                        >
                          Select Category
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-48 p-0">
                        <Command>
                          <CommandInput placeholder="Search category..." className="h-9" />
                          <CommandList>
                            <CommandEmpty>No category found.</CommandEmpty>
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
              <AddCategory onAdd={(id: number, name: string, slug: string) => {
                addCat({ id, category_name: name, category_slug: slug })
              }} />
            </div>
          </div>
        </div>
        <Button type="submit">{isPending ? <Loader2 className="animate-spin" /> : "Submit"}</Button>
      </form>
    </Form>
  )
}

