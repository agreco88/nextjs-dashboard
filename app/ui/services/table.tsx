import Image from "next/image";
import Search from "@/app/ui/search";
import { Service } from "@/app/lib/definitions";
import Location from "./location";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Status from "./status";
import Link from "next/link";
import { ServiceInformationButton } from "../button";
import { ServiceOptionsDropdown } from "./service-options-dropdown";

export default async function ServiceTable({
  services,
}: {
  services: Service[];
}) {
  console.log(services);
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="sm:flex sm:items-center py-8">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-light-theme">
            Services
          </h1>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
            Search your services by name, location or both service and billing
            status.
          </p>
        </div>
        <div className="flex grow">
          <Search placeholder="Search services..." />
        </div>
      </div>

      <Table className="min-w-full divide-y divide-gray-300">
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
        <TableBody className="divide-y divide-gray-200 dark:divide-dark-theme-title bg-white dark:bg-dark-theme ">
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    src={service.image_url}
                    alt={`${service.name} icon`}
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
                  isoCode={service.iso_code}
                  iataCode={service.iata_code}
                />
              </TableCell>
              <TableCell>
                <Status status={service.status} />
              </TableCell>
              <TableCell className="whitespace-nowrap text-dark-theme-subtitle dark:text-dark-theme-text text-sm tracking-tighter">
                {new Date(service.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </TableCell>
              <TableCell className="whitespace-nowrap text-dark-theme-subtitle dark:text-dark-theme-text text-sm tracking-tighter">
                {new Date(service.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </TableCell>
              <TableCell className="whitespace-nowrap px-3 py-5 text-sm text-gray-400 tracking-tighter">
                {service.billing_status}
              </TableCell>
              <TableCell>
                {/* <Link href={`/dashboard/services/${service.id}`}>
                  <ServiceOptionsDropdown />
                </Link> */}
                <ServiceOptionsDropdown
                  serviceId={service.id}
                  status={service.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableCaption className="py-8">Buy more services</TableCaption> */}
      </Table>
    </div>
  );
}
