"use client";
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
      {/* 🔹 Top Newsletter Section */}
      <div className="bg-gray-100 py-6 px-6 md:px-10 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-medium max-w-md">
          Subscribe to receive promotional updates and exclusive offers via email and SMS
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-60 focus:outline-none focus:ring-1 focus:ring-[#3f5c56]"
          />
          <input
            type="text"
            placeholder="Phone number (optional)"
            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-60 focus:outline-none focus:ring-1 focus:ring-[#3f5c56]"
          />
          <button className="bg-[#3f5c56] text-white px-6 py-2 rounded-md font-medium w-full sm:w-auto hover:bg-[#324944] transition">
            SIGN UP
          </button>
        </div>
      </div>

      {/* 🔹 Middle Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* 🟢 Left Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="/logo.png" // Replace with your logo
            alt="Beyond Invite Logo"
            width={140}
            height={60}
            className="h-auto w-auto"
          />
          <p className="text-sm text-gray-600 max-w-xs">
            Beautifully designed invitations and stationery for every occasion. Join our creative community today.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <a href="#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#3f5c56]">
              <FaYoutube size={18} />
            </a>
            <a
              href="https://www.instagram.com/beyond_invite/?utm_source=ig_web_button_share_sheet&igsh=MWdnNnk1cHlmbG10bQ%3D%3D#"
              className="text-gray-600 hover:text-[#3f5c56]"
              target="_blank"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* 🔹 Links */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/wedding" className="hover:text-[#3f5c56]">Wedding</a></li>
            <li><a href="/babyshower" className="hover:text-[#3f5c56]">Baby & Kids</a></li>
            <li><a href="/corporate" className="hover:text-[#3f5c56]">corporate invites</a></li>
            <li><a href="/e-invitation" className="hover:text-[#3f5c56]" >E-invites</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#3f5c56]">About</a></li>
            <li><a href="#" className="hover:text-[#3f5c56]">Careers</a></li>
            <li><a href="#" className="hover:text-[#3f5c56]">Press</a></li>
            <li><a href="#" className="hover:text-[#3f5c56]">Blog</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Help</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/contact" className="hover:text-[#3f5c56]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#3f5c56]">Shipping</a></li>
            <li><a href="#" className="hover:text-[#3f5c56]">Returns</a></li>
            <li><a href="#" className="hover:text-[#3f5c56]">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="border-t border-gray-200 py-4 px-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="font-medium text-gray-700">Beyond Invite</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
