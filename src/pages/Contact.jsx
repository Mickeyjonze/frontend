import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-amber-600 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl border-4 border-yellow-500">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We'd love to hear from you! Fill out the form below or contact us
          directly.
        </p>

        <div className="flex flex-col space-y-4 text-gray-700 mb-6">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-yellow-500 text-xl" />
            <span>contact@cryptoinvest.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-yellow-500 text-xl" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-yellow-500 text-xl" />
            <span>123 Crypto Street, Blockchain City</span>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-yellow-500 bg-gray-900 text-yellow-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border-2 border-yellow-500 bg-gray-900 text-yellow-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-3 border-2 border-yellow-500 bg-gray-900 text-yellow-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Type your message here..."
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
