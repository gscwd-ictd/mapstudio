"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@mapstudio/lib/components/ui/Chart";
import Image from "next/image";
import React, { useEffect } from "react";
import { AreaChart, Area, PieChart, Pie } from "recharts";

import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";
import images from "../../../../../../public/images";
import { UsersRound } from "lucide-react";
import { Badge, Button } from "@mapstudio/lib/components/ui";
import MonthlyNSAStatsType from "@mapstudio/app/utils/mock/MonthlyNSAStats";
import PageContainer from "@mapstudio/app/(main)/components/PageContainer";

const data = [
  { name: "a", num: 1 },
  { name: "B", num: 2 },
  { name: "C", num: 2 },
  { name: "D", num: 3 },
  { name: "E", num: 3 },
  { name: "F", num: 4 },
  { name: "G", num: 4 },
];

const chartData1 = [
  { browser: "chrome", visitors: 100, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 100, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 300, fill: "var(--color-firefox)" },
  { browser: "other", visitors: 200, fill: "var(--color-other)" },
];

const chartData2 = [
  { browser: "chrome", visitors: 50, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 80, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 100, fill: "var(--color-firefox)" },
  { browser: "other", visitors: 300, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#F94545",
  },
  safari: {
    label: "Safari",
    color: "#4582F9",
  },
  firefox: {
    label: "Firefox",
    color: "#33C9A2",
  },
  other: {
    label: "Other",
    color: "#F5C443",
  },
} satisfies ChartConfig;

console.log(MonthlyNSAStatsType);

