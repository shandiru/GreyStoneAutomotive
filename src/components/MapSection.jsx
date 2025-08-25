import React from "react";

export default function MapSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          style={{ fontFamily: "Georgia, serif", color: "#000000" }}
        >
          Visit Us at Greystone Automotive
        </h2>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
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
