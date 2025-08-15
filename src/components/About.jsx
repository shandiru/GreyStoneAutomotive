"use client";

import React from "react";
import { Award, Users, Star } from "lucide-react";

export default function About() {
    const brandGreen = "#0B6B38";

    const stats = [
        { value: "20+", label: "Years Experience" },
        { value: "5000+", label: "Happy Customers" },
        { value: "98%", label: "Customer Satisfaction" },
        { value: "24/7", label: "Emergency Support" },
    ];

    const features = [
        {
            icon: <Award className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Certified Excellence",
            desc:
                "Our technicians are fully certified and continuously trained on the latest automotive technologies and repair techniques.",
        },
        {
            icon: <Users className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Customer First",
            desc:
                "We believe in transparent communication and honest pricing. No hidden fees, no unnecessary work - just quality service you can trust.",
        },
        {
            icon: <Star className="h-6 w-6" style={{ color: brandGreen }} />,
            title: "Quality Guarantee",
            desc:
                "All our work comes with a comprehensive warranty, giving you peace of mind and confidence in our services.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left column: Copy + Stats */}
                    <div className="mx-auto max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                            Why Choose Grey Stone Automotive?
                        </h2>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With over two decades of experience in the automotive industry,
                            Grey Stone Automotive has built a reputation for excellence,
                            reliability, and honest service. Our team of certified technicians
                            uses the latest diagnostic equipment and quality parts to ensure
                            your vehicle receives the best possible care.
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We understand that your vehicle is essential to your daily life,
                            which is why we're committed to providing fast, efficient service
                            without compromising on quality. From routine maintenance to
                            complex repairs, we treat every vehicle with the same level of
                            care and attention to detail.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center">
                                    <div
                                        className="text-3xl font-serif font-bold mb-2"
                                        style={{ color: brandGreen }}
                                    >
                                        {s.value}
                                    </div>
                                    <div className="text-sm text-gray-600">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: Feature cards */}
                    <div className="space-y-6 mx-auto max-w-xl">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                            >
                                <div className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="p-3 rounded-full"
                                            style={{ backgroundColor: `${brandGreen}1A` }}
                                        >
                                            {f.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-semibold text-lg mb-2">
                                                {f.title}
                                            </h3>
                                            <p className="text-gray-600">{f.desc}</p>
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
