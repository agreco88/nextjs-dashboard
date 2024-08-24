// ui/services/ImageCard.tsx

import Image from "next/image";
import { formatDateToLocale } from "@/app/lib/utils";
import { ServiceImageCardProps } from "@/app/lib/definitions";
import { Card, CardTitle } from "@/components/ui/card";

const ServiceImageCard: React.FC<ServiceImageCardProps> = ({
  image_url,
  title,
  children,
}) => {
  return (
    <Card className="relative rounded-xl border bg-card text-card-foreground shadow col-span-1 overflow-hidden">
      <Image
        src={image_url}
        alt={`${title} icon`}
        layout="fill"
        objectFit="cover"
        className="object-center absolute inset-0 z-0 opacity-40 dark:opacity-20"
      />
      <CardTitle className="relative z-10 p-6 flex flex-row items-center justify-between space-y-0 pb-2 tracking-tight text-sm font-medium">
        Type:
      </CardTitle>
      <div className="relative z-10 p-6 pt-0 flex flex-col gap-1">
        <CardTitle className="text-2xl font-bold capitalize flex gap-1 text-dark-theme-title dark:text-white">
          {title}
        </CardTitle>
        {children}
      </div>
    </Card>
  );
};

export default ServiceImageCard;
