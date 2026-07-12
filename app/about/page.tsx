"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import localFont from "next/font/local";

// ✅ LOCAL FONT CONFIGURATIONS
const nexaHeavy = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../fonts/Nexa-ExtraLight.ttf",
});

const newYorkSerif = localFont({
  src: "../fonts/Nexa-Heavy.ttf",
});

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Dynamic Style Injection Layer to strictly enforce properties across the entire layout hierarchy */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .about-page-container .font-nexa-heavy-text {
          font-family: ${nexaHeavy.style.fontFamily} !important;
          font-weight: 700 !important;
        }

        .about-page-container .font-nexa-light-text,
        .about-page-container p:not(.font-nexa-heavy-text),
        .about-page-container li:not(.font-nexa-heavy-text),
        .about-page-container span:not(.font-nexa-heavy-text),
        .about-page-container a:not(.font-nexa-heavy-text) {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.6px !important;
          line-height: 39px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
        }

        .about-page-container strong {
          font-family: ${nexaHeavy.style.fontFamily} !important;
          font-weight: 700 !important;
          color: inherit !important;
        }
      `,
        }}
      />

      <div className="about-page-container w-full bg-background">
        {/* --- Section 1: Hero Section --- */}
        <section className="w-full min-h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-cream px-6 pt-6 sm:pt-8 pb-4 select-none">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 text-center">
            <Link
              href="/"
              className="font-nexa-heavy-text inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-ink transition-colors hover:text-forest"
            >
              <ArrowLeft className="size-4" /> Back to Home
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
                Our Inspiration
              </p>
            </div>

            <div className="max-w-4xl">
              <h1 className="font-nexa-heavy-text text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest tracking-wide">
                Deep Relief Therapy
              </h1>
              <div className="mx-auto mt-3 h-px w-16 bg-forest/40" />
            </div>

            <div className="max-w-3xl flex flex-col items-center gap-3">
              <p className="font-nexa-heavy-text text-xl sm:text-2xl text-forest">
                Awaken &bull; Reconnect &bull; Heal
              </p>
              <p className="text-base sm:text-lg max-w-2xl">
                A therapeutic healing platform engineered strictly for
                sustainable bodily restoration, chronic stress relief, and
                muscular optimization.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 2: Side-by-Side Split Layout --- */}
        <section className="bg-background border-t border-gold/5 pt-12 pb-12 overflow-hidden">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[620px] items-stretch">
              {/* Left Column: Image Frame */}
              <div className="w-full h-full min-h-[400px] lg:min-h-0 rounded-[1.75rem] overflow-hidden border border-gold/15 bg-[#D9F4DF] shadow-[0_20px_50px_rgba(15,23,42,0.04)] relative flex items-center justify-center">
                <Image
                  src="/images/drt sir.jpg"
                  alt="Manas Jadhav - Founder of Deep Relief Therapy"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-[#2d4a36]/5 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Right Column: Scrollable Details + Sticky Booking Button Panel */}
              <div className="w-full h-full flex flex-col justify-between overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar mb-6">
                  <div className="w-full text-left">
                    <h2 className="font-nexa-heavy-text text-base sm:text-lg uppercase tracking-wider text-[#2C5E3F] mb-4">
                      OUR INSPIRATION
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg">
                      <p>
                        Deep Relief Therapy was born not from a business plan,
                        but from observation, experience, and a quiet
                        dissatisfaction with how pain was being treated. Founded
                        in 2015 by Manas Jadhav, Deep Relief Therapy began with
                        a clear intention—to address pain, stiffness, and
                        postural issues at their root, not just mask symptoms.
                      </p>
                      <p>
                        With over a decade of experience in massage therapy,
                        fitness training, and healthcare management, he observed
                        that most people functioned through discomfort without
                        real recovery. He is certified and has experience as a
                        personal trainer and sports nutritionist. He holds 25+
                        certifications, including 10+ international
                        certifications in massage therapy and 15+ national
                        massage training certifications, covering different
                        types of massage & manual therapy.
                      </p>
                      <p>
                        He is also a practitioner of holistic methods such as
                        meditation, pranayama & nature healing over a decade.
                        Today, Deep Relief Therapy stands for authentic healing,
                        improved performance, and long-term well-being for
                        individuals serious about their health.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sticky Split Layout Action Hub Button Panel */}
                <div className="w-full pt-2 border-t border-gold/5 shrink-0 flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    href="/contact#appointment-form"
                    className="font-nexa-heavy-text inline-block w-full bg-[#2d4a36] py-4 text-center text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-emerald-900 shadow-md rounded-full sm:flex-1"
                  >
                    Book An Appointment
                  </Link>
                  <Link
                    href="/#therapies"
                    className="font-nexa-heavy-text inline-block w-full border border-forest/30 text-forest bg-transparent py-4 text-center text-xs uppercase tracking-[0.22em] transition-colors hover:bg-[#2d4a36] hover:text-white shadow-md rounded-full sm:flex-1"
                  >
                    Explore Therapies
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
