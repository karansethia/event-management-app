import { verifyAccess } from '@/lib/jwt'
import LoginClient from './LoginClient'

export default async function MemberLoginPage({ searchParams }: { searchParams: Promise<{ token: string }> }) {

  const { token } = await searchParams

  const payload = await verifyAccess(token)

  console.log(payload)

  if (!payload) return <div>Invalid user</div>


  return (
    <LoginClient email={payload!.email as string} />
  )
}

