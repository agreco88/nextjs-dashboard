import { fetchServiceById } from "@/app/lib/data"; // You'll create this function to fetch service by ID
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Metadata } from "next";
import { BarChartComponent } from "@/app/ui/services/BarChart";
import SerivceInfoCard from "@/app/ui/services/cards/ServiceInfoCard";
import ServiceImageCard from "@/app/ui/services/cards/ServiceImageCard";
import DateInformation from "@/app/ui/services/cards/DateInformation";
import ResourceCard from "@/app/ui/services/cards/ResourceCard";

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
  console.log(service);

  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-5 w-full">
      <div className="flex flex-col pt-8 gap-4">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/dashboard/services" },
            {
              label: `${service.id}`,
              href: `/dashboard/services/${service.id}`,
              active: true,
            },
          ]}
        />
      </div>
      <h2>
        {service.name} ({service.id}) details:
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ServiceImageCard title={service.type} image_url={service.image_url}>
          <DateInformation title="Last modified" date={service.last_modified} />
        </ServiceImageCard>

        <SerivceInfoCard
          title="Service status"
          heading={service.status}
          withDropdown={true}
          serviceStatus={service.status}
          serviceId={service.id}
        >
          <DateInformation title="Last modified" date={service.last_modified} />
        </SerivceInfoCard>

        <SerivceInfoCard
          title="Billing status"
          heading={service.billing_status}
          withDropdown={false}
          serviceStatus={service.status}
          serviceId={service.id}
        >
          <DateInformation title="Last billed" date={service.last_billed} />
        </SerivceInfoCard>
      </div>

      <BarChartComponent />

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
        <ResourceCard
          serviceId={service.id}
          title="CPU"
          value="48"
          details={{
            Manufacturer: "Intel®",
            Model: "Xeon® 6740E",
            Cores: "96",
            Threads: "96",
            Frequency: "3200 MHz",
            Cache: "96 MB",
            Rating: 5,
          }}
          separatorColor="border-teal-600"
          separatorBg="[&>*]:bg-teal-600"
        />
        <ResourceCard
          serviceId={service.id}
          title="RAM"
          value="89"
          details={{
            Manufacturer: "Kingston®",
            Interface: "DIMM",
            Capacity: "16 GB",
            Bus: "PCIe 4.0",
            Frequency: "3200 MHz",
            Type: "DDR4",
            Rating: 4,
          }}
          separatorColor="border-cyan-600"
          separatorBg="[&>*]:bg-cyan-600"
        />
        <ResourceCard
          serviceId={service.id}
          title="STORAGE"
          value="65"
          details={{
            Manufacturer: "Kingston®",
            Interface: "x4 NVMe",
            Capacity: "480 GB",
            Bus: "7000/8000 MBs",
            "Read/Write": "3200 MHz",
            "Form factor": "M.2 2280",
            rating: 2,
          }}
          separatorColor="border-amber-600"
          separatorBg="[&>*]:bg-amber-600"
        />
        <ResourceCard
          serviceId={service.id}
          title="BANDWIDTH"
          value="21"
          details={{
            Manufacturer: "Kingston®",
            Interface: "x4 NVMe",
            Capacity: "480 GB",
            Bus: "7000/8000 MBs",
            "Read/Write": "3200 MHz",
            "Form factor": "M.2 2280",
            rating: 1,
          }}
          separatorColor="border-lime-600"
          separatorBg="[&>*]:bg-lime-600"
        />
      </div>
    </div>
  );
}
