"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { therapies as originalTherapies, type Therapy } from "@/lib/therapies";
import { BrandQR } from "@/components/brand-qr";
import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
  weight: "800",
  style: "normal",
  display: "swap",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
  weight: "200",
  style: "normal",
  display: "swap",
});

// Dynamically filter out "Pawana Dam" mentions from text strings
const cleanText = (text: string) => {
  return text.replace(/\s*at pawana dam\s*(resort)?/gi, "").trim();
};

// Sort therapies to place Pain Management at the end
const orderedTherapies = (() => {
  const list = [...originalTherapies];
  const painIndex = list.findIndex(
    (t) =>
      t.code.toLowerCase().includes("pain") ||
      t.name.toLowerCase().includes("pain"),
  );
  if (painIndex > -1) {
    const [painTherapy] = list.splice(painIndex, 1);
    list.push(painTherapy);
  }
  return list;
})();

const getAnchorId = (therapy: Therapy) => therapy.anchorId ?? therapy.code;

const detailSections = [
  { key: "why", label: "Why This Therapy" },
  { key: "designedFor", label: "Designed For" },
  { key: "benefits", label: "Benefits" },
  { key: "structure", label: "Structure" },
  { key: "focus", label: "Focus Area" },
] as const;

type DetailKey = (typeof detailSections)[number]["key"];

// Extracted typography constant to eliminate framework class pollution safely
const nexaLightStyle: React.CSSProperties = {
  letterSpacing: "0.6px",
  lineHeight: "1.8",
  color: "#333333",
};

function TherapyListItem({ text }: { text: string }) {
  return (
    <li className="relative flex items-start gap-2 py-2 border-b border-gold/10 last:border-none">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700/60 shrink-0 mt-3" />

      <span
        className={`${nexaExtraLight.className} block flex-1 text-sm`}
        style={nexaLightStyle}
      >
        {cleanText(text)}
      </span>
    </li>
  );
}

