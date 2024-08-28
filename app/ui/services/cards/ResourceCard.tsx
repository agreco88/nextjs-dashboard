import React from "react";
import { ResourceCardProps } from "@/app/lib/definitions";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ReadingChart } from "./ReadingChart";

const ResourceCard: React.FC<ResourceCardProps> = ({
  serviceId,
  title,
  value,
  details,
  separatorColor,
}) => {
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
              <CardTitle className="text-4xl font-bold capitalize">
                {value}
              </CardTitle>
            </div>
          </div>

          <Separator className={`my-4 rounded-full border ${separatorColor}`} />
        </div>

        <div className="text-xs gap-2 flex text-muted-foreground font-bold">
          <ul className="grid grid-cols-2 gap-3 w-full">
            {Object.entries(details).map(([key, detail]) => (
              <li key={key} className="flex flex-col">
                {key}: <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow"></div>
      </div>
      {/* <ReadingChart /> */}
    </Card>
  );
};

export default ResourceCard;
