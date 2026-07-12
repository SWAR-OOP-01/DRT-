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

// const newYorkSerif = localFont({
//   src: "../fonts/Nexa-Heavy.ttf",
// });

const lkcImages = ["/images/1000442045.jpg", "/images/1000442110.png"];

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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % lkcImages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <SiteShell>
      {/* Dynamic Style Injection Layer to strictly enforce properties across the entire layout hierarchy */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .lkc-page-container .font-nexa-heavy-text {
          font-family: ${nexaHeavy.style.fontFamily} !important;
          font-weight: 700 !important;
        }

        .lkc-page-container .font-nexa-light-text,
        .lkc-page-container p:not(.font-nexa-heavy-text),
        .lkc-page-container li:not(.font-nexa-heavy-text),
        .lkc-page-container span:not(.font-nexa-heavy-text),
        .lkc-page-container a:not(.font-nexa-heavy-text) {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.6px !important;
          line-height: 39px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        .lkc-page-container strong {
          font-family: ${nexaHeavy.style.fontFamily} !important;
          font-weight: 700 !important;
          color: inherit !important;
        }
      `,
        }}
      />

      <div className="lkc-page-container w-full bg-background">
        {/* --- Section 1: Hero Section --- */}
        {/* ✅ FIXED: Set min-h to fill the screen cleanly and center content vertically so it stands on its own */}
        <section className="w-full min-h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-cream px-6 py-12 select-none">
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
                alt="Deep Relief Therapy internal care emblem"
                width={72}
                height={72}
                className="h-12 w-auto object-contain"
              />
              <p className="font-nexa-heavy-text text-xs uppercase tracking-[0.35em] text-forest pl-[0.35em]">
                LKC Therapy
              </p>
            </div>

            <div className="max-w-4xl">
              <h1 className="font-nexa-heavy-text text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest tracking-wide">
                Liver Kidney Cleansing Therapy
              </h1>
              <div className="mx-auto mt-3 h-px w-16 bg-forest/40" />
            </div>

            <div className="max-w-3xl flex flex-col items-center gap-3">
              <p className="font-nexa-heavy-text text-xl sm:text-2xl text-forest">
                Feel REJUVENATED from within.
              </p>
              <p className="text-base sm:text-lg max-w-2xl">
                Modern lifestyles, processed foods, and stress can gradually
                stall your body's primary filtration organs. LKC supports these
                elimination systems through tailored non-invasive protocols and
                traditional wellness metrics.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 3: Absolute Locked Catalogue Split Layout Section --- */}
        {/* ✅ FIXED: Removed negative margins completely so it stays perfectly separated below the fold */}
        <section className="bg-background border-t border-gold/5 pt-12 pb-12 overflow-hidden">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[620px] items-stretch">
              {/* Left Column Box: Hard Fixed Image Container Frame */}
              <div className="w-full h-full min-h-[400px] lg:min-h-0 rounded-[1.75rem] overflow-hidden border border-gold/15 bg-[#D9F4DF] shadow-[0_20px_50px_rgba(15,23,42,0.04)] relative flex items-center justify-center">
                {lkcImages.map((img, i) => (
                  <div
                    key={img}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                      i === activeImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt="LKC therapy dashboard presentation layout"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-[#2d4a36]/5 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Right Column Box: Combined Text Content & Bottom Button Blueprint */}
              <div className="w-full h-full flex flex-col justify-between overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar mb-6">
                  <div
                    className={`${nexaHeavy.className} text-xl sm:text-2xl font-light tracking-wide text-slate-900`}
                  >
                    <ExpandBlock index={1} title="Why This Therapy Is Vital">
                      <p className="text-base sm:text-lg whitespace-pre-line mt-3">
                        Environmental toxins, environmental pollution, processed
                        food ingestion, chronic psychological stress, and
                        physical stagnation introduce metabolic load over
                        baseline physiology. When the liver, kidneys, and
                        digestive channels get overloaded, waste accumulates.
                        {"\n\n"}
                        LKC Therapy targets these precise areas with intentional
                        non-invasive supportive strategies to accelerate toxin
                        clearance and lighten overall systemic weight safely.
                      </p>
                    </ExpandBlock>
                  </div>

                  <div
                    className={`${nexaHeavy.className} text-xl sm:text-2xl font-light tracking-wide text-slate-900`}
                  >
                    <ExpandBlock index={2} title="Who It Is Designed For">
                      <ul className="grid gap-3 sm:grid-cols-1 mt-4">
                        {designedFor.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-base sm:text-lg align-top"
                          >
                            <span className="mt-4 block size-1.5 shrink-0 bg-forest rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </ExpandBlock>
                  </div>

                  <div
                    className={`${nexaHeavy.className} text-xl sm:text-2xl font-light tracking-wide text-slate-900`}
                  >
                    <ExpandBlock index={3} title="Benefits Matrix">
                      <div className="grid gap-5 sm:grid-cols-1 mt-4">
                        {Object.entries(benefits).map(([group, items]) => (
                          <div
                            key={group}
                            className="border-b border-gold/5 pb-4 last:border-0"
                          >
                            <h4 className="font-nexa-heavy-text text-xs uppercase tracking-[0.22em] text-forest font-bold">
                              {group}
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {items.map((item) => (
                                <li key={item} className="text-base sm:text-lg">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <p className="mt-5 text-[10px] italic text-muted-ink/60 leading-normal">
                        Note: This therapy is intended strictly to support
                        natural wellness processes. DRT wellness services are
                        not meant to diagnose, clinically treat, or substitute
                        medical prescriptions.
                      </p>
                    </ExpandBlock>
                  </div>

                  <div
                    className={`${nexaHeavy.className} text-xl sm:text-2xl font-light tracking-wide text-slate-900`}
                  >
                    <ExpandBlock index={4} title="Therapy Structure">
                      <div className="mt-4">
                        <ol className="border-l border-forest/25">
                          {protocolSteps.map(([step, interpretation]) => (
                            <li
                              key={step}
                              className="relative pb-5 pl-5 last:pb-0"
                            >
                              <span className="absolute -left-[3.5px] top-4 block size-1.5 rounded-full bg-forest" />
                              <span className="font-nexa-heavy-text block text-xs uppercase tracking-[0.18em] text-forest font-bold">
                                {step}
                              </span>
                              <span className="mt-1 block text-base sm:text-lg">
                                {interpretation}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </ExpandBlock>
                  </div>

                  <div
                    className={`${nexaHeavy.className} text-xl sm:text-2xl font-light tracking-wide text-slate-900`}
                  >
                    <ExpandBlock index={5} title="Focus Areas">
                      <div className="flex flex-wrap gap-2 mt-4">
                        {focusAreas.map((area) => (
                          <span
                            key={area}
                            className="font-nexa-heavy-text border border-forest/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-forest bg-cream/10 font-bold"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </ExpandBlock>
                  </div>
                </div>

                <div className="text-center w-full pt-2 border-t border-gold/5 shrink-0">
                  <Link
                    href="/contact?therapy=LKC+Therapy#appointment-form"
                    className="font-nexa-heavy-text inline-block w-full bg-[#2d4a36] py-4 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-emerald-900 shadow-md rounded-full"
                  >
                    Book Your LKC Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