function ExpandedTherapyDetails({
  therapy,
  prevTherapy,
  nextTherapy,
}: {
  therapy: Therapy;
  prevTherapy: Therapy;
  nextTherapy: Therapy;
}) {
  const [detailKey, setDetailKey] = useState<DetailKey>("why");
  const itemCode = therapy.code.toLowerCase();
  const isLkc = itemCode === "lkc" || itemCode === "lkc-therapy";
  const isHns = itemCode === "hns" || itemCode === "hns-therapy";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mt-4 w-full border-t border-gold/10 pt-4 flex flex-col justify-between flex-1 min-h-0">
      <div className="flex flex-col min-h-0 flex-1">
        <div className="flex flex-wrap gap-1.5 pb-2">
          {detailSections.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => setDetailKey(section.key)}
              className={`${nexaHeavy.className} rounded-full border px-3.5 py-1 text-[10px] sm:text-xs uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer ${
                detailKey === section.key
                  ? "border-gold bg-gold text-charcoal shadow-sm"
                  : "border-gold/20 text-muted-ink hover:border-gold hover:text-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="mt-2 pr-2 overflow-y-auto flex-1 max-h-[220px] scrollbar-thin scrollbar-thumb-gold/30 scrollbar-track-transparent">
          {detailKey === "why" ? (
            <p
              className={`${nexaExtraLight.className} text-sm md:text-base whitespace-pre-line`}
              style={nexaLightStyle}
            >
              {cleanText(therapy.details.why)}
            </p>
          ) : (
            <ul
              className={`${nexaExtraLight.className} grid gap-x-6 gap-y-0.5 sm:grid-cols-2 items-start`}
            >
              {(therapy.details[detailKey] as string[]).map((item) => (
                <TherapyListItem key={item} text={item} />
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-4 shrink-0">
        {isHns && (
          <div className="mb-4 text-left animate-pulse bg-red-50/60 border-l-4 border-red-500 p-3 rounded-r-md">
            <p
              className={`${nexaHeavy.className} text-red-600 text-sm font-bold tracking-wide uppercase`}
            >
              Enjoy Your First HNS Therapy FREE..!
            </p>
            <p
              className={`${nexaExtraLight.className} text-xs mt-0.5`}
              style={nexaLightStyle}
            >
              Tap on exiting offers to know more...
            </p>
          </div>
        )}

        <div className="flex flex-col gap-4 border-t border-gold/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-xl border border-gold/10 shadow-sm shrink-0">
              <BrandQR
                value={
                  therapy.qrValue ??
                  `https://deeprelieftherapy.com/contact?therapy=${encodeURIComponent(cleanText(therapy.name))}#appointment-form`
                }
                size={56}
              />
            </div>
            <p
              className={`${nexaExtraLight.className} max-w-[150px] text-[10px] uppercase`}
              style={nexaLightStyle}
            >
              Scan to book your therapy session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:justify-end shrink-0 w-full sm:w-auto">
            {therapy.retreatLink && (
              <Link
                href="/retreat"
                className={`${nexaHeavy.className} inline-flex min-w-[120px] items-center justify-center gap-1 text-[10px] uppercase tracking-[0.12em] text-charcoal border border-charcoal/30 rounded-full px-4 py-2.5 transition hover:bg-charcoal hover:text-white`}
              >
                The Retreat <ArrowUpRight className="size-3" />
              </Link>
            )}

            {isLkc && (
              <Link
                href="/lkc-therapy"
                className={`${nexaHeavy.className} inline-flex min-w-[120px] items-center justify-center gap-1 text-[10px] uppercase tracking-[0.12em] text-charcoal border border-charcoal/30 rounded-full px-4 py-2.5 transition hover:bg-charcoal hover:text-white`}
              >
                LKC Therapy <ArrowUpRight className="size-3" />
              </Link>
            )}

            <Link
              href={`/contact?therapy=${encodeURIComponent(cleanText(therapy.name))}#appointment-form`}
              className={`${nexaHeavy.className} inline-flex min-w-[120px] items-center justify-center gap-1 text-[10px] uppercase tracking-[0.12em] text-white bg-gold rounded-full px-4 py-2.5 transition shadow-md hover:opacity-90`}
            >
              Book Session <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-gold/5 flex flex-row items-center justify-between w-full">
          <a
            href={`#${getAnchorId(prevTherapy)}`}
            onClick={(e) => handleSmoothScroll(e, getAnchorId(prevTherapy))}
            className={`${nexaExtraLight.className} text-[10px] sm:text-xs uppercase transition-colors duration-200`}
            style={nexaLightStyle}
          >
            Previous option:{" "}
            <span
              className={`${nexaHeavy.className} text-emerald-800 font-semibold ml-1`}
              style={{ color: "inherit" }}
            >
              {cleanText(prevTherapy.name)}
            </span>
          </a>

          <a
            href={`#${getAnchorId(nextTherapy)}`}
            onClick={(e) => handleSmoothScroll(e, getAnchorId(nextTherapy))}
            className={`${nexaExtraLight.className} text-[10px] sm:text-xs uppercase transition-colors duration-200`}
            style={nexaLightStyle}
          >
            Next option:{" "}
            <span
              className={`${nexaHeavy.className} text-emerald-800 font-semibold ml-1`}
              style={{ color: "inherit" }}
            >
              {cleanText(nextTherapy.name)}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function TherapyRow({ therapy, index }: { therapy: Therapy; index: number }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const prevIndex =
    (index - 1 + orderedTherapies.length) % orderedTherapies.length;
  const prevTherapy = orderedTherapies[prevIndex];

  const nextIndex = (index + 1) % orderedTherapies.length;
  const nextTherapy = orderedTherapies[nextIndex];

  useEffect(() => {
    if (!hovered || therapy.images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % therapy.images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [hovered, therapy.images.length]);

  useEffect(() => {
    if (open && rowRef.current) {
      setTimeout(() => {
        rowRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [open]);

  return (
    <div
      ref={rowRef}
      id={getAnchorId(therapy)}
      className="group relative border-b border-gold/15 last:border-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveImageIndex(0);
      }}
    >
      <div
        className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
          open
            ? "h-auto lg:h-[720px] bg-white shadow-[0_45px_120px_rgba(15,23,42,0.14)]"
            : "min-h-[160px] bg-[#f2ffe5]"
        }`}
      >
        <div className="w-full h-full flex flex-col lg:flex-row items-stretch justify-between">
          <div
            className={`relative overflow-hidden transition-all duration-700 ease-in-out border-r border-gold/5 shrink-0 ${
              open
                ? "w-full lg:w-1/2 h-[40vh] lg:h-full opacity-100"
                : "w-0 h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 w-full h-full">
              {therapy.images.map((img, i) => {
                const itemCode = therapy.code.toLowerCase();
                const needsContainment =
                  itemCode === "lkc" || itemCode === "hns";

                return (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      i === activeImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`h-full w-full bg-center bg-no-repeat transition-all ${
                        needsContainment
                          ? "bg-contain bg-[#D9F4DF] p-4"
                          : "bg-cover"
                      }`}
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
                );
              })}
              <div className="absolute inset-0 bg-[#2d4a36]/10 mix-blend-multiply" />
            </div>
          </div>

          <div
            className={`flex flex-col justify-between py-6 pr-6 lg:pr-12 transition-all duration-700 w-full ${
              open
                ? "lg:w-1/2 pl-6 lg:pl-12 lg:h-full"
                : "pl-16 lg:pl-24 min-h-[160px]"
            }`}
          >
            <div className="w-full flex flex-row items-center justify-between gap-6 shrink-0">
              <div className="flex-1 flex flex-col text-left">
                <p
                  className={`${nexaHeavy.className} text-xs sm:text-sm uppercase tracking-[0.22em] text-black`}
                >
                  {cleanText(therapy.tagline)}
                </p>

                <h3
                  className={`${nexaHeavy.className} mt-1.5 tracking-tight text-[#2d4a36] transition-all duration-500 text-balance ${
                    open
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-xl sm:text-2xl lg:text-3xl"
                  }`}
                >
                  {cleanText(therapy.name)}
                </h3>

                <p
                  className={`${nexaHeavy.className} mt-2 tracking-tight text-emerald-700 transition-all duration-500 text-balance ${
                    open
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-xl sm:text-2xl lg:text-3xl"
                  }`}
                >
                  {cleanText(therapy.hook)}
                </p>
              </div>

              <div className="shrink-0 relative z-30">
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className={`${nexaHeavy.className} inline-flex items-center justify-center gap-1.5 rounded-full border border-[#2d4a36] bg-[#2d4a36] px-4 py-2 text-[10px] uppercase tracking-widest text-white shadow-sm transition hover:opacity-90 cursor-pointer`}
                >
                  {open ? "Hide Details" : "View Details"}
                  {open ? (
                    <ChevronUp className="size-3" />
                  ) : (
                    <ChevronDown className="size-3" />
                  )}
                </button>
              </div>
            </div>

            {open && (
              <div className="w-full text-left flex-1 flex flex-col pr-2 min-h-0 overflow-hidden">
                <ExpandedTherapyDetails
                  therapy={therapy}
                  prevTherapy={prevTherapy}
                  nextTherapy={nextTherapy}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TherapyCatalogue() {
  return (
    <div className="w-full flex flex-col">
      {orderedTherapies.map((therapy, index) => (
        <TherapyRow key={therapy.code} therapy={therapy} index={index} />
      ))}
    </div>
  );
}
