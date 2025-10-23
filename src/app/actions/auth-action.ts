"use server"

import { auth } from "@/lib/auth"

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "karansethia24@gmail.com",
      password: "Kayzar@24",
    }
  })
}

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      name: "Karan Sethia",
      email: "karansethia24@gmail.com",
      password: "Kayzar@24",
    }
  })
}

