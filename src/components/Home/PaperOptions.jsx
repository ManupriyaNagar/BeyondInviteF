"use client";
import React from "react";

const paperOptions = [
  {
    id: 1,
    title: "Wedding Invitations",
    description:
      "Choose from our extensive selection of paper items curated to complement all of your stationery.",
    image: "/invitation.jpeg",
    link: "/wedding",
  },
  {
    id: 2,
    title: "Baby Shower",
    description:
      "Our selection of handmade and fine papers adds impressive embellishments to your suite.",
    image: "/baby-shower.jpeg",
    link: "/babyshower",
  },
  {
    id: 3,
    title: "E-Invitations",
    description:
      "Deliver your invitations digitally in style with personalized designs and animations.",
    image: "/e-invitation.jpeg",
    link: "#",
  },
  {
    id: 4,
    title: "Personalised Invitations",
    description:
      "From bridal showers to engagement parties, make every occasion special with a custom invite.",
    image: "/personalized.jpeg",
    link: "/personalized",
  },
  {
    id: 5,
    title: "Corporate Invitations",
    description:
      "Elegant and professional invitations crafted for corporate events and celebrations.",
    image: "/corporate.jpeg",
    link: "/corporate",
  },
];

export default function PaperSource() {
  return (
    <section className="w-full py-12 bg-[#fdf7f7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-700 mb-10">
          Explore Invitations by Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {paperOptions.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-60 md:h-64 object-cover"
              />

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-serif text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-block text-xs sm:text-sm uppercase tracking-wide font-medium text-[#37514D] hover:text-[#2a3f3b] underline"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
