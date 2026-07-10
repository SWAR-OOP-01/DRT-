"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ExpandBlock } from "@/components/retreat/expand-block";
import localFont from "next/font/local";

// ✅ LOCAL FONT CONFIGURATIONS WITH RESOLVED PATHS
const nexaHeavy = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../fonts/Nexa-ExtraLight.ttf",
});

const newYorkSerif = localFont({
  src: "../../public/fonts/NewYork-PersonalUse.otf",
});

const designedFor = [
  "IT professionals",
  "Entrepreneurs",
  "Those experiencing burnout",
  "Anyone under chronic stress",
];

const benefits = {
  Physical: [
    "Deep muscular relaxation",
    "Restored sleep rhythm",
    "Renewed physical energy",
  ],
  Mental: [
    "Clarity & sharper focus",
    "Reduced mental overload",
    "Freedom from screen fatigue",
  ],
  "Emotional & Spiritual": [
    "Emotional release",
    "Inner stillness",
    "Reconnection with self & nature",
  ],
};

const day1 = [
  ["4:00 PM", "Arrival & grounding welcome"],
  ["5:00 PM", "Guided nature walk & breathwork"],
  ["6:30 PM", "Sunset meditation by the dam"],
  ["8:00 PM", "Nourishing communal dinner"],
  ["9:30 PM", "Restorative therapy & nature sleep"],
];

const day2 = [
  ["5:30 AM", "Sunrise silence & stillness"],
  ["7:00 AM", "Movement & mindful flow"],
  ["8:30 AM", "Mindful breakfast"],
  ["9:30 AM", "Integration & reflection circle"],
  ["11:00 AM", "Conclusion & departure"],
];

const focusAreas = [
  "Mind",
  "Body",
  "Soul",
  "Nature",
  "Breath",
  "Stillness",
  "Digital Detox",
  "Reflection",
];

