"use client";

import React, { useEffect, useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
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
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg p-6 w-full max-w-md transform transition-transform duration-300 ${
          animate ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
