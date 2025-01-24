import React from "react";
import Image from "next/image";
import images from "../../../../public/images";
import { Badge } from "@mapstudio/lib/components/ui/Badge";

export function ApplicantCard() {
  return (
    <>
      <div className="bg-gray-200 p-3 rounded-lg flex flex-row gap-4 relative">
        <Badge className="absolute top-0 right-0 m-2" style={{ backgroundColor: "#32CD32" }}>
          New
        </Badge>
        <div className="flex flex-col items-center gap-2">
          <Image src={images.sample_avatar} alt={"Image"} width={50} />
          <p className="text-xs" style={{ fontSize: "0.5rem" }}>
            October 29, 2024 11:13 AM
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p style={{ fontSize: "0.5rem" }}>2024-000123</p>
          <p className="text-2xl text-gray-800">Tipay, Marilyn A.</p>
          <p style={{ fontSize: "0.5rem" }}>B-26 L-11 Prk-18, Employees Village, Fatima</p>
        </div>
      </div>
    </>
  );
}
