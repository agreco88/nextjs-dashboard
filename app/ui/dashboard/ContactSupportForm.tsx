"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function ContactSupportForm() {
  const [message, setMessage] = useState("");
  const pathname = usePathname();

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="current-page" className="block text-sm font-medium">
          URL in which you are encountering the error:
        </label>
        <Input
          id="current-page"
          name="current-page"
          type="text"
          value={pathname}
          className="dark:text-dark-theme-text"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Describe your issue..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <DrawerFooter className="w-full pb-4 px-0 flex flex-col gap-2">
        <Button type="submit" disabled={!message.trim()}>
          Submit
        </Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </form>
  );
}
