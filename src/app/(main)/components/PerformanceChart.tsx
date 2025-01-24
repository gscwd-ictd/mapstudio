"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@mapstudio/lib/components/ui/Chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mapstudio/lib/components/ui/Card";

type PerformanceChartProps = {
  percentage: number;
};

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    color: "hsl(var(--chart-1))",
  },
  other: {
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PerformanceChart({ percentage }: PerformanceChartProps) {
  const chartData = [
    { browser: "chrome", visitors: percentage, fill: "#2AB40E" },
    { browser: "other", visitors: 100 - percentage, fill: "white" },
  ];

  return (
    <div>
      <ChartContainer config={chartConfig} className="w-[80px] h-[80px]">
        <PieChart className="w-[50px] h-[50px]">
          {/* <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} /> */}
          <Pie
            className="w-[50px] h-[50px]"
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={25}
            outerRadius={40}
            strokeWidth={2}
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
