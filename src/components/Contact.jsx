"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
    const brandGreen = "#0B6B38";

    const contactInfo = [
        {
            icon: <Phone className="h-5 w-5" style={{ color: brandGreen }} />,
            title: "Phone",
            value: "01234 567890",
            note: "Call us for immediate assistance",
        },
        {
            icon: <Mail className="h-5 w-5" style={{ color: brandGreen }} />,
            title: "Email",
            value: "info@greystoneautomotive.co.uk",
            note: "Send us your questions anytime",
        },
        {
            icon: <MapPin className="h-5 w-5" style={{ color: brandGreen }} />,
            title: "Address",
            value: "123 High Street, Anytown, AN1 2BC",
            note: "Easy parking available",
        },
        {
            icon: <Clock className="h-5 w-5" style={{ color: brandGreen }} />,
            title: "Opening Hours",
            value: (
                <>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                </>
            ),
            note: "",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to book your service or have questions about your vehicle?
                        Contact us today for expert advice and professional service.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left - Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div
                                        className="p-3 rounded-full"
                                        style={{ backgroundColor: `${brandGreen}1A` }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h4>
                                        {typeof item.value === "string" ? (
                                            <p className="text-gray-600">{item.value}</p>
                                        ) : (
                                            <div className="text-gray-600 space-y-1">
                                                {item.value}
                                            </div>
                                        )}
                                        {item.note && (
                                            <p className="text-sm text-gray-500">{item.note}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-white flex flex-col gap-6 rounded-xl border py-6 shadow-sm max-w-lg mx-auto w-full">
                        <div className="px-6">
                            <h3 className="leading-none font-semibold font-serif text-lg mb-4">
                                Send Us a Message
                            </h3>
                            <form className="space-y-4">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium text-gray-900 mb-2"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            placeholder="John"
                                            className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium text-gray-900 mb-2"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            placeholder="Doe"
                                            className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-900 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-900 mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="01234 567890"
                                        className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none"
                                    />
                                </div>

                                {/* Service Required */}
                                <div>
                                    <label
                                        htmlFor="service"
                                        className="block text-sm font-medium text-gray-900 mb-2"
                                    >
                                        Service Required
                                    </label>
                                    <input
                                        id="service"
                                        placeholder="e.g., MOT, Car Service, Brake Repair"
                                        className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-900 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Tell us about your vehicle and what service you need..."
                                        className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none"
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
