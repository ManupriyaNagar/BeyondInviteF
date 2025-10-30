"use client";

import Image from "next/image";

const seasons = [
  {
    title: "Summer",
    image: "https://www.papersource.com/cdn/shop/files/622456044.jpg?v=1750369186&width=800",
    link: "#",
  },
  {
    title: "Fall",
    image: "https://www.papersource.com/cdn/shop/files/622454173.jpg?v=1750367794&width=800",
    link: "#",
  },
  {
    title: "Winter",
    image: "https://www.papersource.com/cdn/shop/files/622454355.jpg?v=1750367067&width=800",
    link: "#",
  },
  {
    title: "Spring",
    image: "https://www.papersource.com/cdn/shop/files/622456042.jpg?v=1750369912&width=800",
    link: "#",
  },
];

export default function ShopBySeason() {
  return (
    <section className="py-10 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light italic mb-8 sm:mb-12">
        Shop by <span className="font-normal">Season</span>
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {seasons.map((season, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group w-full"
          >
            <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={season.image}
                alt={season.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="mt-4 text-lg sm:text-xl font-light italic">{season.title}</h3>
            <a
              href={season.link}
              className="mt-1 text-sm sm:text-base font-medium underline underline-offset-4 hover:text-gray-600"
            >
              EXPLORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
