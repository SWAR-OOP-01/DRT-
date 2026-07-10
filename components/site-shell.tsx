import type { ReactNode } from "react";
import { SiteChrome } from "./site-chrome";
import { SiteFooter } from "./site-footer";
import { VoucherRibbon } from "./voucher-ribbon";
import { ReviewsDrawer } from "./reviews-drawer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <SiteChrome />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <SiteFooter />
      <VoucherRibbon />
      <ReviewsDrawer />
    </div>
  );
}
