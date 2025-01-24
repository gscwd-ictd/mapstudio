"use client";

import { AreaChart, Area } from "recharts";
import Image from "next/image";

export default function NSAStatsCard({
  cardBackgroundColor,
  chartBackgroundColor,
  iconBackgroundColor,
  icon,
  iconWidth,
  iconHeight,
  title,
  value,
  chartData,
  width,
  height,
}: {
  cardBackgroundColor: string;
  chartBackgroundColor: string;
  iconBackgroundColor: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  value: number;
  chartData: Array<{ name: string; num: number }>;
  width: number;
  height: number;
}) {
  return (
    <div
      className="flex flex-col justify-between shadow-lg rounded-lg"
      style={{ width: width, height: height, backgroundColor: cardBackgroundColor }}
    >
      <p className="m-2 text-right text-white">This Month</p>
      <div className="flex flex-row gap-8 items-center justify-center break-words">
        <div
          className="flex flex-col items-center justify-center rounded-full p-3"
          style={{ backgroundColor: iconBackgroundColor, height: "80px", width: "80px" }}
        >
          <Image src={icon} alt={""} width={iconWidth} height={iconHeight} />
        </div>
        <div className="flex flex-col gap-2 w-[50%]">
          <p className="text-4xl text-white font-bold">{value}</p>
          <p className="text-sm text-white font-medium">{title}</p>
        </div>
      </div>
      <AreaChart width={width} height={height / 4} data={chartData}>
        <Area type="monotone" dataKey="num" stroke="#FFFFFF" fill={chartBackgroundColor} />
      </AreaChart>
    </div>
  );
}
