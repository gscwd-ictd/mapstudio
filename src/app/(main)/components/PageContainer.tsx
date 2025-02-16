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
    <div className={`bg-[#e6e6e6] max-w-8xl min-h-screen m-auto ${className}`}>
      <div className="p-3 w-auto">{children}</div>
    </div>
  );
}
