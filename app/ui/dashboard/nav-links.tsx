"use client";
import { HomeIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Services", href: "/dashboard/services", icon: ServerStackIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center text-sm tracking-tighter justify-center gap-2 rounded-md bg-gray-50 opacity-75 dark:bg-dark-theme dark:text-light-theme p-3 font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "!opacity-100  text-ipxon-magenta  dark:bg-dark-theme dark:text-white":
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
