"use client";

import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
});

export function AnnouncementBar({ isHome = false }: { isHome?: boolean }) {
  return (
    <div className="w-full bg-[#0c110a] text-cream/80 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2.5">
        <p
          className={`${nexaExtraLight.className} text-center text-[10px] font-light uppercase tracking-[0.25em] sm:text-[11px]`}
        >
          Mon &ndash; Sat: 9 AM &ndash; 6 PM
          <span className={`${nexaHeavy.className} mx-3 text-gold`}>
            &bull;
          </span>
          helpdesk@thedrt.in
        </p>
      </div>
    </div>
  );
}
