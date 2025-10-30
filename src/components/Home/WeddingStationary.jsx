"use client";
import React from "react";

const PromoBanner = () => {
  return (
    <div className="w-full bg-[#38514d] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 md:gap-0">
        {/* Left Text */}
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide leading-snug">
          20% SAVINGS + FREE SHIPPING, EVERY DAY
        </p>

        {/* Divider (desktop only) */}
        <div className="hidden md:block h-8 border-l border-white mx-6"></div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <span className="text-lg sm:text-xl font-medium">
            Beyond Invite
            <span className="font-light">more.</span>
          </span>
          <button className="bg-white text-[#446B66] text-sm sm:text-base px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
