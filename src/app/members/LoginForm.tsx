"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';
import { memberLoginAction } from '../actions/members-action';
import { useAction } from 'next-safe-action/hooks';

const LoginSchema = z.object({
  email: z.email().min(1, "Valid email required")
})

type LoginSchemaType = z.infer<typeof LoginSchema>

const LoginForm = () => {

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })

  const {
    execute: loginAsMember
  } = useAction(memberLoginAction, {
    onSuccess({ data }) {
      form.reset()
      // toast.success("Login link sent to mail")
    },
    onError({ error }) {
      // toast.error("Something went wrong")
    }
  })

  const submitHandler = (data: LoginSchemaType) => {
    console.log(data)
    loginAsMember(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className='flex p-1 items-center border border-green-500 dark:border-gray-100 rounded-full w-full sm:w-3/4 lg:w-1/2'>
        <Input placeholder='Login now' {...form.register("email")} className='outline-none ring-none focus:shadow-none focus:ring-0 focus-visible:border-0 border-0 focus-visible:ring-0' />
        <Button type='submit' size="icon" className="rounded-full bg-green-400">
          <Send />
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm;
