"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVerticalIcon,
  PlayIcon,
  PowerIcon,
  ArrowTopRightOnSquareIcon,
  StopIcon,
  PauseIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface ServiceOptionsDropdownProps {
  serviceId: string;
  status: string;
}

export function ServiceOptionsDropdown({
  serviceId,
  status,
}: ServiceOptionsDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10">
          <EllipsisVerticalIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle service options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="px-2 py-3">
        <Link href={`/dashboard/services/${serviceId}`}>
          <DropdownMenuItem className="flex items-center gap-2">
            <ArrowRightIcon className="h-4 w-4" />
            {`View ${
              status === "suspended" ? "suspension details" : "details page"
            }`}
          </DropdownMenuItem>
        </Link>

        {/* Open Console for all services */}

        {status === "stopped" && (
          <>
            <div className="w-full h-[0.5px] my-2 rounded-full bg-dark-theme-text dark:bg-dark-theme-subtitle"></div>

            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => console.log("Start Service")}
            >
              <PlayIcon className="h-[1.2rem] w-[1.2rem]" /> Start
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => console.log("Shutdown Service")}
            >
              <PowerIcon className="h-[1.2rem] w-[1.2rem]" /> Shutdown
            </DropdownMenuItem>
          </>
        )}

        {status === "active" && (
          <>
            <div className="w-full h-[0.5px] my-2 rounded-full bg-dark-theme-text dark:bg-dark-theme-subtitle"></div>

            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => console.log("Pause service")}
            >
              <PauseIcon className="h-[1.2rem] w-[1.2rem]" /> Pause
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => console.log("Stop service")}
            >
              <StopIcon className="h-[1.2rem] w-[1.2rem]" /> Stop
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => console.log("Shutdown Service")}
            >
              <PowerIcon className="h-[1.2rem] w-[1.2rem]" /> Shutdown
            </DropdownMenuItem>
          </>
        )}

        {status !== "suspended" && (
          <>
            <div className="w-full h-[0.5px] my-2 rounded-full bg-dark-theme-text dark:bg-dark-theme-subtitle"></div>
            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => console.log("Open console")}
            >
              <ArrowTopRightOnSquareIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
              Open console
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
