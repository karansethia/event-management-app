import { NextResponse } from "next/server";
import 'dotenv/config';

import { config } from "dotenv"

config({ path: ".env.local" })


export type ImagekitResponse = {
  name: string,
  url: string,
  thumbnail: string,
}

export async function GET() {

  const authHeader = Buffer.from(`${process.env.IMAGEKIT_API_KEY}:`).toString("base64")

  try {
    const response = await fetch(`https://api.imagekit.io/v1/files?path=${encodeURIComponent('/sprout-society-uploads/')}`, {
      headers: {
        Authorization: `Basic ${authHeader}`
      },
      cache: "no-store"
    })

    if (!response.ok) {
      const err = await response.text();
      console.log(err)
      throw new Error("couldnt fetch images");
    }

    const data: ImagekitResponse[] = await response.json()

    return NextResponse.json(data)

  } catch (error) {

    return NextResponse.json({ error: "Failed to load images" }, { status: 500 })
  }

}
