"use client"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

import React from 'react'
import { InsertMemberSchema, InsertMemberSchemaType } from "@/zod-schemas/members"
import { Textarea } from "@/components/ui/textarea"
import { insertMemberAction } from "../actions/members-action"
import { useAction } from "next-safe-action/hooks"
import { Loader2 } from "lucide-react"

const emptyValues = {
  name: "",
  business_name: "",
  business_email: "",
  business_type: "",
  business_description: "",
  member_type: "unpaid" as "unpaid" | "silver" | "gold"
}

export default function AddMemberForm() {

  const form = useForm<InsertMemberSchemaType>({
    resolver: zodResolver(InsertMemberSchema),
    defaultValues: emptyValues
  })

  const { execute: addMember, isPending } = useAction(insertMemberAction, {
    onSuccess: () => {
      // toast for sucess and then route to the blog
      // TODO: Navigate the user to the blog list page
    }
  })


  const onSubmit = (data: InsertMemberSchemaType) => {
    addMember(data)
  }

  return (
    <>
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Name
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="business_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Business Name
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="business_type"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="business_type">
                  Business Type
                </FieldLabel>
                <Input
                  {...field}
                  id="business_type"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="business_email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="business_description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-description">
                  Description
                </FieldLabel>
                <Textarea
                  {...field}
                  id="form-rhf-demo-description"
                  rows={6}
                  className="min-h-24 resize-none"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Field orientation="horizontal" className="pt-4">
        <Button type="submit" form="form-rhf-demo" className="bg-green-500 h-8">
          {isPending ? <Loader2 className="animate-spin" /> : "Continue"}
        </Button>
      </Field>
    </>
  )
}

