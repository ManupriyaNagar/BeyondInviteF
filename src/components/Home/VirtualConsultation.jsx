"use client";
import React from "react";


export default function VirtualConsultations() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center  px-6 py-16">
        
        {/* Left image */}
        <div className="flex justify-center">
          <img
            src="https://www.papersource.com/cdn/shop/files/2024-07-square-wide-wedding-consultants_b9075d26-dd90-4955-8a81-ee835b4e587d.jpg?v=1737586131&width=900" // replace with your image path
            alt="Virtual Consultation"
            width={600}
            height={400}
            className=" shadow-md"
          />
        </div>

        <div className="text-center md:text-left p-4">
          <h2 className="text-3xl font-serif italic text-gray-700 mb-4">
            Free Virtual Consultations
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our dedicated wedding specialists will guide you through design
            options, assist in selecting matching envelopes and liners, and
            recommend those special details that set the scene for an event as
            unique as the love you share.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6 text-left md:text-base text-sm">
            <li>✔ Create custom artwork through one of our expert designers</li>
            <li>✔ Choose from an expanded assortment of options currently not available through our website</li>
            <li>✔ Order from collections exclusively offered through our consultants</li>
          </ul>

        
          <a
            href="https://wa.me/+919910265165"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-green-600 underline text-sm"
          >
            <button className="border border-yellow-400 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-yellow-50 transition">
            SCHEDULE AN APPOINTMENT
          </button>
          </a>
        </div>
          <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif italic text-gray-700 mb-4">
            Free Virtual Consultations
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our dedicated wedding specialists will guide you through design
            options, assist in selecting matching envelopes and liners, and
            recommend those special details that set the scene for an event as
            unique as the love you share.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6 text-left md:text-base text-sm">
            <li>✔ Create custom artwork through one of our expert designers</li>
            <li>✔ Choose from an expanded assortment of options currently not available through our website</li>
            <li>✔ Order from collections exclusively offered through our consultants</li>
          </ul>

           <a
            href="https://wa.me/+919910265165"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-green-600 underline text-sm"
          >
            <button className="border border-yellow-400 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-yellow-50 transition">
            SCHEDULE AN APPOINTMENT
          </button>
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.papersource.com/cdn/shop/files/2024-07-background-wedding-upload-your-own.jpg?v=1737586132&width=900" // replace with your image path
            alt="Virtual Consultation"
            width={600}
            height={400}
            className=" shadow-md"
          />
        </div>

        {/* Right content */}
      
      </div>
    </section>
  );
}
