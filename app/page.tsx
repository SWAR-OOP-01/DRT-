"use client";

import { SiteShell } from "@/components/site-shell";
import { Hero } from "@/components/home/hero";
import { BrandIdentity } from "@/components/home/brand-identity";
import { CorePillars } from "@/components/home/core-pillars";
import { TherapyCatalogue } from "@/components/therapy-catalogue";
import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
});

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <BrandIdentity />
      <CorePillars />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @font-face {
          font-family: 'UltimateNewYork';
          src: url('/fonts/NewYork-PersonalUse.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        .force-editorial-serif {
          font-family: 'UltimateNewYork', Georgia, serif !important;
          font-weight: 400 !important;
          text-transform: none !important;
          font-style: normal !important;
          line-height: 1.15 !important;
          letter-spacing: -0.01em !important;
        }
      `,
        }}
      />

      <section
        id="therapies"
        className="w-full bg-cream-deep pt-24 lg:pt-28 overflow-hidden"
      >
        <div className="w-full pl-6 sm:pl-16 lg:pl-24 pr-6 lg:pr-12 pb-14">
          <div className="max-w-5xl">
            <p
              className={`${nexaHeavy.className} text-sm font-semibold uppercase tracking-[0.35em] text-gold`}
            >
              The Catalogue
            </p>

            {/* Changed from force-editorial-serif to nexaHeavy */}
            <h2
              className={`${nexaHeavy.className} mt-6 text-2xl sm:text-3xl lg:text-4xl text-forest text-balance`}
            >
              Seven therapies, each a deliberate reset
            </h2>

            <p
              className={`${nexaExtraLight.className} mt-8 max-w-3xl text-base md:text-lg leading-relaxed md:leading-9 text-muted-ink font-light tracking-wide`}
            >
              Select a therapy to reveal its{" "}
              <strong>full philosophy, design and focus</strong>. Every detail
              is considered — <strong>nothing is left to chance</strong>.
            </p>
          </div>
        </div>

        <TherapyCatalogue />
      </section>
    </SiteShell>
  );
}
