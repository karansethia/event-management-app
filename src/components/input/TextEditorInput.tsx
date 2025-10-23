"use client"

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '../ui/form'

import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import RichTextEditor from "../ui/rich-text-editor";

type NestedKeyStructure<T> = (
  T extends object
  ? {
    [K in keyof T & string]:
    | `${K}`
    | `${K}.${NestedKeyStructure<T[K]>}`
  }[keyof T & string]
  : never
)



type Props<S> = {
  fieldTitle: string,
  nameInSchema: NestedKeyStructure<S>,
  className?: string,
  containerClass?: string,
  labelClassName?: string
}

const RichTextEditorInput = <S,>({ fieldTitle, nameInSchema, containerClass, labelClassName }: Props<S>) => {

  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col gap-1 h-full", containerClass)}>
          <FormLabel className={cn("font-poppins h-10", labelClassName)}>{fieldTitle}</FormLabel>
          <FormControl>
            <RichTextEditor content={field.value} onChangeAction={(content: string) => field.onChange(content)} />
          </FormControl>
        </FormItem>
      )}
    />
  )
};

export default RichTextEditorInput;

