"use client";

import React from "react";
import { ResourceCardProps } from "@/app/lib/definitions";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ReadingChart } from "./ReadingChart";
import { Progress } from "@/components/ui/progress";
import { SeparatorHorizontal } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import ResourceRating from "./ResourceRating";

const ResourceCard: React.FC<ResourceCardProps> = ({
  serviceId,
  title,
  value,
  details,
  separatorBg,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Randomize progress every 2 seconds. Future API calls will be made here (TODO: Implement React Query)
    const interval = setInterval(() => {
      setProgress(Math.floor(Math.random() * 100)); // Random value between 0 and 100
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Card
      key={title}
      className="rounded-xl border bg-card text-card-foreground shadow col-span-1 p-6 flex flex-col gap-8"
    >
      <div className="pt-0 flex flex-col gap-1">
        <div className="flex flex-col">
          <div className="flex ">
            <div className="flex flex-col gap-1 justify-between">
              <CardTitle className="tracking-tight dark:text-dark-theme-text text-sm font-medium">
                {title}
              </CardTitle>
              {title === "CPU" || title === "RAM" ? (
                <CardTitle className="text-4xl font-bold capitalize">
                  {progress}%
                </CardTitle>
              ) : (
                <CardTitle className="text-4xl font-bold capitalize">
                  {value}%
                </CardTitle>
              )}
            </div>
          </div>
          {title === "CPU" || title === "RAM" ? (
            <Progress
              value={progress}
              className={`my-4 rounded-full border h-[5px] ${separatorBg}`}
            />
          ) : (
            <Progress
              value={Number(value)}
              className={`my-4 rounded-full border h-[5px] ${separatorBg}`}
            />
          )}
        </div>
        <div className="text-xs gap-2 flex text-muted-foreground font-bold">
          <ul className="grid grid-cols-2 gap-3 w-full">
            {Object.entries(details).map(([key, detail]) => (
              <li key={key} className="flex flex-col">
                {key.toLowerCase() === "rating" ? (
                  <ResourceRating rating={Number(detail)} />
                ) : (
                  <>
                    {key}: <span>{detail}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="h-1 my-4 bg-slate-800 w-full rounded-full" />
        <div>Uprade {title}</div> */}
      </div>
    </Card>
  );
};

export default ResourceCard;
