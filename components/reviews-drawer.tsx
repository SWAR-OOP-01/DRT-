"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import localFont from "next/font/local";

const nexaHeavy = localFont({
  src: "../app/fonts/Nexa-Heavy.ttf",
});

const nexaExtraLight = localFont({
  src: "../app/fonts/Nexa-ExtraLight.ttf",
});

const reviews = [
  {
    name: "Aarav Mehta",
    time: "a week ago",
    body: (
      <>
        The <strong>HNS therapy</strong> melted away weeks of tension in{" "}
        <strong>21 minutes</strong>. I walked out feeling genuinely lighter and
        clear-headed.
      </>
    ),
  },
  {
    name: "Sneha Kulkarni",
    time: "2 weeks ago",
    body: (
      <>
        A truly <strong>premium, calming space</strong>. The therapists are
        precise and attentive. <strong>Best recovery</strong> I have had in
        years.
      </>
    ),
  },
  {
    name: "Rohan Deshpande",
    time: "a month ago",
    body: (
      <>
        The <strong>PSR 90-minute session</strong> is unreal. I slept{" "}
        <strong>9 hours straight</strong> afterwards. This is my new monthly
        ritual.
      </>
    ),
  },
  {
    name: "Priya Nair",
    time: "a month ago",
    body: (
      <>
        <strong>Foot reflexology</strong> left me feeling refreshed with every
        step. Elegant, quiet and <strong>deeply restorative</strong>.
      </>
    ),
  },
  {
    name: "Karan Shah",
    time: "2 months ago",
    body: (
      <>
        The <strong>RCN nature retreat</strong> at Pawana Dam was a complete
        reset for mind, body and soul. <strong>Highly recommend</strong>.
      </>
    ),
  },
];

