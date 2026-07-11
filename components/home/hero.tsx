"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../../app/fonts/Nexa-Heavy.ttf",
});

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between bg-[#f2ffe5] pt-28 pb-12 overflow-hidden">
      {/* Subtle faded leaf backdrop — sits behind all content, multiply-blended so it tints into the mint bg instead of showing white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.25] mix-blend-multiply"
        style={{ backgroundImage: "url('/leaves-bg.jpg')" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-between px-6 py-4 text-center gap-6">
        {/* Centralized Brand Logo and Identity Section */}
        <div className="flex flex-col items-center justify-center pt-2 animate-[fadeInScale_1.2s_ease-out_forwards]">
          <Image
            src="/deep-relief-logo.png"
            alt="Deep Relief Therapy logo"
            width={480}
            height={480}
            priority
            className="h-40 md:h-52 w-auto object-contain transition-transform duration-700 hover:scale-105"
          />

          {/* Main Tagline */}
          <p
            className={`${nexaHeavy.className} mt-8 text-sm md:text-base uppercase tracking-[0.6em] text-[#2C5E3F]/80 max-w-xl mx-auto pl-[0.6em]`}
          >
            Healing With Purpose
          </p>

          {/* Divider separating tagline from trust points */}
          <div className="mt-3 h-[2px] w-64 md:w-80 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
        </div>

        {/* Positioning Statement */}
        <div className="flex flex-col items-center justify-center max-w-3xl">
          <p
            className={`${nexaHeavy.className} text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#2C5E3F] leading-snug`}
          >
            Not a spa experience — it's a therapeutic experience
          </p>
        </div>

        {/* Trust Badges — compact pills, grouped tightly near the CTA per best-practice hero design */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span
            className={`${nexaHeavy.className} inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-white/60 px-5 py-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-emerald-900 shadow-sm`}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-3.5 w-3.5 shrink-0"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 10.5l3.5 3.5L16 6" />
            </svg>
            No Cross-Gender Services
          </span>
          <span
            className={`${nexaHeavy.className} inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-white/60 px-5 py-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-emerald-900 shadow-sm`}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-3.5 w-3.5 shrink-0"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 10.5l3.5 3.5L16 6" />
            </svg>
            DRT = Professional Care
          </span>
        </div>

        <div className="h-px w-16 bg-emerald-800/20" />

        {/* Primary Action Buttons matched with the correct Forest Green brand value */}
        <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto justify-center pb-4 shrink-0">
          <Link
            href="/contact#appointment-form"
            className={`${nexaHeavy.className} inline-flex min-w-[200px] items-center justify-center rounded-full bg-[#244333] px-7 py-3 text-xs uppercase tracking-widest text-white shadow-md hover:bg-[#1b3327] transition-all duration-300`}
          >
            Book Appointment
          </Link>
          <Link
            href="/about"
            className={`${nexaHeavy.className} inline-flex min-w-[200px] items-center justify-center rounded-full border border-[#244333]/40 bg-transparent px-7 py-3 text-xs uppercase tracking-widest text-[#244333] hover:bg-[#244333] hover:text-white transition-all duration-300`}
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
