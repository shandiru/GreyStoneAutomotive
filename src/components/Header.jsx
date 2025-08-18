"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const brandGreen = "#0B6B38";

    // smooth scrolling helper (also closes mobile menu)
    const goToContact = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    return (
        <header
            className="bg-white border-b border-gray-200"
            // define CSS var so hover:text-[var(--brandGreen)] works
            style={{ "--brandGreen": brandGreen }}
        >
            {/* Top info bar */}
            <div className="text-white py-2" style={{ backgroundColor: brandGreen }}>
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex items-center gap-4 mb-2 sm:mb-0">
                        <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" aria-hidden="true" />
                            <a href="tel:01234567890" className="underline-offset-4 hover:underline">
                                01234 567890
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" aria-hidden="true" />
                            <span>123 High Street, Anytown</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</span>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-serif font-bold text-gray-900">
                        Grey Stone Automotive
                    </h1>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-900 hover:text-[var(--brandGreen)] transition-colors">Home</a>
                        <a href="#services" className="text-gray-900 hover:text-[var(--brandGreen)] transition-colors">Services</a>
                        <a href="#about" className="text-gray-900 hover:text-[var(--brandGreen)] transition-colors">About</a>
                        <a href="#contact" className="text-gray-900 hover:text-[var(--brandGreen)] transition-colors">Contact</a>
                    </nav>

                    {/* Desktop CTA (scrolls to contact) */}
                    <a
                        href="#contact"
                        onClick={goToContact}
                        className="hidden md:inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-white shadow-xs h-9 px-4 py-2 transition-colors"
                        style={{ backgroundColor: brandGreen }}
                    >
                        Book Service
                    </a>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((s) => !s)}
                        aria-label="Toggle menu"
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className="md:hidden overflow-hidden transition-[max-height] duration-300 border-t border-gray-200"
                style={{ maxHeight: open ? 240 : 0 }}
            >
                <nav className="px-4 py-3 space-y-2 bg-white">
                    <a href="#home" className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100" onClick={() => setOpen(false)}>Home</a>
                    <a href="#services" className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100" onClick={() => setOpen(false)}>Services</a>
                    <a href="#about" className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100" onClick={() => setOpen(false)}>About</a>
                    <a href="#contact" className="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100" onClick={() => setOpen(false)}>Contact</a>

                    {/* Mobile CTA (scrolls + closes menu) */}
                    <a
                        href="#contact"
                        onClick={goToContact}
                        className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-white h-10 px-4 py-2"
                        style={{ backgroundColor: brandGreen }}
                    >
                        Book Service
                    </a>
                </nav>
            </div>
        </header>
    );
}
