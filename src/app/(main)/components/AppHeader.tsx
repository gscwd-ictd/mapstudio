"use client";

import { Menu, BellDot } from "lucide-react";
import Image from "next/image";
import sample_avatar_2 from "../../../../public/sample-avatar-2.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui";
import { useSidebar } from "@mapstudio/lib/components/ui/Sidebar";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar}>
      <Menu strokeWidth={2} style={{ fontSize: "20px" }} />
    </button>
  );
}

export function AppHeader() {
  return (
    <div
      className="flex flex-row justify-between items-center p-4  bg-opacity-85 h-16"
      style={{ backgroundColor: "dddddd", borderBottomWidth: "0.5px", borderColor: "#989898" }}
    >
      <CustomTrigger />
      <div className="flex flex-row gap-3 items-center justify-end">
        <button>
          <BellDot className="text-slate-800" strokeWidth={2} style={{ fontSize: "24px" }} />
        </button>
        <DropdownMenu>
          <div className="flex items-center cursor-pointer">
            <DropdownMenuTrigger>
              <Image
                src={sample_avatar_2}
                width={24}
                height={24}
                alt={"Sample Avatar"}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="bg-white outline-none text-gray-800 mt-1">
            <DropdownMenuItem className="hover:bg-slate-800 hover:text-white">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-800 hover:text-white">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-800 hover:text-white">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
