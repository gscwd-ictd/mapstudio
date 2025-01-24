"use client";

import { Button, Input, Table, TableHead } from "@mapstudio/lib/components/ui";
import { ClipboardX, Save, TextSearch, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BillOfMaterialsTable } from "./BillOfMaterialsTable";
import ConfirmDiscardModal from "./ConfirmDiscardModal";

export default function BillOfMaterialsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(isOpen);
  const [animate, setAnimate] = useState(isOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 backdrop-blur-sm ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <ConfirmDiscardModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div
        className={`bg-white rounded-lg shadow-lg w-[1100px] transform transition-transform duration-300 ${
          animate ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex flex-row justify-between items-center p-4 border-b">
          <h2 className="text-xl ml-6 font-bold">Bill of Materials</h2>
          <button onClick={onClose} className="btn btn-primary">
            <X />
          </button>
        </div>
        <div className="p-4 text-sm flex flex-col items-center gap-6">
          <div className="grid grid-cols-3 gap-5">
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="bmNo">BM No.:</label>
              <input
                type="text"
                id="bmNo"
                placeholder="00001"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="referenceNo">Reference No.:</label>
              <input
                type="text"
                id="referenceNo"
                placeholder="1124-00001"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="dateInspected">Date inspected:</label>
              <input
                type="text"
                id="dateInspected"
                placeholder="10/25/2024"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="applicationNo">Application No.:</label>
              <input
                type="text"
                id="applicationNo"
                placeholder="16240400336"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-2 w-full">
              <label htmlFor="applicantName" className="whitespace-nowrap">
                Applicant Name:
              </label>
              <input
                type="text"
                id="applicantName"
                placeholder="CASTILLO, MERELYN A."
                className="rounded-sm p-1 w-full"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-3">
              <label htmlFor="applicantName">Address:</label>
              <input
                type="text"
                id="applicantName"
                placeholder="PRK. MAPAILUBON PACKING 1, SAN ISIDRO, GENERAL SANTOS CITY"
                className="rounded-sm p-1 w-full"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="establishment">Establishment:</label>
              <input
                type="text"
                id="establishment"
                placeholder="N/A"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="mobileNo">Mobile No.:</label>
              <input
                type="text"
                id="mobileNo"
                placeholder="09123456789"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-1">
              <label htmlFor="telephoneNo">Telephone No.:</label>
              <input
                type="text"
                id="telephoneNo"
                placeholder="N/A"
                className="rounded-sm p-1"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center justify-between col-span-3">
              <div className="flex flex-row gap-2 items-center w-full">
                <label htmlFor="connectionType" className="whitespace-nowrap">
                  Connection Type:
                </label>
                <select
                  className="rounded-sm p-1 w-full"
                  style={{
                    outline: "0.5px solid #3F384480",
                  }}
                >
                  <option></option>
                </select>
              </div>
              {/* Input */}
              <div className="flex flex-row gap-2 items-center w-full">
                <label htmlFor="classification" className="whitespace-nowrap">
                  Classification:
                </label>
                <input
                  type="text"
                  id="classification"
                  placeholder="RESIDENTIAL"
                  className="rounded-sm p-1 w-full"
                  style={{
                    outline: "0.5px solid #3F384480",
                  }}
                />
              </div>
            </div>
            {/* Input */}
            <div className="flex flex-row gap-2 items-center col-span-3">
              <label htmlFor="remarks">Remarks:</label>
              <input
                type="text"
                id="remarks"
                placeholder="N/A"
                className="rounded-sm p-1 w-full"
                style={{
                  outline: "0.5px solid #3F384480",
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-6 w-[1000px] justify-end">
            <div className="flex flex-row items-center gap-1">
              <input type="checkbox" id="installationCharges" defaultChecked={true} />
              <label htmlFor="installationCharges">Installation Charges</label>
            </div>
            <div className="flex flex-row items-center gap-1">
              <input type="checkbox" id="dmBm" defaultChecked={true} />
              <label htmlFor="dmBm">DM/BM</label>
            </div>
            <div className="flex flex-row items-center gap-1">
              <input type="checkbox" id="customerHandbook" defaultChecked={true} />
              <label htmlFor="customerHandbook">Customer Handbook</label>
            </div>
          </div>
          <div style={{ width: "1000px", height: "500px" }}>
            <BillOfMaterialsTable />
          </div>
          <div className="flex flex-row gap-4 w-[1000px] justify-end">
            <Button
              type={"button"}
              className="gap-2 flex flex-row items-center rounded-xl "
              variant={"outline"}
              style={{ border: "1px solid black" }}
            >
              <TextSearch />
              <span>Preview</span>
            </Button>
            <Button
              type={"button"}
              className="gap-2 flex flex-row items-center rounded-xl"
              variant={"secondary"}
              style={{ backgroundColor: "#989898", color: "white" }}
              onClick={handleOpenModal}
            >
              <ClipboardX />
              <span>Discard</span>
            </Button>
            <Button
              type={"submit"}
              className="gap-2 flex flex-row items-center rounded-xl"
              style={{ backgroundColor: "#2078C3" }}
            >
              <Save />
              <span>Save</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