export default function Dashboard() {
  // useEffect(() => {
  //   const map = new Map({
  //     target: "sampleMap",
  //     layers: [
  //       new TileLayer({
  //         source: new XYZ({
  //           url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  //         }),
  //       }),
  //     ],
  //     view: new View({
  //       center: fromLonLat([125.1716, 6.1128]),
  //       zoom: 12,
  //     }),
  //   });

  //   return () => {
  //     map.setTarget(undefined);
  //   };
  // }, []);

  return (
    <>
      <PageContainer>
        <h1 className="text-xl font-bold">Dashboard</h1>

        {/* CHARTS */}
        {/* <div className="flex flex-row gap-8 m-4 justify-between w-[100%]">
          <div
            className="flex flex-col justify-between shadow-lg rounded-lg"
            style={{ width: "300px", height: "150px", backgroundColor: "#4582F9" }}
          >
            <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4">
              <div
                className="flex flex-col items-center justify-center rounded-full p-3"
                style={{ backgroundColor: "#3C73DA", height: "60px", width: "60px" }}
              >
                <Image src={images.new_service_applications} alt={""} width={50} height={50} />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <p className="text-3xl text-white font-bold">124</p>
                <p className="text-xs text-white font-medium break-words">New Applications</p>
              </div>
            </div>
            <AreaChart width={300} height={40} data={data}>
              <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#87AEFB" />
            </AreaChart>
          </div>
          <div
            className="flex flex-col justify-between shadow-lg rounded-lg"
            style={{ width: "300px", height: "150px", backgroundColor: "#00BC8B" }}
          >
            <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4 break-words">
              <div
                className="flex flex-col items-center justify-center rounded-full p-3"
                style={{ backgroundColor: "#05A282", height: "60px", width: "60px" }}
              >
                <Image
                  src={images.approved_new_service_applications}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <p className="text-3xl text-white font-bold">89</p>
                <p className="text-xs text-white font-medium ">Approved</p>
              </div>
            </div>
            <AreaChart width={300} height={40} data={data}>
              <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#56D2B2" />
            </AreaChart>
          </div>
          <div
            className="flex flex-col justify-between shadow-lg rounded-lg"
            style={{ width: "300px", height: "150px", backgroundColor: "#FFB800E5" }}
          >
            <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4 break-words">
              <div
                className="flex flex-col items-center justify-center rounded-full p-3"
                style={{ backgroundColor: "#DEB23F", height: "60px", width: "60px" }}
              >
                <Image
                  src={images.pending_new_service_applications}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <p className="text-3xl text-white font-bold">35</p>
                <p className="text-xs text-white font-medium">Pending</p>
              </div>
            </div>
            <AreaChart width={300} height={40} data={data}>
              <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#FFD771" />
            </AreaChart>
          </div>
          <div
            className="flex flex-col justify-between shadow-lg rounded-lg"
            style={{ width: "300px", height: "150px", backgroundColor: "#FD2630A3" }}
          >
            <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4 break-words">
              <div
                className="flex flex-col items-center justify-center rounded-full p-3"
                style={{ backgroundColor: "#4E0D101A", height: "60px", width: "60px" }}
              >
                <Image
                  src={images.disapproved_new_service_applications}
                  alt={""}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <p className="text-3xl text-white font-bold">20</p>
                <p className="text-xs text-white font-medium ">Total Installation</p>
              </div>
            </div>
            <AreaChart width={300} height={40} data={data}>
              <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#E7A8AB66" />
            </AreaChart>
          </div>
        </div> */}

        {/* CHARTS WITH CALENDAR */}
        <div className="flex flex-row gap-8 m-4 justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm" style={{ color: "#1E1E1E" }}>
              Survey
            </p>
            <div
              className="flex flex-col justify-center bg-white shadow-lg rounded-lg"
              style={{ width: "300px", height: "300px" }}
            >
              <ChartContainer config={chartConfig} className="aspect-square max-h-[250px]">
                <PieChart>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartData1}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={40}
                    outerRadius={110}
                    strokeWidth={5}
                  />
                </PieChart>
              </ChartContainer>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm " style={{ color: "#1E1E1E" }}>
              Installation
            </p>
            <div
              className="flex flex-col justify-center bg-white shadow-lg rounded-lg"
              style={{ width: "300px", height: "300px" }}
            >
              <ChartContainer config={chartConfig} className="aspect-square max-h-[250px]">
                <PieChart>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartData2}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={40}
                    outerRadius={110}
                    strokeWidth={5}
                  />
                </PieChart>
              </ChartContainer>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm " style={{ color: "#1E1E1E" }}>
              Orientation Schedule
            </p>
            <div
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3"
              style={{ width: "600px", height: "300px", overflowY: "scroll" }}
            >
              <button className="flex self-end p-2 hover:underline" style={{ color: "#2078C3" }}>
                View All
              </button>
              <div
                className="flex flex-row items-center justify-between p-3 rounded-sm"
                style={{ border: "0.5px solid #98989880" }}
              >
                <div className="flex flex-row gap-5 items-center" style={{ color: "#1E1E1ECC" }}>
                  <UsersRound size={32} color="#4582f9" fill="#4582f9" />
                  <div className="flex flex-col">
                    <h1 className="font-extrabold">Batch 1 Orientation</h1>
                    <p className="text-xs">January 3, 2025 - 9:00-10:00 AM</p>
                  </div>
                </div>
                <Badge style={{ backgroundColor: "#9FFACB", color: "#2DAD83" }}>available</Badge>
              </div>

              <div
                className="flex flex-row items-center justify-between p-3 rounded-sm"
                style={{ border: "0.5px solid #98989880" }}
              >
                <div className="flex flex-row gap-5 items-center" style={{ color: "#1E1E1ECC" }}>
                  <UsersRound size={32} color="#4582f9" fill="#4582f9" />
                  <div className="flex flex-col">
                    <h1 className="font-extrabold">Batch 1 Orientation</h1>
                    <p className="text-xs">January 3, 2025 - 9:00-10:00 AM</p>
                  </div>
                </div>
                <Badge style={{ backgroundColor: "#9FFACB", color: "#2DAD83" }}>available</Badge>
              </div>

              <div
                className="flex flex-row items-center justify-between p-3 rounded-sm"
                style={{ border: "0.5px solid #98989880" }}
              >
                <div className="flex flex-row gap-5 items-center" style={{ color: "#1E1E1ECC" }}>
                  <UsersRound size={32} color="#4582f9" fill="#4582f9" />
                  <div className="flex flex-col">
                    <h1 className="font-extrabold">Batch 1 Orientation</h1>
                    <p className="text-xs">January 3, 2025 - 9:00-10:00 AM</p>
                  </div>
                </div>
                <Badge style={{ backgroundColor: "#9FFACB", color: "#2DAD83" }}>available</Badge>
              </div>

              <div
                className="flex flex-row items-center justify-between p-3 rounded-sm"
                style={{ border: "0.5px solid #98989880" }}
              >
                <div className="flex flex-row gap-5 items-center" style={{ color: "#1E1E1ECC" }}>
                  <UsersRound size={32} color="#4582f9" fill="#4582f9" />
                  <div className="flex flex-col">
                    <h1 className="font-extrabold">Batch 1 Orientation</h1>
                    <p className="text-xs">January 3, 2025 - 9:00-10:00 AM</p>
                  </div>
                </div>
                <Badge style={{ backgroundColor: "#9FFACB", color: "#2DAD83" }}>available</Badge>
              </div>
            </div>
          </div>
        </div>
        {/* ANOTHER CONTENT */}
        <div className="flex flex-col gap-8 m-4 justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm" style={{ color: "#1E1E1E" }}>
              Service Applications
            </p>
            <div className="bg-white w-full h-[350px] shadow-lg rounded-lg">
              {/* <div id="sampleMap" className="w-full h-full" style={{ borderRadius: "0.5rem" }} /> */}
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
