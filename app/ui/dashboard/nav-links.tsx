"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  BanknotesIcon,
  HomeIcon,
  ServerStackIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Services", href: "/dashboard/services", icon: ServerStackIcon },
  { name: "Billing", href: "/dashboard/billing", icon: BanknotesIcon },
  { name: "Tickets", href: "/dashboard/tickets", icon: TicketIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1.5">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isHome = link.href === "/dashboard";
        const isActive = isHome
          ? pathname === link.href // Exact match for Home
          : pathname.startsWith(link.href); // Match the start of the pathname for other links

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "flex h-[48px] my-1 md:m-0 grow items-center text-sm tracking-tighter justify-center gap-2 rounded-md bg-gray-50 opacity-75 dark:bg-dark-theme dark:text-light-theme p-3 font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "!opacity-100  text-ipxon-magenta  dark:bg-dark-theme dark:text-white":
                    isActive,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
