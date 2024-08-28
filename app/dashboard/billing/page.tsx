// import CardWrapper from "@/app/ui/dashboard/cards";
// import RevenueChart from "@/app/ui/dashboard/revenue-chart";
// import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { CardsSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Billing",
};

export default async function Page() {
  return (
    <main className="w-full flex flex-col p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Billing", href: "/dashboard/billing" },
        ]}
      />
      <h1
        className={`${lusitana.className} my-4 uppercase font-bold text-xl md:text-2xl`}
      >
        Todo Billing
      </h1>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div> */}
    </main>
  );
}
