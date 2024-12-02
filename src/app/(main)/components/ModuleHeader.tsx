"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import sample_avatar_2 from "../../../../public/sample-avatar-2.png";
import omms_logo from "../../../../public/omms-logo.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui";

export function ModuleHeader() {
  return (
    <div
      className="flex flex-row justify-between items-center p-4  bg-opacity-85 h-16"
      style={{ backgroundColor: "#0162B3", borderBottomWidth: "0.5px", borderColor: "#989898" }}
    >
      <div className="flex flex-row gap-1 items-center">
        <Image className="p-2" src={omms_logo} alt={"OMMS"} width={50} height={50} />
        <p
          className="text-white text-lg font-extrabold tracking-widest"
          style={{
            textShadow: "1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black",
          }}
        >
          OMMS
        </p>
      </div>

      <div className="flex flex-row gap-3 items-center justify-end">
        <DropdownMenu>
          <div className="flex flex-row gap-1 items-center cursor-pointer">
            <Image
              src={sample_avatar_2}
              width={24}
              height={24}
              alt={"Sample Avatar"}
              className="rounded-full"
            />
            <p className="text-white text-sm tracking-widest">ferlydejuan@gscwd.com</p>
            <DropdownMenuTrigger className="text-white">
              <ChevronDown size={20} />
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
