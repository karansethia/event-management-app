import { ImagekitResponse } from "@/app/api/imagekit/route";

export const fetchImages = async (): Promise<ImagekitResponse[]> => {
  const res = await fetch("/api/imagekit");
  return res.json()
}
