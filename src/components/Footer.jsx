"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
    const brandGreen = "#0B6B38";

    return (
        <footer style={{ backgroundColor: brandGreen }} className="text-white py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold mb-4">
                            Grey Stone Automotive
                        </h3>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Your trusted automotive service provider with over 20 years of
                            experience. We're committed to keeping your vehicle safe, reliable,
                            and running smoothly.
                        </p>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" aria-hidden="true" />
                                <a
                                    href="tel:01234567890"
                                    className="text-white/90 hover:underline underline-offset-4"
                                    aria-label="Call 01234 567890"
                                >
                                    01234 567890
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" aria-hidden="true" />
                                <a
                                    href="mailto:info@greystoneautomotive.co.uk"
                                    className="text-white/90 hover:underline underline-offset-4 break-all"
                                    aria-label="Email info@greystoneautomotive.co.uk"
                                >
                                    info@greystoneautomotive.co.uk
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=123+High+Street,+Anytown,+AN1+2BC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:underline underline-offset-4"
                                    aria-label="Open address in Google Maps"
                                >
                                    123 High Street, Anytown, AN1 2BC
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-serif font-semibold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><a href="#services" className="hover:opacity-90">MOT Testing</a></li>
                            <li><a href="#services" className="hover:opacity-90">Car Servicing</a></li>
                            <li><a href="#services" className="hover:opacity-90">Brake Repairs</a></li>
                            <li><a href="#services" className="hover:opacity-90">Clutch Replacement</a></li>
                            <li><a href="#services" className="hover:opacity-90">Air Conditioning</a></li>
                            <li><a href="#services" className="hover:opacity-90">Diagnostics</a></li>
                            <li><a href="#services" className="hover:opacity-90">Suspension Work</a></li>
                            <li><a href="#services" className="hover:opacity-90">Mechanical Repairs</a></li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="font-serif font-semibold text-lg mb-4">Opening Hours</h4>
                        <div className="space-y-2 text-sm text-white/80">
                            <div className="flex justify-between"><span>Mon - Fri:</span><span>8AM - 6PM</span></div>
                            <div className="flex justify-between"><span>Saturday:</span><span>8AM - 4PM</span></div>
                            <div className="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
                        </div>

                        <div className="mt-4 p-3 bg-white/10 rounded">
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4" aria-hidden="true" />
                                <span>Emergency callouts available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
                    <p>
                        © 2024 Grey Stone Automotive. All rights reserved. | Professional
                        automotive services you can trust.
                    </p>
                </div>
            </div>
        </footer>
    );
}
