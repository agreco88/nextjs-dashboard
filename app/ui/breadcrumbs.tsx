import { clsx } from "clsx";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

interface BreadcrumbType {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbType[];
}) {
  return (
    <Breadcrumb aria-label="Breadcrumb">
      <BreadcrumbList className="text-base flex font-semibold leading-6 text-gray-900 dark:text-light-theme">
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(
                breadcrumb.active
                  ? "text-gray-900 dark:text-light-theme"
                  : "text-gray-500 dark:text-light-theme"
              )}
            >
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
