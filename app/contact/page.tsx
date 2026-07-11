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

// ✅ UPDATED: Social paths modified to match the provided redirects exactly
const socials = [
  {
    label: "Instagram",
    handle: "@deep.relief.therapy",
    icon: "/social/instagram.svg",
    href: "https://www.instagram.com/deep.relief.therapy?igsh=MXhjcmh0aXRqc3ltOQ==",
  },
  {
    label: "Facebook",
    handle: "Deep Relief Therapy",
    icon: "/social/facebook.svg",
    href: "https://www.facebook.com/share/1G53sZ7QoF/",
  },
  {
    label: "YouTube",
    handle: "@deeprelieftherapy",
    icon: "/social/youtube.svg",
    href: "https://youtube.com/@deeprelieftherapy?si=F46010_lIJoAnyJj",
  },
  {
    label: "LinkedIn",
    handle: "Manas Jadhav",
    icon: "/social/linkedin.svg",
    href: "https://www.linkedin.com/in/1manasjadhav?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    label: "WhatsApp",
    handle: "+91 99222 55151",
    icon: "/social/whatsapp.svg",
    href: "https://wa.me/919922255151",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      {/* --- Section 1: Minimalist Sub-Page Entry Hero --- */}
      <section className="w-full flex flex-col justify-center items-center bg-cream px-6 py-16 sm:py-24 select-none">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 text-center">
          <Link
            href="/#therapies"
            className={`${nexaHeavy.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-emerald-800`}
          >
            <ArrowLeft className="size-4" /> Back to Therapies
          </Link>

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

          <div className="max-w-4xl flex flex-col items-center">
            <h1
              className={`${nexaHeavy.className} text-3xl sm:text-4xl lg:text-5xl leading-tight text-emerald-900 tracking-wide`}
            >
              Performance, Productivity &amp; Positivity
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-emerald-800/20" />
            <div className="mt-8 max-w-2xl text-center">
              <p
                className={`${nexaExtraLight.className} text-slate-800 text-base sm:text-lg lg:text-xl font-normal leading-relaxed tracking-wide`}
              >
                Deep Relief Therapy exists to help people improve their
                day-to-day PERFORMANCE, boost PRODUCTIVITY, and bring a POSITIVE
                shift to their lives by helping them reconnect with their bodies
                and minds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Proportional Split Brand Narrative Section --- */}
      <section className="bg-cream-deep w-full border-t border-gold/10 overflow-hidden flex items-center py-6 md:py-12">
        <div className="w-full grid lg:grid-cols-[4fr_6fr] items-stretch max-w-7xl mx-auto px-6 lg:px-12 gap-8 lg:h-[80vh]">
          {/* Placeholder container for Slider integration */}
          <div className="relative w-full min-h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-sm bg-[#f5f4f0] flex items-center justify-center">
            <span
              className={`${nexaExtraLight.className} text-muted-ink text-sm`}
            >
              Slider Placeholder
            </span>
          </div>

          <div className="w-full flex flex-col justify-center pl-0 lg:pl-6 bg-cream-deep text-left">
            <p
              className={`${nexaHeavy.className} inline-block border-l-4 border-emerald-700 pl-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-900`}
            >
              Our Brand Story
            </p>

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
                Restore your posture, balance &amp; Reclaim your sense of peace
                and well-being.
              </p>
              <p
                className={`${nexaExtraLight.className} text-emerald-800 text-base sm:text-lg pt-2`}
              >
                &ldquo;Deep Relief is more than Healing,{" "}
                <strong className="font-bold text-emerald-900 bg-emerald-50 px-1 rounded">
                  It&apos;s a journey back to Yourself.
                </strong>
                &rdquo;
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-12 px-6 py-12 lg:grid-cols-2 lg:px-12 lg:py-16 items-stretch">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gold/10 shadow-sm flex flex-col justify-between">
            <div>
              <h2
                className={`${newYorkSerif.className} text-3xl font-light text-foreground`}
              >
                Connect With Us
              </h2>
              <div className="mt-2 h-px w-12 bg-gold/50" />
              <ul className="mt-8 divide-y divide-border border-b border-border">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                ))}
              </ul>
            </div>
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
                Vrundavan Hotel, Hinjewadi Dange Chauk Road, <br /> Pin - 411057
              </p>
            </div>
          </div>

          <div
            id="appointment-form"
            className="bg-white p-6 sm:p-8 rounded-2xl border border-gold/10 shadow-sm flex flex-col justify-between scroll-mt-24"
          >
            <AppointmentForm />
          </div>
        </div>
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
