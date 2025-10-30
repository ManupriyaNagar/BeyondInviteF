"use client";
import Image from "next/image";

const weddingItems = [
  { src: "/last4.jpeg", alt: "Save the Date" },
  { src: "/last5.jpeg", alt: "Gift Bag & Box" },
  { src: "/last6.jpeg", alt: "Invitation Box" },
  { src: "/last3.jpeg", alt: "Welcome Card" },
  { src: "/last2.jpeg", alt: "Favor Box" },
  { src: "/last1.jpeg", alt: "Itinerary" },
  {
    src: "https://images.squarespace-cdn.com/content/v1/63aea42c09ecd1701e9085d7/9f2c1e58-c4dd-4cfa-8e91-b116f2cd22a7/Wedding+Menu+3.jpg?format=750w",
    alt: "Menu Card",
  },
  { src: "/last.jpeg", alt: "Welcome Sign" },
];

export default function WeddingSuite() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          Full Wedding Suite
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Save the date, gift bag & boxes, menu, itineraries, place cards,
          ceremony cards & many more.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {weddingItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-md shadow-sm group"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 sm:h-56 md:h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />

            {/* Overlay Text (optional for hover) */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-end justify-center pb-3">
              <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
