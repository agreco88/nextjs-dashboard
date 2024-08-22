import SideNav from "@/app/ui/dashboard/sidenav";
import { ModeToggle } from "../ui/theme-toggle";
import Search from "../ui/search";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden dark:bg-slate-900 bg-slate-50 transition-colors">
      <div className="w-full flex-none md:w-64 ">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
      {/* <div className="sm:flex sm:items-center py-8">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Services
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Search your services by name, location or both service and billing
            status.
          </p>
        </div>
        <div className="w-1/2">
          <Search placeholder="Search services..." />
        </div>
      </div> */}
    </div>
  );
}
