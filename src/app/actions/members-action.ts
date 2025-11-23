"use server"

import { actionClient } from "@/lib/safe-action";
import { db } from "@/db";
import { InsertMemberSchema, InsertMemberSchemaType } from "@/zod-schemas/members";
import { flattenValidationErrors } from "next-safe-action";
import { memberSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Resend } from "resend";
import Welcome from "@/emails/Welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export const insertMemberAction = actionClient
  .metadata({ actionName: "addMemberAction" })
  .inputSchema(InsertMemberSchema, {
    handleValidationErrorsShape: async (e) => flattenValidationErrors(e).fieldErrors
  })
  .action(async ({ parsedInput: memberData }: { parsedInput: InsertMemberSchemaType }) => {

    const session = await auth.api.getSession({
      headers: await headers()
    })
    if (!session) redirect('/login')

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

    return { message: "Member Added", insertedId: results[0].insertedId }
  })

