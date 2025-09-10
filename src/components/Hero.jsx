"use client";

import React, { useEffect, useRef } from "react";
import { Wrench, Shield, Clock } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const brandOrange = "#E1912F";
  const brandBlack = "#000000";
  const brandWhite = "#FFFFFF";

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".hero-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="py-20"
      style={{
        background: `linear-gradient(135deg, ${brandWhite} 0%, rgba(241,245,249,0.7) 100%)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-title text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Expert Automotive Services
            <br className="hidden md:block" />
            <span style={{ color: brandOrange }}>You Can Trust</span>
          </h2>

          <p className="hero-description text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional car servicing, MOT testing, and mechanical repairs with
            over 20 years of experience. Your vehicle deserves the best care.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-medium text-white shadow-xs h-12 rounded-md text-lg px-8 py-3 transition-colors"
              style={{ backgroundColor: brandOrange }}
            >
              Book Your Service
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-medium border h-12 rounded-md text-lg px-8 py-3 bg-transparent transition-all duration-200"
              style={{
                color: brandBlack,
                borderColor: brandBlack,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = brandOrange;
                e.currentTarget.style.borderColor = brandOrange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = brandBlack;
                e.currentTarget.style.borderColor = brandBlack;
              }}
            >
              Get Quote
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <div className="hero-card flex flex-col items-center text-center">
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${brandOrange}1A` }}
              >
                <Wrench className="h-8 w-8" style={{ color: brandOrange }} />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">
                Expert Technicians
              </h3>
              <p className="text-gray-600">
                Certified mechanics with decades of experience
              </p>
            </div>

            {/* Card 2 */}
            <div className="hero-card flex flex-col items-center text-center">
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${brandOrange}1A` }}
              >
                <Shield className="h-8 w-8" style={{ color: brandOrange }} />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                All work backed by our comprehensive warranty
              </p>
            </div>

            {/* Card 3 */}
            <div className="hero-card flex flex-col items-center text-center">
              <div
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: `${brandOrange}1A` }}
              >
                <Clock className="h-8 w-8" style={{ color: brandOrange }} />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">
                Fast Service
              </h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
