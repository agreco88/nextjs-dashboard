import React from "react";
import { formatDateToLocale } from "@/app/lib/utils";
import { DateInformationProps } from "@/app/lib/definitions";

const DateInformation: React.FC<DateInformationProps> = ({ title, date }) => {
  return (
    <div className="flex gap-1 items-center text-xs text-muted-foreground uppercase font-bold">
      <span className="text-xs gap-1 flex text-muted-foreground self-end uppercase tracking-tighter">
        <span className="text-xs gap-2 flex text-muted-foreground self-end uppercase tracking-tighter">
          {title}:
        </span>
        {formatDateToLocale(date)}
      </span>
    </div>
  );
};

export default DateInformation;
