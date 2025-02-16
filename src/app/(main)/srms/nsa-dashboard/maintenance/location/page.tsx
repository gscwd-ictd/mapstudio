"use client";

import DynamicTable from "@mapstudio/app/(main)/components/DynamicTable";
// import DynamicTable from "./DynamicTable";

import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import { Button } from "@mapstudio/lib/components/ui/Button";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useMemo } from "react";

type Barangay = {
  barangayId: string;
  barangayName: string;
};

const barangays: Barangay[] = [
  {
    barangayId: "1",
    barangayName: "Calumpang",
  },
];

export default function LocationPage() {
  const columns: ColumnDef<Barangay>[] = useMemo(
    () => [
      {
        accessorKey: "barangayId",
        header: "Barangay ID",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "barangayName",
        header: "Barangay Name",
        cell: (info) => info.getValue(),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="sm"
            // onClick={() => openModal("view", row.original)}
            aria-label="View user"
          >
            <Eye className="h-4 w-4" />
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <PageContainer>
        <h1 className="text-xl font-bold">Location</h1>
        <DynamicTable data={barangays} columns={columns} />
        {/* <DynamicTable /> */}
      </PageContainer>
    </>
  );
}
