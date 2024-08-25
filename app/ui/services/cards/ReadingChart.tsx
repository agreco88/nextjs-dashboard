"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  { time: "01", usage: 12 },
  { time: "02", usage: 15 },
  { time: "03", usage: 15 },
  { time: "04", usage: 15 },
  { time: "05", usage: 75 },
  { time: "06", usage: 23 },
];

const chartConfig = {
  usage: {
    label: "usage",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ReadingChart() {
  return (
    <Card className="w-full p-0">
      <CardTitle className="p-6">
        <div className="flex w-full items-start gap-2 text-sm">
          Current usage
        </div>
      </CardTitle>
      <CardContent className="p-0">
        <ChartContainer className="w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="usage"
              type="natural"
              fill="var(--color-usage)"
              fillOpacity={0.4}
              stroke="var(--color-usage)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
