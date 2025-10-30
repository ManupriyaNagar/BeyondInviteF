"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const invitations = [
  {
    id: 1,
    title: "Fleurs d'Alençon Wedding...",
    designer: "Oscar de la Renta",
    price: "₹275 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/622455283.jpg?v=1750369069&width=800",
  },
  {
    id: 2,
    title: "Watercolor Garland Wedding...",
    designer: "Paperless Post",
    price: "₹275 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/620534125.png?v=1738221543&width=1000",
  },
  {
    id: 3,
    title: "Embossed Arc on Cream...",
    designer: "Paperless Post",
    price: "₹275 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/622454069.jpg?v=1750366747&width=800",
  },
  {
    id: 4,
    title: "Embossed Arc on White...",
    designer: "Paperless Post",
    price: "₹275 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/622454062.jpg?v=1750366705&width=800",
  },
];

export default function WeddingInvitations() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-12 border-t border-gray-100 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-700 mb-10">
        Top Wedding Invitations
      </h2>

      {/* Scrollable Cards */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-5 sm:px-8 md:justify-center">
          {invitations.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border border-gray-100 shadow-sm rounded-lg flex-shrink-0 w-60 sm:w-64 md:w-72 transition-transform hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-60 md:h-72 object-cover rounded-t-lg"
              />

              {/* Favorite Heart */}
              <button
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-3 right-3 text-gray-500"
              >
                <Heart
                  className={`w-6 h-6 ${
                    favorites.includes(item.id)
                      ? "fill-red-500 text-red-500"
                      : "hover:text-red-400"
                  }`}
                />
              </button>

              {/* Details */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.designer}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10 px-4">
        <button className="bg-[#c7944c] text-white text-sm sm:text-base px-6 py-3 rounded-md shadow-sm hover:bg-[#b5833d] transition">
          SHOP THE COLLECTION
        </button>
      </div>
    </section>
  );
}
