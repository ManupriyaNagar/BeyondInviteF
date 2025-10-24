"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Eye, Plus, X } from "lucide-react";

const faqs = [
  { q: "How to make digital invitation online?", a: "You can order your invite online, share your details, and we’ll create the digital invitation for you." },
  { q: "When can I expect the delivery of the video wedding invitation?", a: "The delivery time usually ranges from 24–48 hours depending on the customization." },
  { q: "What content I need to provide?", a: "You’ll need to provide event details like names, date, venue, and any special instructions." },
  { q: "What changes can be done in eInvite Video?", a: "You can change text, photos, and music according to your preferences." },
  { q: "Do I get what I see?", a: "Yes, you will receive the same design that you approve in the preview stage." },
  { q: "In what format and resolution will I receive the invitation?", a: "You’ll receive the video in Full HD (1080p) format suitable for sharing." },
  { q: "Is it possible to make a partial payment in advance?", a: "Yes, we accept partial payments depending on the order type." },
  { q: "What will be the Payment Methods?", a: "We accept UPI, credit/debit cards, net banking, and wallets." },
  { q: "Is it possible to review the video invite before the final delivery?", a: "Yes, you can review and request revisions before final delivery." },
  { q: "Is it possible to make changes after receiving the final invitation?", a: "Minor edits are possible after delivery, but major changes may incur extra charges." },
  { q: "How I can send Invitation on WhatsApp?", a: "Once delivered, you can directly share the video invite via WhatsApp." },
  { q: "Rules for every eInvite?", a: "Each design follows our standard guidelines; custom rules can be discussed during order." },
];


const FaqBanner = () => {
      const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div
      className="relative w-full h-60 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://videogiri.com/cdn/shop/files/videogiri-page-header-image_1cfe3dc0-3b12-4630-a3a2-6c06df716ee9.webp?v=1726741888&width=2000')", // replace with your image
      }}
    >
      {/* Overlay (optional light tint) */}
      <div className="absolute inset-0 bg-pink-50/60"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Frequently Asked Questions (FAQs)
        </h1>
        <p className="text-gray-700">
          <Link href="/" className="underline hover:text-pink-600">
            Home
          </Link>{" "}
          / Frequently Asked Questions (FAQs)
        </p>
      </div>
    </div>





     <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-widest text-gray-500 uppercase">Trusted by</p>
        <h2 className="text-3xl md:text-5xl  text-gray-900 mb-10">
          Frequently <br /> Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`  shadow transition-all duration-300 ${
              openIndex === i ? "p-4 bg-white rounded-[2.5rem]" : "p-4 bg-blue-50 rounded-full"
            }`}
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-gray-900 font-medium">{faq.q}</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-2xl  text-gray-600">
              {openIndex === i ? (
  <div className="bg-blue-100 p-4 rounded-full">
    <X size={18}  />
  </div>
) : (
  <div className="bg-white p-4 rounded-full">
    <Plus size={18}  />
  </div>
)}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    </>
  );
};

export default FaqBanner;
