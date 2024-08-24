import { Metadata } from "next";
import { Suspense } from "react";
import { fetchFilteredServices } from "@/app/lib/data";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import ServiceTable from "@/app/ui/services/table";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const filteredServices = await fetchFilteredServices(
    query,
    "410544b2-4001-4271-9885-fec4b6a6442b"
  );

  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col pt-8 gap-4">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/dashboard/services" },
          ]}
        />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <ServiceTable services={filteredServices} />
        </Suspense>
      </div>
    </div>
  );
}
