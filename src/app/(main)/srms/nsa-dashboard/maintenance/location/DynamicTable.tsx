"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "@mapstudio/lib/components/ui/Button";
import { Eye, Plus } from "lucide-react";
import Modal from "./Modal";

type Barangay = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  purok: Purok[];
};

type Purok = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

const DynamicTable = () => {
  const [data, setData] = useState<Barangay[]>([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedBarangay, setSelectedBarangay] = useState<Barangay | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/barangay`);
        const result = await response.json();
        setData(result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columnHelper = createColumnHelper<Barangay>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue().toUpperCase(),
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <>
            <Button variant="ghost" size="sm" onClick={() => handleView(row.original)}>
              <Eye className="h-4 w-4" />
            </Button>
          </>
        ),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleView = (barangay: Barangay) => {
    setSelectedBarangay(barangay);
    setIsModalOpen(true);
    setIsViewModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedBarangay(null);
    setIsModalOpen(true);
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBarangay(null);
  };

  useEffect(() => {
    if (!isModalOpen) {
      console.log("Modal closed", selectedBarangay);
    }
  }, [isModalOpen, selectedBarangay]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAdd}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Barangay
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen && isViewModalOpen} onClose={closeModal}>
        {selectedBarangay && (
          <div>
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p>
              <strong>ID:</strong> {selectedBarangay.id || "N/A"}
            </p>
            <p>
              <strong>Name:</strong> {selectedBarangay.name || "Barangay Name"}
            </p>
          </div>
        )}
      </Modal>

      <Modal isOpen={isModalOpen && isAddModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <input type="text" name="Sample" />
        </div>
      </Modal>
    </>
  );
};

export default DynamicTable;
