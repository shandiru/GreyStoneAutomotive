'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
  const brandOrange = '#E1912F'; // Ochre Orange
  const brandBlack = '#000000'; // Black

  const headingRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
        },
      }
    );

    // Animate map iframe
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Georgia, serif', color: brandBlack }}
        >
          Visit Us at <span style={{ color: brandOrange }}>Greystone Automotive</span>
        </h2>

        <div
          ref={mapRef}
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Greystone Automotive Engineers Ltd"
            src="https://www.google.com/maps?q=Greystone+Automotive+Engineers+Ltd,+3+Bryta+Works,+Little+London+Rd,+Woodseats,+Sheffield+S8+0UJ,+United+Kingdom&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
