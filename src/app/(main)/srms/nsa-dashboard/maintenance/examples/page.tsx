"use client";

import DynamicTable from "@mapstudio/app/(main)/components/DynamicTable";
import Modal from "@mapstudio/app/(main)/components/Modal";
import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import { Button } from "@mapstudio/lib/components/ui";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
};

const users: User[] = [
  {
    firstName: "Jeric",
    lastName: "Magbanua",
  },
];

export default function Examples() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  type ModalType = "view" | "add" | "update" | "delete" | null;

  const openModal = useCallback((type: ModalType, user?: User) => {
    setActiveModal(type);
    if (user) {
      setSelectedUser(user);
    }
  }, []);

  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => {
      setSelectedUser(null);
      console.log("all clear", selectedUser);
    }, 300);
  };

  const columns: ColumnDef<User>[] = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        cell: (info) => info.getValue(),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => openModal("view", row.original)}
            aria-label="View user"
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
        <h1>Hello</h1>
        <Button onClick={() => openModal("add")}>Add User</Button>
        <DynamicTable data={users} columns={columns} pageSize={5} />

        <Modal isOpen={activeModal === "view"} onClose={closeModal}>
          <h1>View User</h1>
          {selectedUser && <p>{selectedUser.firstName}</p>}
        </Modal>

        <Modal isOpen={activeModal === "add"} onClose={closeModal}>
          <h1>Add User</h1>
        </Modal>

        <Modal isOpen={activeModal === "update"} onClose={closeModal}>
          <h1>Update User</h1>
        </Modal>

        <Modal isOpen={activeModal === "delete"} onClose={closeModal}>
          <h1>Delete User</h1>
        </Modal>
      </PageContainer>
    </>
  );
}
