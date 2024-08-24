"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", cpu: 65, ram: 92, storage: 77, bandwidth: 15 },
  { month: "February", cpu: 42, ram: 81, storage: 37, bandwidth: 53 },
  { month: "March", cpu: 12, ram: 16, storage: 100, bandwidth: 82 },
  { month: "April", cpu: 56, ram: 10, storage: 46, bandwidth: 70 },
  { month: "May", cpu: 33, ram: 22, storage: 82, bandwidth: 96 },
  { month: "June", cpu: 68, ram: 87, storage: 89, bandwidth: 38 },
];

const chartConfig = {
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

export function LineChartComponent() {
  return (
    <Card className="w-[550px] lg:w-1/2">
      <CardHeader>
        <CardTitle>Usage by month</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="cpu"
              type="monotone"
              stroke="var(--color-cpu)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="ram"
              type="monotone"
              stroke="var(--color-ram)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="storage"
              type="monotone"
              stroke="var(--color-storage)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="bandwidth"
              type="monotone"
              stroke="var(--color-bandwidth)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total usage for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
