import { fetchServiceById } from "@/app/lib/data"; // You'll create this function to fetch service by ID
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";
import { lusitana, inter } from "@/app/ui/fonts";
import {
  CircleStackIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartComponent } from "@/app/ui/services/BarChart";
import Location from "@/app/ui/services/location";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Service Details",
};

export default async function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Fetch the service details by ID
  const service = await fetchServiceById(id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-5 w-full">
      <div className="sm:flex sm:items-center pt-8 px-2">
        <div className="sm:flex-auto">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Services", href: "/dashboard/services" },
              {
                label: `${service.id}`,
                href: "/dashboard/invoices/create",
                active: true,
              },
            ]}
          />
          <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-light-theme">
            Service details
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            Find all the information regarding your service here.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
        <Card className="relative rounded-xl border bg-card text-card-foreground shadow col-span-1 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={service.image_url}
              alt={`${service.name} icon`}
              layout="fill"
              objectFit="cover"
              className="object-center "
            />
          </div>
          <div className="relative z-10 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="tracking-tight text-sm font-medium">
              Type
            </CardTitle>
          </div>
          <div className="relative z-10 p-6 pt-0 flex flex-col gap-1">
            <CardTitle className="text-2xl font-bold capitalize flex gap-1">
              {service.type}
            </CardTitle>
            <CardDescription className="text-xs gap-1 flex text-muted-foreground font-bold">
              <span className="text-xs gap-1 flex text-muted-foreground self-end uppercase tracking-tighter">
                <span className="text-xs gap-2 flex text-muted-foreground self-end uppercase tracking-tighter">
                  Last modified:
                </span>
                {new Date(service.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </CardDescription>
          </div>
        </Card>

        <Card className="rounded-xl border bg-card text-card-foreground shadow">
          <CardContent className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="tracking-tight text-sm font-medium">
              Service name
            </CardTitle>
          </CardContent>
          <div className="p-6 pt-0 flex flex-col gap-1">
            <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
            <CardDescription className="flex gap-1 items-centertext-xs text-muted-foreground uppercase font-bold">
              <span className="text-xs gap-1 flex text-muted-foreground self-end uppercase tracking-tighter">
                <span className="text-xs gap-2 flex text-muted-foreground self-end uppercase tracking-tighter">
                  Crated:
                </span>
                {new Date(service.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </CardDescription>
          </div>
        </Card>

        <Card className="rounded-xl border bg-card text-card-foreground shadow col-span-1">
          <CardContent className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="tracking-tight text-sm font-medium">
              Status
            </CardTitle>
          </CardContent>
          <div className="p-6 pt-0 flex flex-col gap-1">
            <CardTitle className="text-2xl font-bold capitalize">
              {service.status}
            </CardTitle>
            <CardDescription className="text-xs gap-1 flex text-muted-foreground font-bold">
              <span className="text-xs gap-1 flex text-muted-foreground self-end uppercase tracking-tighter">
                <span className="text-xs gap-2 flex text-muted-foreground self-end uppercase tracking-tighter">
                  Last modified:
                </span>
                {new Date(service.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </CardDescription>
          </div>
        </Card>
      </div>
      <BarChartComponent />
      <div className="grid grid-cols-4 w-full gap-4">
        <Card className="bg-red-700 flex flex-col gap-2">
          <h4>CPU information:</h4>
          <ul>
            <li>Model: Intel® Xeon® 6740E Processor</li>
            <li>Cores: 96</li>
            <li>Max Turbo Frequency: 3.2 Ghz</li>
            <li>Processor Base Frequency: 3.2 Ghz</li>
            <li>Cache: 96 MB</li>
          </ul>
        </Card>
        <div className="bg-red-700">
          <h4>RAM information:</h4>
          <ul>
            <li>Model: Kingston Server Premier</li>
            <li>Amount: 16 GB</li>
            <li>Type: DDR4 ECC CL22</li>
            <li>Speed: 3200 MHz </li>
            <li>Form factor: DIMM</li>
          </ul>
        </div>{" "}
        <div className="bg-red-700">
          <h4>Storage information:</h4>
          <ul>
            <li>Model: Kingston Server Premier</li>
            <li>Interface: PCIe 4.0 x4 NVMe</li>
            <li>Capacity: 480 GB</li>
            <li>Sequential read/write : 7000/800 MBs </li>
            <li>Form factor: M.2 2280</li>
          </ul>
        </div>{" "}
        <div className="bg-red-700">
          <h4>Bandwith information:</h4>
          <ul>
            <li>Model: Kingston Server Premier</li>
            <li>Interface: PCIe 4.0 x4 NVMe</li>
            <li>Capacity: 480 GB</li>
            <li>Sequential read/write : 7000/800 MBs </li>
            <li>Form factor: M.2 2280</li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
}
