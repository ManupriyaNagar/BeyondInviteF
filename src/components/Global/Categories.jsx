// src/components/CategoryCarousel.jsx
"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Wedding",
  "Art",
  "Baby & Kids",
  "Back to School",
  "Gifts",
  "Stationery",
  "Home Decor",
  "Fashion",
  "Books",
];

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center bg-white border-b py-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-10"
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            className="flex-shrink-0 px-10 py-1 rounded-full bg-linear-to-r from-[#dca751] to-[#c7944c] text-white font-semibold hover:bg-[#e6b97f] transition mx-2 text-md"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Categories;
