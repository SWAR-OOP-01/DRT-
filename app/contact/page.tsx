"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { AppointmentForm } from "@/components/appointment-form";
import localFont from "next/font/local";

// ✅ LOCAL FONT CONFIGURATIONS WITH RESOLVED RELATIVE PATHS
const nexaHeavy = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../fonts/Nexa-ExtraLight.ttf",
});

const newYorkSerif = localFont({
  src: "../../public/fonts/NewYork-PersonalUse.otf",
});

const socials = [
  {
    label: "Instagram",
    handle: "@deeprelieftherapy",
    icon: "/social/instagram.svg",
    href: "#",
  },
  {
    label: "Facebook",
    handle: "Deep Relief Therapy",
    icon: "/social/facebook.svg",
    href: "#",
  },
  {
    label: "YouTube",
    handle: "Deep Relief Therapy",
    icon: "/social/youtube.svg",
    href: "#",
  },
  {
    label: "LinkedIn",
    handle: "Deep Relief Therapy",
    icon: "/social/linkedin.svg",
    href: "#",
  },
  {
    label: "WhatsApp",
    handle: "+91 99999 99999",
    icon: "/social/whatsapp.svg",
    href: "https://wa.me/919999999999",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      {/* --- Section 1: Minimalist Sub-Page Entry Hero --- */}
      {/* ✅ FIXED SPACING: Removed h-[calc(100vh-5rem)] to prevent structural text lines from cropping under navigation layers */}
      <section className="w-full flex flex-col justify-center items-center bg-cream px-6 py-16 sm:py-24 select-none">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 text-center">
          {/* Back Action Link */}
          <Link
            href="/#therapies"
            className={`${nexaHeavy.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-emerald-800`}
          >
            <ArrowLeft className="size-4" /> Back to Therapies
          </Link>

          {/* Icon Badge Group */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <Image
              src="/drt-emblem-green.png"
              alt="Deep Relief Therapy primary emblem"
              width={72}
              height={72}
              className="h-14 w-auto object-contain"
            />
            <p
              className={`${nexaHeavy.className} text-xs uppercase tracking-[0.35em] text-emerald-800 pl-[0.35em]`}
            >
              Deep Relief Therapy
            </p>
          </div>

          {/* Master Headings Matrix (New York Serif) */}
          <div className="max-w-4xl">
            <h1
              className={`${newYorkSerif.className} text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-foreground text-balance tracking-wide`}
            >
              Begin Your Reset
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-emerald-800/20" />
          </div>

          {/* Description Block */}
          <div className="max-w-3xl flex flex-col items-center gap-4 mt-2">
            <p
              className={`${newYorkSerif.className} text-2xl sm:text-3xl italic text-emerald-800`}
            >
              Mind &bull; Body &bull; Spirit Alignment
            </p>
            <p
              className={`${nexaExtraLight.className} text-base sm:text-lg font-normal leading-relaxed text-slate-800 max-w-2xl tracking-normal`}
            >
              Reserve your session, ask a question, or simply say hello. We are
              here to help you leave feeling calmer, lighter, and completely
              refreshed.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Proportional Split Brand Narrative Section --- */}
      <section className="bg-cream-deep w-full border-t border-gold/10 overflow-hidden flex items-center py-6 md:py-12">
        <div className="w-full grid lg:grid-cols-[4fr_6fr] items-stretch max-w-7xl mx-auto px-6 lg:px-12 gap-8 lg:h-[80vh]">
          {/* Left Column Container */}
          <div className="relative w-full min-h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-sm bg-[#f5f4f0]">
            <Image
              src="/images/drt sirs.jpg"
              alt="Deep Relief Therapy founder collaboration session"
              fill
              className="object-contain object-center p-4"
              priority
            />
          </div>

          {/* Right Column Container */}
          <div className="w-full flex flex-col justify-center pl-0 lg:pl-6 bg-cream-deep text-left">
            <p
              className={`${nexaHeavy.className} inline-block border-l-4 border-emerald-700 pl-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-900`}
            >
              Our Brand Story
            </p>

            {/* Paragraph Layers Converted to Nexa ExtraLight */}
            <div
              className={`${nexaExtraLight.className} mt-4 space-y-4 text-base sm:text-lg font-normal leading-relaxed text-slate-800 border-b border-emerald-900/10 pb-6 text-left w-full tracking-normal`}
            >
              <p>
                At the heart of everything we do is a simple belief—Everyone
                deserves to live free from Pain and Stress.
              </p>
              <p>
                Our thoughtfully crafted therapies are designed for the pace and
                pressures of modern life, helping you Reconnect with your body,
                Restore your posture, balance & Reclaim your sense of peace and
                well-being.
              </p>
              <p
                className={`${newYorkSerif.className} italic text-emerald-800 text-lg sm:text-xl pt-2`}
              >
                &ldquo;Deep Relief is more than Healing, It's a journey back to
                Yourself.&rdquo;
              </p>
              <div className="pt-2">
                <p
                  className={`${nexaHeavy.className} text-[10px] font-bold uppercase tracking-widest text-emerald-800`}
                >
                  Team Deep Relief Therapy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Connect & Form Matrix --- */}
      <section className="bg-background border-t border-gold/5">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-12 lg:grid-cols-2 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-start">
            <h2
              className={`${newYorkSerif.className} text-3xl font-light text-foreground`}
            >
              Connect With Us
            </h2>
            <div className="mt-2 h-px w-12 bg-gold/50" />

            <ul className="mt-8 divide-y divide-border border-y border-border">
              {socials.map((social) => {
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="group flex items-center gap-5 py-4 transition-colors"
                    >
                      <Image
                        src={social.icon || "/placeholder.svg"}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5 object-contain"
                      />
                      <span className="flex-1">
                        <span
                          className={`${nexaHeavy.className} block text-[9px] font-bold uppercase tracking-[0.22em] text-muted-ink`}
                        >
                          {social.label}
                        </span>
                        <span
                          className={`${nexaExtraLight.className} block text-sm font-normal text-foreground transition-colors group-hover:text-emerald-800 tracking-normal mt-0.5`}
                        >
                          {social.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <h3
                className={`${nexaHeavy.className} text-[10px] font-bold uppercase tracking-[0.22em] text-muted-ink`}
              >
                Visit Us
              </h3>
              <p
                className={`${nexaExtraLight.className} mt-3 max-w-sm text-sm font-normal leading-relaxed text-slate-800 tracking-normal`}
              >
                KB Heights, 4th Floor, opp Golds Gym, Bhatewara Nagar, Near
                Vrundavan Hotel, Hinjewadi Dange Chauk Road,
                <br />
                Pin - 411057
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gold/10 shadow-sm">
            <AppointmentForm />
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full px-6 pb-16 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[1.25rem] overflow-hidden border border-border bg-card shadow-sm">
            <iframe
              title="Deep Relief Therapy location"
              src="https://www.google.com/maps?q=KB%20Heights%20Hinjewadi%20Pune&z=15&output=embed"
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
