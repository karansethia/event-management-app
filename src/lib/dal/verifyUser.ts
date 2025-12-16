import "server-only";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cache } from "react";

export const verifySession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!session) {
    redirect("/login")
  }

  return { name: session.user.name, email: session.user.email, avatar: session.user.image }
})
