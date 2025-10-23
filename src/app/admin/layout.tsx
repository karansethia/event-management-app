import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-sidebar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

  // const session = await auth.api.getSession({
  //   headers: await headers()
  // })
  // if (!session) {
  //   redirect("/login")
  // }

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hidden">
      <SidebarProvider>
        <AdminSidebar />
        {children}
      </SidebarProvider>
    </div>
  )
}

