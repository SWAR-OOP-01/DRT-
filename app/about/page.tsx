"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import localFont from "next/font/local";

// ✅ FIXED NEXA PATHS: Resolves perfectly to app/fonts/
const nexaHeavy = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../fonts/Nexa-ExtraLight.ttf",
});

// ✅ FIXED NEW YORK SERIF PATH: Backtracks accurately to public/fonts/
const newYorkSerif = localFont({
  src: "../../public/fonts/NewYork-PersonalUse.otf",
});

export default function AboutPage() {
  return (
    <SiteShell>
      {/* --- Section 1: Top Hero Header Slide --- */}
      <section className="w-full flex flex-col justify-center items-center bg-cream px-6 py-16 sm:py-24 select-none">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 text-center">
          {/* Back Action Link */}
          <Link
            href="/"
            className={`${nexaHeavy.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-emerald-800`}
          >
            <ArrowLeft className="size-4" /> Back to Home
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
              Our Inspiration
            </p>
          </div>

          {/* Master Title */}
          <div className="max-w-4xl">
            <h1
              className={`${nexaHeavy.className} text-4xl sm:text-5xl lg:text-6xl leading-tight text-emerald-900 tracking-wide`}
            >
              Deep Relief Therapy
            </h1>
            <div className="mx-auto mt-3 h-px w-16 bg-emerald-800/40" />
          </div>

          {/* Core Prose */}
          <div className="max-w-3xl flex flex-col items-center gap-3">
            <p
              className={`${nexaHeavy.className} text-xl sm:text-2xl text-emerald-800`}
            >
              Awaken &bull; Reconnect &bull; Heal
            </p>
            <p
              className={`${nexaExtraLight.className} font-normal text-base sm:text-lg leading-relaxed text-slate-800 max-w-2xl`}
            >
              A therapeutic healing platform engineered strictly for sustainable
              bodily restoration, chronic stress relief, and muscular
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Proportional Split Screen Layout --- */}
      <section className="bg-cream-deep w-full border-t border-gold/10 overflow-hidden flex items-center py-6 md:py-12">
        <div className="w-full grid lg:grid-cols-[4fr_6fr] items-stretch max-w-7xl mx-auto px-6 lg:px-12 gap-8 lg:h-[80vh]">
          {/* Left Column: Portrait Framework */}
          <div className="relative w-full min-h-[350px] lg:h-full rounded-2xl overflow-hidden shadow-md bg-[#fcfbfa]">
            <Image
              src="/images/drt sir.jpg"
              alt="Manas Jadhav - Founder of Deep Relief Therapy"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
          </div>

          {/* Right Column: Text Layout Matrix */}
          <div className="w-full flex flex-col justify-center pl-0 lg:pl-6 bg-cream-deep">
            <h2
              className={`${nexaHeavy.className} text-xl sm:text-2xl font-bold tracking-wide text-emerald-900 uppercase text-left`}
            >
              OUR INSPIRATION
            </h2>

            <div
              className={`${nexaExtraLight.className} mt-4 space-y-4 text-base sm:text-lg font-normal leading-relaxed text-slate-800 border-b border-emerald-900/10 pb-6 text-left w-full tracking-normal`}
            >
              <p>
                Deep Relief Therapy was born not from a business plan, but from
                observation, experience, and a quiet dissatisfaction with how
                pain was being treated. Founded in 2015 by Manas Jadhav, Deep
                Relief Therapy began with a clear intention—to address pain,
                stiffness, and postural issues at their root, not just mask
                symptoms.
              </p>
              <p>
                With over a decade of experience in massage therapy, fitness
                training, and healthcare management, he observed that most
                people functioned through discomfort without real recovery. He
                is certified and has experience as a personal trainer and sports
                nutritionist. He holds 25+ certifications, including 10+
                international certifications in massage therapy and 15+ national
                massage training certifications, covering different types of
                massage & manual therapy.
              </p>
              <p>
                He is also a practitioner of holistic methods such as
                meditation, pranayama & nature healing over a decade. Today,
                Deep Relief Therapy stands for authentic healing, improved
                performance, and long-term well-being for individuals serious
                about their health.
              </p>
            </div>

            {/* Action Buttons Module */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-start items-center w-full">
              {/* ✅ UPDATED: Link points straight to the dynamic form block anchor anchor */}
              <Link
                href="/contact#appointment-form"
                className={`${nexaHeavy.className} inline-flex min-w-[180px] items-center justify-center bg-[#2d4a36] px-6 py-3.5 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-emerald-900 shadow-md text-center rounded-sm w-full sm:w-auto`}
              >
                Book An Appointment
              </Link>

              <Link
                href="/#therapies"
                className={`${nexaHeavy.className} inline-flex min-w-[180px] items-center justify-center border border-emerald-900/30 bg-transparent px-6 py-3.5 text-xs uppercase tracking-[0.22em] text-emerald-900 transition-colors hover:bg-[#2d4a36] hover:text-white hover:border-[#2d4a36] shadow-sm text-center rounded-sm w-full sm:w-auto`}
              >
                Explore Therapies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