export function ReviewsDrawer() {
  const [open, setOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes confettiFallWithin {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(105vh) rotate(540deg); opacity: 0; }
        }
        .sidebar-confetti {
          position: absolute;
          top: -20px;
          width: 6px;
          height: 12px;
          border-radius: 1px;
          animation: confettiFallWithin 2s linear forwards;
          pointer-events: none;
          z-index: 50;
        }
        @keyframes continuousGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(220, 38, 38, 0.5), 0 0 30px rgba(220, 38, 38, 0.3); transform: translateY(0) scale(1); }
          50% { box-shadow: 0 0 25px rgba(220, 38, 38, 0.8), 0 0 45px rgba(220, 38, 38, 0.5); transform: translateY(0) scale(1.03); }
        }
        .animate-orb-glow {
          animation: continuousGlow 2.5s infinite ease-in-out;
        }
      `,
        }}
      />

      {/* --- Verified Reviews Side Trigger --- */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${nexaHeavy.className} fixed left-0 top-1/2 z-40 -translate-y-1/2 origin-left bg-foreground px-3 py-2.5 text-[11px] uppercase tracking-[0.24em] text-cream shadow-lg transition-colors hover:bg-foreground/85 [writing-mode:vertical-rl] sm:px-4 sm:py-3`}
        aria-label="Open verified reviews"
      >
        Verified Reviews
      </button>

      {/* --- Continuous Glowing Red Orb Trigger with White Letters --- */}
      <button
        type="button"
        onClick={() => setOffersOpen(true)}
        className={`${nexaHeavy.className} fixed bottom-6 right-6 z-40 h-16 w-16 flex flex-col items-center justify-center rounded-full bg-red-600 text-center text-[10px] uppercase leading-tight tracking-wider text-white transition-all duration-300 hover:bg-red-500 hover:scale-110 active:scale-95 animate-orb-glow`}
        aria-label="Open temporary offers"
      >
        <span>Exciting</span>
        <span>Offers</span>
      </button>

      {/* --- Verified Reviews Panel Layer --- */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-start">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative flex h-full w-full max-w-[min(92vw,24rem)] flex-col overflow-hidden bg-cream shadow-2xl transition-all duration-300">
            <div className="flex min-h-0 flex-1 flex-col px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span
                  className={`${nexaHeavy.className} text-[12px] uppercase tracking-[0.28em] text-gold`}
                >
                  Google Reviews
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="text-muted-ink transition-colors hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="mt-4 border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl text-foreground">
                    4.9
                  </span>
                  <div>
                    <div className="flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-gold" />
                      ))}
                    </div>
                    <p
                      className={`${nexaExtraLight.className} mt-1 text-[11px] uppercase tracking-[0.15em] text-slate-800`}
                    >
                      Based on 214 verified reviews
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-2 flex min-h-0 flex-1 flex-col space-y-5 overflow-y-auto pr-4"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#d4af37 transparent",
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-border/40 last:border-none pb-4"
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className={`${nexaHeavy.className} text-sm tracking-wide text-foreground`}
                      >
                        {review.name}
                      </p>
                      <span
                        className={`${nexaExtraLight.className} text-[10px] uppercase tracking-[0.15em] text-slate-800`}
                      >
                        {review.time}
                      </span>
                    </div>
                    <div className="mt-1 flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-2.5 fill-gold" />
                      ))}
                    </div>
                    <p
                      className={`${nexaExtraLight.className} mt-2 text-[13px] leading-relaxed text-slate-800`}
                    >
                      {review.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* --- Exciting Offers Panel Layer --- */}
      {offersOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setOffersOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative flex h-full w-full max-w-[min(92vw,24rem)] flex-col overflow-hidden bg-cream shadow-2xl transition-all duration-300">
            {/* Confetti Spawner Engine */}
            {Array.from({ length: 65 }).map((_, i) => {
              const colors = [
                "#d4af37",
                "#dc2626",
                "#10b981",
                "#3b82f6",
                "#f59e0b",
                "#ec4899",
              ];
              const randomColor = colors[i % colors.length];
              const randomLeft = `${Math.random() * 100}%`;
              const randomDelay = `${Math.random() * 1.2}s`;
              const randomDuration = `${1.5 + Math.random() * 1.5}s`;

              return (
                <div
                  key={i}
                  className="sidebar-confetti"
                  style={{
                    left: randomLeft,
                    backgroundColor: randomColor,
                    animationDelay: randomDelay,
                    animationDuration: randomDuration,
                  }}
                />
              );
            })}

            <div className="flex min-h-0 flex-1 flex-col px-5 py-5 sm:px-6 relative z-10">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span
                  className={`${nexaHeavy.className} text-[12px] uppercase tracking-[0.28em] text-gold`}
                >
                  Exclusive Invitation
                </span>
                <button
                  type="button"
                  onClick={() => setOffersOpen(false)}
                  aria-label="Close offers"
                  className="text-muted-ink transition-colors hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Single Offer Content Area */}
              <div className="mt-8 flex flex-col items-start text-left">
                <p
                  className={`${nexaHeavy.className} text-[11px] uppercase tracking-[0.25em] text-gold`}
                >
                  Limited Time Pack
                </p>

                {/* ✅ UPDATED: Placed the offer text in a red, coupon-like box */}
                <div className="mt-4 w-full bg-red-600 p-6 text-center shadow-lg transform rotate-[-2deg] border-2 border-dashed border-white">
                  <h3
                    className={`${nexaHeavy.className} text-2xl sm:text-3xl tracking-wide text-white uppercase leading-tight`}
                  >
                    Pay for 3 &amp; Get 1 HNS session FREE.
                  </h3>
                  <div className="mt-2 h-1 w-1/2 mx-auto bg-white/60 rounded-full" />
                </div>

                <p
                  className={`${nexaExtraLight.className} mt-6 text-[14px] leading-relaxed text-slate-800`}
                >
                  Optimize your corporate wellness routine. Secure this unique
                  bundle and enjoy your complementary HNS session today.
                </p>

                <div className="mt-8 w-full border-t border-gold/10 pt-6">
                  <p
                    className={`${nexaExtraLight.className} text-[10px] uppercase tracking-[0.15em] text-slate-800`}
                  >
                    * Terms & Conditions Apply • Available for{" "}
                    <strong>existing corporate clients</strong>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
