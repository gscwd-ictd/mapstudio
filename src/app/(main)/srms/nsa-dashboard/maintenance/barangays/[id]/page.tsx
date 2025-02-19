"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import { Button } from "@mapstudio/lib/components/ui/Button";
import { Barangay, Purok, PurokName } from "@mapstudio/app/utils/types/Location";
import axios from "axios";
import DynamicTable from "@mapstudio/app/(main)/components/DynamicTable";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

// type Barangay = {
//   id: string;
//   name: string;
//   created_at: string;
//   updated_at: string;
//   deleted_at: string;
//   purok: Purok[];
// };

// type Purok = {
//   id: string;
//   name: string;
//   created_at: string;
//   updated_at: string;
//   deleted_at: string;
// };

export default function BarangayDetails() {

  const columns: ColumnDef<Purok>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Purok Name",
        cell: (info) => {
          const value = info.getValue() as string;
          const name = value[0].toUpperCase() + value.substring(1);
          return name;
        },
      },
      // {
      //   id: "actions",
      //   header: "Actions",
      //   cell: ({ row }) => {
      //     const barangayId = row.original.id;

      //     return (
      //       <Button
      //         variant="ghost"
      //         size="sm"
      //         aria-label="View user"
      //         onClick={() => {
      //           // router.push(`barangays/${barangayId}`);
      //           window.open(`barangays/${barangayId}`, "_blank");
      //         }}
      //       >
      //         <Eye className="h-4 w-4" />
      //       </Button>
      //     );
      //   },
      // },
    ],
    []
  );

  // const [selectedBarangay, setSelectedBarangay] = useState<Barangay | null>(null);

  const { id } = useParams();

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isAddBarangayModalOpen, setIsAddBarangayModalOpen] = useState(false);
  const [isAddPurokModalOpen, setIsAddPurokModalOpen] = useState(true);

  type ModalType = "view" | "add" | "update" | "delete" | null;

  const openModal = useCallback((type: ModalType, barangay?: Barangay, isPurok = false) => {
    setActiveModal(type);

    // if (barangay) {
    //   setSelectedBarangay(barangay);
    // }

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
      // setSelectedBarangay(null);
      // console.log("all clear", selectedBarangay);
    }, 300);
  };

  const [barangay, setBarangay] = useState<Barangay>({
    name: "",
    id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    purok: [],
  });
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (id) {
  //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setBarangay(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user details:", error);
  //         setLoading(false);
  //       });
  //   }
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/barangay/${id}`);
        const result = await response.json();
        setBarangay(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!barangay) {
    return <p>Barangay not found</p>;
  }

     

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



  return (
    <>
      <PageContainer>
        <Button onClick={() => openModal("add", undefined, false)}>Add Purok</Button>
        <h1>Hello</h1>
        <p>{barangay.name}</p>
        <p>{barangay.id}</p>
        <DynamicTable data={barangay?.purok || []} columns={columns} />
      </PageContainer>
    </>
  );
}
