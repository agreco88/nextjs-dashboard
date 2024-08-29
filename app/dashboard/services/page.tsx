import { Metadata } from "next";
import { Suspense } from "react";
import ServiceTable from "@/app/ui/services/table";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Search from "@/app/ui/search";
import SkeletonTable from "@/components/ui/skeletons/SkeletonTable";

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
        <Suspense key={query + currentPage} fallback={<SkeletonTable />}>
          <ServiceTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </main>
  );
}
