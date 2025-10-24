"use client";
import React from "react";

const PromoBanner = () => {
  return (
    <div className="w-full bg-[#38514d] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Text */}
        <p className="text-lg md:text-xl font-semibold tracking-wide">
          20% SAVINGS + FREE SHIPPING, EVERY DAY
        </p>

        {/* Divider */}
        <div className="hidden md:block h-8 border-l border-white mx-6"></div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <span className="text-xl font-medium">Beyond Invite<span className="font-light">more.</span></span>
          <button className="bg-white text-[#446B66] px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
