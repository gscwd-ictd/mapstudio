"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui/DropdownMenu";
import { Avatar, AvatarFallback } from "@mapstudio/lib/components/ui/Avatar";
import SurveyorDetails from "./SurveyorDetails";

type GroupMember = {
  id: number;
  name: string;
  avatar: string;
};

type GroupDropdownProps = {
  groupMembers: GroupMember[];
  groupName: string;
};

export function GroupDropdown({ groupMembers, groupName }: GroupDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // setClickedCardIndex(index);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // setClickedCardIndex(null);
  };

  const handleOpenChange = (open: boolean): void => {
    setIsOpen(open);
    if (open) {
      handleOpenModal();
    }
  };

  return (
    <>
      {isOpen ? <SurveyorDetails isOpen={isModalOpen} onClose={handleCloseModal} /> : ""}
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger
          onClick={(e) => alert(groupName)}
          className={`px-4 py-2 flex items-center space-x-2 rounded-md ${
            isOpen ? "ring-2 ring-indigo-500" : ""
          }`}
          style={{
            backgroundColor: isOpen ? "#2078C3" : "white",
          }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <div
              className={`flex flex-col gap-1 items-start h-16 ${
                isOpen ? "justify-center transition-transform duration-200" : ""
              }`}
            >
              <span className={`flex flex-row gap-4 ${isOpen ? "text-white" : "text-gray-400"}`}>
                <p className={`font-semibold ${isOpen ? "text-white" : "text-gray-800"}`}>
                  {groupName}
                </p>
                ({groupMembers.length})
              </span>
              <div>
                {!isOpen ? (
                  <div className="flex flex-row gap-1">
                    {groupMembers.slice(0, 7).map((member) => (
                      <Avatar key={member.id} className="h-8 w-8 border-2 border-white">
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                    {groupMembers.length > 7 && (
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback>+{groupMembers.length - 7}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <ChevronDown
              fill="text-black"
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={5}
          className="w-[var(--radix-dropdown-menu-trigger-width)] border-2 border-[#2078C3] bg-[#FFFFFFAD]"
        >
          {groupMembers.map((member) => (
            <DropdownMenuItem
              key={member.id}
              className="flex items-center space-x-2 gap-2 bg-white my-1"
              onClick={(e) => alert(member.id)}
            >
              <Avatar className="h-6 w-6">
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{member.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
