"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mapstudio/lib/components/ui/Tabs";
import { ApplicantList } from "./ApplicantList";
import { ApplicantForm } from "./ApplicantForm";
import { ChevronDown, Plus, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui/DropdownMenu";

import { ReactNode } from "react";

export default function NewServiceApplicationTab({
  children,
  optionsHeader,
  firstTabName,
  firstTabValue,
  secondTabName,
  secondTabValue,
}: {
  children: ReactNode;
  optionsHeader?: ReactNode;
  firstTabName: string;
  firstTabValue: string;
  secondTabName: string;
  secondTabValue: string;
}) {
  return (
    <div>
      <Tabs defaultValue={firstTabValue} className="w-full">
        <div className="w-full flex flex-row justify-between place-items-end">
          <div>
            <TabsList>
              <TabsTrigger
                value={firstTabValue}
                className="bg-white rounded-none border-b-2 border-transparent data-[state=active]:text-blue-700 data-[state=active]:border-blue-700 data-[state=active]:font-bold font-bold px-4"
              >
                {firstTabName}
              </TabsTrigger>
              <TabsTrigger
                value={secondTabValue}
                className="bg-white rounded-none border-b-2 border-transparent data-[state=active]:text-blue-700 data-[state=active]:border-blue-700 data-[state=active]:font-bold font-bold px-4"
              >
                {secondTabName}
              </TabsTrigger>
            </TabsList>
          </div>
          {optionsHeader}
        </div>
        {/* <TabsContent value="survey">
          <div className="flex flex-row gap-3 justify-between w-full">
            <ApplicantList />
            <ApplicantForm />
          </div>
        </TabsContent>
        <TabsContent value="installation">
          <div className="flex flex-row gap-3 justify-between w-full">
            <div className="flex flex-row gap-3 justify-between w-full">
              <ApplicantList />
              <ApplicantForm />
            </div>
          </div>
        </TabsContent> */}
        {children}
      </Tabs>
    </div>
  );
}
