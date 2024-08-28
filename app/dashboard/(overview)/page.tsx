import Breadcrumbs from "@/app/ui/breadcrumbs";
import { PieChartComponent } from "@/app/ui/dashboard/PieChartComponent";
import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  const chartDataServices = [
    { type: "Baremetal", visitors: 1, fill: "var(--color-chrome)" },
    { type: "VPS", visitors: 1, fill: "var(--color-safari)" },
    { type: "Storage", visitors: 2, fill: "var(--color-firefox)" },
  ];

  const chartDataBilling = [
    { type: "Paid", visitors: 8, fill: "var(--color-chrome)" },
    { type: "Unpaid", visitors: 2, fill: "var(--color-safari)" },
  ];

  const chartDataTickets = [
    { type: "Open", visitors: 1, fill: "var(--color-chrome)" },
    { type: "Closed", visitors: 14, fill: "var(--color-safari)" },
  ];

  return (
    <main className="w-full flex flex-col p-8">
      <Breadcrumbs breadcrumbs={[{ label: "Home", href: "/" }]} />
      <h1
        className={`${lusitana.className} my-4 uppercase font-bold text-xl md:text-2xl`}
      >
        TODO Home Dashboard h1
      </h1>
      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4">
        <PieChartComponent
          title="services"
          unit="Services"
          chartData={chartDataServices}
        />
        <PieChartComponent
          title="billing"
          unit="Invoices"
          chartData={chartDataBilling}
        />
        <PieChartComponent
          title="tickets"
          unit="tickets"
          chartData={chartDataTickets}
        />
      </div>
    </main>
  );
}
