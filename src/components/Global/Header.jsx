"use client";
import { useState } from "react";
import { Search, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [activeTab, setActiveTab] = useState("MINTED");
  const [openCategory, setOpenCategory] = useState(null);

  const mainTabs = ["MINTED", "MINTED WEDDINGS"];
  const categories = [
    { name: "E-Invites", link: "/e-invitation" },
    { name: "Wedding", link: "/wedding" },
    { name: "Baby Shower", link: "/babyshower" },
    { name: "Corporate Invites", link: "/corporate" },
    { name: "Personalised Invites", link: "/personalized" },
  ];
  const handleCategoryClick = (cat) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

    const pathname = usePathname();

  if (pathname === "/checkout") {
    return (
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <button className="relative">
          <img src="/cart-icon.svg" alt="Cart" className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs px-1.5 rounded-full">
            2
          </span>
        </button>
      </header>
    );
  }

  return (
    <header className="w-full border-b bg-white relative z-50">
      {/* Top Row */}
        <div className="items-center py-2 text-sm text-gray-600 border-b">
          <div className="container mx-auto flex gap-12 justify-between">
            <div className="flex gap-4">
          <Link href="/submit-artwork">Submit Artwork</Link>
          <Link href="/vote-artwork">Vote on Artwork</Link>
          <span>|</span>
          <Link href="/trade-program">Trade Program</Link>
            </div>

            <div className="flex gap-6">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 ${
            activeTab === tab
              ? "border-b-2 border-gray-800 font-semibold"
              : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
            </div>
            <div className="flex items-center gap-6">
          <Link href="/search" aria-label="Search" className="text-gray-600">
            <Search className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="text-gray-600">
            <Heart className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="text-gray-600 relative">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href="/signin" className="text-sm font-medium">
            Sign In
          </Link>
            </div>
          </div>
        </div>

        {/* Logo + Categories */}
      <div className="flex items-center justify-between container mx-auto py-4 border-b">
        <div>
          <Link href="/" className="flex items-center mr-10">
            <Image
              src="/logo.png"
              alt="Minted Logo"
              width={160}
              height={50}
              priority
            />
          </Link>
        </div>
        <div>
          <nav className="flex gap-8 text-md font-medium text-[#37514D] flex-1 relative">
            {categories.map((cat) => (
              <div key={cat.name} className="relative group">
                <Link
                  href={cat.link}
                  className={`transition flex items-center gap-1 px-2 py-1 focus:outline-none ${
                    openCategory === cat.name
                      ? "bg-[#37514D] text-white rounded-t"
                      : "hover:text-black"
                  }`}
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  {cat.name}
        
                </Link>
                {/* Dropdown can be added here if needed */}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {/* Offer Banner */}
      <div className="bg-[#37514D] text-white text-center text-sm py-2 flex justify-center items-center">
        <div className="container mx-auto">
          <span>
            Ends Tomorrow | 15% off wedding*; 25% off save the dates.{" "}
            <strong>Code: WEDDING2025</strong>{" "}
            <Link href="#" className="underline ml-2">
              View all offers ▸
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}