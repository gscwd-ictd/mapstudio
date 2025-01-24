"use client";

import { MapPin, Phone, Map, X } from "lucide-react";
import { useEffect, useState } from "react";
import images from "../../../../public/images";
import Image from "next/image";
import { PerformanceChart } from "./PerformanceChart";
import { PerformanceTrendChart } from "./PerformanceTrendChart";
import { PerformanceTrendTab } from "./PerformanceTrendTab";

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
        className="p-4 fixed z-50 top-[55%] right-10 transform -translate-y-1/2"
        style={{
          backgroundColor: "#E7EBEC03",
          height: "950px",
          width: "400px",
          backdropFilter: "blur(9px)",
          border: "3px solid #2078C333",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-row justify-end">
          <button onClick={onClose} className="btn btn-primary">
            <X />
          </button>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-row gap-3 items-center justify-between">
              <Image src={images.sample_avatar_2} alt={"Avatar"} width={100} />
              <div className="flex flex-col gap-1 ">
                <h1 className="text-xl font-bold">John Doe</h1>
                <h3 className="text-lg">Surveyor</h3>
                <p className="text-base">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="flex flex-row justify-start">
              <button
                className="rounded-full text-white"
                style={{ backgroundColor: "#2E70F8", padding: "5px 20px 5px 20px" }}
              >
                Contact
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <p className="flex flex-row gap-1 items-center">
                <Phone fill="text-gray-800" />
                <span className="text-gray-800">09123456789</span>
              </p>
              <p className="flex flex-row gap-1 items-center">
                <MapPin />
                <span className="text-gray-800 text-xs" style={{}}>
                  B-26 L-11 PRK-18, EMPLOYEES VILLAGE, FATIMA
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs">Assigned Area</span>
              <span className="text-sm whitespace-normal flex flex-row gap-2 items-center">
                <Map size={24} />
                Katangawan, Conel...
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <p>Overall Performance</p>
              <div className="bg-white w-[320px] h-[100px] flex flex-row gap-5 items-center px-5 rounded-md">
                <PerformanceChart percentage={90} />
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-3xl font-bold" style={{ color: "#2AB40E" }}>
                    90
                    <span className="text-xl font-normal" style={{ color: "#BFC0BF" }}>
                      /100
                    </span>
                  </span>
                  <p style={{ color: "#2AB40E" }}>Good</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[320px]">
              <p>Performance Trend</p>
              <div className="flex flex-row gap-5 items-center justify-center rounded-md">
                {/* <PerformanceTrendChart /> */}
                <PerformanceTrendTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
