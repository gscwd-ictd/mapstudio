// type RowData = {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// };

// type DataTableAction<RowType> = {
//   id: string;
//   label: string;
//   callback: (row: RowType) => void;
// };

// const DataTableProperties = {
//   DataTableHeaders: [
//     { id: "name", label: "Name", align: "left" },
//     { id: "age", label: "Age", align: "center" },
//     { id: "email", label: "Email", align: "left" },
//     { id: "actions", label: "Actions", align: "center" },
//   ],
//   DataTableData: [
//     { id: 1, name: "John Doe", age: 29, email: "john.doe@example.com" },
//     { id: 2, name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
//     { id: 3, name: "Sam Wilson", age: 42, email: "sam.wilson@example.com" },
//   ],
//   DataTableActions: [
//     {
//       id: "edit",
//       label: "Edit",
//       callback: (row: RowData) => console.log("Edit", row),
//     },
//     {
//       id: "delete",
//       label: "Delete",
//       callback: (row: RowData) => console.log("Delete", row),
//     },
//   ] as DataTableAction<RowData>[],
// };

// export default DataTableProperties;

import { Checkbox } from "@mapstudio/lib/components/ui/Checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@mapstudio/lib/components/ui/Table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function DataTable() {
  return (
    <Table className="rounded-lg overflow-hidden">
      <TableHeader className="hover:bg-black" style={{ backgroundColor: "#2078C3" }}>
        <TableRow>
          <TableHead className="w-[75px]">
            <Checkbox className="border-white " />
          </TableHead>
          <TableHead className="w-[100px] text-white">Invoice</TableHead>
          <TableHead className="text-white">Status</TableHead>
          <TableHead className="text-white">Method</TableHead>
          {/* <TableHead className="text-right text-white">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <Checkbox className="border-blue-500 " />
            </TableCell>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
