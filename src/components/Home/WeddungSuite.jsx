"use client";
import Image from "next/image";

const weddingItems = [
  {
    src: "/last4.jpeg",
    alt: "Save the Date",
  },
  {
    src: "/last5.jpeg",
    alt: "Gift Bag & Box",
  },
  {
    src: "/last6.jpeg",
    alt: "Invitation Box",
  },
  {
    src: "/last3.jpeg",
    alt: "Welcome Card",
  },
  {
    src: "/last2.jpeg",
    alt: "Favor Box",
  },
  {
    src: "/last1.jpeg",
    alt: "Itinerary",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/63aea42c09ecd1701e9085d7/9f2c1e58-c4dd-4cfa-8e91-b116f2cd22a7/Wedding+Menu+3.jpg?format=750w",
    alt: "Menu Card",
  },
  {
    src: "/last.jpeg",
    alt: "Welcome Sign",
  },
];

export default function WeddingSuite() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Full Wedding Suite
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Save the date, gift bag & boxes, menu, itineraries, place cards,
          ceremony cards & many more
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {weddingItems.map((item, index) => (
          <div key={index} className="relative w-full h-full  overflow-hidden  transition-transform">
            <img
              src={item.src}
              alt={item.alt}
              fill='true'
              className="object-cover h-full w-full"
            
            />
          </div>
        ))}
      </div>
    </section>
  );
}
