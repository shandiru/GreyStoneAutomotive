"use client";

import React, { useState } from "react";
import {
  Car,
  Cog,
  Settings,
  Wind,
  Disc,
  Wrench,
  Search,
  Gauge,
} from "lucide-react";

export default function Services() {
  const brandOrange = "#E1912F"; // Ochre Orange
  const brandBlack = "#000000"; // Black
  const brandWhite = "#FFFFFF"; // White

  const services = [
    {
      icon: <Car className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "MOT Testing",
      desc: "Comprehensive MOT tests to ensure your vehicle meets safety standards",
      items: ["Annual safety check", "Detailed report", "Retest included"],
    },
    {
      icon: <Cog className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Car Clutch",
      desc: "Expert clutch repair and replacement services for all vehicle types",
      items: ["Clutch diagnosis", "Professional fitting", "Quality parts"],
    },
    {
      icon: <Settings className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Car Servicing",
      desc: "Regular maintenance to keep your vehicle running smoothly",
      items: ["Full service", "Oil changes", "Filter replacement"],
    },
    {
      icon: <Wind className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Air Conditioning",
      desc: "Air con servicing, repairs, and re-gassing for optimal comfort",
      items: ["System diagnosis", "Re-gassing", "Component repair"],
    },
    {
      icon: <Disc className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Brakes",
      desc: "Complete brake system inspection, repair, and replacement",
      items: ["Brake pads", "Disc replacement", "System bleeding"],
    },
    {
      icon: <Wrench className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Mechanical Repairs",
      desc: "Comprehensive mechanical repairs for all makes and models",
      items: ["Engine repairs", "Transmission work", "Electrical fixes"],
    },
    {
      icon: <Search className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Diagnostics",
      desc: "Advanced diagnostic testing to identify vehicle issues quickly",
      items: ["Computer diagnostics", "Fault finding", "Performance testing"],
    },
    {
      icon: <Gauge className="h-6 w-6" style={{ color: brandOrange }} />,
      title: "Car Suspension",
      desc: "Suspension system repairs and replacements for a smooth ride",
      items: ["Shock absorbers", "Springs", "Suspension arms"],
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const showMore = () => setVisibleCount(services.length);

  return (
    <section id="services" className="py-20" style={{ backgroundColor: brandWhite }}>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold"
            style={{ color: brandBlack }}
          >
            Our Professional <span style={{ color: brandOrange }}>Services</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#4B5563" }}>
            From routine maintenance to complex repairs, we provide comprehensive automotive
            services to keep your vehicle safe and reliable.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="px-6 text-center">
                <div
                  className="p-3 rounded-full w-fit mx-auto mb-4"
                  style={{ backgroundColor: `${brandOrange}1A` }}
                >
                  {service.icon}
                </div>
                <div
                  className="font-semibold font-serif text-lg"
                  style={{ color: brandBlack }}
                >
                  {service.title}
                </div>
              </div>

              <div className="px-6">
                <div
                  className="text-sm text-center mb-4"
                  style={{ color: "#4B5563" }}
                >
                  {service.desc}
                </div>
                <ul className="space-y-2 text-sm" style={{ color: "#4B5563" }}>
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-2"
                        style={{ backgroundColor: brandOrange }}
                      ></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < services.length && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={showMore}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-md px-6 transition-colors"
              style={{
                backgroundColor: brandOrange,
                color: brandWhite,
              }}
            >
              View All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
