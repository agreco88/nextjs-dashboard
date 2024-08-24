"use client";
import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", cpu: 26, ram: 44, storage: 32, bandwidth: 10 },
  { date: "2024-04-02", cpu: 97, ram: 55, storage: 23, bandwidth: 48 },
  { date: "2024-04-03", cpu: 73, ram: 90, storage: 40, bandwidth: 62 },
  { date: "2024-04-04", cpu: 64, ram: 66, storage: 57, bandwidth: 22 },
  { date: "2024-04-05", cpu: 45, ram: 80, storage: 15, bandwidth: 77 },
  { date: "2024-04-06", cpu: 85, ram: 34, storage: 65, bandwidth: 43 },
  { date: "2024-04-07", cpu: 29, ram: 53, storage: 22, bandwidth: 56 },
  { date: "2024-04-08", cpu: 60, ram: 72, storage: 91, bandwidth: 10 },
  { date: "2024-04-09", cpu: 50, ram: 29, storage: 38, bandwidth: 88 },
  { date: "2024-04-10", cpu: 37, ram: 64, storage: 47, bandwidth: 55 },
  { date: "2024-04-11", cpu: 48, ram: 78, storage: 32, bandwidth: 71 },
  { date: "2024-04-12", cpu: 85, ram: 53, storage: 54, bandwidth: 33 },
  { date: "2024-04-13", cpu: 62, ram: 47, storage: 68, bandwidth: 99 },
  { date: "2024-04-14", cpu: 75, ram: 85, storage: 45, bandwidth: 20 },
  { date: "2024-04-15", cpu: 56, ram: 92, storage: 31, bandwidth: 65 },
  { date: "2024-04-16", cpu: 90, ram: 59, storage: 76, bandwidth: 50 },
  { date: "2024-04-17", cpu: 40, ram: 78, storage: 22, bandwidth: 39 },
  { date: "2024-04-18", cpu: 67, ram: 41, storage: 60, bandwidth: 87 },
  { date: "2024-04-19", cpu: 51, ram: 68, storage: 34, bandwidth: 94 },
  { date: "2024-04-20", cpu: 79, ram: 92, storage: 77, bandwidth: 30 },
  { date: "2024-04-21", cpu: 53, ram: 61, storage: 52, bandwidth: 73 },
  { date: "2024-04-22", cpu: 34, ram: 85, storage: 44, bandwidth: 41 },
  { date: "2024-04-23", cpu: 92, ram: 72, storage: 80, bandwidth: 52 },
  { date: "2024-04-24", cpu: 71, ram: 63, storage: 69, bandwidth: 95 },
  { date: "2024-04-25", cpu: 83, ram: 57, storage: 30, bandwidth: 70 },
  { date: "2024-04-26", cpu: 25, ram: 64, storage: 55, bandwidth: 47 },
  { date: "2024-04-27", cpu: 98, ram: 78, storage: 29, bandwidth: 31 },
  { date: "2024-04-28", cpu: 80, ram: 90, storage: 43, bandwidth: 57 },
  { date: "2024-04-29", cpu: 66, ram: 74, storage: 66, bandwidth: 82 },
  { date: "2024-04-30", cpu: 40, ram: 52, storage: 49, bandwidth: 93 },
  { date: "2024-05-01", cpu: 55, ram: 85, storage: 31, bandwidth: 78 },
  { date: "2024-05-02", cpu: 67, ram: 40, storage: 54, bandwidth: 22 },
  { date: "2024-05-03", cpu: 43, ram: 74, storage: 22, bandwidth: 68 },
  { date: "2024-05-04", cpu: 78, ram: 90, storage: 44, bandwidth: 55 },
  { date: "2024-05-05", cpu: 64, ram: 85, storage: 37, bandwidth: 95 },
  { date: "2024-05-06", cpu: 52, ram: 60, storage: 76, bandwidth: 83 },
  { date: "2024-05-07", cpu: 89, ram: 49, storage: 50, bandwidth: 36 },
  { date: "2024-05-08", cpu: 37, ram: 80, storage: 31, bandwidth: 45 },
  { date: "2024-05-09", cpu: 54, ram: 73, storage: 85, bandwidth: 70 },
  { date: "2024-05-10", cpu: 92, ram: 88, storage: 20, bandwidth: 66 },
  { date: "2024-05-11", cpu: 69, ram: 55, storage: 47, bandwidth: 41 },
  { date: "2024-05-12", cpu: 88, ram: 62, storage: 92, bandwidth: 77 },
  { date: "2024-05-13", cpu: 76, ram: 40, storage: 39, bandwidth: 50 },
  { date: "2024-05-14", cpu: 40, ram: 90, storage: 27, bandwidth: 31 },
  { date: "2024-05-15", cpu: 83, ram: 77, storage: 66, bandwidth: 42 },
  { date: "2024-05-16", cpu: 29, ram: 69, storage: 51, bandwidth: 68 },
  { date: "2024-05-17", cpu: 57, ram: 80, storage: 24, bandwidth: 79 },
  { date: "2024-05-18", cpu: 81, ram: 64, storage: 55, bandwidth: 35 },
  { date: "2024-05-19", cpu: 95, ram: 77, storage: 82, bandwidth: 29 },
  { date: "2024-05-20", cpu: 62, ram: 55, storage: 20, bandwidth: 67 },
  { date: "2024-05-21", cpu: 78, ram: 87, storage: 90, bandwidth: 52 },
  { date: "2024-05-22", cpu: 54, ram: 68, storage: 36, bandwidth: 88 },
  { date: "2024-05-23", cpu: 43, ram: 81, storage: 72, bandwidth: 71 },
  { date: "2024-05-24", cpu: 91, ram: 60, storage: 41, bandwidth: 30 },
  { date: "2024-05-25", cpu: 85, ram: 47, storage: 65, bandwidth: 64 },
  { date: "2024-05-26", cpu: 66, ram: 75, storage: 30, bandwidth: 57 },
  { date: "2024-05-27", cpu: 93, ram: 84, storage: 48, bandwidth: 73 },
  { date: "2024-05-28", cpu: 59, ram: 92, storage: 55, bandwidth: 41 },
  { date: "2024-05-29", cpu: 76, ram: 69, storage: 21, bandwidth: 65 },
  { date: "2024-05-30", cpu: 83, ram: 56, storage: 60, bandwidth: 57 },
  { date: "2024-05-31", cpu: 72, ram: 84, storage: 35, bandwidth: 49 },
  { date: "2024-06-01", cpu: 64, ram: 78, storage: 40, bandwidth: 53 },
  { date: "2024-06-02", cpu: 82, ram: 91, storage: 29, bandwidth: 47 },
  { date: "2024-06-03", cpu: 57, ram: 65, storage: 85, bandwidth: 60 },
  { date: "2024-06-04", cpu: 73, ram: 88, storage: 54, bandwidth: 74 },
  { date: "2024-06-05", cpu: 46, ram: 70, storage: 31, bandwidth: 59 },
  { date: "2024-06-06", cpu: 88, ram: 79, storage: 62, bandwidth: 45 },
  { date: "2024-06-07", cpu: 50, ram: 67, storage: 80, bandwidth: 37 },
  { date: "2024-06-08", cpu: 92, ram: 55, storage: 45, bandwidth: 66 },
  { date: "2024-06-09", cpu: 62, ram: 81, storage: 33, bandwidth: 55 },
  { date: "2024-06-10", cpu: 84, ram: 74, storage: 28, bandwidth: 51 },
  { date: "2024-06-11", cpu: 39, ram: 68, storage: 71, bandwidth: 73 },
  { date: "2024-06-12", cpu: 81, ram: 85, storage: 52, bandwidth: 63 },
  { date: "2024-06-13", cpu: 74, ram: 72, storage: 35, bandwidth: 41 },
  { date: "2024-06-14", cpu: 55, ram: 86, storage: 40, bandwidth: 89 },
  { date: "2024-06-15", cpu: 70, ram: 93, storage: 63, bandwidth: 56 },
  { date: "2024-06-16", cpu: 91, ram: 79, storage: 72, bandwidth: 64 },
  { date: "2024-06-17", cpu: 49, ram: 82, storage: 59, bandwidth: 67 },
  { date: "2024-06-18", cpu: 60, ram: 56, storage: 45, bandwidth: 52 },
  { date: "2024-06-19", cpu: 68, ram: 74, storage: 33, bandwidth: 89 },
  { date: "2024-06-20", cpu: 78, ram: 61, storage: 70, bandwidth: 42 },
  { date: "2024-06-21", cpu: 84, ram: 89, storage: 37, bandwidth: 70 },
  { date: "2024-06-22", cpu: 56, ram: 63, storage: 31, bandwidth: 67 },
  { date: "2024-06-23", cpu: 90, ram: 73, storage: 54, bandwidth: 55 },
  { date: "2024-06-24", cpu: 77, ram: 64, storage: 42, bandwidth: 68 },
  { date: "2024-06-25", cpu: 82, ram: 75, storage: 58, bandwidth: 49 },
  { date: "2024-06-26", cpu: 69, ram: 81, storage: 41, bandwidth: 53 },
  { date: "2024-06-27", cpu: 56, ram: 62, storage: 79, bandwidth: 88 },
  { date: "2024-06-28", cpu: 71, ram: 68, storage: 60, bandwidth: 74 },
  { date: "2024-06-29", cpu: 88, ram: 74, storage: 32, bandwidth: 65 },
  { date: "2024-06-30", cpu: 77, ram: 87, storage: 46, bandwidth: 54 },
];

