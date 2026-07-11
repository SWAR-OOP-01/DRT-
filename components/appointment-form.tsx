"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import localFont from "next/font/local";

// ✅ LOCAL FONT CONFIGURATIONS FOR THE COMPONENTS DIRECTORY
const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
});

const newYorkSerif = localFont({
  src: "../public/fonts/NewYork-PersonalUse.otf",
});

const subjects = [
  "HNS Therapy",
  "PSR Therapy",
  "MFR Therapy",
  "ADT Therapy",
  "RCN Therapy",
  "LKC Therapy",
  "Pain Management Therapy",
  "General Enquiry",
];

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

// ✅ FONT TRACKING CLASSES
const fieldClass = `w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm font-normal text-foreground placeholder:text-muted-ink/70 focus:border-gold focus:outline-none ${nexaExtraLight.className} tracking-normal`;

const labelClass = `text-[10px] font-bold uppercase tracking-[0.22em] text-muted-ink ${nexaHeavy.className}`;

export function AppointmentForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  // ✅ EFFECT LAYER: Listens to incoming search queries and autofills matching selector options
  useEffect(() => {
    const therapyParam = searchParams.get("therapy");
    if (therapyParam) {
      const matchedSubject = subjects.find(
        (s) => s.toLowerCase() === therapyParam.toLowerCase(),
      );
      if (matchedSubject) {
        setSelectedSubject(matchedSubject);
      }
    }
  }, [searchParams]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-border bg-card px-8 py-24 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="size-6" />
        </span>
        <h3
          className={`mt-6 text-3xl text-foreground ${newYorkSerif.className}`}
        >
          Thank You
        </h3>
        <p
          className={`mt-3 max-w-sm text-sm font-normal leading-relaxed text-muted-ink ${nexaExtraLight.className} tracking-normal`}
        >
          Your appointment request has been received. Our team will reach out
          shortly to confirm your session.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-gold hover:text-foreground ${nexaHeavy.className}`}
        >
          Make Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-card px-8 py-10 lg:px-10 lg:py-12"
    >
      <h2
        className={`text-3xl font-light text-foreground ${newYorkSerif.className}`}
      >
        Make an Appointment
      </h2>
      <div className="mt-2 h-px w-12 bg-gold/50" />

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          {/* ✅ UPDATED VALUE MANIPULATION FOR AUTOMATION SELECTORS */}
          <select
            id="subject"
            name="subject"
            required
            className={fieldClass}
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="" className="text-slate-500">
              Select a therapy
            </option>
            {subjects.map((s) => (
              <option key={s} value={s} className="text-slate-900 font-sans">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="time" className={labelClass}>
            Time
          </label>
          <select id="time" name="time" required className={fieldClass}>
            <option value="" className="text-slate-500">
              Select a time
            </option>
            {times.map((t) => (
              <option key={t} value={t} className="text-slate-900 font-sans">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className={`mt-12 w-full bg-foreground py-4 text-xs font-bold uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold hover:text-charcoal ${nexaHeavy.className}`}
      >
        Make an Appointment
      </button>
    </form>
  );
}
