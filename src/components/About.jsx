"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const brandOrange = "#E1912F";
  const brandBlack = "#000000";
  const brandWhite = "#FFFFFF";

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "5000+", label: "Happy Customers" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Emergency Support" },
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Certified Excellence",
      desc: "Our technicians are fully certified and continuously trained on the latest automotive technologies and repair techniques.",
    },
    {
      icon: <Users className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Customer First",
      desc: "We believe in transparent communication and honest pricing. No hidden fees, no unnecessary work - just quality service you can trust.",
    },
    {
      icon: <Star className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Quality Guarantee",
      desc: "All our work comes with a comprehensive warranty, giving you peace of mind and confidence in our services.",
    },
  ];

  const leftRef = useRef(null);
  const featureRefs = useRef([]);
  featureRefs.current = [];

  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate left column
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate each feature card
    featureRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left column: Copy + Stats */}
          <div className="mx-auto max-w-xl" ref={leftRef}>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: brandBlack }}
            >
              Why Choose <span style={{ color: brandOrange }}>Grey Stone Automotive?</span>
            </h2>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#4B5563" }}>
              With over two decades of experience in the automotive industry,
              Grey Stone Automotive has built a reputation for excellence,
              reliability, and honest service. Our team of certified technicians
              uses the latest diagnostic equipment and quality parts to ensure
              your vehicle receives the best possible care.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#4B5563" }}>
              We understand that your vehicle is essential to your daily life,
              which is why we're committed to providing fast, efficient service
              without compromising on quality. From routine maintenance to
              complex repairs, we treat every vehicle with the same level of
              care and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-serif font-bold mb-2" style={{ color: brandOrange }}>
                    {s.value}
                  </div>
                  <div className="text-sm" style={{ color: brandBlack }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Feature cards */}
          <div className="space-y-6 mx-auto max-w-xl">
            {features.map((f, i) => (
              <div
                key={i}
                ref={addToFeatureRefs}
                className="flex flex-col gap-6 rounded-xl border-2 py-6 shadow-sm transition-all duration-300 bg-white border-[#E1912F] hover:shadow-[0_0_20px_4px_rgba(225,145,47,0.5)] hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${brandOrange}1A` }}>
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: brandBlack }}>
                        {f.title}
                      </h3>
                      <p style={{ color: "#4B5563" }}>{f.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
