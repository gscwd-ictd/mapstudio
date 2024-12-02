import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui/DropdownMenu";
import { ChevronDown, Plus, Search } from "lucide-react";
import React from "react";

export default function SampleOptions() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 items-center justify-center">
      {/* Apply button */}
      <button
        className="flex flex-row px-2 py-1 rounded-lg text-white font-bold"
        style={{
          backgroundColor: "#0162B3",
          gridArea: "1 / 2 / 2 / 3",
        }}
      >
        <Plus />
        Apply New Service Connection
      </button>

      {/* search */}
      <div
        className="relative flex items-center"
        style={{
          gridArea: "2 / 1 / 3 / 2",
        }}
      >
        <span className="absolute left-2">
          <Search className="text-gray-800" strokeWidth={2} style={{ height: "15px" }} />
        </span>
        <input
          type="text"
          className="pl-8 outline outline-2 outline-gray-400 rounded-full text-left placeholder-gray-400 w-full"
          placeholder="Search by applicant name"
        />
      </div>

      {/* Location dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className="text-gray-800 flex flex-row justify-between px-2 w-full border-2 border-gray-400 rounded-full"
          style={{
            gridArea: "2 / 2 / 3 / 3",
          }}
        >
          <p>Location</p>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>1</DropdownMenuItem>
          <DropdownMenuItem>2</DropdownMenuItem>
          <DropdownMenuItem>3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
