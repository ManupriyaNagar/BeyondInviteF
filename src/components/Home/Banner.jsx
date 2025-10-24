"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20  text-white max-w-4xl mx-auto px-4 mt-60">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
         Celebrate Your Story – Find the Right People to Tell It
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find the best wedding vendors with thousands of trusted reviews
        </p>

        {/* Search Box */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-7 bg-white rounded-sm  shadow-lg max-w-6xl mx-auto">
       
          <select className="w-full md:w-1/2 px-5 py-4 rounded-md text-gray-700 focus:outline-none">
            <option>Type Your Name</option>
          </select>

          <select className="p-2 w-full md:w-1/2 px-5 py-2 rounded-md  text-gray-700 focus:outline-none">
            <option>Select Date</option>
           
          </select>
  
      <div className="w-full md:w-[20vh] h-full bg-[#c7944c]">
  <button className="w-full h-full py-4 px-2 text-white font-semibold transition">
    Get Started
  </button>
</div>

        </div>

    
      </div>
    </div>
  );
};

export default Banner;
