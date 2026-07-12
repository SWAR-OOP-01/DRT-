"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { AppointmentForm } from "@/components/appointment-form";
import localFont from "next/font/local";
import { Suspense } from "react";

// ✅ LOCAL FONT CONFIGURATIONS WITH RESOLVED RELATIVE PATHS
const nexaHeavy = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../fonts/Nexa-ExtraLight.ttf",
});

// const newYorkSerif = localFont({
//   src: "../fonts/Nexa-Heavy.ttf",
// });

// ✅ Social paths matching the provided redirects exactly
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
      {/* Dynamic Style Injection Layer to strictly enforce properties across the entire layout hierarchy */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .contact-page-container .font-nexa-heavy-text {
          font-family: ${nexaHeavy.style.fontFamily} !important;
          font-weight: 700 !important;
        }

        /* Hero General Text Metric Rules */
        /* ✅ FIX: excluded .font-nexa-heavy-text so "Back to Therapies" and the
           "Deep Relief Therapy" label keep their heavy weight instead of being
           overridden by this ExtraLight rule (this was the bug causing them to
           render lighter than "Back to Home" / "Our Inspiration" on About page) */
        .contact-page-container .hero-section p:not(.font-nexa-heavy-text),
        .contact-page-container .hero-section span:not(.font-nexa-heavy-text),
        .contact-page-container .hero-section a:not(.font-nexa-heavy-text) {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.6px !important;
          line-height: 39px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        /* Split Screen Brand Story Block text font style overrides */
        .contact-page-container .split-content-section p,
        .contact-page-container .split-content-section span:not(.force-green-heavy):not(.force-bold-highlight),
        .contact-page-container .split-content-section a:not(.font-nexa-heavy-text) {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.5px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        /* Form Matrix Section text font style overrides */
        .contact-page-container .form-matrix-section p:not(.address-text-block),
        .contact-page-container .form-matrix-section li,
        .contact-page-container .form-matrix-section a:not(.font-nexa-heavy-text) {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.6px !important;
          line-height: 39px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        /* SCALED-DOWN CONNECT LIST OVERRIDES: Prevents box expansion from breaking the columns */
        .contact-page-container .connect-us-list span:not(.font-nexa-heavy-text) {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.5px !important;
          font-size: 14.5px !important;
          line-height: 26px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        /* FIXED BRUTE-FORCE OVERRIDE: Enforces copy properties exactly on the address text block elements */
        .contact-page-container .form-matrix-section .address-text-block {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          font-size: 18px !important;
          letter-spacing: 0.5px !important;
          line-height: 28px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        /* ✅ BRUTE-FORCE TARGET OVERRIDES USING TAG NAMES AND ATTRIBUTES TOGETHER TO PREVENT CASCADE BYPASS */
        .contact-page-container p.force-green-heavy,
        .contact-page-container .split-content-section p.force-green-heavy,
        .contact-page-container .split-content-section p[data-style-brand-story="true"],
        .contact-page-container p[data-style-team-tag="true"] {
          font-family: ${nexaHeavy.style.fontFamily}, sans-serif !important;
          font-weight: 700 !important;
          color: #2f5233 !important;
        }

        .contact-page-container p span.force-bold-highlight,
        .contact-page-container .split-content-section p span[data-style-quote-bold="true"] {
          font-family: ${nexaHeavy.style.fontFamily}, sans-serif !important;
          font-weight: 700 !important;
          color: #2f5233 !important;
        }

        .contact-page-container strong {
          font-family: ${nexaHeavy.style.fontFamily} !important;
          font-weight: 700 !important;
          color: inherit !important;
        }
      `,
        }}
      />

      <div className="contact-page-container w-full bg-background">
        {/* --- Section 1: Hero Section (Exactly like RCN landing page layout) --- */}
        <section className="hero-section w-full min-h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-cream px-6 pt-6 sm:pt-8 pb-4 select-none">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 text-center">
            <Link
              href="/#therapies"
              className="font-nexa-heavy-text inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-forest"
            >
              <ArrowLeft className="size-4" /> Back to Therapies
            </Link>

            <div className="flex flex-col items-center gap-1.5 mt-1">
              <Image
                src="/drt-emblem-green.png"
                alt="Deep Relief Therapy primary emblem"
                width={72}
                height={72}
                className="h-12 w-auto object-contain"
              />
              <p className="font-nexa-heavy-text text-xs uppercase tracking-[0.35em] text-forest pl-[0.35em]">
                Deep Relief Therapy
              </p>
            </div>

            <div className="max-w-4xl">
              <h1 className="font-nexa-heavy-text text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest tracking-wide">
                Performance, Productivity & Positivity
              </h1>
              <div className="mx-auto mt-3 h-px w-16 bg-forest/40" />
            </div>

            <div className="max-w-3xl flex flex-col items-center gap-3">
              <p className="text-base sm:text-lg max-w-2xl">
                Deep Relief Therapy exists to help people improve their
                day-to-day PERFORMANCE, boost PRODUCTIVITY, and bring a POSITIVE
                shift to their lives by helping them reconnect with their bodies
                and minds.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 2: Proportional Split Brand Narrative Section --- */}
        <section className="split-content-section bg-cream-deep w-full border-t border-gold/10 overflow-hidden flex items-center py-6 md:py-12">
          <div className="w-full grid lg:grid-cols-[4fr_6fr] items-stretch max-w-7xl mx-auto px-6 lg:px-12 gap-8 lg:h-[80vh]">
            {/* Placeholder container for Slider integration */}
            <div className="relative w-full min-h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-sm bg-[#f5f4f0] flex items-center justify-center">
              <span className="text-muted-ink text-sm">Slider Placeholder</span>
              <div className="absolute inset-0 bg-[#2d4a36]/5 mix-blend-multiply pointer-events-none" />
            </div>

            <div className="w-full flex flex-col justify-center pl-0 lg:pl-6 bg-cream-deep text-left">
              {/* ✅ ENFORCED BY TAG SPECIFICITY + CLASS: Strict brand story presentation wrapper */}
              <p
                data-style-brand-story="true"
                className="force-green-heavy inline-block border-l-4 border-forest pl-4 text-sm uppercase tracking-[0.22em]"
              >
                Our Brand Story
              </p>

              <div className="mt-4 space-y-4 text-base sm:text-lg border-b border-emerald-900/10 pb-6 text-left w-full tracking-normal">
                <p>
                  At the heart of everything we do is a simple belief—Everyone
                  deserves to live free from Pain and Stress.
                </p>
                <p>
                  Our thoughtfully crafted therapies are designed for the pace
                  and pressures of modern life, helping you Reconnect with your
                  body, Restore your posture, balance & Reclaim your sense of
                  peace and well-being.
                </p>
                <p className="text-forest pt-2">
                  “Deep Relief is more than Healing,{" "}
                  {/* ✅ ENFORCED BY TAG SPECIFICITY + CLASS: Highlight block handles metrics safely */}
                  <span
                    data-style-quote-bold="true"
                    className="force-bold-highlight px-1 rounded"
                  >
                    It's a journey back to Yourself.
                  </span>
                  ”
                </p>
                <div className="pt-2">
                  {/* ✅ ENFORCED BY TAG SPECIFICITY + CLASS: Direct element override */}
                  <p
                    data-style-team-tag="true"
                    className="force-green-heavy text-[10px] uppercase tracking-widest"
                  >
                    Team Deep Relief Therapy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 3: Connect & Form Matrix --- */}
        <section className="form-matrix-section bg-background border-t border-gold/5">
          <div className="mx-auto grid max-w-7xl gap-6 lg:gap-8 px-6 py-6 lg:grid-cols-2 lg:px-12 lg:py-8 items-stretch">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gold/10 shadow-sm flex flex-col justify-between">
              <div>
                <h2
                  className={`${nexaHeavy.className} text-3xl font-light text-foreground`}
                >
                  Connect With Us
                </h2>
                <div className="mt-2 h-px w-12 bg-gold/50" />
                <ul className="connect-us-list mt-4 divide-y divide-border border-b border-border">
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
                          <span className="font-nexa-heavy-text block text-[9px] font-bold uppercase tracking-[0.22em] text-muted-ink">
                            {social.label}
                          </span>
                          <span className="block transition-colors group-hover:text-emerald-800 mt-0.5">
                            {social.handle}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-nexa-heavy-text text-[10px] font-bold uppercase tracking-[0.22em] text-muted-ink">
                  Visit Us
                </h3>
                <p
                  data-style-address="true"
                  className="address-text-block mt-2 max-w-sm"
                >
                  KB Heights, 4th Floor, opp Golds Gym, Bhatewara Nagar, Near
                  Vrundavan Hotel, Hinjewadi Dange Chauk Road, <br /> Pin -
                  411057
                </p>
              </div>
            </div>

            <div
              id="appointment-form"
              className="bg-white p-5 sm:p-6 rounded-2xl border border-gold/10 shadow-sm flex flex-col justify-between scroll-mt-24"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <AppointmentForm />
              </Suspense>
            </div>
          </div>
          <div className="w-full px-6 pb-12 lg:px-12">
            <div className="mx-auto max-w-7xl rounded-[1.25rem] overflow-hidden border border-border bg-card shadow-sm">
              <iframe
                title="Deep Relief Therapy location"
                src="https://www.google.com/maps?q=KB%20Heights%20Hinjewadi%20Pune&z=15&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
