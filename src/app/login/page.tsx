import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "./LoginForm"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 font-content">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="w-full flex justify-center">
          <Image src="/logod.png" className="w-36 h-auto" width="200" height="200" alt="sprout society" />
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
