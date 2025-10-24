"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "HOW SHOULD I CARE FOR MY JEWELLERY?",
    answer:
      "Avoid contact with water, perfume, and chemicals. Remove jewellery when sleeping, bathing, or exercising to prevent damage and maintain shine.",
  },
  {
    question: "HOW DO I CLEAN MY JEWELLERY?",
    answer:
      "Use a soft dry cloth to gently wipe the jewellery after each wear. Avoid harsh cleaners or ultrasonic machines.",
  },
  {
    question: "HOW DO I STORE MY JEWELLERY?",
    answer:
      "Store pieces separately in a soft pouch or box to prevent scratches and tarnish. Keep away from humidity.",
  },
  {
    question: "HOW TO AVOID GREEN FINGER?",
    answer:
      "Ensure your hands are dry before wearing rings. Avoid applying lotions or perfumes directly on your jewellery.",
  },
  {
    question: "HOW TO CLEAN OXIDISED JEWELLERY?",
    answer:
      "Wipe gently with a soft dry cloth. Do not use silver dips or abrasive materials as they may damage the finish.",
  },
];

export default function JewelleryCare() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-16 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <a href="/" className="text-blue-600 hover:underline">
          Home
        </a>{" "}
        / <span className="font-medium text-black">JEWELLERY CARE</span>
      </div>

      {/* Page Title */}
      <h1 className="text-center text-3xl font-bold tracking-wide mb-10">
        JEWELLERY CARE
      </h1>

      {/* Description */}
      <p className="text-center text-gray-700 font-medium max-w-4xl mx-auto mb-12">
        All jewellery requires love & care. Our products are made of high quality
        and fine craftsmanship, so please follow the guidelines below to extend
        the life of your ORIONZ products.
      </p>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 px-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-semibold text-gray-900 text-left">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaMinus className="text-gray-700" />
              ) : (
                <FaPlus className="text-gray-700" />
              )}
            </button>
            {openIndex === index && (
              <div className="bg-white px-6 py-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
