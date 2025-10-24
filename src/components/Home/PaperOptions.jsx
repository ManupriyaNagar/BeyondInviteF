"use client";
import React from "react";

const paperOptions = [
  {
    id: 1,
    title: "Wedding Invitations",
    description:
      "Choose from our extensive selection of paper items curated to compliment all of your stationery.",
    image:
      "/invitation.jpeg", // replace with real image
    link: "/wedding",
  },
  {
    id: 2,
    title: "Baby Shower",
    description:
      "Our selection of handmade and fine papers can be used to add impressive embellishments to your suite.",
    image:
      "/baby-shower.jpeg", // replace with real image
    link: "/babyshower",
  },
  {
    id: 3,
    title: "E-Invitations",
    description:
      "Deliver your wedding stationery in style with personalized address labels, custom stamps and embossers.",
    image:
      "/e-invitation.jpeg", // replace with real image
    link: "#",
  },
  {
    id: 4,
    title: "Personalised Invitations",
    description:
      "From bridal showers to engagement parties, make every wedding event shine with the perfect invitation.",
    image:
      "/personalized.jpeg", // replace with real image
    link: "/personalized",
  },
    {
    id: 5,
    title: "Corporate Invitations",
    description:
      "Choose from our extensive selection of paper items curated to compliment all of your stationery.",
    image:
      "/corporate.jpeg", // replace with real image
    link: "/corporate",
  },

];

export default function PaperSource() {
  return (
    <section className="w-full py-12  bg-[#fdf7f7]">
     
        <div className="container mx-auto">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-700 mb-10">
       Explore Invitations by Category
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 container mx-auto">
        {paperOptions.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="font-serif text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <a
                href={item.link}
                className="text-xs uppercase tracking-wide font-medium text-gray-700 hover:text-gray-900 underline"
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
