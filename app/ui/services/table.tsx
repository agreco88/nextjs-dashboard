import Image from "next/image";
import { Service } from "@/app/lib/definitions";
import { fetchFilteredServices } from "@/app/lib/data";
import Location from "./location";
import Status from "./status";
import { ServiceOptionsDropdown } from "./service-options-dropdown";
import { formatDateToLocale } from "@/app/lib/utils";
import { use } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ServiceTableProps = {
  query: string;
  currentPage: number;
};

export default function ServiceTable({ query }: ServiceTableProps) {
  // Fetch services using the use hook
  const services = use(
    fetchFilteredServices(query, "410544b2-4001-4271-9885-fec4b6a6442b")
  );

  return (
    <Table className="min-w-full px-4 sm:px-6 lg:px-8 w-full divide-y divide-gray-300">
      <TableHeader>
        <TableRow>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Name
          </TableHead>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Location
          </TableHead>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Status
          </TableHead>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Created
          </TableHead>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Modified
          </TableHead>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Billing status
          </TableHead>
          <TableHead className="text-dark-theme dark:text-light-theme font-bold tracking-tight">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-y divide-gray-200 dark:divide-dark-theme-title bg-white dark:bg-dark-theme">
        {services.map((service: Service) => (
          <TableRow key={service.id}>
            <TableCell>
              <div className="flex items-center">
                <Image
                  src={service.image_url}
                  alt={`${service.type} icon`}
                  width={28}
                  height={28}
                />
                <div className="ml-4">
                  <div className="font-semibold text-dark-theme-title dark:text-light-theme">
                    {service.name}
                  </div>
                  <div className="mt-1 text-dark-theme-subtitle dark:text-dark-theme-text text-xs tracking-tighter capitalize">
                    {service.type}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Location
                city={service.city}
                country={service.country}
                isoCode={service.iso_code}
              />
            </TableCell>
            <TableCell>
              <Status status={service.status} />
            </TableCell>
            <TableCell className="whitespace-nowrap text-dark-theme-subtitle dark:text-dark-theme-text text-sm tracking-tighter">
              {formatDateToLocale(service.created)}
            </TableCell>
            <TableCell className="whitespace-nowrap text-dark-theme-subtitle dark:text-dark-theme-text text-sm tracking-tighter">
              {formatDateToLocale(service.last_modified)}
            </TableCell>
            <TableCell className="whitespace-nowrap px-3 py-5 text-sm text-gray-400 tracking-tighter">
              {service.billing_status}
            </TableCell>
            <TableCell>
              <ServiceOptionsDropdown
                serviceId={service.id}
                status={service.status}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
