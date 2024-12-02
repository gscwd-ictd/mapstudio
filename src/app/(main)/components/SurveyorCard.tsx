import React from "react";
import Image from "next/image";
import images from "../../../../public/images";
import { Badge } from "@mapstudio/lib/components/ui";

export function SurveyorCard({
  name,
  department,
  address,
  status,
}: {
  name: string;
  department: string;
  address: string;
  status: string;
}) {
  const badgeStyle =
    status === "Onsite"
      ? { backgroundColor: "#C2F9BA", color: "#00BC8B" }
      : { backgroundColor: "#FF0000", color: "#FFFFFF" };

  return (
    <>
      <div className="bg-white p-3 rounded-lg flex flex-row gap-4 items-center relative">
        <Image src={images.sample_avatar} alt={"Image"} height={50} width={70} />
        <Badge className=" absolute top-0 right-0 m-2" style={badgeStyle}>
          {status}
        </Badge>
        <div className="flex flex-col items-start ">
          <p className="text-md text-gray-800">{name}</p>
          <p className="text-gray-800" style={{ fontSize: "10px" }}>
            {department}
          </p>
          <p className="text-gray-800" style={{ fontSize: "10px" }}>
            {address}
          </p>
        </div>
      </div>
    </>
  );
}
