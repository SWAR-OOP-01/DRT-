"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export function VoucherRibbon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 origin-right rotate-180 bg-gold px-4 py-3 text-[11px] font-normal uppercase tracking-[0.25em] text-charcoal shadow-md transition-colors hover:bg-gold-soft [writing-mode:vertical-rl]"
        aria-label="Open the voucher"
      >
        The Voucher
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream px-8 py-10 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-normal uppercase tracking-[0.28em] text-gold">
                The Voucher
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-muted-ink transition-colors hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-10 flex flex-col items-center text-center">
              <Image
                src="/drt-emblem-green.png"
                alt="Deep Relief Therapy emblem"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
              <div className="mt-8 h-px w-16 bg-gold/40" />
            </div>

            <div className="mt-10 space-y-10">
              <div className="border border-border bg-card px-7 py-9 text-center">
                <p className="text-[10px] font-normal uppercase tracking-[0.28em] text-muted-ink">
                  Welcome Offer
                </p>
                <p className="mt-5 font-serif text-3xl leading-tight text-foreground">
                  Get your First HNS Therapy{" "}
                  <span className="text-gold">FREE</span>
                </p>
              </div>

              <div className="border border-border bg-card px-7 py-9 text-center">
                <p className="text-[10px] font-normal uppercase tracking-[0.28em] text-muted-ink">
                  Loyalty Bundle
                </p>
                <p className="mt-5 font-serif text-3xl leading-tight text-foreground">
                  Buy 3 HNS therapies, get{" "}
                  <span className="text-gold">1 FREE</span>
                </p>
                <p className="mt-4 text-[10px] font-light uppercase tracking-[0.2em] text-muted-ink">
                  T&amp;C Apply
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-auto block border border-foreground/40 py-4 text-center text-[11px] font-light uppercase tracking-[0.22em] text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
            >
              Redeem at Booking
            </a>
          </aside>
        </div>
      )}
    </>
  );
}
