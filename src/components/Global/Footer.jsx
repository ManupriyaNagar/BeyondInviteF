"use client"; // because it uses inputs & interactivity
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Top Newsletter Section */}
      <div className="bg-gray-100 py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left text-sm font-medium">
          Subscribe to receive promotional updates and exclusive offers via email and SMS
        </p>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 px-4 py-2 rounded-md flex-1"
          />
          <input
            type="text"
            placeholder="Phone number (optional)"
            className="border border-gray-300 px-4 py-2 rounded-md flex-1"
          />
          <button className="bg-[#3f5c56] text-white px-6 py-2 rounded-md font-medium">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Info */}
        <div className="space-y-4">
          {/* Logo Image instead of text */}
          <Image
            src="/logo.png" // <-- replace with your logo path inside public/
            alt="Minted Logo"
            width={140}
            height={60}
            className="h-auto w-auto"
          />
          <p className="text-sm text-gray-600">
            Beautifully designed products for every occasion. Join our creative
            community today.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaYoutube size={18} />
            </a>
            <a href="https://www.instagram.com/beyond_invite/?utm_source=ig_web_button_share_sheet&igsh=MWdnNnk1cHlmbG10bQ%3D%3D#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-800">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Wedding</a></li>
            <li><a href="#">Baby & Kids</a></li>
            <li><a href="#">Stationery</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-800">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-800">Help</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4 px-6 md:px-20 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Beyond Invite , Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
