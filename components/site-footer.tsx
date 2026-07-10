"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandQR } from "@/components/brand-qr";
import localFont from "next/font/local";

// ✅ FONT CONFIGURATIONS FOR THE COMPONENTS DIRECTORY
const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
});

const newYorkSerif = localFont({
  src: "../public/fonts/NewYork-PersonalUse.otf",
});

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Therapies", href: "/#therapies" },
  { label: "Pain Management", href: "/#pain-management" },
  { label: "LKC Therapy", href: "/lkc-therapy" },
  { label: "RCN Retreat", href: "/retreat" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "HNS Therapy",
  "PSR Therapy",
  "MFR Therapy",
  "ADT Therapy",
  "Pain Management",
  "RCN Therapy",
  "LKC Therapy",
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream/70 border-t border-gold/10">
      {/* Increased total structural height layout container */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        {/* Compact Balanced Grid Columns */}
        <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start">
          {/* Column 1: Brand Identification Logo Asset */}
          <div className="flex flex-col items-start">
            <Image
              src="/deep-relief-logo.png"
              alt="Deep Relief Therapy"
              width={160}
              height={140}
              className="w-40 h-auto object-contain"
              priority
            />
            {/* ✅ FIXED: Removed the sidetracked tracking line entirely so the branding sits cleanly without messy overlaps */}
          </div>

          {/* Column 2: Physical Address Location Coordinates */}
          <div>
            <h3
              className={`${nexaHeavy.className} text-[10px] font-bold uppercase tracking-[0.25em] text-gold`}
            >
              Location
            </h3>
            <p
              className={`${nexaExtraLight.className} mt-4 text-xs font-normal leading-relaxed text-cream/60 tracking-normal`}
            >
              KB Heights, 4th Floor, opp Golds Gym, Bhatewara Nagar, Near
              Vrundavan Hotel, Hinjewadi Dange Chauk Road,
              Pin&nbsp;-&nbsp;411057
            </p>
          </div>

          {/* Column 3: Quick Navigation Routing Map */}
          <div>
            <h3
              className={`${nexaHeavy.className} text-[10px] font-bold uppercase tracking-[0.25em] text-gold`}
            >
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${nexaExtraLight.className} text-xs font-normal text-cream/60 transition-colors hover:text-gold tracking-normal`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational Services Indexes */}
          <div>
            <h3
              className={`${nexaHeavy.className} text-[10px] font-bold uppercase tracking-[0.25em] text-gold`}
            >
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className={`${nexaExtraLight.className} text-xs font-normal text-cream/60 tracking-normal`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: QR Interactive Portal Connectors */}
          <div className="flex flex-col items-start">
            <h3
              className={`${nexaHeavy.className} text-[10px] font-bold uppercase tracking-[0.25em] text-gold`}
            >
              Scan &amp; Connect
            </h3>
            <div className="mt-4 bg-cream p-2.5 rounded-lg inline-block shadow-md">
              <BrandQR value="https://deeprelieftherapy.com" size={96} />
            </div>
            <p
              className={`${nexaHeavy.className} mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-cream/40`}
            >
              Digital Business Card
            </p>
          </div>
        </div>

        {/* Flat Bottom Sub-panel Metadata Layer */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-cream/5 pt-8 sm:flex-row">
          <p
            className={`${nexaHeavy.className} text-[9px] uppercase tracking-[0.18em] text-cream/40`}
          >
            &copy; {new Date().getFullYear()} Deep Relief Therapy
          </p>
          <p
            className={`${newYorkSerif.className} text-xs italic tracking-wider text-cream/40`}
          >
            Awaken.Reconnect.Heal
          </p>
        </div>
      </div>
    </footer>
  );
}
