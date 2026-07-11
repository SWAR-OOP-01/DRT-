"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Therapies", href: "/#therapies" },
  { label: "Pain Management", href: "/#pain-management" },
  { label: "LKC Therapy", href: "/lkc-therapy" },
  { label: "RCN Retreat", href: "/retreat" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader({ isHome = false }: { isHome?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "z-50 w-full transition-all duration-300",
        isHome
          ? "bg-transparent"
          : "sticky top-0 border-b border-border/40 bg-cream/90 backdrop-blur-xl",
      )}
    >
      {/* Loading Nexa-Heavy for a bold look directly from your app/fonts folder */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @font-face {
          font-family: 'NexaCustom';
          src: url('/fonts/Nexa-Heavy.ttf') format('truetype'),
               url('/_next/static/media/Nexa-Heavy.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        .use-nexa-font {
          font-family: 'NexaCustom', sans-serif !important;
          font-weight: 700 !important;
        }
      `,
        }}
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Deep Relief Therapy home"
          className="mr-10 flex shrink-0 items-center"
        >
          <Image
            src="/drt-emblem-green.png"
            alt="Deep Relief Therapy emblem"
            width={120}
            height={70}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-7 whitespace-nowrap lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === pathname ||
              (link.href.startsWith("/#") && pathname === "/");

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "use-nexa-font relative whitespace-nowrap text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#244333]",
                  isHome
                    ? active
                      ? "text-[#244333] after:absolute after:left-1/2 after:-bottom-2 after:h-[2px] after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-[#244333]"
                      : "text-slate-800/80 hover:text-slate-900"
                    : active
                      ? "text-foreground after:absolute after:left-1/2 after:-bottom-2 after:h-[2px] after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-gold"
                      : "text-muted-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="ml-8 hidden shrink-0 lg:block">
          {/* ✅ UPDATED: Redirects directly to the form ID section on the contact page */}
          <Link
            href="/contact#appointment-form"
            className={cn(
              "use-nexa-font inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-[12px] uppercase tracking-[0.14em] transition-all duration-300",
              isHome
                ? "border-slate-800/40 text-slate-800 hover:bg-[#244333] hover:border-[#244333] hover:text-white"
                : "border-foreground/30 text-foreground hover:bg-[#244333] hover:border-[#244333] hover:text-white",
            )}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "ml-auto lg:hidden",
            isHome ? "text-slate-800" : "text-foreground",
          )}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border/40 bg-cream/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => {
              const active =
                link.href === pathname ||
                (link.href.startsWith("/#") && pathname === "/");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "use-nexa-font rounded-md px-3 py-3 text-sm uppercase tracking-[0.12em] transition-colors duration-300",
                    active
                      ? "bg-gold/10 text-foreground"
                      : "text-muted-ink hover:bg-black/5 hover:text-gold",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* ✅ UPDATED: Redirects directly to the form ID section on mobile menu */}
            <Link
              href="/contact#appointment-form"
              onClick={() => setOpen(false)}
              className="use-nexa-font mt-4 flex items-center justify-center rounded-full border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:border-[#244333] hover:bg-[#244333] hover:text-white"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
