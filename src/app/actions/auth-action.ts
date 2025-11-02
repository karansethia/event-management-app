"use server"

import { auth } from "@/lib/auth"
import { actionClient } from "@/lib/safe-action"
import { loginFormSchema, LoginFormType } from "@/zod-schemas/login-schema"
import { flattenValidationErrors } from "next-safe-action"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = actionClient
  .metadata({ actionName: "saveCategoryAction" })
  .inputSchema(loginFormSchema, {
    handleValidationErrorsShape: async (e) => flattenValidationErrors(e).fieldErrors
  })
  .action(async ({ parsedInput: loginInfo }: { parsedInput: LoginFormType }) => {

    await auth.api.signInEmail({
      body: {
        email: loginInfo.email,
        password: loginInfo.password,
      }
    })

    redirect('/admin')
  })

export const logoutAction = actionClient
  .metadata({ actionName: "logoutAction" })
  .action(async () => {
    await auth.api.signOut({
      // This endpoint requires session cookies.
      headers: await headers(),
    });
    redirect('/login')
  })

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "karansethia24@gmail.com",
      password: "Kayzar@24",
    }
  })
}

// use signup for when manager story is alotted for role based auth
export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      name: "Karan Sethia",
      email: "karansethia24@gmail.com",
      password: "Kayzar@24",
    }
  })
}

