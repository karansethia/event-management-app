"use client"

import { Calendar, Home, Inbox, Rss, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export default function AdminSidebar() {

  const { open, setOpen } = useSidebar()

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="w-full flex items-center justify-between">Application
            {open &&
              <SidebarTrigger />
            }
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {!open &&
                <SidebarMenuItem key="trigger">
                  <SidebarMenuButton asChild>
                    <SidebarTrigger />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              }
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem onClick={() => setOpen(true)}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <span>
                        <Rss />
                        <span>Resources</span>
                      </span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem className="transition-all py-1 ps-2 ease-in-out hover:bg-gray-700 w-full rounded-md">
                        <Link href="/admin/resources/create" className="w-full flex-1 flex">Create</Link>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem className="transition-all py-1 ps-2 ease-in-out hover:bg-gray-700 w-full rounded-md">
                        <Link href="/admin/resources/create">List</Link>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
