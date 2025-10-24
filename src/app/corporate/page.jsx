"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const filters = [
  { name: "Most Popular" },
  { name: "Style" },
  { name: "Theme" },
  { name: "Season" },
  { name: "Venue" },
  { name: "Color" },
  { name: "Photo count" },
  { name: "Price" },
];

export default function CorporateInvitations() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/templates");
        const data = await res.json();

        // ✅ Filter only "Corporate" templates
        const corporateTemplates = data.filter(
          (item) =>
            item.category_name?.toLowerCase() === "corporate" ||
            item.category_id === 3 // adjust this if your corporate category ID differs
        );

        setInvitations(corporateTemplates);
      } catch (err) {
        console.error("Error fetching invitations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading corporate invitations...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-blue-50 py-12 border-b sticky top-0 h-fit z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Corporate Invitations
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Professional and elegant digital invitations for corporate events,
            conferences, launches, and celebrations. Customize your design and
            share effortlessly with your team or guests.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
          <aside className="hidden md:block sticky top-54 h-fit self-start">
          <h3 className="text-lg font-semibold mb-3">Corporate Themes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Formal & Minimal</li>
            <li>Luxury</li>
            <li>Launch Events</li>
            <li>Annual Meets</li>
            <li>Conferences</li>
            <li>Celebrations</li>
            <li>Business Dinners</li>
            <li>Team Gatherings</li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="md:col-span-3">
          {/* Filter Bar */}
            <div className="bg-white sticky top-49 h-fit z-10">
          <div className="flex flex-wrap gap-3 mb-8 p-4">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(filter.name)}
                className={`px-4 py-2 text-sm border rounded-md ${
                  selectedFilter === filter.name
                    ? "bg-gray-200"
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
            {invitations.map((card) => (
              <div
                key={card.id}
                onClick={() => router.push(`/template/${card.id}`)}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.image_url || "/fallback.jpg"}
                    alt={card.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {invitations.length === 0 && (
            <p className="text-gray-600 mt-10 text-center">
              No corporate invitations found.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
