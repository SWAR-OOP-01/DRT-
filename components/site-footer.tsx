"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandQR } from "@/components/brand-qr";
import localFont from "next/font/local";

// ✅ FONT CONFIGURATIONS FOR THE COMPONENTS DIRECTORY
const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
  weight: "800",
  style: "normal",
  display: "swap",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
  weight: "300",
  style: "normal",
  display: "swap",
});

// ✅ Body text style — sizes brought down from the previous 18px/32px so the
// footer reads at a normal, compact scale instead of oversized.
const nexaLightFooterStyle: React.CSSProperties = {
  fontWeight: 300,
  fontSize: "13px",
  letterSpacing: "0.4px",
  lineHeight: "22px",
  color: "#FFFFFF",
};

// ✅ UNIFIED HEADING STYLE: every column heading (Location, Quick Links, Our
// Services, Scan & Connect, Digital Business Card) now shares this exact
// class — same green color, same small size, same tracking, same margin.
// Previously each heading had its own one-off size/weight/color/margin
// combination (one even had a stray extra `mt-3`), which is what was
// throwing the columns out of alignment with each other.
const footerHeadingClass = `text-[10px] font-bold uppercase tracking-[0.2em] text-gold`;

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
      {/* Reduced padding: py-24/py-32 -> py-14/py-20 for a more compact footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-20">
        {/* Reduced gap: gap-16 -> gap-10 */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start">
          {/* Column 1: Brand Identification Logo Asset */}
          <div className="flex flex-col items-start">
            <Image
              src="/deep-relief-logo.png"
              alt="Deep Relief Therapy"
              width={120}
              height={105}
              className="w-28 h-auto object-contain"
              priority
            />
          </div>

          {/* Column 2: Physical Address Location Coordinates */}
          <div>
            <h3 className={`${nexaHeavy.className} ${footerHeadingClass}`}>
              Location
            </h3>
            <p
              className={`${nexaExtraLight.className} mt-3`}
              style={nexaLightFooterStyle}
            >
              KB Heights, 4th Floor, opp Golds Gym, Bhatewara Nagar, Near
              Vrundavan Hotel, Hinjewadi Dange Chauk Road,
              Pin&nbsp;-&nbsp;411057
            </p>
          </div>

          {/* Column 3: Quick Navigation Routing Map */}
          <div>
            <h3 className={`${nexaHeavy.className} ${footerHeadingClass}`}>
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${nexaExtraLight.className} transition-colors hover:text-gold`}
                    style={nexaLightFooterStyle}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational Services Indexes */}
          <div>
            <h3 className={`${nexaHeavy.className} ${footerHeadingClass}`}>
              Our Services
            </h3>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className={nexaExtraLight.className}
                  style={nexaLightFooterStyle}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: QR Interactive Portal Connectors */}
          <div className="flex flex-col items-start">
            <h3 className={`${nexaHeavy.className} ${footerHeadingClass}`}>
              Scan &amp; Connect
            </h3>
            <div className="mt-3 bg-cream p-2 rounded-lg inline-block shadow-md">
              <BrandQR value="https://deeprelieftherapy.com" size={72} />
            </div>
            <p className={`${nexaHeavy.className} ${footerHeadingClass} mt-2`}>
              Digital Business Card
            </p>
          </div>
        </div>

        {/* Flat Bottom Sub-panel Metadata Layer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/5 pt-6 sm:flex-row">
          <p
            className={`${nexaHeavy.className} text-[9px] uppercase tracking-[0.18em] text-cream/40`}
          >
            &copy; {new Date().getFullYear()} Deep Relief Therapy
          </p>
          <p
            className={`${nexaHeavy.className} text-xs italic tracking-wider text-cream/40`}
          >
            Awaken.Reconnect.Heal
          </p>
        </div>
      </div>
    </footer>
  );
}
