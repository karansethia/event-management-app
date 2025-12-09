"use server"

import { actionClient } from "@/lib/safe-action";
import { db } from "@/db";
import { InsertMemberSchema, InsertMemberSchemaType } from "@/zod-schemas/members";
import { flattenValidationErrors } from "next-safe-action";
import { memberSchema } from "@/db/schema";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import Welcome from "@/emails/Welcome";
import z from "zod";
import { eq } from "drizzle-orm";
import MemberLoginEmail from "@/emails/MemberLogin";
import { signAccessJWT } from "@/lib/jwt";

const resend = new Resend(process.env.RESEND_API_KEY);

export const insertMemberAction = actionClient
  .metadata({ actionName: "addMemberAction" })
  .inputSchema(InsertMemberSchema, {
    handleValidationErrorsShape: async (e) => flattenValidationErrors(e).fieldErrors
  })
  .action(async ({ parsedInput: memberData }: { parsedInput: InsertMemberSchemaType }) => {

    console.log(memberData)
    // const session = await auth.api.getSession({
    //   headers: await headers()
    // })
    // if (!session) redirect('/login')

    const results = await db.insert(memberSchema)
      .values({
        ...memberData
      }).returning({ insertedId: memberSchema.id })

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: memberData.business_email,
      subject: 'Welcome to Sprout Society',
      react: Welcome(),
    });

    console.log(results[0].insertedId)
    return redirect('/pricing')
  })

const LoginSchema = z.object({
  email: z.email().min(1, "Valid email required")
})

export const memberLoginAction = actionClient
  .metadata({ actionName: "memberLoginAction" })
  .inputSchema(LoginSchema, {
    handleValidationErrorsShape: async (e) => flattenValidationErrors(e).fieldErrors
  })
  .action(async ({ parsedInput: memberData }: { parsedInput: z.infer<typeof LoginSchema> }) => {

    const isRegistered = await db.select()
      .from(memberSchema)
      .where(eq(memberSchema.business_email, memberData.email))

    console.log(isRegistered, "found")

    if (isRegistered.length > 0) {

      const token = await signAccessJWT({ email: memberData.email })

      console.log("token", token)

      const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: "karansethia24@gmail.com", // TODO: replace with memberData.email after domain connection
        subject: 'Login as a member',
        react: MemberLoginEmail({ token: token }),
      });

      console.log(result)

      return { message: "Email sent, please check inbox or spam folder" }

    } else {
      return { message: "Could not find member" }
    }

  })

