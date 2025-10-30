"use client";
import { useState } from "react";

const filters = [
  { name: "Most Popular" },
  { name: "Style" },
  { name: "Theme" },
  { name: "Occasion" },
  { name: "Color" },
  { name: "Photo count" },
  { name: "Price" },
];

const invitations = [
  {
    id: 1,
    title: "Minimal Monogram Design",
    image:
      "https://i.pinimg.com/1200x/94/7a/5c/947a5cd0f755e9943c2f71fc36a43f84.jpg",
  },
  {
    id: 2,
    title: "Custom Photo Collage",
    image:
      "https://i.pinimg.com/736x/c0/52/51/c05251967bd264131afc27f2d03e273a.jpg",
  },
  {
    id: 3,
    title: "Elegant Name Highlight",
    image:
      "https://i.pinimg.com/736x/75/eb/d4/75ebd443cb041e3d670c0b2487bce927.jpg",
  },
  {
    id: 4,
    title: "Modern Typography",
    image:
      "https://i.pinimg.com/1200x/c5/ec/9e/c5ec9ee89f9f5e6392fea53574532ba8.jpg",
  },
  {
    id: 5,
    title: "Floral Frame Design",
    image:
      "https://i.pinimg.com/736x/45/af/50/45af5061fe0b51d9d92328dfb3e249e2.jpg",
  },
  {
    id: 6,
    title: "Handwritten Style",
    image:
      "https://i.pinimg.com/1200x/73/cc/6d/73cc6d7e60ae5a033da25aa5135ad41f.jpg",
  },
  {
    id: 7,
    title: "Gold Foil Accents",
    image:
      "https://i.pinimg.com/736x/5d/8e/34/5d8e347a3d4809a3427bbff7968130ee.jpg",
  },
  {
    id: 8,
    title: "Vintage Postcard Style",
    image:
      "https://i.pinimg.com/1200x/53/7b/a4/537ba407425eb810f9c1da021ff3c5c3.jpg",
  },
  {
    id: 9,
    title: "Custom Artwork Design",
    image:
      "https://i.pinimg.com/1200x/06/e1/f8/06e1f828e2e6d5885bcfe1e7fb5061a7.jpg",
  },
];

export default function PersonalizedInvitations() {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-indigo-50 py-10 px-4 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Personalized Invitations
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
            Create a one-of-a-kind invitation that reflects your unique style.
            Personalize with names, photos, colors, and fonts. Perfect for
            birthdays, anniversaries, weddings, and any celebration where you
            want to leave a personal touch.
          </p>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block sticky top-64 h-fit self-start">
          <h3 className="text-lg font-semibold mb-3">Personalized Styles</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Photo Collage</li>
            <li>Monogram</li>
            <li>Handwritten</li>
            <li>Minimalist</li>
            <li>Luxury Foil</li>
            <li>Custom Artwork</li>
            <li>Typography</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">Shop by Occasion</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Birthdays</li>
            <li>Weddings</li>
            <li>Anniversaries</li>
            <li>Graduations</li>
            <li>Corporate Events</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">Shop by Color</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Gold & Foil</li>
            <li>Pastels</li>
            <li>Bold Colors</li>
            <li>Neutrals</li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="md:col-span-3">
          {/* Filter Bar */}
          <div className="bg-white sticky top-52 ">
            <div className="flex overflow-x-auto gap-3 mb-8 p-3 scrollbar-hide md:flex-wrap">
              {filters.map((filter, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFilter(filter.name)}
                  className={`flex-shrink-0 px-4 py-2 text-sm border rounded-md transition-all ${
                    selectedFilter === filter.name
                      ? "bg-indigo-100 border-indigo-300 text-indigo-700"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {invitations.map((card) => (
              <div
                key={card.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
