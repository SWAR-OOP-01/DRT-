"use client";

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

const designedFor = [
  "Individuals with chronic fatigue & low energy",
  "Sedentary lifestyle profiles under constant structural stress",
  "People experiencing persistent digestive discomfort or bloating",
  "Those with water retention & lower body heaviness imbalances",
  "Professionals with erratic eating patterns and high-stress routines",
  "Anyone seeking premium preventive wellness and internal organ maintenance",
];

const benefits = {
  Systemic: [
    "Supports baseline natural internal organ detoxification mechanics",
    "Reverses persistent feelings of physical sluggishness and body heaviness",
    "Significantly optimizes everyday energetic thresholds and physical freshness",
  ],
  Digestive: [
    "Promotes optimal system tracking for internal absorption and clean elimination",
    "Mitigates functional fluid stagnation, reducing bloating and water retention metrics",
    "Fosters high lifestyle and baseline hydration habit awareness",
  ],
  "Long-Term Maintenance": [
    "Provides restorative space to lower toxic overload strain across filtration systems",
    "Cultivates disciplined daily wellness maintenance recommendations",
    "Supports overall biological well-being and organ-balance longevity",
  ],
};

const protocolSteps = [
  [
    "Step 1",
    "Wellness Consultation: Deep analysis tracking lifestyle habits, baseline stress, hydration, and sleep quality markers.",
  ],
  [
    "Step 2",
    "Body & Lifestyle Awareness: Essential coaching on micro-nutrition alignment, structural mechanics, and systemic balance.",
  ],
  [
    "Step 3",
    "Cleansing Support Protocol: Deployment of traditional non-invasive wellness strategies to optimize elimination pathways.",
  ],
  [
    "Step 4",
    "Kidney Cleansing Support: Integration of specific botanical decoctions utilizing corn silk, parsley leaves, or watermelon seed extractions.",
  ],
  [
    "Step 5",
    "Liver & Digestive Care: Targeted lifestyle adjustments and customized sequencing focusing on lower-torso visceral comfort.",
  ],
  [
    "Step 6",
    "Recovery & Longevity Mapping: Structuring explicit ongoing hydration targets, optimal rest schedules, and long-term habits.",
  ],
];

const focusAreas = [
  "Kidney Wellness Support",
  "Liver Wellness Support",
  "Digestive System Support",
  "Hydration Balance",
  "Natural Elimination Processes",
  "Lifestyle Correction",
  "Energy & Recovery Support",
  "Stress Reduction Support",
  "Body Freshness & Vitality",
  "Wellness Maintenance",
  "Preventive Lifestyle Awareness",
  "Overall Body Balance",
];

