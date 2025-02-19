"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@mapstudio/lib/components/ui/Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Image from "next/image";
import omms_logo from "../../../../public/omms-logo.png";
import {
  LayoutDashboard,
  FileUser,
  UsersRound,
  ChevronRight,
  List,
  ArrowLeftRight,
  CircleCheck,
  SendHorizontal,
  MapPinned,
  ClipboardList,
  FileText,
  ChartColumnIncreasing,
  Settings,
  Map,
  Settings2Icon,
} from "lucide-react";

import { useSidebar } from "@mapstudio/lib/components/ui/Sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@mapstudio/lib/components/ui";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/srms/nsa-dashboard/home",
      icon: LayoutDashboard,
      items: [],
    },
    {
      title: "New Service Application",
      url: "/srms/nsa-dashboard/new-service-application",
      icon: FileUser,
      items: [
        {
          title: "For Dispatch",
          url: "/srms/nsa-dashboard/new-service-application/for-dispatch",
          icon: SendHorizontal,
        },
        {
          title: "Pending",
          url: "/srms/nsa-dashboard/new-service-application/pending",
          icon: List,
        },
        {
          title: "Returned",
          url: "/srms/nsa-dashboard/new-service-application/returned",
          icon: ArrowLeftRight,
        },
        {
          title: "Accomplished",
          url: "/srms/nsa-dashboard/new-service-application/accomplished",
          icon: CircleCheck,
        },
      ],
    },
    {
      title: "Personnel",
      url: "/srms/nsa-dashboard/personnel",
      icon: UsersRound,
      items: [],
    },
    {
      title: "Orientation",
      url: "/srms/nsa-dashboard/orientation",
      icon: UsersRound,
      items: [],
    },
    {
      title: "Maps",
      url: "/srms/nsa-dashboard/maps",
      icon: MapPinned,
      items: [],
    },
    {
      title: "Work Order",
      url: "/srms/nsa-dashboard/work-order",
      icon: ClipboardList,
      items: [],
    },
    {
      title: "Notice",
      url: "/srms/nsa-dashboard/notice",
      icon: FileText,
      items: [],
    },
    {
      title: "Reports",
      url: "/srms/nsa-dashboard/reports",
      icon: ChartColumnIncreasing,
      items: [],
    },
    {
      title: "Maintenance",
      url: "/srms/nsa-dashboard/maintenance",
      icon: Settings,
      items: [
        {
          title: "Barangays",
          url: "/srms/nsa-dashboard/maintenance/barangays",
          icon: Map,
        },
        {
          title: "Plumbing Fixtures Declaration",
          url: "/srms/nsa-dashboard/maintenance/plumbing-fixtures",
          icon: List,
        },
        {
          title: "Settings",
          url: "/srms/nsa-dashboard/maintenance/settings",
          icon: Settings2Icon,
        },
        {
          title: "Examples",
          url: "/srms/nsa-dashboard/maintenance/examples",
          icon: Settings2Icon,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);

  React.useEffect(() => {
    const currentItem = data.navMain.find(
      (item) =>
        item.url === pathname ||
        item.items.some((subItem) => subItem.url === pathname) ||
        pathname.startsWith("/barangays")
    );
    if (currentItem) {
      setActiveItem(currentItem);
    }
  }, [pathname]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className=" p-4 h-16 items-center justify-center"
        style={{ backgroundColor: "#0162B3" }}
      >
        <div className="flex flex-row gap-2 items-center justify-center">
          <Image src={omms_logo} width={40} height={40} alt={"OMMS"} />
          {state !== "collapsed" && (
            <p className="text-white text-lg font-extrabold tracking-widest">OMMS</p>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="mb-3 text-sm">Menu</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items.length > 0 ? (
                    <Collapsible
                      key={item.title}
                      title={item.title}
                      defaultOpen
                      className="group/collapsible"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          tooltip={{
                            children: item.title,
                            hidden: false,
                          }}
                          isActive={
                            activeItem.url === item.url ||
                            item.items.some(
                              (subItem) =>
                                subItem.url === pathname || pathname.startsWith("/barangays")
                            )
                          }
                          className="px-2.5 md:px-2"
                        >
                          <div className="flex items-center">
                            <item.icon />
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={
                                  pathname === subItem.url || pathname.startsWith("/barangays")
                                }
                              >
                                <Link href={subItem.url}>
                                  {subItem.icon && <subItem.icon className="mr-2 size-4" />}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      isActive={
                        activeItem.url === item.url ||
                        item.items.some(
                          (subItem) => subItem.url === pathname || pathname.startsWith("/barangays")
                        )
                      }
                      className="px-2.5 md:px-2"
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
