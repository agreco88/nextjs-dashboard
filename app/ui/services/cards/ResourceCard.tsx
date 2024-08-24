import React from "react";
import { ResourceCardProps } from "@/app/lib/definitions";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  value,
  details,
  separatorColor,
}) => {
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow col-span-1">
      <CardContent className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="tracking-tight text-sm font-medium">
          {title}
        </CardTitle>
      </CardContent>
      <div className="p-6 pt-0 flex flex-col gap-1">
        <CardTitle className="text-4xl font-bold capitalize">{value}</CardTitle>
        <Separator
          className={`mt-2 mb-4 rounded-full border ${separatorColor}`}
        />
        <div className="text-xs gap-2 flex text-muted-foreground font-bold">
          <ul className="grid grid-cols-2 gap-3 w-full">
            {Object.entries(details).map(([key, detail]) => (
              <li key={key} className="flex flex-col">
                {key}: <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
