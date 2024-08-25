import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  PowerIcon,
  EllipsisVerticalIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>;
}

export function LogoutButton({ className, ...rest }: ButtonProps) {
  return (
    <Button
      {...rest}
      variant="outline"
      size="icon"
      className={clsx("w-full flex pl-2 pr-3 gap-2", className)}
    >
      <PowerIcon className="h-[1.2rem] w-[1.2rem]" />
      <span className="text-sm">Logout</span>
    </Button>
  );
}

export function ServiceInformationButton({ className, ...rest }: ButtonProps) {
  return (
    <Button
      {...rest}
      variant="outline"
      size="icon"
      className={clsx("w-full flex px-2 gap-2", className)}
    >
      <EllipsisVerticalIcon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Service information button</span>
    </Button>
  );
}

export function TermsAndConditionsButton({ className, ...rest }: ButtonProps) {
  return (
    <Button
      {...rest}
      variant="outline"
      size="icon"
      className={clsx("w-full flex pl-2 pr-3 gap-2", className)}
    >
      {/* <DocumentTextIcon className="h-[1.2rem] w-[1.2rem]" /> */}
      <span className="text-sm">Terms and conditions</span>
    </Button>
  );
}