export default function LkcTherapyPage() {
  return (
    <SiteShell>
      {/* --- Section 1: Hero Section --- */}
      <section className="w-full flex flex-col justify-center items-center bg-cream px-6 pt-20 sm:pt-24 md:pt-28 pb-6 select-none">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 text-center">
          <Link
            href="/#therapies"
            className={`${nexaHeavy.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-emerald-800`}
          >
            <ArrowLeft className="size-4" /> Back to Therapies
          </Link>

          <div className="flex flex-col items-center gap-1.5 mt-1">
            <Image
              src="/drt-emblem-green.png"
              alt="Deep Relief Therapy internal care emblem"
              width={72}
              height={72}
              className="h-12 w-auto object-contain"
            />
            <p
              className={`${nexaHeavy.className} text-xs uppercase tracking-[0.35em] text-emerald-800 pl-[0.35em]`}
            >
              LKC Therapy
            </p>
          </div>

          <div className="max-w-4xl">
            <h1
              className={`${newYorkSerif.className} text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-foreground text-balance tracking-wide`}
            >
              Liver Kidney Cleansing Therapy
            </h1>
            <div className="mx-auto mt-3 h-px w-16 bg-emerald-800/40" />
          </div>

          <div className="max-w-3xl flex flex-col items-center gap-3">
            <p
              className={`${newYorkSerif.className} text-xl sm:text-2xl italic text-emerald-800`}
            >
              Feel REJUVENATED from within.
            </p>
            <p
              className={`${nexaExtraLight.className} font-normal text-base sm:text-lg leading-relaxed text-slate-800 max-w-2xl`}
            >
              Modern lifestyles, processed foods, and stress can gradually stall
              your body's primary filtration organs. LKC supports these
              elimination systems through tailored non-invasive protocols and
              traditional wellness metrics.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Split Card Block --- */}
      <section className="bg-background py-6 sm:py-10">
        <div className="mx-auto max-w-6xl w-full px-6 lg:px-12">
          <div className="overflow-hidden rounded-[1.75rem] bg-white/80 shadow-[0_18px_60px_rgba(24,24,24,0.07)] border border-gold/10">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[300px] sm:min-h-[380px] bg-[#f8f5ee] flex items-center justify-center p-8">
                <img
                  src="/images/liver.jpg"
                  alt="Minimalist botanical illustration"
                  className="h-full max-h-[300px] w-auto object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p
                  className={`${nexaHeavy.className} text-[10px] uppercase tracking-[0.28em] text-emerald-800`}
                >
                  A restorative setting
                </p>
                <h2
                  className={`${newYorkSerif.className} mt-3 text-3xl sm:text-4xl font-light text-foreground leading-snug`}
                >
                  Addressing internal functional overload before dysfunction
                  sets in.
                </h2>
                <p
                  className={`${nexaExtraLight.className} font-normal mt-5 max-w-xl text-base leading-relaxed text-slate-800`}
                >
                  When your primary filters are clear, your cells recover
                  faster, digestion lightens, and metabolic vitality increases.
                  This strategy focuses strictly on deep internal rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Expandable Block Layout Matrix --- */}
      <section className="bg-background border-t border-gold/5">
        <div className="mx-auto max-w-4xl px-6 pt-8 pb-16 space-y-4">
          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={1} title="Why This Therapy Is Vital">
              <p
                className={`${nexaExtraLight.className} font-normal text-sm sm:text-base leading-relaxed text-slate-800 whitespace-pre-line mt-3`}
              >
                Environmental toxins, environmental pollution, processed food
                ingestion, chronic psychological stress, and physical stagnation
                introduce metabolic load over baseline physiology. When the
                liver, kidneys, and digestive channels get overloaded, waste
                accumulates.
                {"\n\n"}
                LKC Therapy targets these precise areas with intentional
                non-invasive supportive strategies to accelerate toxin clearance
                and lighten overall systemic weight safely.
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
                    className={`${nexaExtraLight.className} font-normal flex gap-3 text-sm sm:text-base leading-relaxed text-slate-800 align-top`}
                  >
                    <span className="mt-2.5 block size-1 shrink-0 bg-emerald-800 rounded-full" />
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
                      className={`${nexaHeavy.className} text-[10px] uppercase tracking-[0.22em] text-emerald-800`}
                    >
                      {group}
                    </h4>
                    <ul className="mt-5 space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className={`${nexaExtraLight.className} font-normal text-sm leading-relaxed text-slate-800 border-b border-gold/5 pb-2`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p
                className={`${nexaExtraLight.className} font-normal mt-8 text-[10px] italic text-muted-ink/60 leading-normal`}
              >
                Note: This therapy is intended strictly to support natural
                wellness processes. DRT wellness services are not meant to
                diagnose, clinically treat, or substitute medical prescriptions.
              </p>
            </ExpandBlock>
          </div>

          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={4} title="Therapy Structure">
              <div className="max-w-3xl mt-3">
                <ol className="border-l border-emerald-800/25">
                  {protocolSteps.map(([step, interpretation]) => (
                    <li key={step} className="relative pb-5 pl-5 last:pb-0">
                      <span className="absolute -left-[3.5px] top-2 block size-1.5 rounded-full bg-emerald-800" />
                      <span
                        className={`${nexaHeavy.className} block text-[10px] uppercase tracking-[0.18em] text-emerald-800`}
                      >
                        {step}
                      </span>
                      <span
                        className={`${nexaExtraLight.className} font-normal mt-1 block text-xs sm:text-sm text-slate-800 leading-relaxed`}
                      >
                        {interpretation}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </ExpandBlock>
          </div>

          <div
            className={`${newYorkSerif.className} text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-slate-900`}
          >
            <ExpandBlock index={5} title="Focus Areas">
              <div className="flex flex-wrap gap-2 mt-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className={`${nexaHeavy.className} border border-emerald-800/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-emerald-800 bg-cream/10`}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </ExpandBlock>
          </div>

          {/* Invitation Booking Module */}
          <div className="mt-10 text-center pt-2">
            <Link
              href="/contact"
              className={`${nexaHeavy.className} inline-block bg-[#2d4a36] px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-emerald-900 shadow-md`}
            >
              Book Your LKC Session
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
