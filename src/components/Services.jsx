"use client";

import React from "react";
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
    const brandGreen = "#0B6B38";

    const services = [
        {
            icon: <Car className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "MOT Testing",
            desc: "Comprehensive MOT tests to ensure your vehicle meets safety standards",
            items: ["Annual safety check", "Detailed report", "Retest included"],
        },
        {
            icon: <Cog className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Car Clutch",
            desc: "Expert clutch repair and replacement services for all vehicle types",
            items: ["Clutch diagnosis", "Professional fitting", "Quality parts"],
        },
        {
            icon: <Settings className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Car Servicing",
            desc: "Regular maintenance to keep your vehicle running smoothly",
            items: ["Full service", "Oil changes", "Filter replacement"],
        },
        {
            icon: <Wind className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Air Conditioning",
            desc: "Air con servicing, repairs, and re-gassing for optimal comfort",
            items: ["System diagnosis", "Re-gassing", "Component repair"],
        },
        {
            icon: <Disc className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Brakes",
            desc: "Complete brake system inspection, repair, and replacement",
            items: ["Brake pads", "Disc replacement", "System bleeding"],
        },
        {
            icon: <Wrench className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Mechanical Repairs",
            desc: "Comprehensive mechanical repairs for all makes and models",
            items: ["Engine repairs", "Transmission work", "Electrical fixes"],
        },
        {
            icon: <Search className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Diagnostics",
            desc: "Advanced diagnostic testing to identify vehicle issues quickly",
            items: ["Computer diagnostics", "Fault finding", "Performance testing"],
        },
        {
            icon: <Gauge className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Car Suspension",
            desc: "Suspension system repairs and replacements for a smooth ride",
            items: ["Shock absorbers", "Springs", "Suspension arms"],
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Our Professional Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From routine maintenance to complex repairs, we provide
                        comprehensive automotive services to keep your vehicle safe and
                        reliable.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="px-6 text-center">
                                <div
                                    className="p-3 rounded-full w-fit mx-auto mb-4"
                                    style={{ backgroundColor: `${brandGreen}1A` }}
                                >
                                    {service.icon}
                                </div>
                                <div className="font-semibold font-serif text-lg">
                                    {service.title}
                                </div>
                            </div>

                            <div className="px-6">
                                <div className="text-gray-600 text-sm text-center mb-4">
                                    {service.desc}
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full mr-2"
                                                style={{ backgroundColor: brandGreen }}
                                            ></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white h-10 rounded-md px-6 transition-colors"
                        style={{ backgroundColor: brandGreen }}
                    >
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
}
