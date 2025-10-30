"use client";
import React from "react";

const features = [
  {
    img: "/4.png",
    title: "PREMIUM",
    description: "The best quality design, materials, & craftsmanship",
  },
  {
    img: "/3.png",
    title: "UNIQUE",
    description: "One-of-a-kind creative goods",
  },
  {
    img: "/2.png",
    title: "SUPPORTING ARTISTS",
    description:
      "Support an independent artist or maker with every purchase",
  },
  {
    img: "/1.png",
    title: "EXPERT SERVICES",
    description: "Our team will bring your vision to life",
  },
];

const Difference = () => {
  return (
    <section className="bg-[#f9f8f3] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-10 sm:mb-12">
          The Beyond Invite Difference
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 sm:px-2"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4"
              />
              <h3 className="text-base sm:text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Image */}
        <div className="mt-10 sm:mt-12">
          <img
            src="/banner.png"
            alt="Beyond Invite Banner"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Difference;
