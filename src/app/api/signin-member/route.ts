import { addDays } from "date-fns"
import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {

  console.log("Logging user in")

  const body = await request.json();
  const { email } = body;

  console.log(email)

  const token = await encrypt({ email, expiresAt: addDays(new Date(), 2) })

  console.log(token)

  const cookieStore = await cookies()
  cookieStore.set("auth", token, { httpOnly: true, secure: true })

  return Response.json({
    message: "logged in successfully",
    status: "success"
  })
}

const secretKey = process.env.MEMBER_REFRESH
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: { email: string, expiresAt: Date }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

