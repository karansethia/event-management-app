import { SignJWT, jwtVerify } from "jose"

const access_secret = new TextEncoder().encode(process.env.MEMBER_ACCESS)

const refresh_secret = new TextEncoder().encode(process.env.MEMBER_REFRESH)

const algo = "HS256"

export async function signAccessJWT(payload: any, expiresIn: string = "5m") {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: algo })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(access_secret)
}

export async function signRefreshJWT(payload: any, expiresIn: string = "5m") {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: algo })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(refresh_secret)
}

export async function verifyAccess(token: string) {
  try {
    const { payload } = await jwtVerify(token, access_secret)
    return payload;
  } catch (error) {
    return null
  }
}

export async function verifyRefresh(token: string) {
  try {
    const { payload } = await jwtVerify(token, refresh_secret)
    return payload;
  } catch (error) {
    return null
  }
}
