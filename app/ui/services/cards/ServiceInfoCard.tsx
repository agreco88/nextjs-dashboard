import { ServiceInfoCardProps } from "@/app/lib/definitions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SerivceInfoCard: React.FC<ServiceInfoCardProps> = ({
  title,
  heading,
  children,
}) => {
  return (
    <Card className="relative rounded-xl border bg-card text-card-foreground shadow col-span-1 overflow-hidden">
      <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="tracking-tight text-sm font-medium ">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 p-6 pt-0 flex flex-col gap-1">
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
