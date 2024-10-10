import NavLinks from "@/app/ui/dashboard/nav-links";
import { signOut } from "@/auth";
import { ThemeDropdownMenu } from "../theme-toggle";
import IpxonLogo from "@/app/ui/ipxon-logo";
import { LogoutButton, TermsAndConditionsButton } from "../button";
import { DrawerComponent } from "../DrawerComponent";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 dark:bg-gradient-to-b dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300">
      <div className="h-20 md:h-40 flex items-center justify-center">
        <IpxonLogo />
      </div>
      <div className="flex grow flex-col justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <div className="grid gap-2">
          <DrawerComponent />
          <TermsAndConditionsButton />
          <div className="flex gap-2">
            <ThemeDropdownMenu />
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
              className="flex grow"
            >
              <LogoutButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
