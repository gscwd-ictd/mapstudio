import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OMMSModule({
  imageSrc,
  title,
  href,
}: {
  imageSrc: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      className="flex flex-col items-center justify-center bg-white border-2 shadow-lg w-[216px] h-[113px] p-3 rounded-lg"
      href={href}
    >
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#0162B31A] rounded-full p-2">
          <Image src={imageSrc} alt={"Image"} height={45} width={45} />
        </div>
        <p className="font-medium text-xs text-center tracking-widest" style={{ color: "#144DB1" }}>
          {title}
        </p>
      </div>
    </Link>
  );
}
