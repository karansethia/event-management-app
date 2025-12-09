import { SignJWT, jwtVerify } from "jose"

const access_secret = new TextEncoder().encode(process.env.MEMBER_ACCESS)

const algo = "HS256"

export async function signAccessJWT(payload: { email: string }, expiresIn: string = "10m") {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: algo })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(access_secret)
}


export async function verifyAccess(token: string) {
  try {
    const { payload } = await jwtVerify(token, access_secret)
    // const data = { email: payload.email }
    return payload;
  } catch (error) {
    return null
  }
}

