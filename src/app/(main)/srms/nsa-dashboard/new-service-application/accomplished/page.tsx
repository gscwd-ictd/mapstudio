"use client";

import { Ellipsis } from "lucide-react";
import React, { useState } from "react";
import NewServiceApplicationTab from "@mapstudio/app/(main)/components/NewServiceApplicationTab";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@mapstudio/lib/components/ui/Table";
import { Checkbox } from "@mapstudio/lib/components/ui/Checkbox";
import { Badge } from "@mapstudio/lib/components/ui/Badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@mapstudio/lib/components/ui/BreadCrumb";
import NewServiceApplicationOptions from "@mapstudio/app/(main)/components/NewServiceApplicationOptions";
import { TabsContent } from "@radix-ui/react-tabs";
import BillOfMaterialsModal from "@mapstudio/app/(main)/components/BillOfMaterialsModal";

export default function AccomplishedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      number: 1,
      applicationNumber: "16230900267",
      name: "TIPAY, MARILYN A.",
      address: "B-26 L-11 PRK-18, EMPLOYEES VILLAGE, FATIMA",
      date: "09/10/24",
      surveyedBy: "VIRGILIO PASTORIL JR.",
      status: "Accomplished",
      estimates: "75x25x8m",
    },
    {
      number: 1,
      applicationNumber: "16230900267",
      name: "TIPAY, MARILYN A.",
      address: "B-26 L-11 PRK-18, EMPLOYEES VILLAGE, FATIMA",
      date: "09/10/24",
      surveyedBy: "VIRGILIO PASTORIL JR.",
      status: "Accomplished",
      estimates: "75x25x8m",
    },
  ];

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
              <BreadcrumbPage className="italic">Accomplished</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <NewServiceApplicationTab
        optionsHeader={NewServiceApplicationOptions()}
        firstTabName="Survey"
        firstTabValue="survey"
        secondTabName="Installation"
        secondTabValue="installation"
      >
        <BillOfMaterialsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <TabsContent value="survey">
          <Table className="mt-6">
            <TableHeader>
              <TableRow style={{ backgroundColor: "#2078C3" }}>
                <TableHead>
                  <Checkbox className="border-white" />
                </TableHead>
                <TableHead className="text-white">NO.</TableHead>
                <TableHead className="text-white">Application Number</TableHead>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Address</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Surveyed By</TableHead>
                <TableHead className="text-white">Estimates</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.number} className="bg-blue-600 bg-opacity-10 hover:bg-blue-300">
                  <TableCell>
                    <Checkbox className="text-black" />
                  </TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.applicationNumber}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.surveyedBy}</TableCell>
                  <TableCell>{row.estimates}</TableCell>
                  <TableCell>
                    <Badge
                      className="rounded-sm font-normal"
                      style={{ backgroundColor: "#00BC8B", color: "white" }}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button onClick={handleOpenModal}>
                        <Ellipsis size={24} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="installation">12</TabsContent>
      </NewServiceApplicationTab>
    </>
  );
}
