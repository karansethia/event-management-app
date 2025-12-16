import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-sidebar";

import { ImageKitProvider } from "@imagekit/next"
import { verifySession } from "@/lib/dal/verifyUser";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

  const session = await verifySession()

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hidden">
      <SidebarProvider>
        <AdminSidebar username={session.name} />
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/sproutsocietygallery">
          {children}
        </ImageKitProvider>
      </SidebarProvider>
    </div>
  )
}

