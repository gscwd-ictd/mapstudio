"use client";

import { Button } from "@mapstudio/lib/components/ui";
import { CircleHelp, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ConfirmDispatchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(isOpen);
  const [animate, setAnimate] = useState(isOpen);

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

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 backdrop-blur-sm ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-[400px] h-[300px] transform transition-transform duration-300 flex flex-col items-center justify-center gap-8 px-20 text-center ${
          animate ? "scale-100" : "scale-95"
        }`}
      >
        <CircleHelp size={75} />
        <p className="font-semibold" style={{ color: "#3F3844" }}>
          Are you sure you want to dispatch this request?
        </p>
        <div className="flex flex-row gap-5 items-center justify-center">
          <Button
            onClick={onClose}
            variant="secondary"
            className="px-8 outline outline-1 outline-gray-500"
          >
            No
          </Button>
          <Button onClick={() => alert("Test")} variant="default" className="px-8">
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
}
