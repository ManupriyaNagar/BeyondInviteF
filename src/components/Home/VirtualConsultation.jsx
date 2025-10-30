"use client";
import React from "react";

export default function VirtualConsultations() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-10 md:gap-16">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://www.papersource.com/cdn/shop/files/2024-07-square-wide-wedding-consultants_b9075d26-dd90-4955-8a81-ee835b4e587d.jpg?v=1737586131&width=900"
            alt="Virtual Consultation"
            className="w-full max-w-md rounded-md shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-serif italic text-gray-700 mb-4">
            Free Virtual Consultations
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            Our dedicated wedding specialists will guide you through design
            options, assist in selecting matching envelopes and liners, and
            recommend those special details that set the scene for an event as
            unique as the love you share.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6 text-left text-sm sm:text-base">
            <li>✔ Create custom artwork through one of our expert designers</li>
            <li>✔ Choose from an expanded assortment of options not available on our website</li>
            <li>✔ Order from collections exclusively offered through our consultants</li>
          </ul>

          <a
            href="https://wa.me/+919910265165"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-yellow-400 px-6 py-3 text-sm sm:text-base font-medium text-gray-700 hover:bg-yellow-50 transition">
              SCHEDULE AN APPOINTMENT
            </button>
          </a>
        </div>

        {/* Second Section (Image + Text reversed on large screens) */}
        <div className="order-4 md:order-3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-serif italic text-gray-700 mb-4">
            Personal Design Support
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            Whether it’s a wedding, birthday, or corporate event, our designers
            work closely with you to customize invitations that reflect your
            style and story — beautifully and effortlessly.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6 text-left text-sm sm:text-base">
            <li>✔ Tailor designs to match your theme or vision</li>
            <li>✔ Get real-time design previews and edits</li>
            <li>✔ Receive print and digital-ready formats</li>
          </ul>

          <a
            href="https://wa.me/+919910265165"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-yellow-400 px-6 py-3 text-sm sm:text-base font-medium text-gray-700 hover:bg-yellow-50 transition">
              START YOUR DESIGN
            </button>
          </a>
        </div>

        <div className="order-3 md:order-4 flex justify-center">
          <img
            src="https://www.papersource.com/cdn/shop/files/2024-07-background-wedding-upload-your-own.jpg?v=1737586132&width=900"
            alt="Custom Design Support"
            className="w-full max-w-md rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
