import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET() {

  const authParams = getUploadAuthParams({
    privateKey: process.env.IMAGEKIT_API_KEY as string, // Never expose this on client side
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
  })

  return Response.json({ ...authParams, publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY })
}
