import { Skeleton } from "@/components/ui/skeleton";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SkeletonSearch = () => (
  <div className="flex h-10 relative w-full rounded-full opacity-75">
    <MagnifyingGlassIcon className="animate-pulse absolute left-3 z-10 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    <Skeleton className="pl-10 pr-3 py-2 text-md w-full border border-gray-300 dark:border-gray-500 rounded shadow-sm" />
  </div>
);

export default SkeletonSearch;
