import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui/DropdownMenu";
import { ChevronDown, Search } from "lucide-react";
import React from "react";

export default function NewServiceApplicationOptions() {
  return (
    <div className="flex flex-row gap-3 items-center justify-center w-[800px]">
      {/* Apply button */}

      {/* search */}
      <div className="relative flex items-center w-full" style={{}}>
        <span className="absolute left-2">
          <Search className="text-gray-800" strokeWidth={2} style={{ height: "15px" }} />
        </span>
        <input
          type="text"
          className="pl-8 outline outline-2 outline-gray-400 rounded-full text-left placeholder-gray-400 w-full"
          placeholder="Search by applicant name"
        />
      </div>

      {/* Address dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className="text-gray-800 flex flex-row justify-between px-2 w-2/3 border-2 border-gray-400 rounded-full"
          style={{}}
        >
          <p>Address</p>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>1</DropdownMenuItem>
          <DropdownMenuItem>2</DropdownMenuItem>
          <DropdownMenuItem>3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Date dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className="text-gray-800 flex flex-row justify-between px-2 w-1/2 border-2 border-gray-400 rounded-full"
          style={{}}
        >
          <p>Date</p>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>1</DropdownMenuItem>
          <DropdownMenuItem>2</DropdownMenuItem>
          <DropdownMenuItem>3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Assigned to dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className="text-gray-800 flex flex-row justify-between px-2 w-1/2 border-2 border-gray-400 rounded-full"
          style={{}}
        >
          <p>Assigned To</p>
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