const chartConfig = {
  views: {
    label: "Usage",
  },
  cpu: {
    label: "CPU",
    color: "hsl(173.4 80.4% 40%)",
  },
  ram: {
    label: "RAM",
    color: "hsl(191.6 91.4% 36.5%)",
  },
  storage: {
    label: "Storage",
    color: "hsl(37.7 92.1% 50.2%)", // Yellow
  },
  bandwidth: {
    label: "Bandwidth",
    color: "hsl(84.8 85.2% 34.5%)", // Green
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("cpu");

  const total = React.useMemo(
    () => ({
      cpu: chartData.reduce((acc, curr) => acc + (curr.cpu || 0), 0),
      ram: chartData.reduce((acc, curr) => acc + (curr.ram || 0), 0),
      storage: chartData.reduce((acc, curr) => acc + (curr.storage || 0), 0),
      bandwidth: chartData.reduce(
        (acc, curr) => acc + (curr.bandwidth || 0),
        0
      ),
    }),
    [chartData]
  );

  const grandTotal = React.useMemo(
    () => total.cpu + total.ram + total.storage + total.bandwidth,
    [total]
  );

  const percentage = React.useMemo(
    () => ({
      cpu: (total.cpu / grandTotal) * 100,
      ram: (total.ram / grandTotal) * 100,
      storage: (total.storage / grandTotal) * 100,
      bandwidth: (total.bandwidth / grandTotal) * 100,
    }),
    [total, grandTotal]
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="tracking-tighter">Daily usage</CardTitle>
          <CardDescription>
            Showing average daily usage for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["cpu", "ram", "storage", "bandwidth"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground uppercase">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {percentage[key as keyof typeof percentage].toFixed(2)}%
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// const chartData = [
//   { date: "2024-04-01", cpu: 222, ram: 150 },
//   { date: "2024-04-02", cpu: 97, ram: 180 },
//   { date: "2024-04-03", cpu: 167, ram: 120 },
//   { date: "2024-04-04", cpu: 242, ram: 260 },
//   { date: "2024-04-05", cpu: 373, ram: 290 },
//   { date: "2024-04-06", cpu: 301, ram: 340 },
//   { date: "2024-04-07", cpu: 245, ram: 180 },
//   { date: "2024-04-08", cpu: 409, ram: 320 },
//   { date: "2024-04-09", cpu: 59, ram: 110 },
//   { date: "2024-04-10", cpu: 261, ram: 190 },
//   { date: "2024-04-11", cpu: 327, ram: 350 },
//   { date: "2024-04-12", cpu: 292, ram: 210 },
//   { date: "2024-04-13", cpu: 342, ram: 380 },
//   { date: "2024-04-14", cpu: 137, ram: 220 },
//   { date: "2024-04-15", cpu: 120, ram: 170 },
//   { date: "2024-04-16", cpu: 138, ram: 190 },
//   { date: "2024-04-17", cpu: 446, ram: 360 },
//   { date: "2024-04-18", cpu: 364, ram: 410 },
//   { date: "2024-04-19", cpu: 243, ram: 180 },
//   { date: "2024-04-20", cpu: 89, ram: 150 },
//   { date: "2024-04-21", cpu: 137, ram: 200 },
//   { date: "2024-04-22", cpu: 224, ram: 170 },
//   { date: "2024-04-23", cpu: 138, ram: 230 },
//   { date: "2024-04-24", cpu: 387, ram: 290 },
//   { date: "2024-04-25", cpu: 215, ram: 250 },
//   { date: "2024-04-26", cpu: 75, ram: 130 },
//   { date: "2024-04-27", cpu: 383, ram: 420 },
//   { date: "2024-04-28", cpu: 122, ram: 180 },
//   { date: "2024-04-29", cpu: 315, ram: 240 },
//   { date: "2024-04-30", cpu: 454, ram: 380 },
//   { date: "2024-05-01", cpu: 165, ram: 220 },
//   { date: "2024-05-02", cpu: 293, ram: 310 },
//   { date: "2024-05-03", cpu: 247, ram: 190 },
//   { date: "2024-05-04", cpu: 385, ram: 420 },
//   { date: "2024-05-05", cpu: 481, ram: 390 },
//   { date: "2024-05-06", cpu: 498, ram: 520 },
//   { date: "2024-05-07", cpu: 388, ram: 300 },
//   { date: "2024-05-08", cpu: 149, ram: 210 },
//   { date: "2024-05-09", cpu: 227, ram: 180 },
//   { date: "2024-05-10", cpu: 293, ram: 330 },
//   { date: "2024-05-11", cpu: 335, ram: 270 },
//   { date: "2024-05-12", cpu: 197, ram: 240 },
//   { date: "2024-05-13", cpu: 197, ram: 160 },
//   { date: "2024-05-14", cpu: 448, ram: 490 },
//   { date: "2024-05-15", cpu: 473, ram: 380 },
//   { date: "2024-05-16", cpu: 338, ram: 400 },
//   { date: "2024-05-17", cpu: 499, ram: 420 },
//   { date: "2024-05-18", cpu: 315, ram: 350 },
//   { date: "2024-05-19", cpu: 235, ram: 180 },
//   { date: "2024-05-20", cpu: 177, ram: 230 },
//   { date: "2024-05-21", cpu: 82, ram: 140 },
//   { date: "2024-05-22", cpu: 81, ram: 120 },
//   { date: "2024-05-23", cpu: 252, ram: 290 },
//   { date: "2024-05-24", cpu: 294, ram: 220 },
//   { date: "2024-05-25", cpu: 201, ram: 250 },
//   { date: "2024-05-26", cpu: 213, ram: 170 },
//   { date: "2024-05-27", cpu: 420, ram: 460 },
//   { date: "2024-05-28", cpu: 233, ram: 190 },
//   { date: "2024-05-29", cpu: 78, ram: 130 },
//   { date: "2024-05-30", cpu: 340, ram: 280 },
//   { date: "2024-05-31", cpu: 178, ram: 230 },
//   { date: "2024-06-01", cpu: 178, ram: 200 },
//   { date: "2024-06-02", cpu: 470, ram: 410 },
//   { date: "2024-06-03", cpu: 103, ram: 160 },
//   { date: "2024-06-04", cpu: 439, ram: 380 },
//   { date: "2024-06-05", cpu: 88, ram: 140 },
//   { date: "2024-06-06", cpu: 294, ram: 250 },
//   { date: "2024-06-07", cpu: 323, ram: 370 },
//   { date: "2024-06-08", cpu: 385, ram: 320 },
//   { date: "2024-06-09", cpu: 438, ram: 480 },
//   { date: "2024-06-10", cpu: 155, ram: 200 },
//   { date: "2024-06-11", cpu: 92, ram: 150 },
//   { date: "2024-06-12", cpu: 492, ram: 420 },
//   { date: "2024-06-13", cpu: 81, ram: 130 },
//   { date: "2024-06-14", cpu: 426, ram: 380 },
//   { date: "2024-06-15", cpu: 307, ram: 350 },
//   { date: "2024-06-16", cpu: 371, ram: 310 },
//   { date: "2024-06-17", cpu: 475, ram: 520 },
//   { date: "2024-06-18", cpu: 107, ram: 170 },
//   { date: "2024-06-19", cpu: 341, ram: 290 },
//   { date: "2024-06-20", cpu: 408, ram: 450 },
//   { date: "2024-06-21", cpu: 169, ram: 210 },
//   { date: "2024-06-22", cpu: 317, ram: 270 },
//   { date: "2024-06-23", cpu: 480, ram: 530 },
//   { date: "2024-06-24", cpu: 132, ram: 180 },
//   { date: "2024-06-25", cpu: 141, ram: 190 },
//   { date: "2024-06-26", cpu: 434, ram: 380 },
//   { date: "2024-06-27", cpu: 448, ram: 490 },
//   { date: "2024-06-28", cpu: 149, ram: 200 },
//   { date: "2024-06-29", cpu: 103, ram: 160 },
//   { date: "2024-06-30", cpu: 446, ram: 400 },
// ];
