import React from "react";
import clsx from "clsx";

interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const statusClasses = clsx(
    "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
    {
      "bg-green-50 text-green-700 ring-green-600/20": status === "active",
      "bg-yellow-50 text-yellow-700 ring-yellow-600/20": status === "pending",
      "bg-red-50 text-red-700 ring-red-600/20": status === "stopped",
      "bg-orange-50 text-orange-700 ring-orange-600/20": status === "suspended",
      "bg-gray-50 text-gray-700 ring-gray-600/20": status === "paused",

      // Add more status cases as needed
    }
  );

  return <span className={statusClasses}>{status}</span>;
};

export default Status;
