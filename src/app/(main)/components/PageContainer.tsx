"use client";

import React from "react";

export default function PageContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    //  px-4 sm:px-6 lg:px-8
    <div className={`bg-[#f1f1f1] max-w-8xl min-h-screen m-auto ${className}`}>
      <div className="p-3 w-auto">{children}</div>
    </div>
  );
}
