"use client";

import { Calendar } from "@mapstudio/lib/components/ui";
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

const data = [
  { name: "A", num: 1 },
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

export default function Dashboard() {
  useEffect(() => {
    const map = new Map({
      target: "sampleMap",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([125.1716, 6.1128]),
        zoom: 12,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* CHARTS */}
      <div className="flex flex-row gap-8 m-4 justify-between" style={{ width: "1300px" }}>
        {/* TOTAL SERVICE CONNECTIONS */}
        <div
          className="flex flex-col justify-between shadow-lg rounded-lg"
          style={{ width: "300px", height: "150px", backgroundColor: "#4582F9" }}
        >
          <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4">
            <div
              className="flex flex-col items-center justify-center rounded-full p-3"
              style={{ backgroundColor: "#3C73DA", height: "60px", width: "60px" }}
            >
              <Image src={images.total_service_connections} alt={""} width={50} height={50} />
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
              <p className="text-3xl text-white font-bold">70,400</p>
              <p className="text-xs text-white font-medium break-words">
                Total Service Connections
              </p>
            </div>
          </div>
          <AreaChart width={300} height={40} data={data}>
            <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#87AEFB" />
          </AreaChart>
        </div>

        {/* NEW SERVICE APPLICATIONS */}
        <div
          className="flex flex-col justify-between shadow-lg rounded-lg"
          style={{ width: "300px", height: "150px", backgroundColor: "#00BC8B" }}
        >
          <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4 break-words">
            <div
              className="flex flex-col items-center justify-center rounded-full p-3"
              style={{ backgroundColor: "#05A282", height: "60px", width: "60px" }}
            >
              <Image src={images.new_service_applications} alt={""} width={50} height={50} />
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
              <p className="text-3xl text-white font-bold">86</p>
              <p className="text-xs text-white font-medium ">New Service Applications</p>
            </div>
          </div>
          <AreaChart width={300} height={40} data={data}>
            <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#56D2B2" />
          </AreaChart>
        </div>

        {/* APPLICATIONS WITH BILL OF MATERIALS */}
        <div
          className="flex flex-col justify-between shadow-lg rounded-lg"
          style={{ width: "300px", height: "150px", backgroundColor: "#FFB800B2" }}
        >
          <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4 break-words">
            <div
              className="flex flex-col items-center justify-center rounded-full p-3"
              style={{ backgroundColor: "#DEB23F", height: "60px", width: "60px" }}
            >
              <Image src={images.applications_with_bill} alt={""} width={50} height={50} />
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
              <p className="text-3xl text-white font-bold">50</p>
              <p className="text-xs text-white font-medium">Applications with Bill of Materials</p>
            </div>
          </div>
          <AreaChart width={300} height={40} data={data}>
            <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#FFD771" />
          </AreaChart>
        </div>

        {/* TOTAL INSTALLATION */}
        <div
          className="flex flex-col justify-between shadow-lg rounded-lg"
          style={{ width: "300px", height: "150px", backgroundColor: "#9853F2" }}
        >
          <div className="flex flex-row gap-4 p-2 items-center justify-center mt-4 break-words">
            <div
              className="flex flex-col items-center justify-center rounded-full p-3"
              style={{ backgroundColor: "#7643B880", height: "60px", width: "60px" }}
            >
              <Image src={images.total_installation} alt={""} width={50} height={50} />
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
              <p className="text-3xl text-white font-bold">20</p>
              <p className="text-xs text-white font-medium ">Total Installation</p>
            </div>
          </div>
          <AreaChart width={300} height={40} data={data}>
            <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill="#B88BF2A3" />
          </AreaChart>
        </div>
      </div>

      {/* CHARTS WITH CALENDAR */}
      <div className="flex flex-row gap-8 m-4 justify-between" style={{ width: "1300px" }}>
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
            className="bg-white shadow-lg rounded-lg"
            style={{ width: "600px", height: "300px", overflow: "hidden" }}
          >
            <Calendar
              mode="single"
              className="rounded-md border w-full h-full"
              classNames={{
                months:
                  "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 text-black/70",
                month: "space-y-2 w-full",

                caption: "flex justify-start relative items-center",
                head_cell:
                  "text-muted-foreground rounded-md w-full font-normal text-[0.7rem] flex-1 text-center",
                caption_label: "font-medium tracking-widest text-lg",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "hidden",
                nav_button_next: "hidden",
                table: "w-full border-collapse space-y-1 bg-gray-200/50 ",
                head_row: "flex w-full text-gray-800 border-2 border-black/50 uppercase",
                row: "flex w-full mt-1",
                day: "h-7 w-full p-0 font-normal aria-selected:opacity-100",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 w-full",
                day_selected:
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
            />
          </div>
        </div>
      </div>
      {/* ANOTHER CONTENT */}
      <div className="flex flex-col gap-8 m-4 justify-between" style={{ width: "1300px" }}>
        <div className="flex flex-col gap-1">
          <p className="text-sm" style={{ color: "#1E1E1E" }}>
            Service Connections
          </p>
          <div className="bg-white w-full h-[350px] shadow-lg rounded-lg">
            <div id="sampleMap" className="w-full h-full" style={{ borderRadius: "0.5rem" }} />
          </div>
        </div>
      </div>
    </>
  );
}
