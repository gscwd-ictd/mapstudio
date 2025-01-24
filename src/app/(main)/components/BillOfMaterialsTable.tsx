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

export function BillOfMaterialsTable() {
  return (
    <div className="rounded-lg border-2 border-[#2078C3] font-medium h-[500px] w-full overflow-y-scroll  no-scrollbar">
      <Table
      // className="rounded-lg border-2 border-[#2078C3] font-medium h-[500px] w-full overflow-y-scroll"
      // style={{ color: "#2078C3" }}
      >
        <TableHeader>
          <TableRow style={{ backgroundColor: "#2078C3" }}>
            <TableHead>
              <Checkbox className="border-white" />
            </TableHead>
            <TableHead className="text-white">NO.</TableHead>
            <TableHead className="text-white">Application Number</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Address</TableHead>
            {/* <TableHead className="text-white">Date</TableHead>
          <TableHead className="text-white">Surveyed By</TableHead>
          <TableHead className="text-white">Estimates</TableHead> */}
            {/* <TableHead className="text-white">Status</TableHead> */}
            {/* <TableHead className="text-white">Action</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((row, index) => (
            <TableRow
              key={row.invoice}
              className={`${index % 2 === 0 ? "bg-white" : "bg-blue-100"} hover:bg-blue-300`}
            >
              <TableCell>
                <Checkbox className="text-black" />
              </TableCell>
              <TableCell>{row.invoice}</TableCell>
              <TableCell>{row.paymentStatus}</TableCell>
              <TableCell>{row.totalAmount}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              {/* <TableCell>
              <Badge
                className="rounded-sm font-normal"
                style={{ backgroundColor: "#00BC8B", color: "white" }}
              >
                {row.status}
              </Badge>
            </TableCell> */}
              {/* <TableCell>
              <div className="flex gap-2">
                <button onClick={handleOpenModal}>
                  <Ellipsis size={24} />
                </button>
              </div>
            </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
