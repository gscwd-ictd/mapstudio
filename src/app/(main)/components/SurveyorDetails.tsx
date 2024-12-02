"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function SurveyorDetails({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed z-50 top-1/2 right-10 transform -translate-y-1/2"
        style={{
          backgroundColor: "#E7EBEC03",
          height: "600px",
          width: "400px",
          backdropFilter: "blur(9px)",
          border: "3px solid #2078C333",
          borderRadius: "10px",
        }}
      >
        <button onClick={onClose} className="btn btn-primary">
          <X />
        </button>
      </div>
    </>
  );
}
