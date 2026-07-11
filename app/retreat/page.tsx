"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ExpandBlock } from "@/components/retreat/expand-block";
import localFont from "next/font/local";

// ✅ LOCAL FONT CONFIGURATIONS
const nexaHeavy = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../fonts/Nexa-ExtraLight.ttf",
});

const newYorkSerif = localFont({
  src: "../../public/fonts/NewYork-PersonalUse.otf",
});

const rcnImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
];

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
  ["6:30 PM", "Sunset meditation by the water"],
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % rcnImages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <SiteShell>
      {/* --- Section 1: Hero Section --- */}
      <section className="w-full flex flex-col justify-center items-center bg-cream px-6 pt-24 sm:pt-28 pb-4 select-none">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 text-center">
          <Link
            href="/#therapies"
            className={`${nexaHeavy.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-forest`}
          >
            <ArrowLeft className="size-4" /> Back to Therapies
          </Link>

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

          <div className="max-w-4xl">
            <h1
              className={`${nexaHeavy.className} text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest tracking-wide`}
            >
              Re Connect to Nature Therapy
            </h1>
            <div className="mx-auto mt-3 h-px w-16 bg-forest/40" />
          </div>

          <div className="max-w-3xl flex flex-col items-center gap-3">
            <p
              className={`${nexaHeavy.className} text-xl sm:text-2xl text-forest`}
            >
              20-Hour Mind &bull; Body &bull; Soul Reset
            </p>
            <p
              className={`${nexaExtraLight.className} font-normal text-base sm:text-lg leading-relaxed text-slate-800 max-w-2xl`}
            >
              A guided retreat — a journey back to yourself, far from screens,
              noise and mental overload.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Side-by-Side Split Layout --- */}
      <section className="bg-background border-t border-gold/5 pt-6 pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[620px] items-stretch">
            {/* Left Column: Image Frame */}
            <div className="w-full h-full min-h-[400px] lg:min-h-0 rounded-[1.75rem] overflow-hidden border border-gold/15 bg-[#D9F4DF] shadow-[0_20px_50px_rgba(15,23,42,0.04)] relative flex items-center justify-center">
              {rcnImages.map((img, i) => (
                <div
                  key={img}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                    i === activeImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt="A peaceful retreat surrounded by nature"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-[#2d4a36]/5 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Right Column: Scrollable Details + Sticky Booking Button */}
            <div className="w-full h-full flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar mb-6">
                {/* ✅ UPDATED: Converted Title block font classes from New York Serif to Nexa Heavy */}
                <div
                  className={`${nexaHeavy.className} text-base sm:text-lg uppercase tracking-wider text-[#2C5E3F]`}
                >
                  <ExpandBlock index={1} title="Why This Retreat Exists">
                    <p
                      className={`${nexaExtraLight.className} font-normal text-base sm:text-lg leading-relaxed text-slate-800 whitespace-pre-line mt-3 tracking-normal normal-case`}
                    >
                      We live saturated by screens and stretched by relentless
                      mental demands. Over time, this constant stimulation frays
                      focus, drains energy and quietly disconnects us from our
                      own bodies.
                      {"\n\n"}
                      RCN exists as a deliberate counterpoint — a guided
                      therapeutic reset in nature that lets the nervous system
                      fully unwind, so you return to daily life clear, restored
                      and reconnected.
                    </p>
                  </ExpandBlock>
                </div>

                {/* ✅ UPDATED: Converted to Nexa Heavy option panel titles */}
                <div
                  className={`${nexaHeavy.className} text-base sm:text-lg uppercase tracking-wider text-[#2C5E3F]`}
                >
                  <ExpandBlock index={2} title="Who It Is Designed For">
                    <ul className="grid gap-3 sm:grid-cols-1 mt-4 tracking-normal normal-case">
                      {designedFor.map((item) => (
                        <li
                          key={item}
                          className={`${nexaExtraLight.className} font-normal flex gap-3 text-base sm:text-lg leading-relaxed text-slate-800 align-top`}
                        >
                          <span className="mt-2.5 block size-1.5 shrink-0 bg-forest rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ExpandBlock>
                </div>

                {/* ✅ UPDATED: Converted to Nexa Heavy option panel titles */}
                <div
                  className={`${nexaHeavy.className} text-base sm:text-lg uppercase tracking-wider text-[#2C5E3F]`}
                >
                  <ExpandBlock index={3} title="Benefits Matrix">
                    <div className="grid gap-5 sm:grid-cols-1 mt-4 tracking-normal normal-case">
                      {Object.entries(benefits).map(([group, items]) => (
                        <div
                          key={group}
                          className="border-b border-gold/5 pb-4 last:border-0"
                        >
                          <h4
                            className={`${nexaHeavy.className} text-xs uppercase tracking-[0.22em] text-forest font-bold`}
                          >
                            {group}
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {items.map((item) => (
                              <li
                                key={item}
                                className={`${nexaExtraLight.className} font-normal text-base sm:text-lg leading-relaxed text-slate-800`}
                              >
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ExpandBlock>
                </div>

                {/* ✅ UPDATED: Converted to Nexa Heavy option panel titles */}
                <div
                  className={`${nexaHeavy.className} text-base sm:text-lg uppercase tracking-wider text-[#2C5E3F]`}
                >
                  <ExpandBlock index={4} title="Retreat Structure">
                    <div className="grid gap-8 sm:grid-cols-2 mt-4 tracking-normal normal-case">
                      {[
                        { label: "Day 1", items: day1 },
                        { label: "Day 2", items: day2 },
                      ].map((day) => (
                        <div key={day.label}>
                          <h4
                            className={`${nexaHeavy.className} text-xs uppercase tracking-[0.22em] text-forest font-bold`}
                          >
                            {day.label}
                          </h4>
                          <ol className="mt-4 border-l border-forest/25">
                            {day.items.map(([time, activity]) => (
                              <li
                                key={time}
                                className="relative pb-5 pl-5 last:pb-0"
                              >
                                <span className="absolute -left-[3.5px] top-2 block size-1.5 rounded-full bg-forest" />
                                <span
                                  className={`${nexaHeavy.className} block text-xs uppercase tracking-[0.18em] text-forest font-bold`}
                                >
                                  {time}
                                </span>
                                <span
                                  className={`${nexaExtraLight.className} font-normal mt-1 block text-base sm:text-lg text-slate-800 leading-relaxed`}
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

                {/* ✅ COMPLETED: Converted to Nexa Heavy option panel titles */}
                <div
                  className={`${nexaHeavy.className} text-base sm:text-lg uppercase tracking-wider text-[#2C5E3F]`}
                >
                  <ExpandBlock index={5} title="Focus Areas">
                    <div className="flex flex-wrap gap-2 mt-4 tracking-normal normal-case">
                      {focusAreas.map((area) => (
                        <span
                          key={area}
                          className={`${nexaHeavy.className} border border-forest/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-forest bg-cream/10 font-bold`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </ExpandBlock>
                </div>
              </div>

              {/* ✅ UPDATED: Query params configured to automatically pick RCN Retreat inside inputs */}
              <div className="text-center w-full pt-2 border-t border-gold/5 shrink-0">
                <Link
                  href="/contact?therapy=RCN+Therapy#appointment-form"
                  className={`${nexaHeavy.className} inline-block w-full bg-[#2d4a36] py-4 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-emerald-900 shadow-md rounded-full`}
                >
                  Reserve Your Retreat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
