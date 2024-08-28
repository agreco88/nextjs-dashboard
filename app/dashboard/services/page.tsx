import { Metadata } from "next";
import { Suspense } from "react";
import { fetchFilteredServices } from "@/app/lib/data";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import ServiceTable from "@/app/ui/services/table";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { BarLoader } from "@/app/ui/loaders";
import Search from "@/app/ui/search";

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
    <main className="w-full flex flex-col p-8">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/dashboard/services" },
          ]}
        />
      </div>
      <div className="pt-4">
        <Search placeholder="Search services..." />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Suspense
          key={query + currentPage}
          fallback={<BarLoader loadingText="Loading services..." />}
        >
          <ServiceTable services={filteredServices} />
        </Suspense>
      </div>
    </main>
  );
}
