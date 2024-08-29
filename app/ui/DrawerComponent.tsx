"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ContactSupportForm } from "./dashboard/ContactSupportForm";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function DrawerComponent() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Contact Support</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full my-2 max-w-sm">
          <DrawerHeader className="py-4 px-0 flex flex-col">
            <DrawerTitle>Contact Support</DrawerTitle>
            <DrawerDescription>
              Please describe your problem or any inquiry you have.
            </DrawerDescription>
            <Separator className="mt-4 h-0.5 rounded bg-dark-theme-text dark:bg-dark-theme-subtitle" />
          </DrawerHeader>
          <ContactSupportForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
