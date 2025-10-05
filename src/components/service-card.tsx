import { type Service } from "@/lib/data"

import { Card, CardContent, CardHeader } from "./ui/card"
import Image from "next/image"

type Props = {
  service: Service
}

export default function ServiceCard({service}: Props) {
  return (
    <Card className="relative gap-2">
      <CardHeader className="text-xl font-header text-green-400 tracking-wider font-semibold">{service.title}</CardHeader>
      <CardContent>{service.description}</CardContent>
      <Image src="/leaf.webp" className="absolute bottom-1  right-1 size-12" width="50" height="50" alt="leaf" />
    </Card>
  )
}

