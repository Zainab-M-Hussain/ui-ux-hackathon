"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        

        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static left-0 top-16 md:top-auto w-full md:w-auto bg-white md:bg-transparent md:items-center md:justify-between md:pl-4 z-10`}
        >
          <li>
            <a
              href="./home"
              className="block text-gray-800 hover:text-[#007580] transition-colors duration-300 px-4 py-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="./products"
              className="block text-gray-800 hover:text-[#007580] transition-colors duration-300 px-4 py-2"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="./products"
              className="block text-gray-800 hover:text-[#007580] transition-colors duration-300 px-4 py-2"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="./contact"
              className="block text-gray-800 hover:text-[#007580] transition-colors duration-300 px-4 py-2"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              href="./about"
              className="block text-gray-800 hover:text-[#007580] transition-colors duration-300 px-4 py-2"
            >
              About
            </a>
          </li>
        </ul>

        {/* Right Side: Contact */}
        <div className="hidden md:block text-gray-800">
          Contact:{" "}
          <span className="font-semibold text-[#007580]">
            (888) 555-0111
          </span>
        </div>
      </div>

      {/* Contact Info for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden mt-4 text-center text-gray-800`}
      >
        Contact:{" "}
        <span className="font-semibold text-[#007580]">
          (888) 555-0111
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
