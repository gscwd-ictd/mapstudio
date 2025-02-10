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
import { useForm } from "react-hook-form";

import axios from "axios";
import Modal from "./Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@mapstudio/lib/components/ui";

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

type BarangayName = {
  name: string;
};

type PurokName = {
  barangayId: string;
  name: string;
};

const DynamicTable = () => {
  const [data, setData] = useState<Barangay[]>([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedBarangay, setSelectedBarangay] = useState<Barangay | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const { register, handleSubmit } = useForm<PurokName>();
  const onSubmit = async (data: BarangayName) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "http://172.20.10.63:3000/srms/nsa-dashboard/maintenance/location",
        },
      });
      console.log("Data submitted successfully:", response.data);
      setData((prevData) => [...prevData, response.data]);
      // setData(response.data.items);
      closeModal();
    } catch (error) {
      console.log("Data submitted:", data);
      console.log(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay`);
      console.log("Error submitting data:", error);
    }
  };

  // const onSubmit = async (data: BarangayName) => {
  //   try {
  //     const res = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/barangay`,
  //       data,
  //       {
  //         withCredentials: true,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     setData((prevData) => [...prevData, res.data]);
  //     closeModal();
  //   } catch (error) {
  //     console.error("Error adding barangay:", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay`);
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
        cell: (info) => info.getValue()?.toUpperCase(),
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
      <div className="flex flex-col h-screen">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleAdd}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Barangay
          </button>
        </div>

        <div className="flex-1 overflow-y-scroll pb-10">
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="px-6 py-3 bg-[#2078C3] text-left text-sm font-medium text-white"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => {
                return (
                  <TableRow key={row.id} className="bg-blue-600 bg-opacity-10 hover:bg-blue-300">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          key={cell.id}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <Modal isOpen={isModalOpen && isViewModalOpen} onClose={closeModal}>
        {selectedBarangay && (
          <>
            <div>
              <h2 className="text-xl font-bold mb-4">Barangay</h2>
              <p>
                <strong>ID:</strong> {selectedBarangay.id || "N/A"}
              </p>
              <p>
                <strong>Name:</strong> {selectedBarangay.name || "Barangay Name"}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-4 mb-2">Purok</h3>
              <ul>
                {selectedBarangay.purok.map((purok) => (
                  <li key={purok.id}>{purok.name}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Modal>

      <Modal isOpen={isModalOpen && isAddModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Add Barangay</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="border-2 border-gray-600 p-2"
            placeholder="Enter name"
          />

          <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default DynamicTable;
