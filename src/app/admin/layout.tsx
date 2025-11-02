import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-sidebar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { ImageKitProvider } from "@imagekit/next"
import QueryProvider from "@/components/providers/query-provider";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

  // const session = await auth.api.getSession({
  //   headers: await headers()
  // })
  // if (!session) {
  //   redirect("/login")
  // }

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hidden">
      <QueryProvider>
        <SidebarProvider>
          <AdminSidebar />
          <ImageKitProvider urlEndpoint="https://ik.imagekit.io/sproutsocietygallery">
            {children}
          </ImageKitProvider>
        </SidebarProvider>
      </QueryProvider>
    </div>
  )
}

