"use client";

import { Eye, Send, SquarePen } from "lucide-react";
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
import { ApplicantForm } from "@mapstudio/app/(main)/components/ApplicantForm";
import BillOfMaterialsModal from "@mapstudio/app/(main)/components/BillOfMaterialsModal";
import { ForReturnApplicantForm } from "@mapstudio/app/(main)/components/ForReturnApplicantForm";
// import BillOfMaterialsModal from "@mapstudio/app/(main)/components/ConfirmDispatchModal";

export default function ReturnedPage() {
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
      assignedTo: "VIRGILIO PASTORIL JR.",
      status: "Pending",
      remarks: "Wrong dispatch",
    },
    {
      number: 1,
      applicationNumber: "16230900267",
      name: "TIPAY, MARILYN A.",
      address: "B-26 L-11 PRK-18, EMPLOYEES VILLAGE, FATIMA",
      date: "09/10/24",
      assignedTo: "VIRGILIO PASTORIL JR.",
      status: "Pending",
      remarks: "Wrong dispatch",
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
              <BreadcrumbPage className="italic">Returned</BreadcrumbPage>
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
        <ForReturnApplicantForm isOpen={isModalOpen} onClose={handleCloseModal} />
        {/* <BillOfMaterialsModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}

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
                <TableHead className="text-white">Assigned To</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Remarks</TableHead>
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
                  <TableCell>{row.assignedTo}</TableCell>
                  <TableCell>
                    <Badge
                      className="rounded-sm font-normal"
                      style={{ backgroundColor: "#F71212", color: "white" }}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.remarks}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <button>
                        <Send
                          size={24}
                          className="rounded-full p-1 text-white font-bold"
                          style={{ backgroundColor: "039be5" }}
                        />
                      </button>
                      <button onClick={handleOpenModal}>
                        <Eye
                          size={24}
                          className="rounded-full p-1 text-white font-bold"
                          style={{ backgroundColor: "039be5" }}
                        />
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
