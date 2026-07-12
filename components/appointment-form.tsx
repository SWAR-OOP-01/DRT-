"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";
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

// ✅ FONT TRACKING CLASSES (layout/sizing only — actual font properties are
// force-applied via the ref callback below)
const fieldClass = `w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm text-foreground focus:border-gold focus:outline-none`;

const labelClass = `text-[10px] font-bold uppercase tracking-[0.22em] text-muted-ink ${nexaHeavy.className}`;

// ✅ MAX CHARACTER LIMITS — reasonable ceilings per field so no one can paste
// in an essay where a name/email/phone belongs
const MAX_LENGTHS = {
  firstName: 50,
  lastName: 50,
  email: 100,
  phone: 15,
} as const;

export function AppointmentForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  // ✅ NUCLEAR OVERRIDE: some global stylesheet rule (likely targeting `h2`
  // or a typography reset) is applying its own font-family with !important,
  // which beats a plain inline `style` prop. The ONLY thing that outranks a
  // stylesheet !important is an inline !important — and React's style prop
  // can't express that directly, so we set it imperatively via
  // element.style.setProperty(prop, value, "important") through a ref.
  // This wins against literally anything else in the cascade.
  const forceNexaExtraLight = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    el.style.setProperty(
      "font-family",
      `${nexaExtraLight.style.fontFamily}, sans-serif`,
      "important",
    );
    el.style.setProperty("font-weight", "300", "important");
    el.style.setProperty("letter-spacing", "0.6px", "important");
    el.style.setProperty("line-height", "39px", "important");
    el.style.setProperty(
      "color",
      "lab(16.132 -0.318021 -14.6672)",
      "important",
    );
  }, []);

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

  // ✅ Placeholder color/typography can't be set via the style attribute
  // (there's no ::placeholder in inline styles), so this scoped block
  // handles ONLY placeholder text. Everything else is force-applied via ref.
  const placeholderStyleTag = (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .appointment-form-nexa-extralight ::placeholder {
          font-family: ${nexaExtraLight.style.fontFamily}, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.6px !important;
          line-height: 39px !important;
          color: lab(16.132 -0.318021 -14.6672) !important;
          opacity: 0.55 !important;
        }
      `,
      }}
    />
  );

  if (submitted) {
    return (
      <div className="appointment-form-nexa-extralight flex flex-col items-center justify-center border border-border bg-card px-8 py-24 text-center">
        {placeholderStyleTag}
        <span className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="size-6" />
        </span>
        <h3 className={`mt-6 text-3xl text-foreground ${nexaHeavy.className}`}>
          Thank You
        </h3>
        <p className="mt-3 max-w-sm text-sm" ref={forceNexaExtraLight}>
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
      className="appointment-form-nexa-extralight border border-border bg-card px-8 py-10 lg:px-10 lg:py-12"
    >
      {placeholderStyleTag}
      <h2
        className="text-3xl font-light text-foreground"
        ref={forceNexaExtraLight}
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
            maxLength={MAX_LENGTHS.firstName}
            placeholder="John"
            className={fieldClass}
            ref={forceNexaExtraLight}
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
            maxLength={MAX_LENGTHS.lastName}
            placeholder="Doe"
            className={fieldClass}
            ref={forceNexaExtraLight}
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
            maxLength={MAX_LENGTHS.email}
            placeholder="you@example.com"
            className={fieldClass}
            ref={forceNexaExtraLight}
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
            maxLength={MAX_LENGTHS.phone}
            placeholder="+91 98765 43210"
            className={fieldClass}
            ref={forceNexaExtraLight}
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
            ref={forceNexaExtraLight}
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="" ref={forceNexaExtraLight}>
              Select a therapy
            </option>
            {subjects.map((s) => (
              <option key={s} value={s} ref={forceNexaExtraLight}>
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
            ref={forceNexaExtraLight}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="time" className={labelClass}>
            Time
          </label>
          <select
            id="time"
            name="time"
            required
            className={fieldClass}
            ref={forceNexaExtraLight}
          >
            <option value="" ref={forceNexaExtraLight}>
              Select a time
            </option>
            {times.map((t) => (
              <option key={t} value={t} ref={forceNexaExtraLight}>
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
