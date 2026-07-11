"use client";

import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import localFont from "next/font/local";

// ✅ LOCAL FONT CONFIGURATIONS MATCHING YOUR APPLICATION DESIGN
const nexaHeavy = localFont({
  src: "../../app/fonts/Nexa-Heavy.ttf",
});

interface ExpandBlockProps {
  index: number;
  title: string;
  children: ReactNode;
}

export function ExpandBlock({ index, title, children }: ExpandBlockProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Pad numbers with a leading zero (e.g., 1 becomes 01)
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className="border-b border-gold/15 py-4 last:border-none">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <div className="flex items-center gap-6">
          {/* ✅ UPDATED: Index numbers rendering with Nexa font */}
          <span
            className={`${nexaHeavy.className} text-sm sm:text-base tracking-wider text-forest/60 transition-colors group-hover:text-forest`}
          >
            {formattedIndex}
          </span>

          {/* ✅ UPDATED: Main title strings rendering with Nexa font */}
          <h3
            className={`${nexaHeavy.className} text-base sm:text-lg lg:text-xl uppercase tracking-wider text-slate-900 transition-colors group-hover:text-forest`}
          >
            {title}
          </h3>
        </div>

        <span className="text-forest shrink-0 ml-4 transition-transform duration-300">
          {isOpen ? (
            <Minus className="size-4 md:size-5" />
          ) : (
            <Plus className="size-4 md:size-5" />
          )}
        </span>
      </button>

      {/* Accordion expand layer content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-12 pb-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
