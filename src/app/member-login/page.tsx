import { verifyAccess } from '@/lib/jwt'
import React from 'react'

export default async function MemberLoginPage({ searchParams }: { searchParams: Promise<{ token: string }> }) {

  const { token } = await searchParams

  const payload = await verifyAccess(token)

  if(!payload) return <div>Invalid user</div>

  // post api call that calls for a token and then routes to member dashboard

  return (
    <div>Verification Page</div>
  )
}

