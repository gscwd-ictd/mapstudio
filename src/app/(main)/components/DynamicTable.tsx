"use client";

import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@mapstudio/lib/components/ui";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

type DynamicTableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T>[];
  pageSize?: number;
  loading?: boolean;
};

export default function DynamicTable<T extends object>({
  data,
  columns,
  pageSize = 10,
  loading = false,
}: DynamicTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <>
          <Table className="w-full border-collapse border border-gray-200">
            <TableHeader className="bg-gray-100">
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
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="bg-blue-600 bg-opacity-10 hover:bg-blue-300">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {table.getRowModel().rows.length === 0 && (
            <div className="py-4 text-center text-gray-500">No data available</div>
          )}

          <div className="flex items-center gap-2 mt-4">
            <button
              aria-label="First page"
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft />
            </button>
            <button
              aria-label="Previous page"
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="Next page"
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </button>
            <button
              aria-label="Last page"
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight />
            </button>
            <span className="flex items-center gap-1">
              Page
              <strong>
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </span>
            <select
              className="px-2 py-1 border rounded"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
}