export default function RetreatPage() {
  return (
    <SiteShell>
      {/* --- Section 1: Top Hero Header Block --- */}
      <section className="w-full flex flex-col justify-center items-center bg-cream px-6 pt-8 pb-12 select-none">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 text-center">
          {/* Back Action Link */}
          <Link
            href="/#therapies"
            className={`${nexaHeavy.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-forest`}
          >
            <ArrowLeft className="size-4" /> Back to Therapies
          </Link>

          {/* Icon Badge Group */}
          <div className="flex flex-col items-center gap-1.5 mt-1">
            <Image
              src="/drt-emblem-green.png"
              alt="Deep Relief Therapy nature emblem"
              width={72}
              height={72}
              className="h-12 w-auto object-contain"
            />
            <p
              className={`${nexaHeavy.className} text-xs uppercase tracking-[0.35em] text-forest pl-[0.35em]`}
            >
              RCN Therapy
            </p>
          </div>

          {/* Master Headings Matrix (New York Serif) */}
          <div className="max-w-4xl">
            <h1
              className={`${newYorkSerif.className} text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-foreground text-balance tracking-wide`}
            >
              Re Connect to Nature Therapy
            </h1>
            <div className="mx-auto mt-3 h-px w-16 bg-forest/40" />
          </div>

          {/* Expanded Core Prose & Description */}
          <div className="max-w-3xl flex flex-col items-center gap-3">
            <p
              className={`${newYorkSerif.className} text-2xl sm:text-3xl italic text-forest`}
            >
              20-Hour Mind &bull; Body &bull; Soul Reset
            </p>
            <p
              className={`${nexaExtraLight.className} text-base sm:text-lg font-normal leading-relaxed text-slate-800 max-w-2xl`}
            >
              A guided retreat at Pawana Dam Resort — a journey back to
              yourself, far from screens, noise and mental overload.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Split Informational Card Frame --- */}
      <section className="bg-background py-6 sm:py-10 flex items-center">
        <div className="mx-auto max-w-6xl w-full px-6 lg:px-12">
          <div className="overflow-hidden rounded-[1.75rem] bg-white/80 shadow-[0_18px_60px_rgba(24,24,24,0.07)] border border-gold/10">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[300px] sm:min-h-[380px]">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                  alt="A peaceful retreat surrounded by nature"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/25 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p
                  className={`${nexaHeavy.className} text-[10px] uppercase tracking-[0.28em] text-forest`}
                >
                  A restorative setting
                </p>
                <h2
                  className={`${newYorkSerif.className} mt-3 text-3xl sm:text-4xl font-light text-foreground leading-snug`}
                >
                  Nature becomes part of the therapy itself.
                </h2>
                <p
                  className={`${nexaExtraLight.className} font-normal mt-5 max-w-xl text-base leading-relaxed text-slate-800`}
                >
                  The retreat is built to slow the nervous system, quiet the
                  mind, and anchor you in stillness through water, wind, light
                  and space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Core Expand Matrix Content --- */}
      <section className="bg-background border-t border-gold/5">
        <div className="mx-auto max-w-4xl px-6 pt-6 pb-12 space-y-4">
          {/* ✅ MATCHED LKC DESIGN: Converted block header wrappers to use newYorkSerif styling strings */}
          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={1} title="Why This Retreat Exists">
              <p
                className={`${nexaExtraLight.className} font-normal text-base leading-relaxed text-slate-800 whitespace-pre-line mt-4 tracking-normal`}
              >
                We live saturated by screens and stretched by relentless mental
                demands. Over time, this constant stimulation frays focus,
                drains energy and quietly disconnects us from our own bodies.
                RCN exists as a deliberate counterpoint — a guided therapeutic
                reset in nature that lets the nervous system fully unwind, so
                you return to daily life clear, restored and reconnected.
              </p>
            </ExpandBlock>
          </div>

          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={2} title="Who It Is Designed For">
              <ul className="grid max-w-3xl gap-4 sm:grid-cols-2 mt-4">
                {designedFor.map((item) => (
                  <li
                    key={item}
                    className={`${nexaExtraLight.className} font-normal flex gap-3 text-base leading-relaxed text-slate-800 align-top tracking-normal`}
                  >
                    <span className="mt-2.5 block size-1 shrink-0 bg-forest rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ExpandBlock>
          </div>

          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={3} title="Benefits Matrix">
              <div className="grid gap-10 md:grid-cols-3 mt-4">
                {Object.entries(benefits).map(([group, items]) => (
                  <div key={group}>
                    <h4
                      className={`${nexaHeavy.className} text-[10px] uppercase tracking-[0.22em] text-forest`}
                    >
                      {group}
                    </h4>
                    <ul className="mt-5 space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className={`${nexaExtraLight.className} font-normal text-sm leading-relaxed text-slate-800 border-b border-gold/5 pb-2 tracking-normal`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ExpandBlock>
          </div>

          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={4} title="Retreat Structure">
              <div className="grid gap-12 md:grid-cols-2 mt-4">
                {[
                  { label: "Day 1", items: day1 },
                  { label: "Day 2", items: day2 },
                ].map((day) => (
                  <div key={day.label}>
                    <h4
                      className={`${nexaHeavy.className} text-[10px] uppercase tracking-[0.22em] text-forest`}
                    >
                      {day.label}
                    </h4>
                    <ol className="mt-6 border-l border-forest/25">
                      {day.items.map(([time, activity]) => (
                        <li key={time} className="relative pb-7 pl-6 last:pb-0">
                          <span className="absolute -left-[3.5px] top-2 block size-1.5 rounded-full bg-forest" />
                          <span
                            className={`${nexaHeavy.className} block text-[10px] uppercase tracking-[0.18em] text-emerald-800/70`}
                          >
                            {time}
                          </span>
                          <span
                            className={`${nexaExtraLight.className} font-normal mt-1 block text-sm text-slate-800 leading-relaxed tracking-normal`}
                          >
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </ExpandBlock>
          </div>

          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={5} title="Focus Areas">
              <div className="flex flex-wrap gap-2.5 mt-4">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className={`${nexaHeavy.className} border border-forest/20 px-4 py-2 text-[9px] uppercase tracking-[0.18em] text-forest bg-cream/10`}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </ExpandBlock>
          </div>

          {/* Action Booking Module */}
          <div className="mt-12 text-center pt-4">
            <Link
              href="/contact"
              className={`${nexaHeavy.className} inline-block bg-forest px-10 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-emerald-900 shadow-md`}
            >
              Reserve Your Retreat
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
