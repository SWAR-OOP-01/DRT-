"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnnouncementBar } from "./announcement-bar"; // adjust to your actual filename
import { SiteHeader } from "./site-header";

export function SiteChrome() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={cn(
        "z-40 w-full",
        isHome ? "absolute top-0 left-0 flex flex-col" : "relative",
      )}
    >
      <AnnouncementBar isHome={isHome} />
      <SiteHeader isHome={isHome} />
    </div>
  );
}
