import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const SkeletonTable = () => (
  <Table className="overflow-y-hidden min-w-full px-4 sm:px-6 lg:px-8 w-full divide-y divide-gray-300">
    <TableHeader>
      <TableRow>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <TableHead
              key={index}
              className="text-dark-theme dark:text-light-theme font-bold tracking-tight"
            >
              <Skeleton className="w-28 h-4" />
            </TableHead>
          ))}
      </TableRow>
    </TableHeader>
    <TableBody className="overflow-hidden">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center">
                <Skeleton className="w-8 h-8 rounded-full" />
                <div className="ml-4">
                  <Skeleton className="w-48 h-4 mb-2" />
                  <Skeleton className="w-32 h-3" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Skeleton className="w-32 h-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-32 h-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-32 h-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-32 h-4" />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
);

export default SkeletonTable;
