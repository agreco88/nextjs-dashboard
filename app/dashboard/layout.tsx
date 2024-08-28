import SideNav from "@/app/ui/dashboard/sidenav";
import Search from "../ui/search";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden dark:bg-slate-900 bg-slate-50 transition-colors">
      <div className="w-full flex-none md:w-64 ">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
