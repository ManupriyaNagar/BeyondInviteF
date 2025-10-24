"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, X } from "lucide-react";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("US1");
  const [selectedColor, setSelectedColor] = useState("pink");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState("desktop");
  const [selectedView, setSelectedView] = useState("/last1.jpeg");

  const eventTypes = [
    "Wedding",
    "Haldi",
    "Mehndi",
    "Engagement",
    "Reception",
    "Birthday",
    "Anniversary",
    "Corporate",
  ];

  const colors = [
    { name: "pink", hex: "#ec4899" },
    { name: "blue", hex: "#3b82f6" },
    { name: "yellow", hex: "#facc15" },
  ];

  const productViews = ["/last1.jpeg", "/last2.jpeg", "/last3.jpeg", "/last4.jpeg"];

  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col lg:flex-row gap-10">
      {/* Left Section */}
      <div className="flex-1">
        <h3 className="uppercase text-sm text-gray-500 mb-2">Wedding Ceremony Invite</h3>
        <h1 className="text-3xl font-extrabold leading-snug mb-4">
          HALDI CEREMONY <br /> CELEBRATION
        </h1>
        <p className="text-gray-600 mb-6">
          Celebrate love, laughter, and the joyous beginning of forever at our
          vibrant <span className="font-semibold">Haldi Ceremony</span>.
          Surrounded by colors, traditions, and happiness, let’s come together
          to bless the couple as they step into their new journey.
        </p>
        <p className="text-xl font-bold mb-4">📅 24th November 2025</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-600 transition">
          Confirm Attendance
        </button>

        <p className="text-xl font-bold mb-4">₹13,300</p>
        <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-900 transition">
          <ShoppingCart size={18} /> ADD TO CART
        </button>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 text-gray-600">
          <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100">
            <i className="fab fa-instagram" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100">
            <i className="fab fa-facebook" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100">
            <i className="fab fa-twitter" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100">
            <i className="fab fa-whatsapp" />
          </button>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setPreviewOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-900 transition"
          >
            Preview
          </button>
        </div>
      </div>

      {/* Center Section - Product Image */}
      <div className="flex-1">
        <div className="relative">
          <img
            src={selectedView}
            alt="Card"
            className="w-full max-w-lg mx-auto rounded-lg shadow"
          />
          {/* Image Carousel Controls */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow hover:bg-gray-800">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <div className="mt-6 space-y-6">
          {/* Event Type */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Event Type</h3>
            <div className="grid grid-cols-2 gap-2">
              {eventTypes.map((event) => (
                <button
                  key={event}
                  className="border rounded-md px-4 py-2 text-sm hover:bg-yellow-100 transition"
                >
                  {event}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-semibold mb-2">COLOR</h3>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-7 h-7 rounded-full border-2 ${
                    selectedColor === c.name ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Product Views */}
          <div>
            <h3 className="text-sm font-semibold mb-2">PRODUCT VIEW</h3>
            <div className="flex gap-3">
              {productViews.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="View"
                  onClick={() => setSelectedView(img)}
                  className={`w-20 h-20 object-cover border rounded-md cursor-pointer ${
                    selectedView === img ? "border-black" : "hover:border-black"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Buy & WhatsApp */}
          <div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-600 transition">
              Buy Now
            </button>
          </div>
          <div>
            <a
              href={`https://wa.me/919910265165?text=Hi, I am interested to buy this product: Wedding Ceremony Digital Invitation (VG-1373) | Offer Rs. 599.00, Sale Rs. 800.00`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-600 transition"
            >
              <i className="fab fa-whatsapp text-white" /> Order Through WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setPreviewOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Mode Switch */}
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setPreviewMode("desktop")}
                className={`px-4 py-2 rounded-md ${
                  previewMode === "desktop" ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                Desktop View
              </button>
              <button
                onClick={() => setPreviewMode("phone")}
                className={`px-4 py-2 rounded-md ${
                  previewMode === "phone" ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                Phone View
              </button>
            </div>

            {/* Preview */}
            <div className="flex justify-center">
              {previewMode === "desktop" ? (
                <img
                  src={selectedView}
                  alt="Desktop Preview"
                  className="w-[800px] border rounded-lg shadow"
                />
              ) : (
                <div className="w-[300px] h-[600px] border-4 border-black rounded-3xl shadow-lg overflow-hidden">
                  <img src={selectedView} alt="Phone Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
