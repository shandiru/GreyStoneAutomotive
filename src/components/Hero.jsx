"use client";

import React from "react";
import { Wrench, Shield, Clock } from "lucide-react";

export default function Hero() {
    const brandGreen = "#0B6B38";

    return (
        <section
            id="home"
            className="py-20"
            style={{
                background:
                    "linear-gradient(135deg, rgba(248,250,252,1) 0%, rgba(241,245,249,0.7) 100%)",
            }}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                        Expert Automotive Services
                        <br className="hidden md:block" /> You Can Trust
                    </h2>

                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Professional car servicing, MOT testing, and mechanical repairs with
                        over 20 years of experience. Your vehicle deserves the best care.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 font-medium text-white shadow-xs h-12 rounded-md text-lg px-8 py-3 transition-colors"
                            style={{ backgroundColor: brandGreen }}
                        >
                            Book Your Service
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 font-medium border shadow-xs hover:bg-gray-50 h-12 rounded-md text-lg px-8 py-3 bg-transparent text-gray-800"
                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4"
                                style={{ backgroundColor: `${brandGreen}1A` }}
                            >
                                <Wrench className="h-8 w-8" style={{ color: brandGreen }} />
                            </div>
                            <h3 className="font-serif font-semibold text-lg mb-2">
                                Expert Technicians
                            </h3>
                            <p className="text-gray-600">
                                Certified mechanics with decades of experience
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4"
                                style={{ backgroundColor: `${brandGreen}1A` }}
                            >
                                <Shield className="h-8 w-8" style={{ color: brandGreen }} />
                            </div>
                            <h3 className="font-serif font-semibold text-lg mb-2">
                                Quality Guaranteed
                            </h3>
                            <p className="text-gray-600">
                                All work backed by our comprehensive warranty
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4"
                                style={{ backgroundColor: `${brandGreen}1A` }}
                            >
                                <Clock className="h-8 w-8" style={{ color: brandGreen }} />
                            </div>
                            <h3 className="font-serif font-semibold text-lg mb-2">
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
