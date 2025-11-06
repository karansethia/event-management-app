"use client"

import { Calendar, Home, Inbox, LogOut, Rss, Search, Settings } from "lucide-react"

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
import { Button } from "./ui/button"
import { useAction } from "next-safe-action/hooks"
import { logoutAction } from "@/app/actions/auth-action"



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

type Props = {
  username: string
}

export default function AdminSidebar({ username }: Props) {

  const { open, setOpen } = useSidebar()

  const { execute: logout } = useAction(logoutAction)

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent className="justify-between">
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
                        <Link href="/admin/resources" className="w-full flex-1 flex">List</Link>
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
        <SidebarGroup className="flex flex-row items-center justify-between group-data-[state=expanded]:px-4 bg-muted/50">
          <span className="flex items-center gap-2">
            <div className="bg-green-500 rounded-full group-data-[state=expanded]:size-7 size-5 group-data-[state=expanded]:text-sm text-xs font-black font-content tracking-tighter flex items-center justify-center">{username.split(" ")[0][0]} {username.split(" ")[1][0]}</div>
            <p className="font-header font-medium group-data-[state=expanded]:block hidden">{username}</p>
          </span>
          <Button 
            className="rounded-full size-7 group-data-[state=expanded]:block hidden"
            variant="ghost"
            size="icon"
            onClick={() => {
            logout()
          }}><LogOut /></Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
