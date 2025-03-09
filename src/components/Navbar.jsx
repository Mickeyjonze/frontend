import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <Link to="/" className="text-2xl font-bold text-amber-500">
        CryptoInvest
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-amber-500 text-white">
          Home
        </Link>
        <Link to="/plans" className="hover:text-amber-500 text-white">
          Plans
        </Link>
        <Link to="/about" className="hover:text-amber-500 text-white">
          About
        </Link>
        <Link to="/contact" className="hover:text-amber-500 text-white">
          Contact
        </Link>
        <Link to="/register" className="hover:text-amber-500 text-white">
          Register
        </Link>
        <Link to="/login" className="hover:text-amber-500 text-white">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
