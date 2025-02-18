"use client";

import DynamicTable from "@mapstudio/app/(main)/components/DynamicTable";
import Modal from "@mapstudio/app/(main)/components/Modal";
import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import { Button } from "@mapstudio/lib/components/ui/Button";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { Eye } from "lucide-react";
import { useMemo, useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";

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

// const data: Barangay[] = [
//   {
//     id: "1",
//     name: "Calumpang",
//     created_at: "1",
//     updated_at: "1",
//     deleted_at: "1",
//     purok: [
//       {
//         id: "1",
//         name: "1",
//         created_at: "1",
//         updated_at: "1",
//         deleted_at: "1",
//       },
//       {
//         id: "2",
//         name: "2",
//         created_at: "2",
//         updated_at: "2",
//         deleted_at: "2",
//       },
//     ],
//   },
// ];

export default function LocationPage() {
  const [data, setData] = useState<Barangay[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBarangay, setSelectedBarangay] = useState<Barangay | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isAddBarangayModalOpen, setIsAddBarangayModalOpen] = useState(false);
  const [isAddPurokModalOpen, setIsAddPurokModalOpen] = useState(true);

  type ModalType = "view" | "add" | "update" | "delete" | null;

  const openModal = useCallback((type: ModalType, barangay?: Barangay, isPurok = false) => {
    setActiveModal(type);

    if (barangay) {
      setSelectedBarangay(barangay);
    }

    if (isPurok) {
      setIsAddPurokModalOpen(true);
      setIsAddBarangayModalOpen(false);
    } else {
      setIsAddBarangayModalOpen(true);
      setIsAddPurokModalOpen(false);
    }
  }, []);

  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => {
      setSelectedBarangay(null);
      console.log("all clear", selectedBarangay);
    }, 300);
  };

  const { register, handleSubmit } = useForm<PurokName>();
  const addBarangay = async (data: BarangayName) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay`, data);
      console.log("Data submitted successfully:", response.data);
      setData((prevData) => [...prevData, response.data]);
      closeModal();
    } catch (error) {
      console.log("Data submitted:", data);
      console.log(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay`);
      console.log("Error submitting data:", error);
    }
  };

  const addPurok = async (data: PurokName) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/purok`, data);
      console.log("Data submitted successfully:", response.data);
      // setData((prevData) => [...prevData, response.data]);
      closeModal();
      console.log("data", data);
    } catch (error) {
      console.log("Data submitted:", data);
      console.log(`${process.env.NEXT_PUBLIC_BACKEND_API}/purok`);
      console.log("Error submitting data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay`);
        const result = await response.json();
        setData(result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    setLoading(false);
  }, []);

  const columns: ColumnDef<Barangay>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Barangay Name",
        cell: (info) => {
          const value = info.getValue() as string;
          const name = value[0].toUpperCase() + value.substring(1);
          return name;
        },
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => openModal("view", row.original)}
            aria-label="View barangay"
          >
            <Eye className="h-4 w-4" />
          </Button>
        ),
      },
    ],
    [openModal]
  );

  return (
    <>
      <PageContainer>
        <h1 className="text-xl font-bold">Location</h1>
        <Button onClick={() => openModal("add", undefined, false)}>Add Barangay</Button>
        <Button onClick={() => openModal("add", undefined, true)}>Add Purok</Button>
        <DynamicTable data={data} columns={columns} loading={loading} />

        <Modal isOpen={activeModal === "view"} onClose={closeModal}>
          {selectedBarangay && (
            <div>
              <p>{selectedBarangay.name}</p>
              <div>
                {selectedBarangay.purok.length > 0 &&
                  selectedBarangay.purok.map((item, index) => (
                    <div key={index}>
                      <h3>{item.name}</h3>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </Modal>

        <Modal isOpen={activeModal === "add" && isAddBarangayModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Add Barangay 1</h2>
          <form onSubmit={handleSubmit(addBarangay)} className="flex flex-col gap-1">
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

        <Modal isOpen={activeModal === "add" && isAddPurokModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Add Purok</h2>
          <form onSubmit={handleSubmit(addPurok)} className="flex flex-col gap-1">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="border-2 border-gray-600 p-2"
              placeholder="Enter name"
              required
            />

            <select {...register("barangayId", { required: true })} defaultValue="">
              <option value="" disabled>
                Select a Barangay
              </option>
              {data?.length > 0 &&
                data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>

            <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2">
              Submit
            </button>
          </form>
        </Modal>
      </PageContainer>
    </>
  );
}
