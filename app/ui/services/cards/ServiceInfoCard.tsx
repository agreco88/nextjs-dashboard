import { ServiceInfoCardProps } from "@/app/lib/definitions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceOptionsDropdown } from "../service-options-dropdown";

const SerivceInfoCard: React.FC<ServiceInfoCardProps> = ({
  title,
  heading,
  children,
  withDropdown,
  serviceId,
  serviceStatus,
}) => {
  return (
    <Card className="p-4 relative rounded-xl border bg-card text-card-foreground shadow col-span-1 overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
        <CardTitle className="tracking-tight text-sm font-medium ">
          {title}
        </CardTitle>
        {withDropdown ? (
          <ServiceOptionsDropdown
            serviceId={serviceId}
            status={serviceStatus}
          />
        ) : (
          <div className="h-10 w-10"></div>
        )}
      </CardHeader>
      <CardContent className="relative z-10 flex flex-col gap-1 p-0">
        <CardDescription className="text-2xl font-bold capitalize flex gap-1 text-dark-theme-title dark:text-white">
          {heading}
        </CardDescription>
        <div className="text-xs gap-1 flex text-muted-foreground font-bold">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default SerivceInfoCard;
