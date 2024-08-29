import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBreadcrumbs = () => (
  <div className="flex items-center space-x-2">
    <Skeleton className="w-24 h-4" />
    <Skeleton className="w-24 h-4" />
    <Skeleton className="w-24 h-4" />
  </div>
);

export default SkeletonBreadcrumbs;
