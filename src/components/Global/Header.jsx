"use client";
import { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const data = [
    "Wedding Invitation",
    "Birthday Card",
    "Engagement Invite",
    "Baby Shower",
    "Corporate Event",
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() !== "") {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const mainTabs = ["DESIGN STUDIO", "WEDDING SPECIALS"];

  const categories = [
    { name: "E-Invites", link: "/e-invitation" },
    { name: "Wedding", link: "/wedding" },
    { name: "Baby Shower", link: "/babyshower" },
    { name: "Corporate Invites", link: "/corporate" },
    { name: "Personalised Invites", link: "/personalized" },
  ];

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
      <div className="items-center py-3 text-sm text-gray-600 border-b hidden md:block">
        <div className="container mx-auto flex gap-12 justify-between">
          <div className="flex gap-6">
            {mainTabs.map((tab) => (
              <button
                key={tab}
                className={`pb-1 ${
                  tab === "DESIGN STUDIO"
                    ? "border-b-2 border-gray-800 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative flex items-center">
              {!isOpen && (
                <button
                  aria-label="Open Search"
                  onClick={() => setIsOpen(true)}
                  className="text-gray-600"
                >
                  <Search className="w-5 h-5 cursor-pointer" />
                </button>
              )}

              {isOpen && (
                <div className="absolute right-0 -top-5 flex items-center bg-white border rounded-full px-3 py-3">
                  <Search className="w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="ml-2 outline-none text-sm w-40 sm:w-60"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                      setResults([]);
                    }}
                    className="ml-2 text-gray-500 hover:text-black"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {isOpen && results.length > 0 && (
                <div className="absolute right-0 top-10 bg-white border rounded-md shadow-lg w-60 max-h-48 overflow-auto">
                  {results.map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/wishlist" aria-label="Wishlist" className="text-gray-600">
              <Heart className="w-5 h-5 cursor-pointer" />
            </Link>

            <Link href="/cart" aria-label="Cart" className="text-gray-600 relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </Link>

            <Link href="/signup" className="text-sm font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={130} height={40} />
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/wishlist">
            <Heart className="w-5 h-5 text-gray-600" />
          </Link>
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b shadow-md">
          <div className="flex flex-col space-y-3 px-6 py-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.link}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-2 ${
                  pathname === cat.link
                    ? "text-white bg-[#37514D] rounded-md px-2"
                    : "text-gray-700"
                }`}
              >
                {cat.name}
              </Link>
            ))}

            <div className="mt-3 border-t pt-3">
              <Link href="/signup" onClick={() => setMenuOpen(false)} className="text-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Logo + Categories (Desktop) */}
      <div className="hidden md:flex items-center justify-between container mx-auto py-4 border-b">
        <div>
          <Link href="/" className="flex items-center mr-10">
            <Image src="/logo.png" alt="Logo" width={160} height={50} priority />
          </Link>
        </div>
        <div>
          <nav className="flex gap-8 text-md font-medium text-[#37514D] flex-1 relative">
            {categories.map((cat) => (
              <div key={cat.name} className="relative group">
                <Link
                  href={cat.link}
                  className={`transition flex items-center gap-1 px-2 py-1 focus:outline-none ${
                    pathname === cat.link
                      ? "bg-[#37514D] text-white rounded-md"
                      : "hover:text-black hover:underline"
                  }`}
                >
                  {cat.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="bg-[#37514D] text-white text-center text-sm py-2">
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
