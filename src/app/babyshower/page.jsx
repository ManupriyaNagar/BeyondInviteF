"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BabyShowerInvitations() {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(""); // ✅ Add state for filters
  const router = useRouter();

  // Filters for the buttons
  const filters = [
    { name: "Most Popular" },
    { name: "Style" },
    { name: "Theme" },
    { name: "Occasion" },
    { name: "Color" },
    { name: "Photo count" },
    { name: "Price" },
  ];

  useEffect(() => {
    const fetchBabyShowerTemplates = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/templates");
        const data = await res.json();

        // Filter baby shower templates safely (case-insensitive)
        const babyShowerInvites = data.filter((item) => {
          // Use category_id if category_name is missing
          const category = (item.category_name || item.category_id)
            ? (item.category_name?.toLowerCase()
              || (item.category_id === 2 ? "baby-shower" : "other"))
            : "";
          return category === "baby-shower";
        });

        setInvitations(babyShowerInvites);
      } catch (err) {
        console.error("Error fetching baby shower invitations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBabyShowerTemplates();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading baby shower invitations...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-pink-50 py-12 border-b  sticky top-0 h-fit self-start z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Baby Shower Invitations
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Celebrate the upcoming arrival with customizable baby shower
            invitations. Choose from cute, modern, floral, and gender reveal
            themes. Add custom text, upload photos, and make the moment even
            more special.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block sticky top-64 h-fit self-start ">
          <h3 className="text-lg font-semibold mb-3">Baby Shower Invitations</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Cute and Playful</li>
            <li>Modern</li>
            <li>Floral</li>
            <li>Gender Reveal</li>
            <li>Minimal</li>
            <li>Animals Theme</li>
            <li>Storybook Theme</li>
            <li>Twins Celebration</li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="md:col-span-3">
          {/* Filter Bar */}
                    <div className="bg-white sticky top-55 z-10 h-fit">
          <div className="flex flex-wrap gap-3 mb-8 p-4">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(filter.name)}
                className={`px-4 py-2 text-sm border rounded-md ${selectedFilter === filter.name
                    ? "bg-pink-100 border-pink-400 text-pink-700"
                    : "bg-white hover:bg-gray-50"
                  }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {invitations.length > 0 ? (
              invitations.map((card) => (
                <div
                  key={card.id}
                  onClick={() => router.push(`/template/${card.id}`)}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        card.image_url?.startsWith("http")
                          ? card.image_url
                          : `http://localhost:5001/${card.image_url}`
                      }
                      alt={card.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-gray-800 font-medium group-hover:text-pink-600 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Baby Shower Invitation
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-pink-600">
                        ₹{card.price || 149}
                      </span>
                      <span className="text-sm text-gray-500">
                        Click to customize
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No baby shower invitations found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
