"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400); // Adjust debounce delay

  return (
    // <div className="relative flex flex-1 flex-shrink-0">
    //   <label htmlFor="search" className="sr-only">
    //     Search
    //   </label>
    //   <input
    //     className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
    // placeholder={placeholder}
    // onChange={(e) => {
    //   handleSearch(e.target.value);
    // }}
    // defaultValue={searchParams.get("query")?.toString()}
    //   />
    // <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    // </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="relative h-10 w-full">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

        <Input
          id="service"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          className=" pl-10 pr-3 py-2 text-md w-full border border-gray-300 dark:border-gray-500 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent" // Add additional styling as needed
        />
      </div>
    </div>
  );
}
