"use client";

import DynamicTable from "@mapstudio/app/(main)/components/DynamicTable";
import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import { Button } from "@mapstudio/lib/components/ui/Button";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useMemo } from "react";
// import DynamicTable from "./DynamicTable";

import Image from "next/image";

type PlumbingFixture = {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

const plumbingFixtures: PlumbingFixture[] = [
  {
    id: "1",
    name: "Test",
    description: "Test",
    category: "Test",
    imageUrl: "https://lucide.dev/logo.dark.svg",
    created_at: "Test",
    updated_at: "Test",
    deleted_at: "Test",
  },
];

export default function PlumbingFixturesPage() {
  const columns: ColumnDef<PlumbingFixture>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  return (
    <>
      <PageContainer>
        <h1 className="text-xl font-bold">Plumbing Fixtures</h1>
        <DynamicTable data={plumbingFixtures} columns={columns} />
        {/* <DynamicTable /> */}
      </PageContainer>
    </>
  );
}
