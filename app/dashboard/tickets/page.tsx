import Breadcrumbs from "@/app/ui/breadcrumbs";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets",
};

export default async function Page() {
  return (
    <main className="w-full container mx-auto flex flex-col pt-8 gap-">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tickets", href: "/dashboard/ticket" },
        ]}
      />
      <h1
        className={`${lusitana.className} my-4 uppercase font-bold text-xl md:text-2xl`}
      >
        Todo Tickets
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
