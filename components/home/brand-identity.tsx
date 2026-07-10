import Image from "next/image";
import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../../app/fonts/Nexa-ExtraLight.ttf",
});

const pillars = [
  {
    label: "Vision",
    text: (
      <>
        Building a <strong>Healthier Bharat</strong> through Therapeutic
        Healing.
      </>
    ),
  },
  {
    label: "Mission",
    text: (
      <>
        Awaken. Reconnect. <strong>Heal</strong>.
      </>
    ),
  },
  {
    label: "Goal",
    text: (
      <>
        <strong>Pain-Free</strong>, Productive, Healthier Communities.
      </>
    ),
  },
];

export function BrandIdentity() {
  return (
    <section className="bg-cream-deep w-full py-16 md:py-24 flex flex-col justify-center border-t border-gold/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Header Unit */}
        <div className="flex flex-col items-center">
          <Image
            src="/drt-emblem-green.png"
            alt="Deep Relief Therapy emblem"
            width={48}
            height={48}
            className="h-11 w-auto object-contain transition-transform duration-700 hover:scale-110"
          />
          <p
            className={`${nexaHeavy.className} mt-5 text-sm uppercase tracking-[0.5em] text-emerald-800 pl-[0.5em]`}
          >
            Our Identity
          </p>
        </div>

        {/* Pillars Layout Container */}
        <div className="mt-14 flex flex-col items-stretch justify-center gap-16 md:mt-20 md:flex-row md:gap-0">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.label}
              className={`relative flex flex-1 flex-col items-center px-6 text-center md:px-10
                ${index !== 0 ? "md:border-l md:border-emerald-800/10" : ""}
              `}
            >
              <div className="mb-5 h-1.5 w-1.5 rounded-full bg-emerald-800/20" />

              <span
                className={`${nexaHeavy.className} text-sm uppercase tracking-[0.4em] text-emerald-800 pl-[0.4em]`}
              >
                {pillar.label}
              </span>

              {/* Enhanced & Maximized Pillar Text Blocks using Nexa-ExtraLight */}
              <p
                className={`${nexaExtraLight.className} mt-8 max-w-sm text-2xl leading-relaxed text-slate-800 text-balance lg:text-3xl tracking-wide`}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
