import { BarLoader } from "@/app/ui/loaders";

export default function Loading() {
  return (
    <div className="grid place-content-center h-screen gap-2">
      <BarLoader loadingText="Loading tickets..." />
    </div>
  );
}
