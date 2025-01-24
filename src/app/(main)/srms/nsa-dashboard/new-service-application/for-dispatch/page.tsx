"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@mapstudio/lib/components/ui";
import NewServiceApplicationTab from "@mapstudio/app/(main)/components/NewServiceApplicationTab";
import { TabsContent } from "@mapstudio/lib/components/ui";
import { ApplicantList } from "@mapstudio/app/(main)/components/ApplicantList";
import { ForDispatchApplicantForm } from "@mapstudio/app/(main)/components/ForDispatchApplicantForm";
import SampleOptions from "@mapstudio/app/(main)/components/SampleOptions";
import ConfirmDispatchModal from "@mapstudio/app/(main)/components/ConfirmDispatchModal";

export default function ForDispatchPage() {
  return (
    <>
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList className="text-2xl">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">New Service Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="italic">For Dispatch</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-row gap-2 mb-6 w-full">
        <NewServiceApplicationTab
          optionsHeader={SampleOptions()}
          firstTabName="Survey"
          firstTabValue="survey"
          secondTabName="Installation"
          secondTabValue="installation"
        >
          <TabsContent value="survey">
            <div className="flex flex-row gap-3 justify-between w-[85vw] mt-6">
              <ApplicantList />
              <ForDispatchApplicantForm />
            </div>
          </TabsContent>
          <TabsContent value="installation">
            <div className="flex flex-row gap-3 justify-between w-[85vw] mt-6">Test</div>
          </TabsContent>
        </NewServiceApplicationTab>
      </div>
    </>
  );
}
