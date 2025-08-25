'use client';
import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  {
    quote: "Incredible service. Honest and friendly team. I’ve recommended Greystone to everyone I know.",
    name: "ALEX T.",
    role: "Builder",
    avatar: "/images/avatars/alex.jpg",
    stars: 5,
  },
  {
    quote: "Top-tier customer care. Explained everything clearly and got the job done on time.",
    name: "JULIE W.",
    role: "Consultant",
    avatar: "/images/avatars/julie.jpg",
    stars: 5,
  },
  {
    quote: "They fixed a long-standing engine issue that no one else could. Can’t thank them enough.",
    name: "MOHAMMED Z.",
    role: "Fleet Owner",
    avatar: "/images/avatars/mohammed.jpg",
    stars: 5,
  },
  {
    quote: "Professional, well-priced and efficient. What more could you ask for?",
    name: "CLAIRE R.",
    role: "Photographer",
    avatar: "/images/avatars/claire.jpg",
    stars: 5,
  },
  {
    quote: "Genuine people who care about quality workmanship. Always my first choice for MOTs.",
    name: "BEN S.",
    role: "Delivery Driver",
    avatar: "/images/avatars/ben.jpg",
    stars: 5,
  },
  {
    quote: "I brought in my BMW and left with a smile. No pushy upsells—just good work.",
    name: "SOPHIE L.",
    role: "Marketing Exec",
    avatar: "/images/avatars/sophie.jpg",
    stars: 5,
  },
  {
    quote: "They stayed late to finish the job. I couldn’t believe that kind of service still exists.",
    name: "PETER D.",
    role: "Teacher",
    avatar: "/images/avatars/peter.jpg",
    stars: 5,
  },
  {
    quote: "Greystone saved me from a breakdown before a big family trip. Absolute legends.",
    name: "KATIE H.",
    role: "Parent",
    avatar: "/images/avatars/katie.jpg",
    stars: 5,
  },
  {
    quote: "Quick, friendly, and thorough. Wouldn’t trust anyone else with my van.",
    name: "LIAM F.",
    role: "Tradie",
    avatar: "/images/avatars/liam.jpg",
    stars: 5,
  },
  {
    quote: "Booking was easy, the staff were professional, and the results exceeded expectations.",
    name: "EMILY R.",
    role: "Nurse",
    avatar: "/images/avatars/emily.jpg",
    stars: 5,
  },
];

const colors = {
  orange: '#E1912F',
  black: '#000000',
  white: '#FFFFFF',
};

function Star({ filled = true }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${filled ? 'fill-white' : 'fill-white/50'}`}
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.69a1 1 0 0 0 .95.69h3.879c.967 0 1.371 1.24.588 1.81l-3.138 2.279a1 1 0 0 0-.364 1.118l1.2 3.69c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 0 0-1.176 0l-3.246 2.975c-.785.57-1.84-.197-1.54-1.118l1.2-3.69a1 1 0 0 0-.364-1.118L2.236 9.117c-.783-.57-.379-1.81.588-1.81h3.88a1 1 0 0 0 .949-.69l1.396-3.69Z" />
    </svg>
  );
}

export default function Testimonials({ brand = 'Greystone', auto = true, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [auto, interval]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          className="text-center text-2xl font-extrabold tracking-[0.2em] sm:text-4xl uppercase mb-10"
          style={{ color: colors.black, fontFamily: "'Times New Roman', serif" }}
        >
          What Customers Say
          <br />
          About <span style={{ color: colors.orange }}>{brand}</span>
        </h2>

        <div
          className="relative mx-auto w-full max-w-4xl rounded-xl px-6 py-16 md:py-20 text-center text-white shadow-xl sm:px-10 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex items-center"
          style={{ backgroundColor: colors.orange, fontFamily: "'Times New Roman', serif" }}
        >
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-white">
            “{t.quote}”
          </p>
          <div className="pointer-events-none absolute left-1/2 top-full -mt-12 md:-mt-14 -translate-x-1/2">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center" style={{ fontFamily: "'Times New Roman', serif" }}>
          <div className="mb-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < t.stars} />
            ))}
          </div>
          <div className="text-sm font-extrabold tracking-wider" style={{ color: colors.black }}>
            {t.name}
          </div>
          <div className="text-sm" style={{ color: colors.orange }}>
            {t.role}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? 'bg-[#E1912F]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-10 text-center" style={{ fontFamily: "'Times New Roman', serif" }}>
          <a
            href="https://www.google.com/search?q=Greystone+Automotive+Engineers+Ltd+Sheffield&hl=en&gl=uk#lrd=0x48798242aa57d70d:0x3f1d5e92d4d83e13,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E1912F] hover:bg-black transition text-white font-semibold py-3 px-6 rounded-lg mt-4"
          >
            ⭐ Leave Us a Review on Google
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="group absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-700 shadow hover:bg-white"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            d="M12.5 4.5 7 10l5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="group absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-700 shadow hover:bg-white"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            d="M7.5 4.5 13 10l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
