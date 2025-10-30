"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-light italic text-gray-800"
        >
          Get in <span className="font-normal not-italic">Touch</span>
        </motion.h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          We'd love to hear from you! Whether it’s about an order, a custom
          design, or collaboration — reach out below.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Mail className="text-[#3f5c56] w-6 h-6 mb-2" />
            <p className="text-gray-800 font-medium">hello@beyondinvite.com</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Phone className="text-[#3f5c56] w-6 h-6 mb-2" />
            <p className="text-gray-800 font-medium">+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <MapPin className="text-[#3f5c56] w-6 h-6 mb-2" />
            <p className="text-gray-800 font-medium max-w-xs">
              23B, Creative Lane, Bengaluru, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 shadow-md rounded-xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-1 focus:ring-[#3f5c56] outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-1 focus:ring-[#3f5c56] outline-none"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-md px-4 py-2 w-full mt-4 focus:ring-1 focus:ring-[#3f5c56] outline-none"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md px-4 py-2 w-full mt-4 focus:ring-1 focus:ring-[#3f5c56] outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-6 bg-[#3f5c56] text-white px-6 py-2 rounded-md w-full md:w-auto font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Map / Visual */}
      <div className="max-w-6xl mx-auto mt-16">
        <iframe
          className="w-full h-64 md:h-80 rounded-lg shadow-sm"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.070001398243!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167f1234567%3A0xabcdef!2sBangalore!5e0!3m2!1sen!2sin!4v1234567890"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
