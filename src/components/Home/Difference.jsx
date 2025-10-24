"use client";
import React from "react";
import { FaScroll, FaUsers, FaMobileAlt } from "react-icons/fa";
import { GiAmphora } from "react-icons/gi"; 
import Image from "next/image"; // ✅ Import Next.js Image for optimization

const features = [
  {
    img:"/4.png",
    title: "PREMIUM",
    description: "The best quality design, materials, & craftsmanship",
  },
  {
    img:"/3.png",
    title: "UNIQUE",
    description: "One-of-a-kind creative goods",
  },
  {
    img:"/2.png",
    // icon: <FaUsers className="text-5xl mb-4" />,
    title: "SUPPORTING ARTISTS",
    description: "Support an independent artist or maker with every purchase",
  },
  {
    img:"/1.png",
    // icon: <FaMobileAlt className="text-5xl mb-4" />,
    title: "EXPERT SERVICES",
    description: "Our team will bring your vision to life",
  },
];

const Difference = () => {
  return (
    <section className="bg-[#f9f8f3] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-12">
          The Beyond Invite Difference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center ">
              {/* ✅ Corrected image rendering */}
              <img
                src={item.img} 
                alt={item.title} 
                width={100} 
                height={400} 
                className="rounded-full mb-4  "
              />
              {item.icon && item.icon}
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
          <div className="mt-10">
        <img src="/banner.png" alt="" />
      </div>
    </section>
  );
};

export default Difference;
