import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.email("Email is missing"),
  password: z.string().min(4, "Password is missing")
})

export type LoginFormType = z.infer<typeof loginFormSchema>
