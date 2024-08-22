"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function IpxonLogo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or nothing while waiting for the theme to resolve
    return null;
  }

  const imageSrc =
    theme === "dark" || resolvedTheme === "dark"
      ? "/logo/ipxon-light.png"
      : "/logo/ipxon-dark.png";
  const altText =
    theme === "dark" || resolvedTheme === "dark"
      ? "IPXON Networks white logo"
      : "IPXON Networks black logo";

  return (
    <Link href="/">
      <Image src={imageSrc} alt={altText} width={160} height={80} />
    </Link>
  );
}
