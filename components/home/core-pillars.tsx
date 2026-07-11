"use client";

import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../../app/fonts/Nexa-ExtraLight.ttf",
});

const pillars = [
  {
    n: "1",
    title: "Awakening Awareness",
    text: (
      <>
        We begin by bringing gentle attention to where you hold{" "}
        <strong>tension, stress and disconnection</strong> — the first step
        toward genuine relief.
      </>
    ),
    image: "./images/spiritual-awakening-concept.jpg",
  },
  {
    n: "2",
    title: "Self Reconnection",
    text: (
      <>
        Through <strong>precise, intentional therapy</strong> we guide you back
        into your body, restoring the dialogue between mind and physical self.
      </>
    ),
    image: "./images/woman-doing-yoga-mountainside.jpg",
  },
  {
    n: "3",
    title: "Healing Hands",
    text: (
      <>
        <strong>Skilled therapeutic touch</strong> does the deep work —
        releasing, restoring and rebuilding so you leave lighter than you
        arrived.
      </>
    ),
    image:
      "./images/hands-different-ethnicities-skin-color-coming-together-sign-diversity.jpg",
  },
];

export function CorePillars() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-end bg-black">
      {/* Absolute Header Overlay */}
      <div className="absolute inset-x-0 top-0 z-20 w-full px-4 pt-4 pointer-events-none sm:px-6 md:pt-6">
        <div className="max-w-2xl text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          <p
            className={`${nexaHeavy.className} text-xs uppercase tracking-[0.45em] text-white/90`}
          >
            Core Pillars
          </p>
          <h2
            className={`${nexaHeavy.className} mt-1 text-lg sm:text-xl lg:text-2xl tracking-wide text-white text-balance leading-snug`}
          >
            The philosophy Of Lasting Belief
          </h2>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid w-full flex-1 gap-0 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.n}
            className="group relative h-[450px] w-full overflow-hidden md:h-full"
          >
            {/* Background Image */}
            <img
              src={pillar.image}
              alt={pillar.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Premium Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/50" />

            {/* Text Overlay Content Layer */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white lg:p-12 lg:pb-16 items-center">
              <span
                className={`${nexaHeavy.className} text-4xl text-white/80 drop-shadow-sm`}
              >
                {pillar.n}
              </span>

              <h3
                className={`${nexaHeavy.className} mt-1 text-xl md:text-2xl tracking-wide text-white drop-shadow-sm text-center`}
              >
                {pillar.title}
              </h3>

              <p
                className={`${nexaExtraLight.className} antialiased mt-3 max-w-sm text-sm md:text-base leading-relaxed text-zinc-200 opacity-95 tracking-wide text-center text-balance`}
              >
                {pillar.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
